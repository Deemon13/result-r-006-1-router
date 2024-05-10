import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { TodoChanger } from '../../components';

import styles from './todoItem.module.css';

import { URL } from '../../constants';

import { useDeleteTodo, useChangeTodo } from '../../hooks';

// const LOADING_TIMEOUT = 5000;

export const TodoItem = () => {
	const [todo, setTodo] = useState(null);
	const [isChanging, setIsChanging] = useState(false);
	const [idForChange, setIdForChange] = useState(null);

	const params = useParams();
	const navigate = useNavigate();

	const { submitChanges } = useChangeTodo(idForChange, setIsChanging);
	const { deleteTodo } = useDeleteTodo();

	useEffect(() => {
		// let isLoadingTimeout = false;
		// let isTodoLoaded = false;

		// setTimeout(() => {
		// 	isLoadingTimeout = true;

		// 	if (!isTodoLoaded) {
		// 		navigate('/todo-load-error');
		// 	}
		// }, LOADING_TIMEOUT);

		fetch(URL)
			.then(loadedData => loadedData.json())
			.then(loadedTodos => {
				// isTodoLoaded = true;
				const item = loadedTodos.find(el => el.id === Number(params.id));

				// if (!isLoadingTimeout) {
				// 	if (!loadedTodos) {
				// 		navigate('/todo-not-exist');
				// 		return;
				// 	}

				setTodo(item);
				setIdForChange(params.id);
				// }
			});
	}, [params.id, isChanging, navigate]);

	const requestTochangeTodo = () => {
		setIsChanging(true);
	};

	return (
		<div className={styles.todo__container}>
			<h2>Card of ToDo</h2>
			<p>
				UserId:
				{todo ? ` ${todo.userId}` : ' Loading...'}
			</p>
			<p>
				Title:
				{todo ? ` ${todo.title}` : ' Loading...'}
			</p>
			<p>
				Completed:
				{todo ? ` ${todo.completed}` : ' Loading...'}
			</p>
			<div>
				<button
					className={styles.todo__BTN}
					type="button"
					onClick={requestTochangeTodo}
				>
					Изменить
				</button>
				<button
					className={styles.todo__BTN}
					type="button"
					onClick={() => deleteTodo(params.id)}
				>
					Удалить
				</button>
			</div>
			<p>
				<Link onClick={() => navigate(-1)}>Back</Link>
			</p>
			<p>
				<Link to="/">Main Page</Link>
			</p>
			ToDoChanger
			{isChanging && <TodoChanger onSubmit={submitChanges} title="Меняем!" />}
		</div>
	);
};
