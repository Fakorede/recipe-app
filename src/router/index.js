import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import AddRecipe from "@/components/AddRecipe";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/add/recipe",
      name: "AddRecipe",
      component: AddRecipe
    }
  ]
});
