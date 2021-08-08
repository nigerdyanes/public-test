import { Container } from "react-bootstrap";
import IconLogo from "./IconLogo";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <Container fluid className="Section__footer">
        <div className="Section__footer__logo">
          <IconLogo />
        </div>
        <span>Copyright © 2021 Clinica San Felipe</span>
      </Container>
    </>
  );
};

export default Footer;
