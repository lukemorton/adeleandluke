import Header from './Header'
import Footer from './Footer'

export default ({ children }) => (
  <div className="container">
    <div className="row">{children}</div>
  </div>
)
