import { Container, Breadcrumb } from "react-bootstrap";
import { BsInfoCircle, BsChevronLeft,BsChevronRight,BsChevronDown } from "react-icons/bs";
import Table from "../components/Table";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Container fluid className="Info__span">
        <span>
          <BsInfoCircle /> Toda es informativo para editar , agregar mas
          información realizar por el SIC
        </span>
      </Container>
      <Container className="Section__breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Pacientes</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container className="Section__Enum">
        <h1>Pacientes</h1>
        <span>A continuación podrás ver la lista de pacientes agendados.</span>
      </Container>
      <Container className="Section__input__search">
        <input
          className="Input__search"
          placeholder="Buscar por DNI, Nombre, Apellido"
        />
      </Container>
      <Container className="Section__table">
        <Table />
        <div className="Paginate__table">
          <span>Mostrando 5 pacientes de 20</span>
          <nav className="Paginate">
            <ul>
              <li><BsChevronLeft/></li>
              <li className="Paginate__active">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li><BsChevronRight/></li>
            </ul>
          </nav>
          <ul className="Paginate__max">
            <li>10</li>
            <li><BsChevronDown/></li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Home;
