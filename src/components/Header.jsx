import React from 'react'
import { Link } from 'react-router-dom'
export default function Header(){
return (
<div className="header">
<h2>MediConnect</h2>
<nav>
<Link to="/login">Login</Link>
</nav>
</div>
)
}