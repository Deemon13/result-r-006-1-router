// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL } from '../constants';

// export const useDeleteTodo = (refreshTodos, setFilter) => {
export const useDeleteTodo = () => {
	// console.log('удаляем');
	// const [isDeleting, setIsDeleting] = useState(false);

	const navigate = useNavigate();

	const deleteTodo = id => {
		// setIsDeleting(true);

		fetch(URL + `/${id}`, {
			method: 'DELETE',
		})
			.then(rawResponse => rawResponse.json())
			// .then(() => {
			// refreshTodos();
			// setFilter('');
			// 	navigate('/');
			// })
			.finally(() => {
				navigate('/');
				// setIsDeleting(false);
			});
	};

	return {
		// isDeleting,
		deleteTodo,
	};
};
