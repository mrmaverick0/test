
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

const Header = () =>{
    return <header className="head">
        <nav>
            <ul>
                <li>
                    <NavLink to='/welcome' end>Welcome Page</NavLink>
                    <NavLink to='/product' end> Product Page</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header