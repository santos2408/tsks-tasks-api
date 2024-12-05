import express from "express";

import TodoRepository from "../repositories/TodoRepository.js";

import CreateTaskController from "../controllers/createTaskController.js";
import CreateTaskUseCase from "../useCases/createTaskUseCase.js";

import ListTasksController from "../controllers/listTasksController.js";
import ListTasksUseCase from "../useCases/listTasksUseCase.js";

const router = express.Router();

router.get("/tasks", async (request, response) => {
  const todoRepository = new TodoRepository();
  const listTasksUseCase = new ListTasksUseCase(todoRepository);
  const listTasksController = new ListTasksController(listTasksUseCase);
  const { statusCode, body } = await listTasksController.execute();
  response.status(statusCode).send(body);
});

router.post("/tasks", async (request, response) => {
  const todoRepository = new TodoRepository();
  const createTasksUseCase = new CreateTaskUseCase(todoRepository);
  const createTasksController = new CreateTaskController(createTasksUseCase);
  const { statusCode, body } = await createTasksController.execute(request);

  response.status(statusCode).send(body);
});

export default router;
