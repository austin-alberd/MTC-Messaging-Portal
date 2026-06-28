// Notification form handler for schedule functionality
const scheduleCheckbox = document.querySelector("#chkScheduleNotification")
const scheduleFieldsContainer = document.querySelector("#scheduleFieldsContainer")
const notificationSubmitBtn = document.querySelector("#notificationSubmitBtn")

// Toggle schedule fields visibility and button text
scheduleCheckbox.addEventListener("change", () => {
    if (scheduleCheckbox.checked) {
        scheduleFieldsContainer.classList.remove("d-none")
        notificationSubmitBtn.textContent = "Schedule Notification"
    } else {
        scheduleFieldsContainer.classList.add("d-none")
        notificationSubmitBtn.textContent = "Send Notification"
    }
})
