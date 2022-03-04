import React from 'react'
import Followers from './Followers'
import Card from './Card'

export default function User() {
  return (
    <div className="container flex items-center justify-between m-auto content relative">
<Card />
<Followers />
    </div>
  )
}
