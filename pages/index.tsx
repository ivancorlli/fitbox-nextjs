import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userFound } from '../src/redux/slice/userReducer'
import HomeTemplate from '../src/templates/HomeTemplate'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(userFound())
  }, [])
  return <HomeTemplate />
}

export default Index
