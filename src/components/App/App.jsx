import { Routes, Route, Navigate } from 'react-router-dom';

import styles from './app.module.css';

import { MainPage, TodoItem, NotFound } from '../../components';

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
