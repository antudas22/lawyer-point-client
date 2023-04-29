import React from 'react';
import { Link } from 'react-router-dom';
import { GoLaw } from "react-icons/go";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content mt-10">
  <div>
  <Link to='/' className="flex items-end uppercase text-2xl font-serif text-gray-500">Lawyer<span className='text-5xl text-primary'><GoLaw /></span>Point</Link>
    <p>Lawyer Point Ltd.<br/>Providing services since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  <div>
        <p>Copyright © 2023 - All right reserved</p>
  </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;