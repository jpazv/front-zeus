import React from "react";

import {  Tr, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Axios from 'axios'

const Ler = ({ todo, edit }) => {


    const deletar = async () => {
        await Axios.delete(`http://localhost:3001/racao/delete/${todo._id}`).then(() => {
        window.location.reload()
        }, (err) => {
          console.log(err)
        })
      }
    return (
        <Tr>
            <Td>{todo.name}</Td>
            <Td>R${todo.price},00</Td>
            <Td>{todo.quantity}</Td>
            <Td>{todo?.createdAt?.substring(0, 10)}</Td>
            <Td>
                <button type= 'button' onClick = {(event) => edit(event, todo)}>Editar</button>
                <button type='button' onClick= {deletar}>Apagar</button>
            </Td>
        </Tr>
    )
}

export default Ler;

