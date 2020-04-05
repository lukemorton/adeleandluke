import allDishesFromFilesystem from './allDishesFromFilesystem'

const MOCK_FILE_PATHS = ['./01-ancho-chicken-tacos/about.md']
const MOCK_ABOUT = {
  attributes: {
    title: 'Ancho Chicken Tacos',
    publishedAt: '2020-04-05',
  },
  html: '<p>Some html</p>',
}

describe('allDishesFromFilesystem', () => {
  it('should call requireContext', () => {
    const mockCtx = jest.fn().mockReturnValue(MOCK_ABOUT)
    mockCtx.keys = () => MOCK_FILE_PATHS
    const mockRequireContext = jest.fn().mockReturnValue(mockCtx)
    allDishesFromFilesystem(mockRequireContext)
    expect(mockRequireContext).toBeCalled()
  })

  it('should call require each path', () => {
    const mockCtx = jest.fn().mockReturnValue(MOCK_ABOUT)
    mockCtx.keys = () => MOCK_FILE_PATHS
    const mockRequireContext = jest.fn().mockReturnValue(mockCtx)
    allDishesFromFilesystem(mockRequireContext)
    expect(mockCtx).toBeCalledTimes(MOCK_FILE_PATHS.length)
  })

  it('should construct slug from filePath', () => {
    const mockCtx = jest.fn().mockReturnValue(MOCK_ABOUT)
    mockCtx.keys = () => MOCK_FILE_PATHS
    const mockRequireContext = jest.fn().mockReturnValue(mockCtx)
    const [firstDish] = allDishesFromFilesystem(mockRequireContext)
    expect(firstDish.slug).toEqual('ancho-chicken-tacos')
  })
})
