import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { TodoChanger } from '../../components';

import styles from './todoItem.module.css';

import { URL } from '../../constants';

import {
	// 	useGetTodos,
	// 	useCreateTodo,
	useDeleteTodo,
	useChangeTodo,
	// 	useSort,
	// 	useFilter,
} from '../../hooks';

export const TodoItem = () => {
	const [todo, setTodo] = useState(null);
	const [isChanging, setIsChanging] = useState(false);
	const [idForChange, setIdForChange] = useState(null);

	const params = useParams();
	const navigate = useNavigate();

	const { submitChanges } = useChangeTodo(
		idForChange,
		// refreshTodos,
		// setFilter,
		setIsChanging,
	);
	const { deleteTodo } = useDeleteTodo();

	// let newId = params.id;
	// setIdForChange(newId);

	useEffect(() => {
		fetch(URL)
			.then(loadedData => loadedData.json())
			.then(loadedTodos => {
				const item = loadedTodos.find(el => el.id === Number(params.id));
				setTodo(item);
				setIdForChange(params.id);
			});
	}, [params.id, isChanging]);

	const requestTochangeTodo = () => {
		// console.log('id: ', id);
		// newId = id;
		// console.log('newId: ', newId);
		// setIdForChange(prevState => prevState + Number(id));
		setIsChanging(true);
		// console.log('idForChange: ', idForChange);
		// console.log('isChanging: ', isChanging);
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
