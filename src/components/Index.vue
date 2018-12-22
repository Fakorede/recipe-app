<template>
  <div class="index container">
    <div class="card" v-for="recipe in recipes" :key="recipe.id">
      <div class="card-content">
        <h2 class="indigo-text">{{ recipe.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
            <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      recipes: [
        {
          id: 1,
          title: "Jollof Rice",
          slug: "jollof-rice",
          ingredients: [
            "Parboiled Rice",
            "Water",
            "Vegetable Oil",
            "Diced Onion",
            "Tomato sauce",
            "Table Salt"
          ]
        },
        {
          id: 2,
          title: "Fried Rice",
          slug: "fried-rice",
          ingredients: [
            "White Rice",
            "Water",
            "Vegetable Oil",
            "Diced Onion",
            "Eggs",
            "Carrots"
          ]
        }
      ]
    };
  }
};
</script>


<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li {
  display: inline-block;
}
</style>
