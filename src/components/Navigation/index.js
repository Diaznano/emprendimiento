import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./styles.scss";

const Navigation = () => (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="black">
    <Navbar.Brand href="/sofj.cuadros/">
      <img
        src={logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/sofj.cuadros/">Home</Nav.Link>
        <NavDropdown title="Categorias" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/sofj.cuadros/list/1">Mates</NavDropdown.Item>
          <NavDropdown.Item href="/sofj.cuadros/list/2">
            Cuadros
          </NavDropdown.Item>
          <NavDropdown.Item href="/sofj.cuadros/list/3">Bazar</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
