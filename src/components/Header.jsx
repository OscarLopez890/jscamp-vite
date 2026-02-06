import styles from "./Header.module.css"
import { Link } from "./Link.jsx"

export function Header(){
  return (
    <header className={styles.header}>
      <Link href="/" style={{textDecoration: 'none'}}>
        <h1 style={{color: 'white'}}>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brackets-angle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 4l-5 8l5 8" /><path d="M16 4l5 8l-5 8" /></svg>
          DevJobs
        </h1>
      </Link>
      <nav>
          <Link href="/" target="_self" rel="noopener noreferrer">Inicio</Link>
          <Link href="/search">Empleos</Link>
          <Link href="/contact">Contacto</Link>
      </nav>
      <div>
          <a href="register.html">Publicar un empleo</a>
          <a href="login.html">Iniciar Sesión</a>
          <devjobs-avatar
          service = "github"
          username = "torvalds"
          size = "50"
          ></devjobs-avatar>          
      </div> 
    </header>
  )
}