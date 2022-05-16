//* Js model for  taskComponent
//* Exported to Task component
export class Task {
  name;
  description;
  status = false;
  level;

  constructor(name, desc, status, level) {
    this.name = name;
    this.description = desc;
    this.status = status;
    this.level = level;
  }
}
