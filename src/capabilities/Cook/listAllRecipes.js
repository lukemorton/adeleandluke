export default async ({ allRecipes }) => {
  const recipes = (await allRecipes()).map((recipe) => {
    const { title, slug, publishedAt, updatedAt } = recipe
    return { title, slug, publishedAt, updatedAt: updatedAt || null }
  })

  return { recipes }
}
