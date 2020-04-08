import { forwardRef } from 'react'

export default ({ children }) => (
  <header className="col-12">
    <div className="d-flex">{children}</div>
  </header>
)

export const PageHeaderBrand = ({ children }) => (
  <div className="mr-auto py-2">{children}</div>
)

export const PageHeaderNav = ({ children }) => (
  <nav>
    <ul className="nav">{children}</ul>
  </nav>
)

export const PageHeaderNavItem = ({ children }) => (
  <li className="nav-item">{children}</li>
)

export const PageHeaderNavLink = forwardRef(
  ({ href, onClick, children }, ref) => (
    <a href={href} onClick={onClick} ref={ref} className="nav-link">
      {children}
    </a>
  )
)
