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

let currentWindowTop = null
let currentWindowLeft = null

$('.btn-window-size').addEventListener('click', () => {
  windowElement.style.position = 'absolute'
  windowElement.classList.toggle('window--maximized')
  if (windowElement.classList.contains('window--maximized')) {
    currentWindowLeft = windowElement.offsetLeft
    currentWindowTop = windowElement.offsetTop
    windowElement.style.top = 0
    windowElement.style.left = 0
  }
  else {
    windowElement.style.top = currentWindowTop + 'px'
    windowElement.style.left = currentWindowLeft + 'px'
  }
})

windowElement.addEventListener('dragstart', dragStart)
windowElement.addEventListener('dragend', dragEnd);

let xDistance = null;
let yDistance = null;

function dragStart(e) {
  windowElement.style.position = 'absolute'
  xDistance = e.clientX;
  yDistance = e.clientY;
}

function dragEnd(e) {
  windowElement.style.position = 'absolute'
  // calculate the distance between the current mouse position and the last one
  const xDiff = e.clientX - xDistance
  const yDiff = e.clientY - yDistance
  // update the top and left properties of the element
  windowElement.style.top = windowElement.offsetTop + yDiff + 'px'
  windowElement.style.left = windowElement.offsetLeft + xDiff + 'px'
}

// supports for draggability on mobile devices
windowElement.addEventListener('touchstart', touchStart)
windowElement.addEventListener('touchend', touchEnd)

function touchStart(e) {
  windowElement.style.position = 'absolute'
  xDistance = e.touches[0].clientX;
  yDistance = e.touches[0].clientY;
}

function touchEnd(e) {
  windowElement.style.position = 'absolute'
  // calculate the distance between the current mouse position and the last one
  const xDiff = e.changedTouches[0].clientX - xDistance
  const yDiff = e.changedTouches[0].clientY - yDistance
  // update the top and left properties of the element
  windowElement.style.top = windowElement.offsetTop + yDiff + 'px'
  windowElement.style.left = windowElement.offsetLeft + xDiff + 'px'
}

// time

const timeElement = $('.time')
const dateElement = $('.date')

const updateTime = () => {
  const now = new Date()
  // the time only display the hour and minute
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  const date = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  timeElement.textContent = time
  dateElement.textContent = date
}

updateTime()
setInterval(updateTime, 1000)


