import { Button, Card, Col, Row } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { observer } from 'mobx-react-lite';

const DishPage = observer(() => {
    const dish = {id: 1, name: "qwdqwdqwdqwdqwd", price: 222222, img: 'https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg'}
    return (
        <Container className="mt-3">
            <Col md={4}>
                <Image width={300} height={300} src={dish.img} />
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{dish.name}</h2>
                </Row>
            </Col>
            <Col md={4}>
                <Card>
                    <h3>{dish.price}</h3>
                    <Button variant={'outline-dark'}>Добавить в корзину</Button>
                </Card>
            </Col>
        </Container>
    )
})

export default DishPage;