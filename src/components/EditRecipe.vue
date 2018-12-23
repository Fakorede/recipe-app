<template>
    <div class="edit-recipe container" v-if="recipe">
        <h2>Edit {{ recipe.title }}</h2>
        <form @submit.prevent="editRecipe">
            <div class="field title">
                <label for="title">Recipe Title</label>
                <input type="text" name="title" v-model="recipe.title">
            </div>
            <div v-for="(ing, index) in recipe.ingredients" :key="index" class="field">
                <label for="ingredient">Ingredient:</label>
                <input type="text" name="ingredient" v-model="recipe.ingredients[index]">
                <i class="material-icons delete" @click="deleteIngredient(ing)">delete</i>
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an Ingredient</label>
                <input type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient" v-model="another">
            </div>
            <div class="field center-align">
                <p class="red-text" v-if="feedback">{{ feedback }}</p>
                <button class="btn pink">Update Recipe</button>
            </div>
        </form>
    </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";

export default {
  name: "EditRecipe",
  data() {
    return {
      recipe: null,
      another: null,
      feedback: null
    };
  },
  methods: {
    addIngredient() {
      if (this.another) {
        this.recipe.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add an ingredient";
      }
    },
    deleteIngredient(ing) {
      this.recipe.ingredients = this.recipe.ingredients.filter(ingredient => {
        return ingredient != ing;
      });
    },
    editRecipe() {
      if (this.recipe.title) {
        this.feedback = null;
        // create slug
        this.recipe.slug = slugify(this.recipe.title, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });

        db
          .collection("Recipes")
          .doc(this.recipe.id)
          .update({
            title: this.recipe.title,
            ingredients: this.recipe.ingredients,
            slug: this.recipe.slug
          })
          .then(() => {
            this.$router.push({ name: "Index" });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.feedback = "You must enter a recipe title";
      }
    }
  },
  created() {
    let ref = db
      .collection("Recipes")
      .where("slug", "==", this.$route.params.recipe_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.recipe = doc.data();
        this.recipe.id = doc.id;
      });
    });
  }
};
</script>

<style>
.edit-recipe {
  margin-top: 60px;
  padding: 20px;
  max-width: 600px;
}
.edit-recipe h2 {
  font-size: 2em;
  margin: 20px auto;
}
.edit-recipe .field {
  margin: 20px auto;
  position: relative;
}
.edit-recipe .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
