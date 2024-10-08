import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { Container, Content, Menu } from "./style";

const AuthLayout = () => {
  return (
    <Container>
      <Menu>
        <div className="logo">Sirius-Finis</div>

        <ul className="menu">
          <li>
            <Link to="/home">Início</Link>
          </li>

          <li>
            <Link to="/expenses">Despesas</Link>
          </li>
          
          <li>
            <Link to="/categories">Categorias</Link>
          </li>
        </ul>
      </Menu>

      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export { AuthLayout };
