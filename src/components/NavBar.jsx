import '../styles/navBar.css'
export const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <img src="/src/assets/logo.png" alt="logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#aboutme">Sobre mí</a></li>
            <li><a href="#skills">Tecnologías</a></li>
            <li><a href="#project">Proyectos</a></li>
            <li><a href="#aboutme">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}
