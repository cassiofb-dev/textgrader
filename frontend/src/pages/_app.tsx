import '@/styles/globals.css'
import 'antd/dist/reset.css';
import { Layout, Menu } from 'antd'
import { Header, Content, Footer } from 'antd/lib/layout/layout'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={[
            { key: 'inicio', label: 'Início' },
            { key: 'redacao', label: 'Redação' },
            { key: 'notas', label: 'Notas' },
          ]}
        />
      </Header>
      <Content style={ {padding: '20px 0'} } ><Component {...pageProps} /></Content>
      <Footer style={{ textAlign: 'center' }}>©2023 Created by Pettine - Cássio - Julie</Footer>
    </Layout>
  )
}
