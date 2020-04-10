export const aboutFrontMatterLoader = () =>
  global.mockAboutFrontMatterLoader ||
  require.context(
    '!!json-loader!front-matter-loader!../content/dishes',
    true,
    /about.md$/
  )

export const frontMatterLoader = () =>
  global.mockFrontMatterLoader ||
  require.context(
    '!!json-loader!front-matter-loader!../content/dishes',
    true,
    /.md$/
  )

export const markdownLoader = () =>
  global.mockMarkdownLoader ||
  require.context(
    '!!html-loader!markdown-loader!front-matter-loader?onlyBody!../content/dishes',
    true,
    /.md$/
  )

export const featuredImageLoader = () =>
  global.mockFeaturedImageLoader ||
  require.context('../content/dishes', true, /.(jpe?g|png)$/)
