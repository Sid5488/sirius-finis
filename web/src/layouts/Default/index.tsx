import { Outlet } from "react-router-dom";

import { Container, Content } from "./styles";

const DefaultLayout = () => {
  return (
    <Container>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export { DefaultLayout };
