import Head from 'next/head'
import Link from 'next/link'
import {
  PageContainer,
  PageHeader,
  PageFooter,
  BrandLink,
} from '~interfaces/recipes/ui'

export default ({ title, children }) => (
  <PageContainer>
    <Head>
      <title>{title}</title>
    </Head>

    <PageHeader>
      <Link href="/" passHref>
        <BrandLink />
      </Link>
    </PageHeader>

    {children}

    <PageFooter copyright="Adele Kyriacou & Luke Morton Copyright &copy; 2020" />
  </PageContainer>
)
