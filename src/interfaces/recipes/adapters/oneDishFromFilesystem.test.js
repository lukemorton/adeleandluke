import oneDishFromFilesystem from './oneDishFromFilesystem'
import { mockLoader, cleanUpMockLoader } from './testHelpers'

describe('oneDishesFromFilesystem', () => {
  afterEach(() => cleanUpMockLoader())

  it('should call loaders', () => {
    const frontMatterLoader = mockLoader('frontMatter')
    const markdownLoader = mockLoader('markdown')

    oneDishFromFilesystem('ancho-chicken-tacos')

    expect(frontMatterLoader).toHaveBeenCalled()
    expect(markdownLoader).toHaveBeenCalled()
  })
})
