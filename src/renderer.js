handle()

const info = document.querySelector('#info')
info.innerText = `Diese App nutzt Chrome (v${versions.chrome()}), Node.js (v${versions.node()}) und ElectronJS (v${versions.electron()}).`

async function receiveResponse() {
  const response = await window.versions.ping()
  return response
}

function sendReceivedResponse(receivedResponse) {
  console.log(receivedResponse)
}

async function handle() {
  const response = await receiveResponse()
  sendReceivedResponse(response)
}
