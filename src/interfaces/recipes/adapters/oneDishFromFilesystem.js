import { frontMatterLoader, markdownLoader } from './webpackLoaders'

const findAboutPath = (paths) =>
  paths.find((path) => path.indexOf('about.md') > -1)

const findInstructionsPath = (paths) =>
  paths.find((path) => path.indexOf('instructions.md') > -1)

const slugPaths = (slug, paths) =>
  paths.filter((path) => path.indexOf(slug) > -1)

const buildAbout = ({ attributes }, html) => {
  const { title, publishedAt, updatedAt, featuredImage } = attributes
  return { title, publishedAt, updatedAt, featuredImage, aboutHtml: html }
}

const buildInstructions = ({ attributes }, html) => {
  const { ingredients } = attributes
  return { ingredients, instructionsHtml: html }
}

export default (slug, requireContext) => {
  const loadFrontMatter = frontMatterLoader()
  const allFrontMatterPaths = slugPaths(slug, loadFrontMatter.keys())
  const aboutFrontMatter = loadFrontMatter(findAboutPath(allFrontMatterPaths))
  const instructionsFrontMatter = loadFrontMatter(
    findInstructionsPath(allFrontMatterPaths)
  )

  const loadMarkdown = markdownLoader()
  const allMarkdownPaths = slugPaths(slug, loadMarkdown.keys())
  const aboutMarkdown = loadMarkdown(findAboutPath(allMarkdownPaths))
  const instructionsMarkdown = loadMarkdown(
    findInstructionsPath(allMarkdownPaths)
  )

  return {
    ...buildAbout(aboutFrontMatter, aboutMarkdown),
    ...buildInstructions(instructionsFrontMatter, instructionsMarkdown),
    slug,
  }
}
