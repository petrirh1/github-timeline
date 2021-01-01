import { useState } from 'react';
import { fetchData } from './api/index';
import { Header, Search, InfoPanel, Timeline, BackToTop } from './components';
import './App.css';

function App() {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [notFound, setNotFound] = useState(false);

	const getData = async user => {
		setIsLoading(true);

		try {
			const data = await fetchData(user);
			console.log('data', data);

			if (data === 'Not Found') {
				setNotFound(true);
			}

			setData(data);
		} catch (err) {
			setHasError(true);
		} finally {
			setIsLoading(false);
		}
	};

	const loadMore = async () => {
		setIsLoading(true);

		try {
			const user = data.repos[0].owner.login;
			const { page } = data.pagination.next;
			const fetchedData = await fetchData(user, page);

			setData({
				repos: [...data.repos, ...fetchedData.repos],
				pagination: { ...fetchedData.pagination }
			});

			setHasError(false);
		} catch (err) {
			setHasError(true);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='app__root'>
			<Header />
			<Search getData={getData} isLoading={isLoading} />
			<InfoPanel data={data.repos} />
			<Timeline
				data={data}
				loadMore={loadMore}
				isLoading={isLoading}
				hasError={hasError}
				notFound={notFound}
			/>
			<BackToTop visibilityHeight={4000} transition={0.35} />
		</div>
	);
}

export default App;
