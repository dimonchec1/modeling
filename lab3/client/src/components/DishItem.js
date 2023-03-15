import React, { useContext, useEffect, useState } from "react"
import { Button, Card, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import { useNavigate } from 'react-router-dom';
import { DISH_ROUTE } from "../utils/consts";
import { Context } from './../index';
import { observer } from 'mobx-react-lite';
import { createDishOrder, deleteDishOrder, updateDishOrder } from "../http/dishOrderAPI";
import { useLocation } from 'react-router-dom';

const DishItem = observer(({dish}) => {
    const {user} = useContext(Context)
    const navigate = useNavigate();
    const [value, setValue] = useState(1)
    const [dishAmountVisibale, setDishAmountVisibale] = useState(false)

    //const formData = new FormData()
    //formData.append('userId', `${user.user.id}`)
    //formData.append('dishId', `${dish.id}`)

    useEffect(() => {
        setDishAmountVisibale(false)
        if (dish.carts && dish.carts[0]) {
            setDishAmountVisibale(true)
            setValue(dish.carts[0].quantity)
             console.log('321')
        }
    }, [dish])
    return (
        <Col md={3} className='mt-5'>
            <Card style={{width: 200}} border={'light'}>
                <Image 
                    width={200}
                    height={200} 
                    style={{coursor: 'pointer'}} 
                    src={'http://localhost:5000/' + dish.img}
                    onClick={() => navigate(DISH_ROUTE + '/' + dish.id)}
                >
                </Image>
                <Col className="d-flex justify-content-around mt-1">
                    <div>{dish.name}</div>
                    <div>{dish.price * value} Руб</div>
                </Col>
                <div className="mt-1">
                    {
                        !dishAmountVisibale ?
                            <Col className="d-flex justify-content-around mt-1">
                                <Button variant="success" onClick={() => {
                                        setDishAmountVisibale(true)
                                        createDishOrder({'userId': user.user.id, 'dishId': dish.id, 'quantity': 1})
                                    }} 
                                >
                                    В корзину
                                </Button>
                            </Col>
                        :
                            <Col className="d-flex justify-content-around mt-1">
                                <Button variant="primary"  onClick={() => {
                                        if (value === 1) {
                                            setDishAmountVisibale(false)
                                            console.log(user.user.id, dish.id)
                                            deleteDishOrder({'userId': user.user.id, 'dishId': dish.id})
                                        
                                        } else {
                                            setValue(value - 1)
                                            updateDishOrder({'userId': user.user.id, 'dishId': dish.id, 'quantity': value - 1})
                                        } 
                                    }} 
                                    disabled={value === 0}
                                >
                                    -
                                </Button>
                                <input type="text" value={value} className="form-control" placeholder="Колличество" onChange={e => {setValue(Number(e.target.value)); if (value === 0) {setDishAmountVisibale(false)}; console.log((value === 0), 'work')}}></input>
                                <Button variant="primary"className="mr-4" onClick={() => {
                                        setValue(value + 1)
                                        updateDishOrder({'userId': user.user.id, 'dishId': dish.id, 'quantity': value + 1})
                                    }}
                                >
                                    +
                                </Button>
                            </Col>
                    
                    
                    }
                    
                        
                </div>
            </Card>
        </Col>
    )
})
export default DishItem