import styles from './ProjectForm.module.css'

import Input from '../form/Input.js'
import Select from '../form/Select.js'
import SubmitButton from '../form/SubmitButton.js'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
            type='text' 
            text='Nome do Projeto' 
            name='name' 
            placeholder='Insira o nome do Projeto'
            />
            
            <Input 
            type='number' 
            text='Orçamento do Projeto' 
            name='budget' 
            placeholder='Insira o Orçamento total'
            />
            <Select name='category_id' text='Selecione a categoria' /> 
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm