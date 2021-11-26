import React, {useState} from 'react'
import { Tr,  Td } from 'react-super-responsive-table'
import { AiOutlineSave } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Axios from 'axios'




const Editar = ( {editData, get, cancelar}) => {
    
    const [editar, setEditar] = useState(editData)


    const patch = async (event) => {
        event.preventDefault();
        await Axios.patch(`http://localhost:3001/racao/change/${editData._id}`, editar).then(() => {
            get()
            cancelar()
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
              {editData?.createdAt?.substring(0, 10)}
            </Td>
            <Td>
                <button onClick={(e)=>patch(e)}><AiOutlineSave/></button>
                <button onClick ={cancelar}> <ImCancelCircle/></button>
            </Td>
        </Tr>
    )
}

export default Editar

