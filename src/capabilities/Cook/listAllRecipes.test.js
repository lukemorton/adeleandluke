import listAllRecipes from './listAllRecipes'

const MOCK_RECIPES = [
  {
    title: 'Cool',
    slug: 'cool',
    publishedAt: '2020-04-05T00:00:00.000Z',
    updatedAt: undefined,
  },
]

describe('listAllRecipes', () => {
  it('should return list', async () => {
    const mockAllRecipes = jest.fn().mockReturnValue(MOCK_RECIPES)
    const { recipes } = await listAllRecipes({
      allRecipes: mockAllRecipes,
    })
    expect(recipes.length).toBe(MOCK_RECIPES.length)
  })

  it('should return list even if empty', async () => {
    const mockAllRecipes = jest.fn().mockReturnValue([])
    const { recipes } = await listAllRecipes({
      allRecipes: mockAllRecipes,
    })
    expect(recipes.length).toBe(0)
  })

  it('should return subset of recipe information', async () => {
    const mockAllRecipes = jest.fn().mockReturnValue(MOCK_RECIPES)
    const { recipes } = await listAllRecipes({
      allRecipes: mockAllRecipes,
    })
    const [firstRecipe] = recipes

    expect(firstRecipe).toHaveProperty('title')
    expect(firstRecipe).toHaveProperty('slug')
    expect(firstRecipe).toHaveProperty('publishedAt')
    expect(firstRecipe).toHaveProperty('updatedAt')
  })

  it('should return null when updatedAt isnt provided', async () => {
    const mockAllRecipes = jest.fn().mockReturnValue(MOCK_RECIPES)
    const { recipes } = await listAllRecipes({
      allRecipes: mockAllRecipes,
    })
    const [firstRecipe] = recipes
    expect(firstRecipe.updatedAt).toBe(null)
  })
})
