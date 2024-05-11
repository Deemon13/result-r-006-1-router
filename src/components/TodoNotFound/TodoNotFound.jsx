import { NavLink } from 'react-router-dom';

import styles from './todoNotFound.module.css';

export const TodoNotFound = () => (
	<div className={styles.todoNotFound__container}>
		<NavLink to="/" className={styles.todoNotFound__link}>
			Main Page
		</NavLink>
		<span className={styles.todoNotFound__text}>Такой задачи не существует</span>
	</div>
);
