import React from 'react'
import { GiDogBowl } from "react-icons/gi";
import { ImPriceTags } from "react-icons/im";
import { BsFillBagXFill } from "react-icons/bs";
import { GiArchiveRegister } from "react-icons/gi"
import '../App.css';


function Card({setItem, item, post, modal, setModal}) {
    return (<div>
        <div className={modal?'card visible':'card'} >
            <label><GiDogBowl style={{marginRight: 10}}/> Marca da ração  </label>
            <input type='text' name='Marca' required='true' placeholder='Digite o nome da ração' onChange={(event) => {
                setItem({ ...item, name: event.target.value })
            }} />

            <label> <ImPriceTags style={{marginRight: 10}}/> Preço da ração </label>
            <input type='number' name='Preço' required='true' placeholder='Digite o preço da ração' onChange={(event) => {
                setItem({ ...item, price: event.target.value })
            }} />

            <label className='quantidade'> <BsFillBagXFill style={{marginRight: 10}}/>Quantidade de pacotes </label>
            <input type='number' name='Quantidade' required='true' placeholder='Digite a quantidade' onChange={(event) => {
                setItem({ ...item, quantity: event.target.value })
            }}
             />
             <button className='botaoRegistrar' onClick={post}> <GiArchiveRegister style={{marginRight: 10}}/> Registrar</button>
        </div>
        <div onClick={()=>setModal(false)}className={modal?'background visible':'background'}></div>
        </div>
    )
}

export default Card
