import { useState } from 'react';
import './style.css';

function Form({ listTransactions, setListTransactions }) {

    const [newDescription, setNewDescription] = useState('');
    const [newType, setNewType] = useState('Entrada');
    const [newValue, setNewValue] = useState('');
    const [id, setId] = useState(0);
    
    function addNewTransacition(event) {
        
        event.preventDefault();
        setId(id + 1)
        return setListTransactions([...listTransactions, {id: id, description: newDescription, type: newType, value: newType === 'Despesa' ? Number(-newValue) : Number(newValue)}]);

    }

    return (
        <form onSubmit={addNewTransacition}>
            <label>
                Descrição
                <input type="text" name="description" placeholder="Digite aqui sua descrição" onChange={(event) => setNewDescription(event.target.value)} required/>
            </label>
            <p>Ex: Compra de roupas</p>
            <div className="valueTypeContainer">
                <label>
                    Valor
                    <input type="number" name="valor" placeholder=" 1                     R$" onChange={(event) => setNewValue(event.target.value)} min="0" required/>
                </label>
                <label>
                    Tipo de valor
                    <select name="valueType" onClick={(event) => setNewType(event.target.value)}>
                        <option value="Entrada">Entrada</option>
                        <option value="Despesa">Saída</option>
                    </select>
                </label>
            </div>
            <input className="button" type="submit" value="Inserir valor"/>
        </form>
    );
}

export default Form;