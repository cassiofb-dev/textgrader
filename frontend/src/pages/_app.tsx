import '@/styles/globals.css';

import 'antd/dist/reset.css';

import { Header, Content, Footer } from 'antd/lib/layout/layout';

import type { AppProps } from 'next/app';

import { Layout, Menu } from 'antd';

import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <Menu.Item>
            <Link href="/">
              Início
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/redacao">
              Redação
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '20px 0' }} ><Component {...pageProps} /></Content>
      <Footer style={{ textAlign: 'center' }}>©2023 Created by Pettine - Cássio - Julie</Footer>
    </Layout>
  )
}
