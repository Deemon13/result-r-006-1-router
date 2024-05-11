import { NavLink } from 'react-router-dom';

import styles from './notFound.module.css';

export const NotFound = () => (
	<div className={styles.notFound__container}>
		<NavLink to="/" className={styles.notFound__link}>
			Main Page
		</NavLink>
		<span className={styles.notFound__404}>404 Page not found(:</span>
		<span className={styles.notFound__text}>
			Не корректный адрес... Попробуйте еще раз или вернитесь на{' '}
			<NavLink to="/" className={styles.notFound__link}>
				главную страницу
			</NavLink>
		</span>
	</div>
);
