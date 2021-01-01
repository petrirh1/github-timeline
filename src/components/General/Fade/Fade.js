import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Fade = ({ show, children, transition = 0.5 }) => {
	const [shouldRender, setRender] = useState(show);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const onAnimationEnd = () => {
		if (!show) setRender(false);
	};

	return (
		shouldRender && (
			<div
				style={{ animation: `${show ? 'fade-in' : 'fade-out'} ${transition}s` }}
				onAnimationEnd={onAnimationEnd}>
				{children}
			</div>
		)
	);
};

export default Fade;

Fade.propTypes = {
	show: PropTypes.bool,
	children: PropTypes.object,
	transition: PropTypes.number
};
