const Recipe = ({ slug }) => <li>{slug}</li>

export default ({ title, children }) => (
  <>
    <h2>{title}</h2>

    <ul>{children}</ul>
  </>
)
