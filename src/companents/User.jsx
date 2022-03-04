import React from 'react'
import Followers from './Followers'
import Card from './Card'

export default function User() {
  return (
    <div className="container flex items-center justify-between m-auto px-20 relative mt-10">
<Card />
<Followers />
    </div>
  )
}
