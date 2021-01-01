import React from 'react';
import image from '../../../assets/hint.svg';
import '../States.css';

const Hint = () => {
	return (
		<div className='state__root'>
			<img className={'state__illustration'} alt='' src={image} title={'hint-illustration'}></img>
			<h2 className={'state__title'}>Activity history visualized</h2>
			<h3 className={'state__subtitle'}>
				GitHub Timeline creates a visual history of users GitHub activity
			</h3>
		</div>
	);
};

export default Hint;
