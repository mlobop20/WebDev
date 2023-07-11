import './navBar.css';


function NavBar(props) {

  return (
    <nav>
      <div className="navMenuTitleDiv">
      <div className="navMenuTitle">Todo sobre APLV</div>
      <img src="./icon.jpeg" ></img>

      </div>
      <div className="navBarMenu">
        <div className="navMenuDivOpcion">Inicio</div>
        <div className="navMenuDivOpcion">Productos</div>
        <div className="navMenuDivOpcion">Información</div>
        <div className="navMenuDivOpcion">Servicios</div>
        <div className="navMenuDivOpcion">Contacto</div>
      </div>
    </nav>
  );

}


export default NavBar;