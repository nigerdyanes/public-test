import { Container } from "react-bootstrap";
import { BsFillPeopleFill, BsFillHouseFill, BsFolderPlus, BsCalendar, BsReverseBackspaceReverse } from "react-icons/bs";
import "../../styles/Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <Container className="Sidebar">
        <div className="btn-sidebar">
          <div className="mx-2">
            <BsFillHouseFill />
          </div>
          <h5>Inicio</h5>
        </div>
        <div className="btn-sidebar">
          <div className="mx-2">
            <BsFillPeopleFill />
          </div>
          <h5>Pacientes</h5>
        </div>
        <div className="btn-sidebar">
          <div className="mx-2">  
            <BsFolderPlus />
          </div>
          <h5>Médicos</h5>
        </div>
        <div className="btn-sidebar">
          <div className="mx-2">
            <BsReverseBackspaceReverse />
          </div>
          <h5>Consultorios</h5>
        </div>
        <div className="btn-sidebar">
          <div className="mx-2">
            <BsCalendar />
          </div>
          <h5>Agenda</h5>
        </div>
      </Container>
    </>
  );
};

export default Sidebar;
