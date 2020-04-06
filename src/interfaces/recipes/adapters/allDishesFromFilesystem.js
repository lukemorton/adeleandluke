const slugFromFilePath = (filePath) => {
  const filePathParts = filePath.split('/')
  return filePathParts.slice(filePathParts.length - 2)[0].replace(/^\d+-/, '')
}

const buildDish = (ctx) => (filePath) => {
  const { attributes } = ctx(filePath)
  const { title, publishedAt, updatedAt } = attributes
  const slug = slugFromFilePath(filePath)
  return { title, publishedAt, updatedAt, slug }
}

export default (requireContext) => {
  const ctx = requireContext
    ? requireContext()
    : require.context(
        '!!json-loader!front-matter-loader!../content/dishes',
        true,
        /about.md$/
      )
  return ctx.keys().map(buildDish(ctx))
}
