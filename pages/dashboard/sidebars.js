const toggleSidebar = () => {
  const mainElement = document.getElementById('main')

  mainElement.classList.toggle('main--sidebar-open')
  console.log(mainElement)
}

const tooltipTriggerEl = document.querySelector('[data-bs-toggle="tooltip"]')
bootstrap.Tooltip(tooltipTriggerEl)
