import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const Loader = ({ isLoading }) => {
	return isLoading ? (
		<div className='loader__root'>
			<div className='small progress'>
				<div></div>
			</div>
		</div>
	) : null;
};

export default Loader;

Loader.prototypes = {
	isLoading: PropTypes.bool
};
