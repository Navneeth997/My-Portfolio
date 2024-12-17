import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className='header flex flex-col' id = "header">
        <Navbar />

        <div className='container flex'>
            <div className='header-content'>
                <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>Frontend Dev, Backend Dev, Software Tester</h2>
                <h1 className='text-white fw-6 header-title'>Hello, I'm a<span className='text-brown'> Full Stack Developer</span> living in Bangalore.</h1>
                <div className='btn-groups flex'>
                  <a  className='btn-item bg-brown fw-4 ls-2' href="https://github.com/Navneeth997">See Works</a>
                  <a  className='btn-item bg-dark fw-4 ls-2' href="mailto:navneid997@gmail.com">Contact mail</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header