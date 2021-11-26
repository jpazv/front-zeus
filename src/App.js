import './App.css';
import React, { useState, useEffect, Fragment } from 'react';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import logo from './logo.png'
import Editar from '../src/componentes/Editar.js'
import Ler from '../src/componentes/Ler.js'
import Card from './componentes/Card'
import { RiMoneyDollarCircleFill } from "react-icons/ri"


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
  const [modal, setModal] = useState(false)

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

  useEffect(() => {
    if (total !== 0) {
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
    setTotal(0)
    await Axios.get('http://localhost:3001/racao/').then((res) => {
      setTotal(res.data)

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
      setEditItem(null)
      get()
  
  }




  return (
    <div className="App">
      <div className="add-button" onClick={()=>setModal(!modal)}>+</div>
      <button className='botaoMontante' onClick={montante}> <RiMoneyDollarCircleFill/>Montante</button>
      <div className='inputs'>
        <div className='nomeLoja'>
          <img src={logo} width= "120" height="120"/>
          <label style= {{fontSize: 50}}>Vortex Petshop</label>
        </div>
        <Card id='card' item ={item} setItem= {setItem} post={post} modal={modal} setModal={setModal}/>
        

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
                      <Editar editData={editData} cancelar={cancelar} get={get}/>
                    ) : (
                      <Ler
                        get={get}
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
