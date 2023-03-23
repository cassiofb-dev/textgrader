import styled from "styled-components";
import { Layout as LayoutAntd, Menu as MenuAntd } from "antd";
import {
  Header as HeaderAntd,
  Content as ContentAntd,
  Footer as FooterAntd,
} from "antd/lib/layout/layout";

export const Layout = styled(LayoutAntd)`
  min-height: 100vh;
`;

export const Menu = styled(MenuAntd)`
  padding: 10px 20px;
`;

export const Content = styled(ContentAntd)`
  padding: 20px 0;
`;

export const Footer = styled(FooterAntd)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Span = styled.span`
  font-size: 15px;
  color: black;
`;

export const LinkContent = styled.div`
  display: flex;
  gap: 10px;
`;

export const MenuItem = styled(MenuAntd.Item)``;
