import { $ } from './utils'
import { Terminal } from './Terminal'
import { commands } from './commandList'

const terminalElement = $('.terminal')
const inputElement = $('.terminal__input input') as HTMLInputElement
const outputElement = $('.terminal__output')
const windowElement = $('.window')
const shutdownBtn = $('#shutdownBtn')

shutdownBtn.addEventListener('click', () => {
  alert('Shutting down...')
  window.close()
})

// query params options
const params = new URLSearchParams(window.location.search)
const USER_NAME = params.get('user') || 'doneber'
$('#user').innerText = USER_NAME
const FULLSCREEN = params.get('fullscreen') === 'true'
if (FULLSCREEN) windowElement.classList.toggle('window--maximized')

const terminal = new Terminal({
  terminalElement,
  inputElement,
  outputElement,
  prompt: `<span class="user-host-name">
  <span>${USER_NAME}</span>
  <span>@pc</span>:<span class="path">~</span>$&nbsp;`
})
terminal.loadCommands([...commands])

const initialSystemDate = new Date()
const initMessageElements = [
  '<p>Welcome to UwUntu 0.1.0 (Inspired on Ubuntu)<br></p>',
  '<p>&emsp; * GitHub Repo: <a href="https://github.com/doneber/UwUntu" target="_blank">doneber/uwuntu</a></p>',
  '<p>&emsp; * About me: <a href="https://doneber.dev" target="_blank">doneber.dev</a></p>',
  `<p>System information as of ${String(initialSystemDate).split(' ').splice(0, 5).join(' ')}</p>`,
  '<p><br></p>',
  "<p>Try to run command 'uwu'</p>"
]

const initMessagesLoading = async () => {
  let i = -1
  const testInterval = setInterval(() => {
    i++
    if (!initMessageElements[i]) {
      clearInterval(testInterval)
      $('.terminal__input').style.setProperty('opacity', '1')
    } else { $('.terminal__output').innerHTML += initMessageElements[i] }
  }, 160)
}

initMessagesLoading()

$('.terminal__blank-space').addEventListener('click', () => {
  inputElement.focus()
})

let currentWindowTop: number | null = null
let currentWindowLeft: number | null = null

$('.btn-window-size').addEventListener('click', () => {
  windowElement.classList.toggle('window--maximized')
  if (windowElement.classList.contains('window--maximized')) {
    currentWindowLeft = windowElement.offsetLeft
    currentWindowTop = windowElement.offsetTop
    windowElement.style.top = '0'
    windowElement.style.left = '0'
  } else {
    windowElement.style.top = currentWindowTop + 'px'
    windowElement.style.left = currentWindowLeft + 'px'
  }
})

$('.btn-window-minimize').addEventListener('click', () => {
  windowElement.style.display = 'none'
})
$('.btn-window-close').addEventListener('click', () => {
  windowElement.style.display = 'none'
})

$('.launcher__icon').addEventListener('click', () => {
  if (windowElement.style.display === 'flex' ||
    windowElement.style.display === '') { windowElement.style.display = 'none' } else { windowElement.style.display = 'flex' }
})

windowElement.addEventListener('dragstart', dragStart)
windowElement.addEventListener('dragend', dragEnd)

let xDistance: number | null = null
let yDistance: number | null = null

function dragStart (e: MouseEvent) {
  windowElement.style.position = 'absolute'
  xDistance = e.clientX
  yDistance = e.clientY
}

function dragEnd (e: MouseEvent) {
  if (!xDistance || !yDistance) return
  windowElement.style.position = 'absolute'
  // calculate the distance between the current mouse position and the last one
  const xDiff = e.clientX - xDistance
  const yDiff = e.clientY - yDistance
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
