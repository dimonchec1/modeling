import { Accordion, Container } from "react-bootstrap";
import { useEffect } from 'react';
import { fetchOrderDishesH } from "../http/dishOrderAPI";
import { useContext } from 'react';
import { Context } from './../index';
import OrderCard from "../components/OrderCard";
import { observer } from 'mobx-react-lite';

const Orders = observer(() => {
    const {orders, user} = useContext(Context)
    useEffect(() => {
        fetchOrderDishesH(user.user.id).then(data => orders.setOrders(data))
    }, [])
    return (
        <Container>
            <Accordion alwaysOpen>
                {orders.orders.map(order =>
                    <OrderCard  key={order.id} order={order} />
                )}
            </Accordion>
        </Container>
    )
})

export default Orders;