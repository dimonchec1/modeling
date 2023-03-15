import { useContext } from 'react';
import { Context } from './../index';
import { Button, Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import DishList from './../components/DishList';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { createDishOrderH, fetchOrderDishes } from '../http/dishOrderAPI';
import { createOrder } from './../http/orderAPI';
import { deleteDishOrder } from './../http/dishOrderAPI';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { MENU_ROUTE } from '../utils/consts';

const Basket = observer(() => {
    const { user, dish } = useContext(Context)
    useEffect(() => {
        fetchOrderDishes(user.user.id).then(data => dish.setDishes(data))
        
    }, [user])

    const navigate = useNavigate()

    let checkout = () => {
        createOrder({'userId': user.user.id}).then(data => {
            dish.dishes.map(item => createDishOrderH({'orderId': data.id, 'dishId': item.id, 'quantity': item.carts[0].quantity, 'price': item.price}))
            deleteDishOrder()
            navigate(MENU_ROUTE)
        }) 
    }

    return (
        <Container>
            <Row className="mt-2">
                <Col md={9}>
                    <DishList />
                </Col>
            </Row>
            <Button onClick={checkout}>
                Оформить заказ
            </Button>
        </Container>
    )
})
export default Basket;