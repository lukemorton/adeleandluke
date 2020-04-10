export default async ({ oneRecipe, slug }) => {
  const {
    title,
    publishedAt,
    updatedAt,
    featuredImageSrc,
    aboutHtml,
    instructionsHtml,
    ingredients,
  } = await oneRecipe(slug)

  const recipe = {
    title,
    slug,
    publishedAt,
    updatedAt: updatedAt || null,
    featuredImageSrc: featuredImageSrc || null,
    aboutHtml,
    instructionsHtml,
    ingredients,
  }

  return { recipe }
}
