import listAllRecipes from '~capabilities/Cook/listAllRecipes'
import fetchOneRecipe from '~capabilities/Cook/fetchOneRecipe'
import allDishesFromFilesystem from '../adapters/allDishesFromFilesystem'
import oneDishFromFilesystem from '../adapters/oneDishFromFilesystem'

export default class AppContainer {
  getListAllRecipes() {
    const allRecipes = () => allDishesFromFilesystem()
    return () => listAllRecipes({ allRecipes })
  }

  getFetchOneRecipe() {
    const oneRecipe = (slug) => oneDishFromFilesystem(slug)
    return ({ slug }) => fetchOneRecipe({ oneRecipe, slug })
  }
}
