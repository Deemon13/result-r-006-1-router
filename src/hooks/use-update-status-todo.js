import { URL } from '../constants';

export const useUpdateStatusTodo = (id, isComplete, setIsComplete) => {
	const updateStatus = () => {
		fetch(URL + `/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				completed: !isComplete,
			}),
		})
			.then(rawResponse => rawResponse.json())
			.then(() => {
				setIsComplete(!isComplete);
			});
	};

	return {
		updateStatus,
	};
};
