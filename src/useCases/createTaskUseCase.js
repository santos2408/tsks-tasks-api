import Task from "../entities/Task.js";

class CreateTaskUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async execute(taskData) {
    const task = new Task(taskData);
    // const savedTask = await this.todoRepository.saveTask(task);
    const savedTask = await this.todoMondodbRepository.saveTask(task);
    return savedTask;

    //@TODO: antes de salvar, verificar se já existe uma tarefa com a mesma descrição no banco de dados
  }
}

export default CreateTaskUseCase;
