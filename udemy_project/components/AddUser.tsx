import React from 'react'
import Card from './Card'
import { useState } from 'react'
import { UsersList } from 'components'
export const AddUser = () => {
  const [enterUserName, setEnterUserName] = useState('')
  const [enterUserAge, setEnterUserAge] = useState('')
  const AddUserHandler = (event: any) => {
    event.preventDefault()
    if (enterUserName.trim().length === 0 && enterUserAge.trim().length === 0) {
      return
    }
    if (+enterUserAge < 1) {
      return
    }
    console.log(enterUserName.trim(), enterUserAge.trim())
    setEnterUserAge('')
    setEnterUserName('')
  }

  const userNameChangeHandler = (event: any) => {
    setEnterUserName(event.target.value)
  }
  const UserAgeChangeHandler = (event: any) => {
    setEnterUserAge(event.target.value)
  }
  return (
    <div>
      <form onSubmit={AddUserHandler}>
        <label className="label">Username</label>

        <input
          id="username"
          type="text"
          value={enterUserName}
          onChange={userNameChangeHandler}
          placeholder="userName"
        />

        <label className="label">Age (Years)</label>

        <input
          id="age"
          type="number"
          value={enterUserAge}
          onChange={UserAgeChangeHandler}
          placeholder="userAge"
        />

        <button>Add User</button>
      </form>
      <UsersList name={enterUserName} age={enterUserAge} />
    </div>
  )
}
