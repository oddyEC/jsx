import logo from "./logo.svg";
import "./App.css";
import usuarios from "./users";
import * as React from 'react';
function PresentarValorVariable() {
  let nombre = "Luis";
  return <div>{nombre}</div>;
}
function Ejercicio1() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
function Ejercicio2() {
  const basicStyle = { marginLeft: "580px", color: "red" };
  const complexStyle = {
    marginLeft: "500px",
    width: "120px",
    float: "left",
    color: "red",
  };
  return (
    <div>
      <p>Details Form</p>
      <h1 style={basicStyle}>Form</h1>
      <form action="#" name="testform">
        <div style={complexStyle}>First Name</div>
        <input name="first" type="text" /> <br />
        <br />
        <div style={complexStyle}>Last Name</div>
        <input name="last" type="text" /> <br />
        <br />
        <div style={complexStyle}>Father's Name</div>
        <input name="fname" type="text" />
        <br />
        <br />
        <div style={complexStyle}>Dob</div>
        <input name="dob" type="text" /> <br />
        <br />
        <div style={complexStyle}>Gender</div>
        <input name="gender" type="radio" value="0" />
        male
        <input name="gender" type="radio" value="1" />
        female
        <br />
        <br />
        <div style={complexStyle}>Address</div>
        <input name="address" type="text" />
        <br />
        <br />
        <div style={complexStyle}>State</div>
        <select name="dropbox">
          <option value="ap">ap</option>
          <option value="tml">tml</option>
        </select>
        <br />
        <br />
        <div style={complexStyle}>Pincode</div>
        <input name="address" type="text" />
        <br />
        <br />
        <div style={complexStyle}>EMail</div>
        <div>
          <input name="first" type="text" />
        </div>
        <br />
        <br />
        <div style={complexStyle}>Phone Number</div>
        <input name="address" type="text" />
        <br />
        <br />
        <div style={complexStyle}>Languages</div>
        <input name="telugu" type="checkbox" />
        telugu
        <input name="hindi" type="checkbox" />
        hindi
        <input name="english" type="checkbox" />
        english
        <br />
        <br />
        <div>
          <center>
            <button type="submit" value="submit">
              submit
            </button>
          </center>
        </div>
      </form>
    </div>
  );
}
function PresentarValorObjetoExp() {
  let persona = {
    name: "Luis",
    codigo: "123",
    direccion: "Quito, 10 Agosto",
  };
  return (
    <div>
      Nombre: {persona.name}, Codigo: {persona.codigo}, Nombre:{" "}
      {persona.direccion}
    </div>
  );
}
function PresentarInputs() {
  let persona = {
    name: "Luis",
    codigo: "123",
    direccion: "Quito, 10 Agosto",
  };
  return (
    <div>
      <label htmlFor="name">Nombre:</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        required
        minlength="4"
        maxlength="8"
        size="20"
        value={persona.name}
      ></input>
      <br />
      <label for="code">Codigo:</label>
      <br />
      <input
        type="text"
        id="code"
        name="code"
        required
        size="20"
        value={persona.codigo}
      ></input>
      <br />
      <label for="direction">Direccion:</label>
      <br />
      <input
        type="text"
        id="direction"
        name="direction"
        required
        size="20"
        value={persona.direccion}
      ></input>
    </div>
  );
}
let datos = [1, 2, 3, 4, 5];
function VisualizarLista() {
  let elementosHtml = datos.map((item) => <li>{item}</li>);
  return <ul>{elementosHtml}</ul>;
}
function VisualizarListaColoresImpares() {
  const redStyle = { color: "red", fontstyle: "30px" };
  const blueStyle = { color: "blue" };
  let listaColores = datos.map((item) => (
    <li key={item} style={item % 2 === 0 ? redStyle : blueStyle}>
      {item}
    </li>
  ));
  return (
    <div>
      <ul>{listaColores}</ul>
    </div>
  );
}
function VisualizarUsuario() {
  //visualizar los nombres de los usuarios y sus correos en una lista (ul/li)
  var listaElementosHtml = usuarios;
  let listaNombresCorreosUser = listaElementosHtml.map((item) => (
    <li key={item.id}>
      {item.name},<a href={`mailto:${item.email}`}>{item.email}</a>,{" "}
      <a href={`tel:${item.phone}`}>{item.phone}</a>
    </li>
  ));
  return (
    <div>
      <ul>{listaNombresCorreosUser}</ul>
    </div>
  );
}
function VisualizarTablaUsuarios() {
  var listaElementosHtml = usuarios;
  var count = listaElementosHtml.length;
  return (
    <div>
      
      <h1>Lista de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
            <th>phone</th>
            <th>website</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {listaElementosHtml.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </td>
              <td>{`${item.address.street}, ${item.address.suite}, ${item.address.city}`}</td>
              <td>
                <a href={`tel:${item.phone}`}>{item.phone}</a>
              </td>
              <td>{item.website}</td>
              <td>{item.company.name}</td>
            </tr>



          ))}
        </tbody>
      </table>
      <p>{`El numero total de usuarios es: ${count}`}</p>
    </div>
  );
}
function App() {
  return (
    // <div>
    //   {/* <PresentarValorVariable></PresentarValorVariable>
    //   <PresentarValorObjetoExp></PresentarValorObjetoExp> */}
    //   {/* <PresentarInputs></PresentarInputs> */}
    //   {/* <Ejercicio2></Ejercicio2> */}
    //   {/* <Ejercicio1></Ejercicio1> */}
    //   {/* <VisualizarListaColoresImpares></VisualizarListaColoresImpares> */}
    //   {/* <VisualizarUsuario></VisualizarUsuario> */}
    //   {/* <VisualizarTablaUsuarios></VisualizarTablaUsuarios> */}
    // </div>
    // [
    //   <h1>1</h1>,
    //   <h2>2</h2>,
    //   <h2>3</h2>,
    //   <h2>5</h2>,
    // ]
    <React.Fragment>
      <h2>1</h2>
      <h2>2</h2>
      <h2>3</h2>
    </React.Fragment>
  );
}

export default App;
