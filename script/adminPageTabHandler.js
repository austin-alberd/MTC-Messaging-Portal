const homeBtn = document.querySelector("#homeBtn")
const accountManagementBtn = document.querySelector("#accountManagementBtn")
const notificationsBtn = document.querySelector("#notificationsBtn")
const systemManagementBtn = document.querySelector("#systemManagementBtn")
const logsBtn = document.querySelector("#logsBtn")

const home = document.querySelector('#home')
const accountManagement = document.querySelector('#accountManagement')
const notifications = document.querySelector('#notifications')
const systemManagement = document.querySelector('#systemManagement')
const logs = document.querySelector('#logs')

const tabs = [
    { button: homeBtn, panel: home },
    { button: accountManagementBtn, panel: accountManagement },
    { button: notificationsBtn, panel: notifications },
    { button: systemManagementBtn, panel: systemManagement },
    { button: logsBtn, panel: logs }
]

function setActiveButton(button, isActive) {
    button.classList.toggle("btn-primary", isActive)
    button.classList.toggle("btn-outline-primary", !isActive)
}

function showTab(targetPanel) {
    tabs.forEach(({ button, panel }) => {
        const isActive = panel === targetPanel
        panel.classList.toggle("d-none", !isActive)
        panel.classList.toggle("d-flex", isActive)
        setActiveButton(button, isActive)
    })
}

homeBtn.addEventListener("click", () => showTab(home))
accountManagementBtn.addEventListener("click", () => showTab(accountManagement))
notificationsBtn.addEventListener("click", () => showTab(notifications))
systemManagementBtn.addEventListener("click", () => showTab(systemManagement))
logsBtn.addEventListener("click", () => showTab(logs))

showTab(home)
