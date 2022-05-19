export class Todo {
  content: string;
  completed: boolean;
  constructor(content: string, completed: boolean) {
    this.completed = completed;
    this.content = content;
  }
}
