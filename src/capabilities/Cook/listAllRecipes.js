export default async ({ allRecipes }) => {
  const recipes = (await allRecipes()).map((recipe) => {
    const { title, slug, publishedAt, updatedAt, featuredImageSrc } = recipe
    return {
      title,
      slug,
      publishedAt,
      updatedAt: updatedAt || null,
      featuredImageSrc: featuredImageSrc || null,
    }
  })

  return { recipes }
}
