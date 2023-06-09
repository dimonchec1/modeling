import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE, MENU_ROUTE } from './../utils/consts';
import { registration, login } from './../http/userAPI';
import { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './../index';

const Auth = observer (() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(MENU_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3">
                        {isLogin ? 
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }
                        
                        <Button 
                            variant="outline-success"
                            className="mt-3 "
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>
                    
                </Form>
            </Card>
        </Container>
    )
})

export default Auth;