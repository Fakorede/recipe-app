<template>
    <div class="edit-recipe container" v-if="recipe">
        <h2>Edit {{ recipe.title }}</h2>
    </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "EditRecipe",
  data() {
    return {
      recipe: null
    };
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
</style>
