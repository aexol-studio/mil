import React from 'react'

export const UsersList = (props) => {
  return (
    <div>
      <ul>
        <li>
          {props.name} ({props.age} Years old)
        </li>
      </ul>
    </div>
  )
}
