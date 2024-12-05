import { readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class TodoRepository {
  constructor() {
    this.todosPath = join(__dirname, "../../database", "todos.json");
  }

  // CREATE TASK
  async saveTask(task) {
    const todos = JSON.parse(await readFile(this.todosPath, "utf-8"));
    todos.push(task);
    await writeFile(this.todosPath, JSON.stringify(todos));
    return task;
  }

  // GET TASKS
  async listTasks() {
    const todos = JSON.parse(await readFile(this.todosPath, "utf-8"));
    return todos;
  }
}

export default TodoRepository;
