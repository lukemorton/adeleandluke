import allDishesFromFilesystem from './allDishesFromFilesystem'
import { mockLoader, cleanUpMockLoader, ABOUT_MOCK_FILES } from './testHelpers'

describe('allDishesFromFilesystem', () => {
  it('should call requireContext', () => {
    const frontMatterLoader = mockLoader('aboutFrontMatter')
    allDishesFromFilesystem()
    expect(frontMatterLoader).toBeCalled()
  })

  it('should call require each path', () => {
    const frontMatterLoader = mockLoader('aboutFrontMatter')
    allDishesFromFilesystem()
    expect(frontMatterLoader).toBeCalledTimes(ABOUT_MOCK_FILES.length)
  })

  it('should construct slug from filePath', () => {
    mockLoader('aboutFrontMatter')
    const [firstDish] = allDishesFromFilesystem()
    expect(firstDish.slug).toEqual('ancho-chicken-tacos')
  })
})
