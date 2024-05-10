import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './todoItemCard.module.css';

export const TodoItemCard = ({ userId, title, completed, id }) => {
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

				<div></div>
			</Link>
		</div>
	);
};

TodoItemCard.propTypes = {
	userId: PropTypes.number,
	title: PropTypes.string,
	completed: PropTypes.bool,
	id: PropTypes.number,
};
