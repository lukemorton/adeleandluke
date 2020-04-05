const about = (about) => {
  const { attributes, html } = about
  const { title, publishedAt, updatedAt } = attributes
  return { title, publishedAt, updatedAt, aboutHtml: html }
}

const instructions = (instructions) => {
  const { attributes, html } = instructions
  const { ingredients } = attributes
  return { ingredients, instructionsHtml: html }
}

export default (slug, requireContext) => {
  const ctx = requireContext
    ? requireContext()
    : require.context('../content/dishes', true)
  const paths = ctx.keys().filter((path) => path.indexOf(slug) > -1)
  const aboutPath = paths.find((path) => path.indexOf('about.md') > -1)
  const instructionsPath = paths.find(
    (path) => path.indexOf('instructions.md') > -1
  )

  return {
    ...about(ctx(aboutPath)),
    ...instructions(ctx(instructionsPath)),
    slug,
  }
}
