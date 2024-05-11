import { NavLink } from 'react-router-dom';

import styles from './todoLoadError.module.css';

export const TodoLoadError = () => (
	<div className={styles.todoLoadError__container}>
		<NavLink to="/" className={styles.todoLoadError__link}>
			Main Page
		</NavLink>
		<span className={styles.todoLoadError__text}>
			Ошибка загрузки задачи, попробуйте ещё раз позднее
		</span>
	</div>
);
