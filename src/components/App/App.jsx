import { Routes, Route, Link, Navigate } from 'react-router-dom';

import styles from './app.module.css';

const NotFound = () => (
	<div>
		Не корректный адрес
		<Link to="/">Main Page</Link>
	</div>
);

import { MainPage, TodoItem } from '../../components';

export const App = () => {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="todo/:id" element={<TodoItem />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
				{/* <Route path="/todo-load-error" element={<Navigate to="/404" />} />
				<Route path="/todo-not-exist" element={<Navigate to="/404" />} /> */}
			</Routes>
		</div>
	);
};
