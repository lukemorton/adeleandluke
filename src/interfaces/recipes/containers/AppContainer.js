import listAllRecipes from '~capabilities/Cook/listAllRecipes'
import allDishesFromFilesystem from '../adapters/allDishesFromFilesystem'

export default class AppContainer {
  getListAllRecipes() {
    const allRecipes = () => allDishesFromFilesystem()
    return () => listAllRecipes({ allRecipes })
  }
}
