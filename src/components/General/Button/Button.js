import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../../States';
import './Button.css';

const Button = ({ isLoading, hasError, text, fn, cssClass }) => {
	return (
		<div className='button__root'>
			<button disabled={isLoading ? true : false} onClick={fn} className={cssClass}>
				<Loader isLoading={isLoading} />
				{text}
			</button>
			{hasError && <p className={'button__error'}>{"Something didn't quite work"}</p>}
		</div>
	);
};

export default Button;

Button.propTypes = {
	isLoading: PropTypes.bool,
	hasError: PropTypes.bool,
	text: PropTypes.string,
	fn: PropTypes.func,
	cssClass: PropTypes.string
};
