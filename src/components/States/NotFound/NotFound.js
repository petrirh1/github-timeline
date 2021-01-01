import React from 'react';
import image from '../../../assets/not-found.svg';
import '../States.css';

const NotFound = () => {
	return (
		<div className='state__root'>
			<img className={'state__illustration'} alt='' src={image} title={'hint-illustration'}></img>
			<h2 className={'state__title'}>No user found</h2>
			<h3 className={'state__subtitle'}>..maybe you mistyped it?</h3>
		</div>
	);
};

export default NotFound;
