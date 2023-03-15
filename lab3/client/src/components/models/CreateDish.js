import { Form, Modal, Button, Dropdown } from "react-bootstrap";
import { Context } from './../../index';
import { useContext, useEffect, useState } from "react";
import { fetchTypes } from "../../http/dishAPI";
import { observer } from 'mobx-react-lite';
import { createDish } from './../../http/dishAPI';

const CreateDish = observer(({show, onHide}) => {
    const {dish} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => dish.setTypes(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDish = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', dish.selectedType.id)
        createDish(formData).then(data => onHide(false))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить блюдо
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>{dish.selectedType.name || "Выберите тип"}</Dropdown.Toggle> 
                        <Dropdown.Menu>
                            {dish.types.map(type => 
                                <Dropdown.Item onClick={() => dish.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название блюда"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите стоимость блюда"
                        type="number"
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr />
                    <Button
                        variant="outline-dark"
                    >
                        Добавить блюдо
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDish}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
})
export default CreateDish