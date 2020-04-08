import Head from 'next/head'
import Link from 'next/link'
import {
  PageContainer,
  PageHeader,
  PageHeaderBrand,
  PageHeaderNav,
  PageHeaderNavItem,
  PageHeaderNavLink,
  PageFooter,
  BrandLink,
} from '~interfaces/recipes/ui'

export default ({ title, children }) => (
  <PageContainer>
    <Head>
      <title>{title}</title>
    </Head>

    <PageHeader>
      <PageHeaderBrand>
        <Link href="/" passHref>
          <BrandLink />
        </Link>
      </PageHeaderBrand>

      <PageHeaderNav>
        <PageHeaderNavItem>
          <Link href="/" passHref>
            <PageHeaderNavLink>Home</PageHeaderNavLink>
          </Link>
        </PageHeaderNavItem>
      </PageHeaderNav>
    </PageHeader>

    {children}

    <PageFooter copyright="Adele Kyriacou & Luke Morton Copyright &copy; 2020" />
  </PageContainer>
)
