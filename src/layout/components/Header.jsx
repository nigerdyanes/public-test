import { Navbar, Container } from "react-bootstrap";
import { BsChevronDown } from "react-icons/bs";
import IconLogo from "./IconLogo";
import "../../styles/Header.css";

const Header = () => {
  return (
    <>
      <Navbar>
        <Container fluid>
          <Container style={{ marginLeft: 60, display: "flex" }}>
            <div>
              <IconLogo />
            </div>
            <div>
              <h5 style={{ fontSize: 15, color: "#A5A5A8" }}>Clínica</h5>
              <h5 style={{ position: "relative", top: -10 }}>San Felipe</h5>
            </div>
          </Container>
          <Navbar.Toggle />
          <Navbar.Collapse style={{ marginBottom: 20 }}>
            <div className="Circle__profile">KR</div>
            <div className="mx-3" style={{ position: "relative", top: 4 }}>
              <h5 style={{ fontSize: 17 }}>Katerine Rios</h5>
            </div>
            <div className="mx-2">
              <BsChevronDown />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
