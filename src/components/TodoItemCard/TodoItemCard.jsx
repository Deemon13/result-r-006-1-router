import PropTypes from 'prop-types';

import styles from './todoItemCard.module.css';
import { Link } from 'react-router-dom';

export const TodoItemCard = ({
	userId,
	title,
	completed,
	onClick,
	id,
	deleting,
	changeTodo,
}) => {
	return (
		<div
			className={`${styles.todo__item} ${
				completed ? styles.todo__done : styles.todo__active
			}`}
			id={id}
		>
			<Link to={`todo/${id}`}>
				<div>
					<p className={styles.todo__user}>User: {userId}</p>
					<p className={styles.todo__title}>{title}</p>
				</div>

				<div>
					<button
						className={styles.todo__BTN}
						type="button"
						onClick={() => changeTodo(id)}
					>
						Изменить
					</button>
					<button
						className={styles.todo__BTN}
						type="button"
						disabled={deleting}
						onClick={() => onClick(id)}
					>
						Удалить
					</button>
				</div>
			</Link>
		</div>
	);
};

TodoItemCard.propTypes = {
	userId: PropTypes.number,
	title: PropTypes.string,
	completed: PropTypes.bool,
	onClick: PropTypes.func,
	changeTodo: PropTypes.func,
	id: PropTypes.number,
	deleting: PropTypes.bool,
};
