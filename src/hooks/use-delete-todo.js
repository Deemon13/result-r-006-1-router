import { useNavigate } from 'react-router-dom';

import { URL } from '../constants';

export const useDeleteTodo = () => {
	const navigate = useNavigate();

	const deleteTodo = id => {
		fetch(URL + `/${id}`, {
			method: 'DELETE',
		})
			.then(rawResponse => rawResponse.json())
			.finally(() => {
				navigate('/');
			});
	};

	return {
		deleteTodo,
	};
};
