export default async ({ oneRecipe, slug }) => {
  const {
    title,
    publishedAt,
    updatedAt,
    aboutHtml,
    instructionsHtml,
    ingredients,
  } = await oneRecipe(slug)

  const recipe = {
    title,
    slug,
    publishedAt,
    updatedAt: updatedAt || null,
    aboutHtml,
    instructionsHtml,
    ingredients,
  }

  return { recipe }
}
