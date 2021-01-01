import React from 'react';
import TimelineItem from './TimelineItem/TimelineItem';
import PropTypes from 'prop-types';
import { Hint, Error, NotFound } from '../States';
import { Button } from '../';
import './Timeline.css';

const Timeline = ({ data, user, loadMore, isLoading, hasError, notFound }) => {
	return (
		<div className={'timeline__root'}>
			{data?.repos?.map(repo => <TimelineItem key={repo.id} data={repo} />)}
			{data?.pagination?.next && (
				<div className={'loadmore__root'}>
					<Button fn={loadMore} text={'Load More'} isLoading={isLoading} hasError={hasError} />
				</div>
			)}
			{!data.repos && !hasError && !notFound && <Hint />}
			{!data.repos && hasError && <Error />}
			{!data.repos && notFound && !hasError && <NotFound user={user} />}
		</div>
	);
};

export default Timeline;

Timeline.prototypes = {
	data: PropTypes.array,
	loadMore: PropTypes.func,
	isLoading: PropTypes.bool,
	hasError: PropTypes.bool,
	notFound: PropTypes.bool
};
