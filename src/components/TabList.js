import React from 'react'

export const TabList = ({time, id, active, setSelected}) => {
  return (
    <li className={active ? `active` : ``} onClick={() => setSelected(id)}>
       {time}
    </li>
  )
}
