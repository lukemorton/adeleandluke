import { forwardRef } from 'react'

export default forwardRef(({ href, onClick }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    Adele & Luke's Recipes
  </a>
))
