import Page from './Page'
import {
  PageContainer,
  PageMainContent,
  PageSideContent,
  RecipeInstructions,
  RecipeIngredients,
} from '~interfaces/recipes/ui'

export default ({ recipe }) => (
  <Page title="Recipes from our home">
    <PageMainContent>
      <RecipeInstructions html={recipe.html} publishedAt={recipe.publishedAt} />
    </PageMainContent>

    <PageSideContent>
      <RecipeIngredients items={recipe.ingredients} />
    </PageSideContent>
  </Page>
)
