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

const PizzaForm = () => {

    const [formData,setFormData] = useState(initialFormState)
    const [disabled, setDisabled] = useState(true)

    const onChange = (event) => {
        const {checked, value, type, name} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormData({...formData, [name]: valueToUse})
    }

    useEffect(() => {
        Schema.isValid(formData).then(valid => setDisabled(!valid))
    }, [formData])



    return (
        <div>
            <form>
                <div>
                    <label>
                        Name: <input onChange={onChange} value={formData.name} type='text' name='name'  />
                    </label>
                </div>
                <div>
                    <label>
                        Size: <select onChange={onChange} value={formData.size} name='size'>
                                <option value=''>--Select A Size--</option>
                                <option value='1'>Small</option>
                                <option value='2'>Medium</option>
                                <option value='3'>Large</option>
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
        </div>
    )

}

export default PizzaForm