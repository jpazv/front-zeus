import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const Editar = () => {
    return (
        <Tr>
            <Td>
                <input
                    type='string'
                    required='required'
                    placeholder='Digite um novo nome...'
                    name='namee'>
                </input>
            </Td>
            <Td>
                <input
                    type='number'
                    required='required'
                    placeholder='Digite um novo preço...'
                    name='price'>
                </input>
            </Td>
            <Td>
                <input
                    type='number'
                    required='required'
                    placeholder='Digite uma nova quantidade...'
                    name='price'>
                </input>
            </Td>
            <Td>
                <input
                    type='number'
                    required='required'
                    placeholder='Digite uma nova data...'
                    name='price'>
                </input>
            </Td>
        </Tr>
    )
}

export default Editar