import Logo from '../img/logo.svg'
import './Header.css'

export function Header(){
    return(
        <>
            <header className="cabecalho">
                <nav>
                    <ul>
                        <li>
                            <img src={Logo} alt="logo"/>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}