import { Recipe } from '~interfaces/recipes/components'

export default ({ recipe }) => <Recipe recipe={recipe} />

const RECIPES = [{ slug: 'ancho-chicken', filePath: '01-ancho-chicken' }]

export const getStaticPaths = async () => {
  const paths = RECIPES.map((recipe) => {
    return { params: { recipe: recipe.slug } }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { filePath } = RECIPES.find((recipe) => recipe.slug === params.recipe)

  const { attributes, html } = await import(
    `../../src/interfaces/recipes/content/dishes/${filePath}/recipe.md`
  )
  const { ingredients, publishedAt } = attributes
  const recipe = { ingredients, publishedAt, html }

  return {
    props: { recipe },
  }
}
