import './App.css';
import React, { useState, useEffect, useDebugValue } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Axios from 'axios'
import { format } from 'date-fns'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

function initialState() {
  return {
    name: "",
    price: 0,
    quantity: 0
  }

}

function App() {


  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState(initialState());
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState(0);
  // const [quant, setQuant] = useState(0);


  useEffect(() => {
    axios.get('http://localhost:3001/racao/get')
      .then(res => {
        // console.log(res.data)
        setTodos(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    console.log(todos);
  }, [todos])


  const post = async () => {
    const valor = item;
    console.log(valor);
    await Axios.post('http://localhost:3001/racao/register', valor).then(() => {
      window.location.reload();
      console.log('Compra realizada')

    }, (err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <div className='inputs'>

        <h1>ZEUS</h1>

        <label> Marca da ração </label>
        <input type='text' name='Marca' required='true' placeholder='Digite o nome da ração' onChange={(event) => {
          setItem({ ...item, name: event.target.value })
        }} />

        <label> Preço da ração </label>
        <input type='number' name='Preço' required='true' placeholder='Digite o preço da ração' onChange={(event) => {
          setItem({ ...item, price: event.target.value })
        }} />

        <label className='quantidade'> Quantidade de pacotes </label>
        <input type='number' name='Quantidade' required='true' placeholder='Digite a quantidade' onChange={(event) => {
          setItem({ ...item, quantity: event.target.value })
        }} />

        <button className='botaoComprar' onClick={post}>Comprar</button>

      </div>
      <div className='tabela'>
        <Table className='tabela'>
          <Thead >
            <Tr className='cabecalho'>
              <Th>Marca da ração</Th>
              <Th>Preço da ração</Th>
              <Th>Quantidade de pacotes</Th>
              <Th>Data</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos.map(todo => {
              return (
                <Tr key={todo._id}>
                  <Td>{todo.name}</Td>
                  <Td>{todo.price}</Td>
                  <Td>{todo.quantity}</Td>
                  <Td>{todo?.createdAt?.substring(0, 10)}</Td>
                </Tr>)
            })}
          </Tbody>
        </Table>
      </div>
      <ToastContainer />
    </div>
  );
}



export default App;
