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
                <input type="text" name="add-ingredient">
            </div>
            <div class="field center-align">
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
      title: null
    };
  },
  methods: {
    addRecipe() {
      console.log(this.title);
    }
  }
};
</script>

<style>
.add-recipe {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-recipe h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-recipe .field {
  margin: 20px auto;
}
</style>
