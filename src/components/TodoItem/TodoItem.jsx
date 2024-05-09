import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './todoItem.module.css';

import { URL } from '../../constants';

export const TodoItem = ({ onClick }) => {
	const [todo, setTodo] = useState(null);

	const params = useParams();
	const navigate = useNavigate();

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
					// onClick={() => changeTodo(id)}
				>
					Изменить
				</button>
				<button
					className={styles.todo__BTN}
					type="button"
					onClick={() => onClick(params.id)}
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
		</div>
	);
};

TodoItem.propTypes = {
	onClick: PropTypes.func,
};
