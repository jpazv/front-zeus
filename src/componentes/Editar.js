import React, {useState} from 'react'
import { Tr,  Td } from 'react-super-responsive-table'
import Axios from 'axios'



function initialState() {
    return {
      name: 'Ração',
      price: 0,
      quantity: 0,
    }
  
  }


const Editar = ( {editData}, cancelar) => {
    
    const [editar, setEditar] = useState(initialState())


    const patch = async () => {
        await Axios.patch(`http://localhost:3001/racao/change/${editData._id}`, editar).then(() => {
        //window.location.reload()
        //alert("Deu certo")
        }, (err) => {
          console.log(err)
        })
      }

    return (
        <Tr>
            <Td>
                <input
                    type='string'
                    required='required'
                    placeholder='Digite um novo nome...'
                    name='name'
                    defaultValue={editData.name}
                    onChange={(event) => {
                        setEditar({ ...editar, name: event.target.value })
                      }}
                      >
                </input>
            </Td>
            <Td>
                <input
                    type='number'
                    required='required'
                    placeholder='Digite um novo preço...'
                    name='price'
                    defaultValue={editData.price}
                    onChange={(event) => {
                        setEditar({ ...editar, price: event.target.value })
                      }}
                      >
                </input>
            </Td>
            <Td>
                <input
                    type='number'
                    required='required'
                    placeholder='Digite uma nova quantidade...'
                    name='quantity'
                    defaultValue={editData.quantity}
                    onChange={(event) => {
                        setEditar({ ...editar, quantity: event.target.value })
                      }}>
                </input>
            </Td>
            <Td>
=               {editData?.createdAt?.substring(0, 10)}
            </Td>
            <Td>
                <button onClick={patch}>Salvar</button>
                <button onClick ={cancelar}> Cancelar</button>
            </Td>
        </Tr>
    )
}

export default Editar

