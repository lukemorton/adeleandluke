const MOCK_ABOUT_FM = {
  attributes: {
    title: 'Ancho Chicken Tacos',
    publishedAt: '2020-04-05',
  },
}

const MOCK_INSTRUCTIONS_FM = {
  attributes: { ingredients: [] },
}

export const ABOUT_MOCK_FILES = ['./01-ancho-chicken-tacos/about.md']

export const INSTRUCTIONS_MOCK_FILES = [
  './01-ancho-chicken-tacos/instructions.md',
]

export const MOCK_FILES = [].concat(ABOUT_MOCK_FILES, INSTRUCTIONS_MOCK_FILES)

export const mockLoader = (name) => {
  let mock

  switch (name) {
    case 'aboutFrontMatter':
      mock = jest.fn().mockReturnValue(MOCK_ABOUT_FM)
      mock.keys = jest.fn().mockReturnValue(ABOUT_MOCK_FILES)
      global.mockAboutFrontMatterLoader = mock
      break
    case 'frontMatter':
      mock = jest.fn((path) => {
        if (path.indexOf('about') > -1) {
          return MOCK_ABOUT_FM
        } else if (path.indexOf('instructions')) {
          return MOCK_INSTRUCTIONS_FM
        } else {
          throw new Error('Unknown path in mockLoader')
        }
      })
      mock.keys = jest.fn().mockReturnValue(MOCK_FILES)
      global.mockFrontMatterLoader = mock
      break
    case 'markdown':
      mock = jest.fn().mockReturnValue('')
      mock.keys = jest.fn().mockReturnValue(MOCK_FILES)
      global.mockMarkdownLoader = mock
      break
  }

  return mock
}

export const cleanUpMockLoader = () => {
  delete global.mockAboutFrontMatterLoader
  delete global.mockFrontMatterLoader
  delete global.mockMarkdownLoader
}
