export function getCursorElement(id) {
  var elementId = 'cursor-' + id
  var element = document.getElementById(elementId)
  if (element == null) {
    element = document.createElement('div')
    element.id = elementId
    element.className = 'cursor'
    document.body.appendChild(element)
  }
  return element
}

export function removeCursorElement(data) {
  const el = getCursorElement(data.id)
  document.body.removeChild(el)
}

export function themeToggle() {
  const root = document.querySelector('html')
  let currentTheme = root.dataset.theme

  let newTheme = ''
  if (currentTheme === 'light') {
    newTheme = 'dark'
  } else {
    newTheme = 'light'
  }
  localStorage.setItem('theme', newTheme)
  root.dataset.theme = newTheme
}
