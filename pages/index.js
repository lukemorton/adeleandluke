import { AppContainer } from '~interfaces/recipes/containers'
import { Home } from '~interfaces/recipes/components'

export default ({ recipes }) => <Home recipes={recipes} />

export const getStaticProps = async () => {
  const container = new AppContainer()
  const listAllRecipes = container.getListAllRecipes()
  const { recipes } = await listAllRecipes()
  return { props: { recipes } }
}
