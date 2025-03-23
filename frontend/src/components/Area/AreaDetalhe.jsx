import React from 'react'

export default function AreaDetalhe({area}) {
    const { nome,id } = area;
  return (
    <>
      <option value={id}>
              {nome}
            </option>
         
    </>
  )
}
