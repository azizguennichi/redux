import React from 'react'
import { useSelector } from 'react-redux'

export default function Test() {
    const state = useSelector((state) => state.user.value);
  return (
    <div>ici c'est le component test :{state.email}</div>
  )
}
