import React from 'react'
import Navbar from '../components/Navbar/Navbar'

import FormularioArea from '../components/Area/FormularioArea'

export default function Area({onLogout}) {

    return (
    <>
       <Navbar onClick={onLogout}/>
  <FormularioArea/>
    </>
  )
}
