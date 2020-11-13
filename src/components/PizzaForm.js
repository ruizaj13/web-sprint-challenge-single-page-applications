import React from "react";
import {Route, Link} from 'react-router-dom';
import '../App.css'

const PizzaForm = () => {

    return (
        <div>
            <form>
                <div>
                    <label>
                        Name: <input type='text' name='name'  />
                    </label>
                </div>
                <div>
                    <label>
                        Size: <select name='size'>
                                <option>--Select A Size--</option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                              </select>
                    </label>
                </div>
                    <h4>Toppings</h4>
                <div className='toppings'>
                    <label>
                        Peperroni:<input type='checkbox' name='pepperoni'/>
                    </label>
                    <label>
                        Ham:<input type='checkbox' name='ham'/>
                    </label>
                    <label>
                        Pineapple:<input type='checkbox' name='pineapple'/>
                    </label>
                    <label>
                        Bacon:<input type='checkbox' name='bacon'/>
                    </label>
                </div>
                <div>
                    <label>
                        Special Instructions: <input type='text' name='instructions'/>
                    </label>
                </div>
                <button id='submitBtn'>Submit Order!</button>
            </form>
        </div>
    )

}

export default PizzaForm