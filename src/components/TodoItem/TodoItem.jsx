import { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

import { TodoChanger } from '../../components';

import styles from './todoItem.module.css';

import { URL } from '../../constants';

import { useDeleteTodo, useChangeTodo, useUpdateStatusTodo } from '../../hooks';

const LOADING_TIMEOUT = 5000;

export const TodoItem = () => {
	const [todo, setTodo] = useState(null);
	const [isChanging, setIsChanging] = useState(false);
	const [isComplete, setIsComplete] = useState(false);
	const [idForChange, setIdForChange] = useState(null);

	const params = useParams();
	const navigate = useNavigate();

	const { submitChanges } = useChangeTodo(idForChange, setIsChanging);
	const { deleteTodo } = useDeleteTodo();
	const { updateStatus } = useUpdateStatusTodo(idForChange, isComplete, setIsComplete);

	useEffect(() => {
		let isLoadingTimeout = false;
		let isTodoLoaded = false;

		setTimeout(() => {
			isLoadingTimeout = true;

			if (!isTodoLoaded) {
				navigate('/todo-load-error');
			}
		}, LOADING_TIMEOUT);

		fetch(URL)
			.then(loadedData => loadedData.json())
			.then(loadedTodos => {
				const item = loadedTodos.find(el => el.id === Number(params.id));

				isTodoLoaded = true;
				if (!isLoadingTimeout) {
					if (!loadedTodos) {
						navigate('/todo-not-exist');
						return;
					}
					setTodo(item);
					setIdForChange(params.id);
					item ? setIsComplete(item.completed) : setIsComplete(false);
				}
			});
	}, [params.id, isChanging, navigate]);

	const requestTochangeTodo = () => {
		setIsChanging(true);
	};

	const status = isComplete ? 'Done' : 'In progress';

	return (
		<div
			className={`${styles.todo__container} ${
				isComplete ? styles.todo__containerDone : styles.todo__containerActive
			}`}
		>
			<div className={styles.todo__nav}>
				<NavLink onClick={() => navigate(-1)} className={styles.todo__link}>
					Back
				</NavLink>

				<NavLink to="/" className={styles.todo__link}>
					Main Page
				</NavLink>
			</div>
			<div className={styles.todo__card}>
				<h2 className={styles.todo__title}>Card of ToDo</h2>
				<p>
					<span className={styles.todo__field}>UserID:</span>
					{todo ? `${todo.userId}` : 'Loading...'}
				</p>
				<p>
					<span className={styles.todo__field}>Title:</span>
					<span className={styles.todo__title}>
						{todo ? `${todo.title}` : 'Loading...'}
					</span>
				</p>
				<p>
					<span className={styles.todo__field}>Status:</span>
					<button
						type="button"
						className={styles.todo__status}
						onClick={updateStatus}
						disabled={!todo}
					>
						{todo ? `${status}` : 'Loading...'}
					</button>
				</p>
				<div className={styles.todo__BTNContainer}>
					<button
						className={styles.todo__BTN}
						type="button"
						onClick={requestTochangeTodo}
						disabled={!todo}
					>
						Изменить
					</button>
					<button
						className={styles.todo__BTN}
						type="button"
						onClick={() => deleteTodo(params.id)}
						disabled={!todo}
					>
						Удалить
					</button>
				</div>
			</div>
			<div className={styles.todo__changer}>
				{isChanging && <TodoChanger onSubmit={submitChanges} title="Меняем!" />}
			</div>
		</div>
	);
};
