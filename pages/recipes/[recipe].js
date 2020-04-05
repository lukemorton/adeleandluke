import { AppContainer } from '~interfaces/recipes/containers'
import { Recipe } from '~interfaces/recipes/components'

export default ({ recipe }) => <Recipe {...recipe} />

const RECIPES = [
  { slug: 'ancho-chicken-tacos', filePath: '01-ancho-chicken-tacos' },
]

export const getStaticPaths = async () => {
  const container = new AppContainer()
  const listAllRecipes = container.getListAllRecipes()
  const { recipes } = await listAllRecipes()

  const paths = recipes.map((recipe) => {
    return { params: { recipe: recipe.slug } }
  })

  return { paths, fallback: false }
}

const about = async (filePath) => {
  const { attributes, html } = await import(
    `../../src/interfaces/recipes/content/dishes/${filePath}/about.md`
  )
  const { title, publishedAt, updatedAt } = attributes
  return { title, publishedAt, updatedAt: updatedAt || null, aboutHtml: html }
}

const instructions = async (filePath) => {
  const { attributes, html } = await import(
    `../../src/interfaces/recipes/content/dishes/${filePath}/instructions.md`
  )
  const { ingredients } = attributes
  return { ingredients, instructionsHtml: html }
}

export const getStaticProps = async ({ params }) => {
  const { filePath } = RECIPES.find((recipe) => recipe.slug === params.recipe)

  const recipe = {
    ...(await about(filePath)),
    ...(await instructions(filePath)),
  }

  return {
    props: { recipe },
  }
}
