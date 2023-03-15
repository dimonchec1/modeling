import { observer } from 'mobx-react-lite';
import { Context } from './../index';
import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { useContext } from 'react';

const DishBar = observer(() => {
    const {dish} = useContext(Context)
    return (
        <Row className='d-flex'>
            
            {dish.types.map(type =>
                <Card key={type.id} 
                    className='p-3 ms-2' 
                    style={{ width: '7rem', cursor: 'pointer'}}
                    onClick={() => dish.setSelectedType(type)}
                    border={type.id === dish.selectedType.id ? 'dark' : 'light'}
                >
                    {type.name}
                </Card>
            )}
        </Row>
    )
})
export default DishBar