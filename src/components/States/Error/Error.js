import React from 'react';
import image from '../../../assets/error.svg';
import '../States.css';

const Error = () => {
	return (
		<div className='state__root'>
			<img className={'state__illustration'} alt='' src={image} title={'hint-illustration'}></img>
			<h2 className={'state__title'}>Something unexpected happened!</h2>
			<h3 className={'state__subtitle'}>Please try again later</h3>
		</div>
	);
};

export default Error;
