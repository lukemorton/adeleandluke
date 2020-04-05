export default ({ html, title, publishedAt, updatedAt }) => (
  <>
    <h1>{title}</h1>

    <p>
      Published at {publishedAt}
      {updatedAt && <>, last updated at {updatedAt}</>}
    </p>

    <div dangerouslySetInnerHTML={{ __html: html }} />
  </>
)
