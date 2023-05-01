export class CommandManager {
  constructor() {
    this.commands = new Map()
  }

  registerCommand(command) {
    this.commands.set(command.name, command)
  }

  getCommand(commandName) {
    return this.commands.get(commandName)
  }

  hasCommand(commandName) {
    return this.commands.has(commandName)
  }
}
