import React from 'react'
import { GiDogBowl } from "react-icons/gi";
import { ImPriceTags } from "react-icons/im";
import { BsFillBagXFill } from "react-icons/bs";



function Card({setItem, item}) {
    return (
        <div style ={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', marginBottom:20, marginTop: 20, opacity: 0.9, paddingBottom: 10, paddingTop: 10, borderRadius:10}}>
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
            }} />
        </div>
    )
}

export default Card
