import { Recipe } from '~interfaces/recipes/components'

export default ({ recipe }) => <Recipe {...recipe} />

const RECIPES = [{ slug: 'ancho-chicken', filePath: '01-ancho-chicken' }]

export const getStaticPaths = async () => {
  const paths = RECIPES.map((recipe) => {
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
