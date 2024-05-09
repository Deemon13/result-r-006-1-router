import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './todoItem.module.css';

import { URL } from '../../constants';

export const TodoItem = () => {
	const [todo, setTodo] = useState(null);

	const params = useParams();

	useEffect(() => {
		fetch(URL)
			.then(loadedData => loadedData.json())
			.then(loadedTodos => {
				const item = loadedTodos.find(el => el.id === Number(params.id));
				setTodo(item);
			});
	}, [params.id]);

	return (
		<div className={styles.todo__container}>
			Card of ToDo
			{todo && todo.title}
			<Link to="/">Main Page</Link>
		</div>
	);
};
