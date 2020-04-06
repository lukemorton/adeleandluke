const loadFrontMatter = require.context(
  '!!json-loader!front-matter-loader!../content/dishes',
  true
)

const loadMarkdown = require.context(
  '!!html-loader!markdown-loader!front-matter-loader?onlyBody!../content/dishes',
  true
)

const findAboutPath = (paths) =>
  paths.find((path) => path.indexOf('about.md') > -1)

const findInstructionsPath = (paths) =>
  paths.find((path) => path.indexOf('instructions.md') > -1)

const slugPaths = (slug, paths) =>
  paths.filter((path) => path.indexOf(slug) > -1)

const buildAbout = ({ attributes }, html) => {
  const { title, publishedAt, updatedAt } = attributes
  return { title, publishedAt, updatedAt, aboutHtml: html }
}

const buildInstructions = ({ attributes }, html) => {
  const { ingredients } = attributes
  return { ingredients, instructionsHtml: html }
}

export default (slug, requireContext) => {
  const allFrontMatterPaths = slugPaths(slug, loadFrontMatter.keys())
  const aboutFrontMatterPath = findAboutPath(allFrontMatterPaths)
  const aboutFrontMatter = loadFrontMatter(aboutFrontMatterPath)
  const instructionsFrontMatterPath = findInstructionsPath(allFrontMatterPaths)
  const instructionsFrontMatter = loadFrontMatter(instructionsFrontMatterPath)

  const allMarkdownPaths = slugPaths(slug, loadMarkdown.keys())
  const aboutMarkdownPath = findAboutPath(allMarkdownPaths)
  const aboutMarkdown = loadMarkdown(aboutMarkdownPath)
  const instructionsMarkdownPath = findInstructionsPath(allMarkdownPaths)
  const instructionsMarkdown = loadMarkdown(instructionsMarkdownPath)

  return {
    ...buildAbout(aboutFrontMatter, aboutMarkdown),
    ...buildInstructions(instructionsFrontMatter, instructionsMarkdown),
    slug,
  }
}
