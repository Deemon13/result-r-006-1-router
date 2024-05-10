// import { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

// import styles from './app.module.css';

// const Todos = () => (
// 	<div>
// 		Todos
// 		<Link to="/">Main Page</Link>
// 	</div>
// );
const NotFound = () => (
	<div>
		Не корректный адрес
		<Link to="/">Main Page</Link>
	</div>
);

import {
	MainPage,
	TodoItem,
	// FormCreateTodo,
	// Loader,
	// TodoItem,
	// Filter,
	// Sorter,
	// TodoChanger,
} from '../../components';
// import { TodoItem } from '../TodoItem/TodoItem';

// import {
// 	useGetTodos,
// 	useCreateTodo,
// useDeleteTodo,
// useChangeTodo,
// 	useSort,
// 	useFilter,
// } from '../../hooks';

export const App = () => {
	// const [isChanging, setIsChanging] = useState(false);
	// const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	// const [filter, setFilter] = useState('');
	// const [filteredTodos, setFilteredTodos] = useState([]);
	// const [idForChange, setIdForChange] = useState(null);

	// const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	// const { todos, isLoading } = useGetTodos(refreshTodosFlag);
	// const { isCreating, createTodo } = useCreateTodo(refreshTodos);
	// const { deleteTodo } = useDeleteTodo();
	// const { submitChanges } = useChangeTodo();
	// idForChange,
	// refreshTodos,
	// setFilter,
	// setIsChanging,
	// const { sortBy, sortedTodos, handleSort } = useSort(todos);
	// const { handleFilter } = useFilter(todos, filter, setFilteredTodos, setFilter);

	// let newId = null;

	// const requestTochangeTodo = id => {
	// const requestTochangeTodo = () => {
	// newId = id;
	// setIdForChange(newId);
	// 	setIsChanging(true);
	// };

	return (
		<div>
			{/* <a href="/">576567</a>
			<a href="/todos">todos</a> */}

			{/* <MainPage /> */}
			{/* <FormCreateTodo onSubmit={createTodo} isCreating={isCreating} /> */}
			{/* <Filter value={filter} onChange={e => handleFilter(e)} />
			<Sorter onClick={handleSort} disabled={filter} title="По алфавиту!" />
			<div className={styles.todos}>
				{isLoading ? (
					<Loader />
				) : (
					(filter ? filteredTodos : sortBy ? sortedTodos : todos).map(
						({ id, userId, title, completed }) => (
							<TodoItem
								key={id}
								userId={userId}
								title={title}
								completed={completed}
								onClick={deleteTodo}
								changeTodo={requestTochangeTodo}
								id={id}
								deleting={isDeleting}
							/>
						),
					)
				)}
			</div>
			{isChanging && <TodoChanger onSubmit={submitChanges} title="Меняем!" />} */}
			<Routes>
				<Route path="/" element={<MainPage />} />
				{/* <Route path="todos" element={<Todos />} /> */}
				<Route path="todo/:id" element={<TodoItem />} />
				{/* <Route path="*" element={<NotFound />} /> */}
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
};
