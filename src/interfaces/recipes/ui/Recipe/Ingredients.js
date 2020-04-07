const Ingredient = ({ item }) => (
  <>
    <li>{item}</li>
  </>
)

export default ({ title, items }) => (
  <>
    <h2>{title}</h2>

    <ul>
      {items.map((item, i) => (
        <Ingredient key={i} item={item} />
      ))}
    </ul>
  </>
)
