import { Terminal } from './Terminal.js'

const $ = (selector, context = document) =>
  context.querySelector(selector)

const commands = [
  {
    name: 'ls',
    handler: (args) => {
      // Simular la funcionalidad del comando 'ls'
      return 'file1.txt file2.txt directory'
    },
    description: 'List directory contents.',
    usage: '[OPTION]... [FILE]...',
    options: [
      { option: '-a', description: 'do not ignore entries starting with .' },
      { option: '-l', description: 'use a long listing format' },
      // Agrega más opciones aquí
    ],
  },

  // Comando 'pwd'
  {
    name: 'pwd',
    handler: (args) => {
      return '/home/username' //simulacion simple 
    },
    description: 'Print the name of the current working directory',
    usage: '',
    options: []
  },
  // comando 'clear' that clears the content of .terminal__output
  {
    name: 'clear',
    handler: (args) => {
      $('.terminal__output').innerHTML = ''
      return ''
    },
    description: 'Clear the terminal screen',
    usage: '',
    options: []
  },
]

const terminal = new Terminal($('.terminal__input input'), $('.terminal__output'))
terminal.loadCommands([...commands])
