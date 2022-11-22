import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <>
        <span>
            
            <input class="no-outline2" type="search2" placeholder='Search here' value={filter || ''} onChange = {e=> setFilter(e.target.value)} />
        </span>
    </>
  )
}
