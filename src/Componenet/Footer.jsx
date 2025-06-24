import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='flex flex-col gap-4 w-full h-auto items-center justify-center'>
      <div className='flex flex-col gap-4 md:gap-12 md:flex-row items-center justify-center'>
        <div>
          <Link to='/services'>Services</Link>

        </div>
        <div>
          <Link to='/projects'>Projects</Link>
        </div>

        <div className='flex flex-col items-start justify-center'>
          <a href="https://facebook.com/">Facebook</a>
          <a href="https://instagram.com/">Instagram</a>
          <a href="https://t.me/@disibin">Telegram</a>
          <a href="https://wa.me/qr/YE7Q5ROGHJ54I1">WhatsApp</a>
        </div>
      </div>

      <p>All rights are reserved by <a href="" className='text-red-600'>TanvirAhmmed</a> | {year}</p>
    </footer>
  )
}

export default Footer
