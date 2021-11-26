import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

import {  Tr, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Axios from 'axios'

const Ler = ({ todo, edit, get }) => {
    

    const deletar = async () => {
        await Axios.delete(`http://localhost:3001/racao/delete/${todo._id}`).then(() => {
        get()
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
                <button type= 'button' onClick = {(event) => edit(event, todo)}><BiEditAlt/></button>
                <button type='button' onClick= {deletar}><BsTrash/></button>
            </Td>
        </Tr>
    )
}

export default Ler;

