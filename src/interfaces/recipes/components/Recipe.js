import Page from './Page'
import {
  PageContainer,
  PageIntroduction,
  PageMainContent,
  PageSideContent,
  RecipeIntroduction,
  RecipeInstructions,
  RecipeIngredients,
} from '~interfaces/recipes/ui'

export default ({
  title,
  publishedAt,
  updatedAt,
  aboutHtml,
  instructionsHtml,
  ingredients,
}) => (
  <Page title={title}>
    <PageIntroduction>
      <RecipeIntroduction
        title={title}
        publishedAt={publishedAt}
        updatedAt={updatedAt}
        html={aboutHtml}
      />
    </PageIntroduction>

    <PageMainContent>
      <RecipeInstructions html={instructionsHtml} />
    </PageMainContent>

    <PageSideContent>
      <RecipeIngredients title="Ingredients" items={ingredients} />
    </PageSideContent>
  </Page>
)
