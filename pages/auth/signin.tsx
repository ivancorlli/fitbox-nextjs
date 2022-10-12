import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import SigninTemplate from '../../src/templates/auth/SigninTemplate'
import { login, userFound } from '../../src/redux/slice/userReducer'

const initialForm = {
  username: '',
  password: ''
}

const signin = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialForm)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    dispatch(login({ username: form.username }))
    dispatch(userFound())
  }
  return (
    <SigninTemplate handleChange={handleChange} handleSubmit={handleSubmit} />
  )
}

export default signin
