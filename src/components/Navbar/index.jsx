import { useState } from 'react'
import styles from './styles.module.css'
import { Link } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi"
import Logo from "../../assets/objects/Logo"

function Navbar() {
    const[search, setSearch] = useState("")
    return (
        <nav id={styles.navbar}>
            <h2>
                <Link to="/">
                    <Logo /> MoviesLib
                </Link>
            </h2>
            <form>
                <input type="text" 
                placeholder="Busque um filme" 
                onChange={(e) => setSearch(e.target.value)} 
                value={search}/>
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar;