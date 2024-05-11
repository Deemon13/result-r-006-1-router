import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './todoItemCard.module.css';

export const TodoItemCard = ({ userId, title, completed, id }) => {
	return (
		<NavLink to={`todo/${id}`} className={styles.todo__link}>
			<div
				className={`${styles.todo__item} ${
					completed ? styles.todo__done : styles.todo__active
				}`}
				id={id}
			>
				<div className={styles.todo__user}>
					User: {userId} - {title}
				</div>
			</div>
		</NavLink>
	);
};

TodoItemCard.propTypes = {
	userId: PropTypes.number,
	title: PropTypes.string,
	completed: PropTypes.bool,
	id: PropTypes.number,
};
