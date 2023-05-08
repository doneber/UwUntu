export class Command {
  constructor(name, handler, description = '', usage = '', options = []) {
    this.name = name
    this.handler = handler
    this.description = description
    this.usage = usage
    this.options = options // [{ option: '-o', description: 'Example option' }]
  }
}
