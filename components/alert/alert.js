import cookies from 'js-cookie'
const cookiePrefix = 'msds-alert-'

/** Private methods **/
function findAncestor(el, sel) {
  while ((el = el.parentElement) && !(el.matches || el.matchesSelector || el.msMatchesSelector).call(el, sel));
  return el
}

function getFutureDate(addedDays) {
  const date = new Date()
  date.setDate(date.getDate() + addedDays)
  return date
}

/** Event handlers **/
function onCloseClick(e) {
  const domAlert = findAncestor(e.currentTarget, '.msds-alert')
  const alertId = domAlert.dataset.alertId
  const stayHidden = domAlert.querySelector('.msds-alert__checkbox').checked
  if (alertId && stayHidden) {
    cookies.set(cookiePrefix + alertId, true, {
      expires: getFutureDate(30)
    })
  }
  domAlert.parentNode.removeChild(domAlert)
}

/** Public methods **/
function initialize() {
  const elements = document.querySelectorAll('.js-msds-alert-close-click-handler')
  ;[].forEach.call(elements, element => {
    const domAlert = findAncestor(element, '.msds-alert')
    const alertId = domAlert.dataset.alertId
    if (!cookies.get(cookiePrefix + alertId)) {
      domAlert.classList.remove('d-none')
    }
    element.addEventListener('click', onCloseClick)
  })
}

/** Immediate initialization **/
if (document.querySelector('.msds-alert')) {
  initialize()
}
