import { faker } from "@faker-js/faker";

class Task {
  constructor({ description }) {
    this.id = faker.string.uuid();
    this.description = description;
    this.status = false;
    this.date = new Date().toLocaleDateString("pt-br");
  }
}

export default Task;
