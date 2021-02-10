import React from 'react';
import TimelineItem from './TimelineItem/TimelineItem';
import PropTypes from 'prop-types';
import { Hint, Error, NotFound } from '../States';
import { Button } from '../';
import './Timeline.css';

const Timeline = ({ data, loadMore, isLoading, hasError, notFound }) => {
	const { repos, pagination } = data;

	return (
		<div className={'timeline__root'}>
			{repos?.map(repo => <TimelineItem key={repo.id} data={repo} />)}
			{pagination?.next && (
				<div className={'loadmore__root'}>
					<Button fn={loadMore} text={'Load More'} isLoading={isLoading} hasError={hasError} />
				</div>
			)}
			{!repos && !hasError && !notFound && <Hint />}
			{!repos && hasError && <Error />}
			{!repos && notFound && !hasError && <NotFound />}
		</div>
	);
};

export default Timeline;

Timeline.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	loadMore: PropTypes.func,
	isLoading: PropTypes.bool,
	hasError: PropTypes.bool,
	notFound: PropTypes.bool
};
