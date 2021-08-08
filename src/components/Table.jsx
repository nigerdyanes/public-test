import {
  BsChevronDown,
  BsFillTrashFill,
  BsLaptop,
  BsThreeDotsVertical,
} from "react-icons/bs";
const Table = () => {
  return (
    <>
      <table style={{ width: "100%", backgroundColor: "white" }}>
        <tr className="text-center" style={{ border: "1px solid #E7E7ED" }}>
          <th>
            <input type="checkbox" className="form-check-input" />
          </th>
          <th>
            <BsFillTrashFill /> Eliminar
          </th>
          <th colSpan={9}></th>
        </tr>
        <tr className="text-center" style={{ border: "1px solid #E7E7ED" }}>
          <th>
            <input type="checkbox" className="form-check-input" />
          </th>
          <th>Nro. de historia</th>
          <th>DNI / CE</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th>Citas program.</th>
          <th>Usuario que Registró</th>
          <th>Fecha registro</th>
          <th>
            <BsChevronDown />
          </th>
        </tr>
        <tbody className="text-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <tr key={item}>
              <td>
                {" "}
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>087999</td>
              <td>46567890</td>
              <td>Luzio Luis</td>
              <td>Cabrera Herrera</td>
              <td>987789654</td>
              <td>santive@gma...</td>
              <td>
                <BsLaptop />
              </td>
              <td>Jesus Alvarado Rios</td>
              <td>10 Jul 2020</td>
              <td>
                <BsThreeDotsVertical />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
