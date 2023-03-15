import { useContext } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Context } from "../index";
import { NavLink, useNavigate } from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MENU_ROUTE, ORDERS_ROUTE} from './../utils/consts'
import {Button} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(LOGIN_ROUTE)

    }
     
    return (
    <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color:'white'}} to={MENU_ROUTE}>МЕНЮ</NavLink>
                    {user.isAuth ? 
                        
                        <Nav className="ms-auto" style={{color:'white'}}>
                            <Button 
                                variant={"outline-light"} 
                                onClick={() => navigate(ORDERS_ROUTE)}
                            >
                                История заказов
                            </Button>
                            <Button 
                                variant={"outline-light"} 
                                onClick={() => navigate(BASKET_ROUTE)}
                                className="ms-3"
                            >
                                Корзина
                            </Button>
                            <Button 
                                variant={"outline-light"} 
                                onClick={() => navigate(ADMIN_ROUTE)}
                                className="ms-3"
                            >
                                Админ панель
                            </Button>
                            <Button 
                                variant={"outline-light"} 
                                onClick={() => logOut()}
                                className="ms-3"
                            >
                                Выйти
                            </Button>
                        </Nav>
                        :
                        <Nav className="ms-auto" style={{color:'white'}}>
                            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
</>
    )
})

export default NavBar;