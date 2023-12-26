import styles from './Select.module.css'

import {useEffect, useState} from 'react'

/*function Select({text, name, options, handleOnChange, value}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select 
            name={name} 
            id={name}

            >
                <option>Selecione uma opção</option>
                {options && options.length > 0 && options.map((option) => (
                    <option value={option.id} key={option.id}> {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select

*/

function Select({text, name, options, value, handleOnChange}){

    const [categories, setCategories] = useState([])

    function chooseOption(e){
        fetch("http://localhost:5000/categories", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => setCategories(data))
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onClick={chooseOption}>
                {categories.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select