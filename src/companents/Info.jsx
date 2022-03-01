import React, {useContext} from 'react'
import {GithubContext} from '../context/Context'

export default function Info() {
    const data = useContext( GithubContext)
  return (
    <div>Info :{data}</div>
  )
}
