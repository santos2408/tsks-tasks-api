class ListTasksUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  execute() {
    const todos = this.todoRepository.listTasks();
    return todos;
  }
}

export default ListTasksUseCase;
