import { forwardRef } from 'react'

export default ({ title, children }) => (
  <>
    <h2>{title}</h2>

    <ul>{children}</ul>
  </>
)

export const RecipeListItem = ({ children }) => <li>{children}</li>

export const RecipeListLink = forwardRef(({ href, onClick, children }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    {children}
  </a>
))
