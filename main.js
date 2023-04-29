const $ = (selector, context = document) =>
  context.querySelector(selector)

const terminalOutput = $('.terminal__output')
const terminalInput = $('.terminal__input input')

function addOutput(text) {
  terminalOutput.innerHTML += `<p>${text}</p>`
  terminalOutput.scrollTop = terminalOutput.scrollHeight
}

function executeCommand(command) {
  addOutput(`<span class="user-host-name">doneber@pc</span>:<span class="path">~</span>$&nbsp${command}`)
  terminalInput.value = ''
}

terminalInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault()
    const command = terminalInput.value.trim()
    executeCommand(command)
  }
})
