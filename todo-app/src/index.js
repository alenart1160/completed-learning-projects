// Add necessary imports
import { getFilters, setFilters } from './filters'
import { saveTodos, createTodo, loadTodos } from './todos'
import { renderTodos } from './views'
// // Render initial todos
renderTodos()
// Set up search text handler
document.querySelector('#search-text').addEventListener('input', (e) => {
	setFilters({
		searchText: e.target.value,
	})
	renderTodos()
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
	setFilters({
		hideCompleted: e.target.checked,
	})
	renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
	createTodo(e)
	saveTodos()
	renderTodos()
	e.target.elements.text.value = ''
})
window.addEventListener('storage', (e) => {
	if (e.key === 'todos') {
		loadTodos()
		renderTodos()
	}
})
