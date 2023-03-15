import { useState } from "react";
import { Button } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import CreateDish from "../components/models/CreateDish";
import CreateType from "../components/models/CreateType";

const Admin = () => {
    const [typeVisibale, setTypeVisible] = useState(false)
    const [dishVisibale, setDishVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button variant="outline-dark" className="mt-2" onClick={() => setTypeVisible(true)}>
                Добавить тип
            </Button>
            <Button variant="outline-dark" className="mt-2" onClick={() => setDishVisible(true)}>
                Добавить блюдо
            </Button>
            <CreateType show={typeVisibale} onHide={() => setTypeVisible(false)}></CreateType>
            <CreateDish show={dishVisibale} onHide={() => setDishVisible(false)}></CreateDish>
        </Container>
    )
}

export default Admin;