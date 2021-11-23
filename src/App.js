import './App.css';
import React, { useState, useEffect, Fragment } from 'react';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import Editar from '../src/componentes/Editar.js'
import Ler from '../src/componentes/Ler.js'


function initialState() {
  return {
    name: "",
    price: 0,
    quantity: 0,
  }

}



function App() {

  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState(initialState());
  const [editItem, setEditItem] = useState(null)
  const [editData, setEditData] = useState(initialState())
  const [total, setTotal] = useState(0)

  const get = () => {

    axios.get('http://localhost:3001/racao/get')
      .then(res => {
        setTodos(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    get()
  }, [])
  
  useEffect(()=> {
    if(total != 0) {
      alert("Você já consumiu " + total)
    }
  }, [total])

  const post = async () => {
    const valor = item;
    get()
    await Axios.post('http://localhost:3001/racao/register', valor).then(() => {
      window.location.reload();
      alert('Compra realizada')

    }, (err) => {
      console.log(err)
    })
  }

  const montante = async () => {
    await Axios.get('http://localhost:3001/racao/'). then((res)=> {
      setTotal(res.data)

    })
  }

  const deleteAll = async () => {
    await Axios.delete('http://localhost:3001/racao/delete').then(() => {
      window.location.reload();
      alert('Tabela resetada')

    }, (err) => {
      console.log(err)
    })
  }

  const edit = (event, todo) => {
    event.preventDefault();
    setEditItem(todo._id)

    const formatoValores = {
      _id: todo._id,
      name: todo.name,
      price: todo.price,
      quantity: todo.quantity,
      createdAt: todo.createdAt
    }

    setEditData(formatoValores);

  }

  const cancelar = () => {
    return setEditItem(null)
  }




  return (
    <div className="App">
      <div className='inputs'>
        <div>
          <h1>ZEUS</h1>
          <image className='logo' src='../assets/logo.png' />
        </div>

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
        <div>
          <div>
            <button className='botaoResetar' onClick={deleteAll} >Resetar</button>
            <button className='botaoMontante' onClick={montante}>Montante</button>
          </div>
        </div>

      </div>
      <div>
        <form>
          <Table>
            <Thead >
              <Tr>
                <Th>Marca da ração</Th>
                <Th>Preço da ração</Th>
                <Th>Quantidade de pacotes</Th>
                <Th>Data</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>

            <Tbody>
              {todos.map(todo => {
                return (
                  <Fragment>
                    {editItem === todo._id ? (
                      <Editar editData={editData} cancelar={cancelar} />
                    ) : (
                      <Ler
                        todo={todo}
                        edit={edit} />
                    )}
                  </Fragment>
                )
              })}
            </Tbody>
          </Table>
        </form>
      </div>
    </div>
  );
}



export default App;
