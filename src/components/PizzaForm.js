import React, {useState, useEffect} from "react";
import * as yup from 'yup';
import axios from 'axios';
import Schema from './Schema'
import '../App.css';

const initialFormState = {
    name: '',
    size: '',
    pepperoni: false,
    ham: false,
    pineapple: false,
    bacon: false,
    instructions: '',

}

const initialErrorState = {
    name:'',
    size:'',
}

const initialOrders = []

const PizzaForm = () => {

    const [formData,setFormData] = useState(initialFormState)
    const [disabled, setDisabled] = useState(true)
    const [formErrors, setFormErrors] = useState(initialErrorState)
    const [orders, setOrders] = useState(initialOrders)

        
    const onChange = (event) => {
        const {checked, value, type, name} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        errMsg(name, valueToUse)
        setFormData({...formData, [name]: valueToUse})
    }

    useEffect(() => {
        Schema.isValid(formData).then(valid => setDisabled(!valid))
    }, [formData])

    const errMsg = (name, value) => {
        yup.reach(Schema, name).validate(value)
        .then(() => 
            setFormErrors({...formErrors, [name]: ''})
        )
        .catch(err => 
            setFormErrors({...formErrors, [name]: err.errors[0]})
        )
    }

    const onSubmit = (event) => {
        event.preventDefault();

        axios
            .post('https://reqres.in/api/users', formData)

            .then(res => {
                const newOrder = [...orders, res.data]
                setOrders(newOrder)
            })
            .catch(err => console.log("You're going to starve"))
            .finally(() => {
                setFormData(initialFormState)
            })


    }

    return (
        <div>

            <div style={{color: 'red'}}>
                <div>{formErrors.name}</div> 
                <div>{formErrors.pizzaSize}</div>
            </div>

            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        Name: <input onChange={onChange} value={formData.name} type='text' name='name'  />
                    </label>
                </div>
                <div>
                    <label>
                        Size: <select onChange={onChange} value={formData.size} name='size'>
                                <option value=''>--Select A Size--</option>
                                <option value='small'>Small</option>
                                <option value='medium'>Medium</option>
                                <option value='large'>Large</option>
                              </select>
                    </label>
                </div>
                    <h4>Toppings</h4>
                <div className='toppings'>
                    <label>
                        Peperroni:<input onChange={onChange} checked={formData.pepperoni} type='checkbox' name='pepperoni'/>
                    </label>
                    <label>
                        Ham:<input onChange={onChange} checked={formData.ham} type='checkbox' name='ham'/>
                    </label>
                    <label>
                        Pineapple:<input onChange={onChange} checked={formData.pineapple} type='checkbox' name='pineapple'/>
                    </label>
                    <label>
                        Bacon:<input onChange={onChange} checked={formData.bacon} type='checkbox' name='bacon'/>
                    </label>
                </div>
                <div>
                    <label>
                        Special Instructions: <input onChange={onChange} value={formData.instructions} type='text' name='instructions'/>
                    </label>
                </div>
                <button id='submitBtn' disabled={disabled}>Submit Order!</button>
            </form>
            <div>
                {orders.map((item) => (
                    <div>
                        <p>{item.name}</p>
                        <p>{item.size}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    )

}

export default PizzaForm