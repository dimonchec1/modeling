import { Col, Row } from "react-bootstrap";
import DishBar from './../components/DishBar';
import { Container } from 'react-bootstrap';
import DishList from "../components/DishList";
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from "react";
import { Context } from './../index';
import { fetchDishes, fetchTypes } from "../http/dishAPI";

const Menu = observer(() => {
    const {dish, user} = useContext(Context)
    
    console.log(user, 'component')

    useEffect(() => {
        fetchTypes().then(data => dish.setTypes(data))
        if (user.user.id)
            fetchDishes(user.user.id).then(data => dish.setDishes(data))
        else
            {
                console.log('works')
                 fetchDishes().then(data => dish.setDishes(data))
            }
           
        console.log(user, 'component')
    }, [user, dish])


    useEffect(() => {
        fetchDishes(user.user.id, dish.selectedType.id).then(data => dish.setDishes(data))
    }, [dish.selectedType])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={9}>
                    <DishBar />
                    <DishList />
                </Col>
            </Row>
        </Container>
    )
})

export default Menu;