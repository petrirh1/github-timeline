import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill'; // for browsers running on iOS
import { Fade } from '../';
import './BackToTop.css';

smoothscroll.polyfill();

const BackToTop = ({ visibilityHeight = 500, transition }) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
		// eslint-disable-next-line
	}, []);

	const handleScroll = () => {
		const posY = window.pageYOffset;
		posY >= visibilityHeight ? setVisible(true) : setVisible(false);
	};

	const handleClick = () => {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	};

	return (
		<Fade show={visible} transition={transition}>
			<div className='backtotop__root' onClick={handleClick}>
				<i className='fas fa-arrow-up backtotop__icon'></i>
			</div>
		</Fade>
	);
};

export default BackToTop;

BackToTop.propTypes = {
	visibilityHeight: PropTypes.number,
	transition: PropTypes.number
};
