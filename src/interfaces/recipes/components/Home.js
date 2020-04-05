import Link from 'next/link'
import Page from './Page'
import {
  PageMainContent,
  PageSideContent,
  PageIntroduction,
  HeroIntroduction,
  RecipeList,
  RecipeListItem,
  RecipeListLink,
} from '~interfaces/recipes/ui'

export default ({ recipes }) => (
  <Page title="Recipes from our home">
    <PageIntroduction>
      <HeroIntroduction title="Recipes from our home" />
    </PageIntroduction>

    <PageMainContent>
      <RecipeList title="Latest recipes">
        {recipes.map((recipe, i) => (
          <RecipeListItem key={i}>
            <Link
              href="/recipes/[recipe]"
              as={`/recipes/${recipe.slug}`}
              passHref
            >
              <RecipeListLink>{recipe.slug}</RecipeListLink>
            </Link>
          </RecipeListItem>
        ))}
      </RecipeList>
    </PageMainContent>
  </Page>
)
