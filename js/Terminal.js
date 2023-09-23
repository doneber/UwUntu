import { Command } from './Command.js'
import { CommandManager } from './CommandManager.js'

export class Terminal {
  constructor({
    terminalElement,
    inputElement,
    outputElement,
    prompt = `
    <span class="user-host-name">
      <span>doneber</span>
      <span>@pc</span>:
      <span class="path">~</span>$&nbsp;
    </span>`
  }) {
    this.commandManager = new CommandManager()
    this.terminalElement = terminalElement
    this.inputElement = inputElement
    this.outputElement = outputElement
    this.prompt = prompt
    this.currentLine = ''
    this.commandHistory = []
    this.historyIndex = 0
    this.bindEventListeners()
  }

  bindEventListeners() {
    this.inputElement.addEventListener('keydown', this.handleInputKeyDown.bind(this))
    this.inputElement.addEventListener('input', this.handleInputChange.bind(this))
  }

  handleInputKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.executeCommand(this.currentLine.trim())
      this.currentLine = ''
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (this.historyIndex > 0) {
        this.historyIndex--
        this.currentLine = this.commandHistory[this.historyIndex]
        this.inputElement.value = this.currentLine //
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (this.historyIndex < this.commandHistory.length - 1) {
        this.historyIndex++
        this.currentLine = this.commandHistory[this.historyIndex]
        this.inputElement.value = this.currentLine
      } else {
        this.currentLine = ''
        this.inputElement.value = this.currentLine
      }
    }
  }

  handleInputChange(event) {
    this.currentLine = event.target.value
  }

  clearInput() {
    this.inputElement.value = ''
    this.currentLine = ''
  }

  levenshteinDistance(a, b) {
    /* Calculates the distance beetween two Strings */
    if (a.length == 0) return b.length;
    if (b.length == 0) return a.length;
    let matrix = [];
    let i;
    for (i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    let j;
    for (j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (i = 1; i <= b.length; i++) {
      for (j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) == a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
          );
        }
      }
    }
    return matrix[b.length][a.length];
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
      let message = `${commandName}: command not found`
      // If there is no command, look for a similar coincidence
      this.commandManager.commands.forEach(command => {
        if (this.levenshteinDistance(commandName, command.name) == 1){
          message = `Command '${commandName}' not found, did you mean '${command.name}'?`
        }
      })
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
      const newCommandInstance = new Command(command.name, command.handler,
        command.description || '',
        command.usage || '',
        command.options || []);
      this.commandManager.registerCommand(newCommandInstance);
    });

    // display help command
    const displayHelp = (command) => {
      const outputLines = [
        `${command.name}: ${command.name} ${command.usage} <br>`,
        `&emsp;&emsp;${command.description} <br>`,
        '',
      ];

      if (command.options.length > 0) {
        outputLines.push('', '<br>&emsp;&emsp;Options:<br>');
        command.options.forEach(({ option, description }) => {
          outputLines.push(`&emsp;&emsp;&emsp;&emsp;${option}&emsp;${description} <br>`);
        });
      }

      return outputLines.join('');
    }
    // Help Command Handler
    const helpHandler = (args) => {
      if (args.length === 1) {
        const targetCmdName = args[0];
        const targetCmd = this.commandManager.getCommand(targetCmdName)

        if (targetCmd)
          return displayHelp(targetCmd);
        else
          return `${targetCmdName}: command not found`;
      } else {
        // display all commands available with their descriptions, arguments and options
        const outputLines = ['Available commands:<br><br>'];
        this.commandManager.commands.forEach((command) => {
          outputLines.push(`&emsp;${command.name}&emsp;&emsp;${command.description}<br>`);
        }
        );
        return outputLines.join('');
      }
    };

    const helpCommand = new Command('help', helpHandler, 'Display information about available commands');
    this.commandManager.registerCommand(helpCommand);
  }
  async renderCommandExecuted(input) {
    this.outputElement.innerHTML += `${this.prompt}${input}</p>`
    await setTimeout(() => {
      // set the scroll to the bottom
      this.terminalElement.scrollTop = this.terminalElement.scrollHeight
    }, 1)
  }
  render(text) {
    this.outputElement.innerHTML += `<p>${text}</p>`
    this.terminalElement.scrollTop = this.terminalElement.scrollHeight
  }
}