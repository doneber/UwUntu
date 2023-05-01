const outputElement = document.querySelector('.terminal__output')

export const commands = [
  // command 'clear' that clears the terminal
  {
    name: 'clear',
    handler: () => {
      outputElement.innerHTML = ''
      return ''
    },
    description: 'Clear the terminal screen',
    usage: '',
    options: []
  },
]
