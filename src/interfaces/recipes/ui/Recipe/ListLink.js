import { forwardRef } from 'react'

export default forwardRef(({ href, onClick, children }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    {children}
  </a>
))
