import { Home } from '~interfaces/recipes/components'

export default ({ recipes }) => <Home recipes={recipes} />

const RECIPES = [
  { slug: 'ancho-chicken-tacos', filePath: '01-ancho-chicken-tacos' },
]

export const getStaticProps = async () => {
  return {
    props: { recipes: RECIPES },
  }
}
