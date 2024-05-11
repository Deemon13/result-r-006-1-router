import { useState } from 'react';

import styles from './mainpage.module.css';

import { FormCreateTodo, Loader, TodoItemCard, Filter, Sorter } from '../../components';

import { useGetTodos, useCreateTodo, useSort, useFilter } from '../../hooks';

export const MainPage = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [filter, setFilter] = useState('');
	const [filteredTodos, setFilteredTodos] = useState([]);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	const { todos, isLoading } = useGetTodos(refreshTodosFlag);
	const { isCreating, createTodo } = useCreateTodo(refreshTodos);
	const { sortBy, sortedTodos, handleSort } = useSort(todos);
	const { handleFilter } = useFilter(todos, filter, setFilteredTodos, setFilter);

	const sliceTitle = title => {
		return title.length > 10 ? title.slice(0, 10) + '...' : title;
	};

	return (
		<>
			{/* MainPage */}
			<FormCreateTodo onSubmit={createTodo} isCreating={isCreating} />
			{/* Filter */}
			<Filter value={filter} onChange={e => handleFilter(e)} />
			{/* Sorter */}
			<Sorter onClick={handleSort} disabled={filter} title="По алфавиту!" />
			{/* ToDoList */}
			<div className={styles.todos}>
				<h2 className={styles.todos__title}>Todo list</h2>
				{isLoading ? (
					<Loader />
				) : (
					(filter ? filteredTodos : sortBy ? sortedTodos : todos).map(
						({ id, userId, title, completed }) => (
							<TodoItemCard
								key={id}
								userId={userId}
								title={sliceTitle(title)}
								completed={completed}
								id={id}
							/>
						),
					)
				)}
			</div>
		</>
	);
};
