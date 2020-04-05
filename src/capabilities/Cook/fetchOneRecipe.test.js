import fetchOneRecipe from './fetchOneRecipe'

const MOCK_RECIPE = {
  title: 'Cool',
  slug: 'cool',
  publishedAt: '2020-04-05T00:00:00.000Z',
  updatedAt: undefined,
}

describe('listAllRecipes', () => {
  const slug = 'cool'

  it('should call oneRecipe with slug', async () => {
    const mockOneRecipe = jest.fn().mockReturnValue(MOCK_RECIPE)

    await fetchOneRecipe({
      oneRecipe: mockOneRecipe,
      slug,
    })

    expect(mockOneRecipe).toBeCalledWith(slug)
  })

  it('should return object', async () => {
    const mockOneRecipe = jest.fn().mockReturnValue(MOCK_RECIPE)

    const { recipe } = await fetchOneRecipe({
      oneRecipe: mockOneRecipe,
      slug,
    })

    expect(recipe).toEqual(expect.anything())
  })

  it('should return all recipe information', async () => {
    const mockOneRecipe = jest.fn().mockReturnValue(MOCK_RECIPE)

    const { recipe } = await fetchOneRecipe({
      oneRecipe: mockOneRecipe,
      slug,
    })

    expect(recipe).toHaveProperty('title')
    expect(recipe).toHaveProperty('slug')
    expect(recipe).toHaveProperty('publishedAt')
    expect(recipe).toHaveProperty('updatedAt')
    expect(recipe).toHaveProperty('aboutHtml')
    expect(recipe).toHaveProperty('instructionsHtml')
    expect(recipe).toHaveProperty('ingredients')
  })

  it('should return null when updatedAt isnt provided', async () => {
    const mockOneRecipe = jest.fn().mockReturnValue(MOCK_RECIPE)

    const { recipe } = await fetchOneRecipe({
      oneRecipe: mockOneRecipe,
      slug,
    })

    expect(recipe.updatedAt).toBe(null)
  })
})
