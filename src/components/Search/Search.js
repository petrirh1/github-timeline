import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../';
import './Search.css';

const Search = ({ getData, isLoading }) => {
	const [value, setValue] = useState('');
	const [hasFocus, setHasFocus] = useState(false);
	const inputRef = useRef(null);

	const handleOnChange = e => {
		setValue(e.target.value);
	};

	const handleOnClick = () => {
		if (!value.length) return;

		setHasFocus(false);
		getData(value);
		setValue('');
	};

	const handleOnKeyUp = e => {
		if (e.key === 'Enter') {
			handleOnClick();
		}
	};

	useEffect(() => {
		const { current: input } = inputRef;
		hasFocus ? input.focus() : input.blur();
	}, [hasFocus]);

	return (
		<div className={'search__root'}>
			<input
				ref={inputRef}
				onFocus={() => setHasFocus(true)}
				value={value}
				onChange={handleOnChange}
				className={'search__input'}
				placeholder='Enter GitHub username'
				onKeyUp={handleOnKeyUp}
				type='text'></input>
			<Button
				fn={handleOnClick}
				text={'Generate'}
				isLoading={isLoading}
				cssClass={'search__input-btn'}
			/>
		</div>
	);
};

export default Search;

Search.prototypes = {
	getData: PropTypes.func,
	isLoading: PropTypes.bool
};
