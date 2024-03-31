import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaLanguage } from "react-icons/fa";
import { useTranslation } from "react-i18next"
import { NavLink } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { FaMessage, FaHeart } from "react-icons/fa6";
import logo from "../assets/logo.jpeg"
export default function SiteNav() {
    var { t, i18n } = useTranslation()

    console.log(i18n)

    let handleLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Site logo" width={60} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink to="/" className="nav-link">{t('home')}</NavLink>
                        <NavLink to="/products" className="nav-link">{t('products')}</NavLink>
                        <NavLink to="/single_product" className="nav-link">Single product</NavLink>
                    </Nav>
                    <div>
                        <FaLanguage onClick={handleLanguage} />
                        <IoPerson />
                        <FaMessage />
                        <FaHeart />

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
