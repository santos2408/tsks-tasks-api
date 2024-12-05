import { createRequire } from "module";
import assert from "node:assert";

import { describe, it, beforeEach } from "mocha";
import sinon from "sinon";

import TodoRepository from "../../src/repositories/TodoRepository.js";

import CreateTaskUseCase from "../../src/useCases/createTaskUseCase.js";

import CreateTaskController from "../../src/controllers/createTaskController.js";
import ListTasksController from "../../src/controllers/listTasksController.js";
import ListTasksUseCase from "../../src/useCases/listTasksUseCase.js";

const require = createRequire(import.meta.url);

const mocks = {
  validTask: require("../mocks/valid-task.json"),
  validListTasks: require("../mocks/valid-list-task.json"),
};

describe("🧪 Todo Suite Case", () => {
  let sandbox = {};

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("Create task:", () => {
    it("should create a task and save on database", async () => {
      const mockValidTask = mocks.validTask;
      const todoRepository = new TodoRepository();
      const createTaskUseCase = new CreateTaskUseCase(todoRepository);
      const createTaskController = new CreateTaskController(createTaskUseCase);

      sandbox.stub(todoRepository, todoRepository.saveTask.name).resolves(mockValidTask);

      const httpRequest = { description: mockValidTask.description };
      const result = await createTaskController.execute(httpRequest);

      assert.ok(result.body.id, "Expected 'id' to be present in the result");
      assert.strictEqual(typeof result.body.id, "string", "Expected 'id' to be a valid string");

      assert.ok(result.body.description, "Expected 'description' to be present in the result");
      assert.strictEqual(typeof result.body.description, "string", "Expected 'description' to be a valid string");
      assert.strictEqual(result.body.description, httpRequest.description, "Expected 'description' to match the input");

      assert.strictEqual(result.body.status, false, "Expected 'status' to be a valid boolean");
      assert.strictEqual(typeof result.body.status, "boolean", "Expected 'status' to be a valid boolean");

      assert.ok(result.body.date, "Expected 'date' to be present in the result");
      assert.strictEqual(typeof result.body.date, "string", "Expected 'date' to be a valid format string date");

      sinon.assert.calledOnce(todoRepository.saveTask);

      // @TODO: adicionar lib 'validator' para validar precisamente o UUID
      // @TODO: validar formato da data
    });

    it("should return a message error when try create a task and description is empty", async () => {
      const createTaskController = new CreateTaskController();

      const result = await createTaskController.execute({ description: "" });
      const expected = {
        statusCode: 400,
        body: {
          message: "A descrição não pode estar vazia",
        },
      };

      assert.deepEqual(result, expected);
    });
  });

  describe("List tasks:", () => {
    it("should list all tasks from database showing description, status and date", async () => {
      const mockValidListTasks = mocks.validListTasks;
      const todoRepository = new TodoRepository();
      const listTasksUseCase = new ListTasksUseCase(todoRepository);
      const listTasksController = new ListTasksController(listTasksUseCase);

      sinon.stub(todoRepository, todoRepository.listTasks.name).resolves(mockValidListTasks);

      const result = await listTasksController.execute();
      const expected = mockValidListTasks;

      assert.deepStrictEqual(result, expected);
    });
  });
});
