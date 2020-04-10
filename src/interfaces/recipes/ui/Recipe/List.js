import { forwardRef } from 'react'

export default ({ title, children }) => (
  <>
    <h2>{title}</h2>

    <ul>{children}</ul>
  </>
)

export const RecipeListItem = ({ children }) => <li>{children}</li>

const withLinkProps = (Component) => {
  return forwardRef((props, ref) => {
    const { href, onClick, children } = props
    const linkProps = { href, onClick, children }
    return Component(props, linkProps)
  })
}

export const RecipeListLink = withLinkProps(
  ({ title, imageSrc }, linkProps) => {
    return (
      <a {...linkProps}>
        {imageSrc && <img src={imageSrc} width="200" />} {title}
      </a>
    )
  }
)
