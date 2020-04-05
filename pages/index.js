import { Home } from '~interfaces/recipes/components'

export default ({ recipes }) => <Home recipes={recipes} />

const RECIPES = [{ slug: 'ancho-chicken', filePath: '01-ancho-chicken' }]

export const getStaticProps = async () => {
  return {
    props: { recipes: RECIPES },
  }
}
