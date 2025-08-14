import React from 'react'
import './Style.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer