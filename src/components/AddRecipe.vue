<template>
    <div class="add-recipe container">
        <h2 class="center-align indigo-text">Add New Recipe</h2>
        <form @submit.prevent="addRecipe">
            <div class="field title">
                <label for="title">Recipe Title</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an Ingredient</label>
                <input type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient" v-model="another">
            </div>
            <div class="field center-align">
                <p class="red-text" v-if="feedback">{{ feedback }}</p>
                <button class="btn pink">Add Recipe</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "AddRecipe",
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null
    };
  },
  methods: {
    addRecipe() {
      console.log(this.title, this.ingredients);
    },
    addIngredient() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add an ingredient";
      }
    }
  }
};
</script>

<style>
.add-recipe {
  margin-top: 60px;
  padding: 20px;
  max-width: 600px;
}
.add-recipe h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-recipe .field {
  margin: 20px auto;
}
</style>
