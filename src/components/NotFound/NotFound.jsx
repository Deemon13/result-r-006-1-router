import { NavLink } from 'react-router-dom';

import styles from './notFound.module.css';

export const NotFound = () => (
	<div className={styles.notFound__container}>
		Не корректный адрес
		<NavLink to="/" className={styles.notFound__link}>
			Main Page
		</NavLink>
	</div>
);
