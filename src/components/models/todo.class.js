// eslint-disable-next-line no-unused-vars
import { LEVELS } from './levels.enum';

export class Task {
  #name;
  #description;
  #done;
  #level;

  constructor(name, desc, done, level) {
    this.#name = name;
    this.#description = desc;
    this.#done = done;
    this.#level = level;
  }

  get name() {
    return this.#name;
  }
  set name(name) {
    return (this.#name = name);
  }

  get desccription() {
    return this.#description;
  }
  set description(desc) {
    return (this.#description = desc);
  }

  get done() {
    return this.#done;
  }
  set done(done) {
    return (this.#done = done);
  }

  get level() {
    return this.#level;
  }
  set level(level) {
    return (this.#level = level);
  }
}
