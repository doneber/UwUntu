import { Command } from './Command'

export class CommandManager {
  public commands: Map<string, Command>

  constructor () {
    this.commands = new Map()
  }

  registerCommand (command: Command) {
    this.commands.set(command.name, command)
  }

  getCommand (commandName: string) {
    return this.commands.get(commandName)
  }

  hasCommand (commandName: string) {
    return this.commands.has(commandName)
  }
}
