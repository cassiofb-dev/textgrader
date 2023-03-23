import { Content, Footer, Layout, Menu, MenuItem, Span, LinkContent } from '@/styles/app/styles';
import '@/styles/globals.css'
import 'antd/dist/reset.css';

import type { AppProps } from 'next/app'
import { Link } from '../../components/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Menu mode="horizontal" theme="dark">
        <MenuItem key="home">
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem key="about">
          <Link href="/redacao">Redação</Link>
        </MenuItem>
        <MenuItem key="nota">
          <Link href="/nota">Nota</Link>
        </MenuItem>
      </Menu>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer>
        <Span>©2023 Created by</Span>
        <LinkContent>
          <Link href="https://github.com/cassiofb-dev">Cássio</Link>
          <Link href="https://github.com/juliemoura">Julie</Link>
          <Link href="https://github.com/Gustavo-Pettine">Pettine</Link>
        </LinkContent>
      </Footer>
    </Layout>
  )
}
