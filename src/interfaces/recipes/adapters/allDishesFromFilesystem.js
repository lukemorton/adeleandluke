import { aboutFrontMatterLoader } from './webpackLoaders'

const slugFromFilePath = (filePath) => {
  const filePathParts = filePath.split('/')
  return filePathParts.slice(filePathParts.length - 2)[0].replace(/^\d+-/, '')
}

const buildDish = (loadFrontMatter) => (filePath) => {
  const { attributes } = loadFrontMatter(filePath)
  const { title, publishedAt, updatedAt } = attributes
  const slug = slugFromFilePath(filePath)
  return { title, publishedAt, updatedAt, slug }
}

export default (requireContext) => {
  const loadFrontMatter = aboutFrontMatterLoader()
  return loadFrontMatter.keys().map(buildDish(loadFrontMatter))
}
