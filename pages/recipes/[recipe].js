import { AppContainer } from '~interfaces/recipes/containers'
import { Recipe } from '~interfaces/recipes/components'

export default ({ recipe }) => <Recipe {...recipe} />

export const getStaticPaths = async () => {
  const container = new AppContainer()
  const listAllRecipes = container.getListAllRecipes()
  const { recipes } = await listAllRecipes()

  const paths = recipes.map((recipe) => {
    return { params: { recipe: recipe.slug } }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const container = new AppContainer()
  const fetchOneRecipe = container.getFetchOneRecipe()
  const { recipe } = await fetchOneRecipe({ slug: params.recipe })
  return { props: { recipe } }
}
