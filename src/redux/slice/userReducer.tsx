import { createSlice } from '@reduxjs/toolkit'
import User from '../../models/User'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: User = {
  id: 0,
  username: '',
  email: '',
  emailVerified: '',
  status: ''
}

interface signUp {
  username: string
}

type sign = PayloadAction<signUp>

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: sign) => {
      const username = action.payload.username
      const userDb = localStorage.getItem('UserList')
      if (userDb !== null || userDb !== '') {
        const users: User[] = JSON.parse(userDb!)
        const userFound = users.filter((user) => user.username === username)
        if (userFound) {
          localStorage.setItem('User', JSON.stringify(userFound[0]))
        }
      }
    },
    signup: (state, action: sign) => {
      const id = Math.random()
      const username = action.payload.username

      const userDb = localStorage.getItem('UserList')
      const newUser = {
        id,
        username
      }
      if (userDb !== null) {
        let users = JSON.parse(userDb!)
        users = [{ ...users }, newUser]

        localStorage.setItem('UserList', JSON.stringify(users))
      } else {
        localStorage.setItem('UserList', JSON.stringify(newUser))
      }
    },
    userFound: (state) => {
      const userFound = localStorage.getItem('User')
      if (userFound !== null && userFound !== undefined) {
        const user: User = JSON.parse(userFound!)
        state.id = user.id
        state.email = user.email
        state.username = user.username
        state.emailVerified = user.emailVerified
        state.status = user.status
      }
    }
  }
})

export const { login, signup, userFound } = userSlice.actions

export default userSlice
