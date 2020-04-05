const Ingredient = ({ item }) => (
  <>
    <li>{item}</li>
  </>
)

export default ({ items }) => (
  <>
    <h2>Ingredients</h2>

    <ul>
      {items.map((item, i) => (
        <Ingredient key={i} item={item} />
      ))}
    </ul>
  </>
)
