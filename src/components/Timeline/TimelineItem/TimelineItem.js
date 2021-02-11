import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import './TimelineItem.css';
const DATE_FORMAT = 'DD-MM-YYYY';

const TimelineItem = ({ data }) => {
	const { name, description, created_at, fork, html_url, language } = data;

	const formatDate = (date, format) => {
		return dayjs(date).format(format);
	};

	const getLabel = date => {
		return dayjs(date).format('YYYY');
	};

	const getIcon = isFork => {
		if (isFork) {
			return <i className='fas fa-code-branch timelineitem__dot-icon'></i>;
		}
		return <i className='fas fa-folder timelineitem__dot-icon'></i>;
	};

	return (
		<div className='timelineitem__root'>
			<div className='timelineitem__separator'>
				<div title={fork ? 'Fork' : 'Repository'} className='timelineitem__dot'>
					<h2 className={'timelineitem__label'}>{getLabel(created_at)}</h2>
					{getIcon(fork)}
				</div>
				<div className='timelineitem__connector'></div>
			</div>
			<div className='timelineitem__content'>
				<a
					className='timelineitem__title'
					target='_blank'
					rel='noreferrer noopener'
					href={html_url}>
					{name}
				</a>
				<h2 className='timelineitem__description'>{description}</h2>
				<div className='timelineitem__info'>
					<p title={DATE_FORMAT} className='timelineitem__date'>
						{formatDate(created_at, DATE_FORMAT)}
					</p>
					<p title={'Primary language'} className='timelineitem__language'>
						{language}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TimelineItem;

TimelineItem.propTypes = {
	data: PropTypes.object
};