import path from 'path'
import { aboutFrontMatterLoader, featuredImageLoader } from './webpackLoaders'

const slugFromFilePath = (filePath) => {
  const filePathParts = filePath.split('/')
  return filePathParts.slice(filePathParts.length - 2)[0].replace(/^\d+-/, '')
}

const findFeaturedImagePath = (paths, filePath, featuredImage) => {
  return paths.find(
    (p) => p.indexOf(path.join(filePath, '..', featuredImage)) > -1
  )
}

const srcForfeaturedImage = (filePath, featuredImage) => {
  if (!featuredImage) return

  const loadFeaturedImage = featuredImageLoader()

  return loadFeaturedImage(
    findFeaturedImagePath(loadFeaturedImage.keys(), filePath, featuredImage)
  )
}

const buildDish = (loadFrontMatter) => (filePath) => {
  const { attributes } = loadFrontMatter(filePath)
  const { title, publishedAt, updatedAt, featuredImage } = attributes
  const slug = slugFromFilePath(filePath)
  const featuredImageSrc = srcForfeaturedImage(filePath, featuredImage)

  return {
    title,
    publishedAt,
    updatedAt,
    slug,
    featuredImageSrc,
  }
}

export default (requireContext) => {
  const loadFrontMatter = aboutFrontMatterLoader()
  return loadFrontMatter.keys().map(buildDish(loadFrontMatter))
}
