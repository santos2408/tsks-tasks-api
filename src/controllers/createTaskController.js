class CreateTaskController {
  constructor(createTaskUseCase) {
    this.createTaskUseCase = createTaskUseCase;
  }

  async execute(httpRequest) {
    try {
      const description = httpRequest.body.description;
      const isAValidDescription = typeof description === "string" && description.trim().length !== 0;

      if (!isAValidDescription) {
        return {
          statusCode: 400,
          body: {
            message: "A descrição não pode estar vazia",
          },
        };
      }

      const task = await this.createTaskUseCase.execute({ description });

      return {
        statusCode: 201,
        body: task,
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: {
          message: "Erro interno do servidor",
        },
      };
    }
  }
}

export default CreateTaskController;
