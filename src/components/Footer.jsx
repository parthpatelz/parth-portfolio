	import React from 'react';
	import { FaGithub, FaTwitter } from 'react-icons/fa';
	import { AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';
	import { FiMail } from 'react-icons/fi';
	import './Footer.css'; 

	const Footer = () => {
		const year = new Date().getFullYear();
	  
		return (
		  <div className='bg-slate-900 p-6' style={{ cursor: 'default' }}>
			<div className='flex flex-col sm:flex-row justify-between items-center gap-4 max-w-6xl mx-auto'>
			  <p className='text-slate-400 text-sm font-light order-last sm:order-first'>
				© {year} Parth Patel. All rights reserved.
			  </p>
			  
			  <ul className="social-icons">
				<li>
				  <a href="mailto:pmp3820@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
					<FiMail />
				  </a>
				</li>
				<li>
				  <a href="https://twitter.com/parthpatelz" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
					<FaTwitter />
				  </a>
				</li>
				<li>
				  <a href="https://www.linkedin.com/in/parthpatelz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
					<AiFillLinkedin />
				  </a>
				</li>
				<li>
				  <a href="https://github.com/parthpatelz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<FaGithub />
				  </a>
				</li>
				<li>
				  <a href="https://leetcode.com/parthpatelz/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
					<svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
					  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038L3.071 10.047c-.786.786-1.167 1.804-1.167 2.856s.382 2.07 1.167 2.857l5.462 5.453c.786.786 1.804 1.167 2.856 1.167s2.07-.382 2.857-1.167l2.436-2.429c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.694 12c0 1.053-.382 2.07-1.167 2.857l-2.393 2.389c-.514.515-1.365.497-1.9-.038-.535-.536-.553-1.387-.039-1.901l2.609-2.637c.467-.467.702-1.15.702-1.863s-.235-1.357-.702-1.824l-2.609-2.636c-.515-.515-1.366-.497-1.901.038-.535.536-.552 1.387-.038 1.901l2.393 2.389c.786.786 1.167 1.804 1.167 2.857z"/>
					</svg>
				  </a>
				</li>
			  </ul>
			</div>
		  </div>
		);
	  };
	export default Footer;