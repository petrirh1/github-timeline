import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className={'header__root'}>
			<h1 className={'header__title'}>
				<span className={'thin'}>GitHub </span>
				Timeline
			</h1>
		</div>
	);
};

export default Header;
