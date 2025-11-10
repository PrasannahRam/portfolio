import React from 'react'
import './Style.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ramesh Prasannah. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer