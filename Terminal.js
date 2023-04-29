import { Command } from './Command.js'
import { CommandManager } from './Command.js'

export class Terminal {
  constructor(elementInput, outputElement) {
    this.commandManager = new CommandManager()
    this.elementInput = elementInput
    this.outputElement = outputElement
    this.prompt = `<span class='user-host-name'>doneber@pc</span>:<span class='path'>~</span>$&nbsp`
    this.currentLine = ''
    this.commandHistory = []
    this.historyIndex = 0
    this.bindEventListeners()
  }

  bindEventListeners() {
    this.elementInput.addEventListener('keydown', this.handleInputKeyDown.bind(this))
    this.elementInput.addEventListener('input', this.handleInputChange.bind(this))
  }

  handleInputKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.executeCommand(this.currentLine.trim())
      this.currentLine = ''
      // this.renderCommandExecuted()
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (this.historyIndex > 0) {
        this.historyIndex--
        this.currentLine = this.commandHistory[this.historyIndex]
        this.elementInput.value = this.currentLine //
        // this.renderCommandExecuted()
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (this.historyIndex < this.commandHistory.length - 1) {
        this.historyIndex++
        this.currentLine = this.commandHistory[this.historyIndex]
        this.elementInput.value = this.currentLine
      } else {
        this.currentLine = ''
        this.elementInput.value = this.currentLine
      }
    }
  }

  handleInputChange(event) {
    this.currentLine = event.target.value
  }

  clearInput() {
    this.elementInput.value = ''
    this.currentLine = ''
  }
  executeCommand(input) {
    this.renderCommandExecuted(input)
    this.clearInput()
    if (!input) return

    this.commandHistory.push(input)
    this.historyIndex = this.commandHistory.length

    const [commandName, ...args] = input.split(' ')
    const command = this.commandManager.getCommand(commandName)

    if (!command) {
      const message = `${commandName}: command not found`
      this.render(message)
    } else {
      try {
        const output = command.handler(args)
        this.render(output)
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  loadCommands(commands) {
    commands.forEach((command) => {
      const newCommand = new Command(command.name, command.handler)
      this.commandManager.registerCommand(newCommand)
    })
  }
  renderCommandExecuted(input) {
    this.outputElement.innerHTML += `${this.prompt}${input}</p>`
    this.outputElement.scrollTop = this.outputElement.scrollHeight
    this.elementInput.scrollTop = this.elementInput.scrollHeight
  }
  render(text) {
    this.outputElement.innerHTML += `<p>${text}</p>`
    this.outputElement.scrollTop = this.outputElement.scrollHeight
    this.elementInput.scrollTop = this.elementInput.scrollHeight
  }
}