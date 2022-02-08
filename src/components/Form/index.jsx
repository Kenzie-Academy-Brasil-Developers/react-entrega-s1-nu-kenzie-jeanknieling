import { useState } from 'react';
import './style.css';

function Form({ listTransactions, setListTransactions }) {

    const [newDescription, setNewDescription] = useState('');
    const [newType, setNewType] = useState('');
    const [newValue, setNewValue] = useState('');
    const [id, setId] = useState(0);

    function addNewTransacition() {
        
        setId(id + 1)
        return setListTransactions([...listTransactions, {id: id, description: newDescription, type: newType, value: Number(newValue)}]);

    }

    return (
        <form>
            <label>
                Descrição
                <input type="text" name="description" placeholder="Digite aqui sua descrição" onChange={(event) => setNewDescription(event.target.value)}/>
            </label>
            <p>Ex: Compra de roupas</p>
            <div className="valueTypeContainer">
                <label>
                    Valor
                    <input type="number" name="valor" placeholder="    1                     R$" onChange={(event) => setNewValue(event.target.value)}/>
                </label>
                <label>
                    Tipo de valor
                    <select name="valueType" onClick={(event) => setNewType(event.target.value)}>
                        <option value="Entrada">Entrada</option>
                        <option value="Despesa">Saída</option>
                    </select>
                </label>
            </div>
            <button type="button" onClick={addNewTransacition}>Inserir valor</button>
        </form>
    );
}

export default Form;