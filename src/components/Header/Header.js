import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header className={'header__root'}>
			<h1 className={'header__title'}>
				<span className={'thin'}>GitHub </span>
				Timeline
			</h1>
		</header>
	);
};

export default Header;
