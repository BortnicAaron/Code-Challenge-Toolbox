import React, {useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addText } from '../Redux/action.jsx'
import Cards from './Cards/Card.jsx'
import Nav from './Nav/Nav.jsx'

export default function Home () {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.results);

  const onSubmit = (text) => {
    if(text!==''){
      dispatch(addText(text))
    }else{
      alert("Ingrese un texto valido")
    }
  }

  return (
    <div className='bg-secondary' style={{ minHeight: '100vh' }}>
      <div className='d-grid gap-4'>
        <Nav onSubmit={onSubmit}/>
       {results.length>0 && <Cards textSumbit={results}/>}
       </div>    
    </div>
  )
}

