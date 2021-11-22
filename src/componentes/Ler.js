import React from "react";

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const Ler = ({ todo, edit }) => {
    return (
        <Tr>
            <Td>{todo.name}</Td>
            <Td>R${todo.price},00</Td>
            <Td>{todo.quantity}</Td>
            <Td>{todo?.createdAt?.substring(0, 10)}</Td>
            <Td>
                <button type= 'button' onClick = {(event) => edit(event, todo)}>Editar</button>
            </Td>
        </Tr>
    )
}

export default Ler;

