class ListTasksController {
  constructor(listTasksUseCase) {
    this.listTasksUseCase = listTasksUseCase;
  }

  async execute() {
    try {
      const tasks = await this.listTasksUseCase.execute();

      return {
        statusCode: 200,
        body: tasks,
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        message: "Erro interno do servidor",
      };
    }
  }
}

export default ListTasksController;
