//* Js model for  taskComponent
export class Task {
  name;
  description;
  status;
  level;

  constructor(name, desc, status, level) {
    this.name = name;
    this.description = desc;
    this.status = status;
    this.level = level;
  }
}
