import React, { useState } from 'react';
import axios from 'axios';

function Form5() {

    const [campos, setCampos] = useState({
        txtNome: '',
        txtTelefone: '',
        txtEndereco: ''
    });

    const [ret, setRet] = useState('');

    function handleInputChange(event) {
        setCampos({
            ...campos,
            [event.target.name]: event.target.value
        });
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:5000/api/say_name5', campos, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            setRet(response.data);
        });
    }

    const isRetEmpty = (obj) => Object.keys(obj).length === 0;

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastro</h2>
                    </legend>

                    <div>
                        <label>Nome:
                            <input type="text" name="txtNome" id="txtNome" value={campos.txtNome} onChange={handleInputChange} />
                        </label>
                    </div>

                    <div>
                        <label>Telefone:
                            <input type="text" name="txtTelefone" id="txtTelefone" value={campos.txtTelefone} onChange={handleInputChange} />
                        </label>
                    </div>

                    <div>
                        <label>Endereço:
                            <input type="text" name="txtEndereco" id="txtEndereco" value={campos.txtEndereco} onChange={handleInputChange} />
                        </label>
                    </div>

                    <input type="submit" value="Salvar" />
                    {!isRetEmpty(ret) && (
                        <div>
                            <p>Retornou:</p>
                            <p>Nome: {ret.first_name}</p>
                            <p>Telefone: {ret.phone}</p>
                            <p>Endereco: {ret.address}</p>
                        </div>
                    )}
                </fieldset>
            </form>
        </div>
    )
}

export default Form5;
