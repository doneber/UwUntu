import { Terminal } from './Terminal.js'
import { commands } from './commandList.js'

const $ = (selector, context = document) =>
  context.querySelector(selector)

const terminalElement = $('.terminal')
const inputElement = $('.terminal__input input')
const outputElement = $('.terminal__output')
const windowElement = $('.window')

const terminal = new Terminal(terminalElement, inputElement, outputElement)
terminal.loadCommands([...commands])

$('.terminal__blank-space').addEventListener('click', () => {
  inputElement.focus()
})

$('.btn-window-size').addEventListener('click', () => {
  windowElement.classList.toggle('window--maximized')
})
