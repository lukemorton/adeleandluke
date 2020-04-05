export default ({ html, publishedAt }) => (
  <>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </>
)
