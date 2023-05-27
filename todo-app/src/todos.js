let todos = []

const loadTodos = () => {
	const todosJSON = localStorage.getItem('todos')
	try {
		todos = todosJSON ? JSON.parse(todosJSON) : []
	} catch (e) {
		todos = []
	}
}

const saveTodos = () => {
	localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

const createTodo = (e) => {
	const text = e.target.elements.text.value.trim()
	e.preventDefault()

	if (text.length > 0) {
		todos.push({
			id: self.crypto.randomUUID(),
			text,
			completed: false,
		})
		saveTodos(todos)
	}
}

const removeTodo = (id) => {
	const todoIndex = todos.findIndex((todo) => todo.id === id)

	if (todoIndex > -1) {
		todos.splice(todoIndex, 1)
		saveTodos()
	}
}

const toggleTodo = (id) => {
	const todo = todos.find((todo) => todo.id === id)

	if (todo) {
		todo.completed = !todo.completed
		saveTodos()
	}
}
loadTodos()
export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }
