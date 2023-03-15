import { Accordion } from 'react-bootstrap';
import { useContext, useLayoutEffect } from 'react';
import { Context } from './../index';
import { useEffect } from 'react';
import { fetchOrder } from './../http/dishOrderAPI';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

const OrderCard = observer(({order}) => {

    const {orders} = useContext(Context)
    const [di, setDi] = useState([])
    let [sum, setSum] = useState(0)
    di.forEach(dish => {
        sum = sum + dish.quantity * dish.price
    });

    useEffect(() => {
        fetchOrder(order.id).then(data => setDi(data))
    }, [])

    return (
        <Accordion.Item eventKey={order.id} className="mt-4">
            <Accordion.Header>{new Date(order.date).toLocaleString()} статус {order.status}</Accordion.Header>
            <Accordion.Body>
                {di.map(dish => 
                    <div key={dish.id}>{dish.dish.name} {dish.quantity} шт. {dish.price * dish.quantity} Руб.</div>
                )}
                <p><strong>Итого {sum}</strong></p>
            </Accordion.Body>
        </Accordion.Item>
    )
})

export default OrderCard
