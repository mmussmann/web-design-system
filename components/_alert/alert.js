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
  const containsStayHiddenModifier = domAlert.classList.contains('msds-alert--stay-hidden') ? true : false
  const containsStayHiddenCheckbox = domAlert.querySelector('.msds-alert__checkbox') ? true : false
  const alertId = domAlert.dataset.alertId
  let stayHidden

  if (!containsStayHiddenModifier && containsStayHiddenCheckbox) {
    stayHidden = domAlert.querySelector('.msds-alert__checkbox').checked
  } else if (containsStayHiddenModifier) {
    stayHidden = domAlert
  }

  if (alertId && stayHidden) {
    cookies.set(cookiePrefix + alertId, true, {
      expires: getFutureDate(30)
    })
  }
  domAlert.parentNode.removeChild(domAlert)
}

/** Public methods **/
function initialize() {
  const elements = document.querySelectorAll('.msds-btn, .msds-alert__close-click-area')

  ;[].forEach.call(elements, element => {
    const domAlert = findAncestor(element, '.msds-alert')

    if (domAlert) {
      const alertId = domAlert.dataset.alertId
      if (!cookies.get(cookiePrefix + alertId)) {
        domAlert.classList.remove('d-none')
      }
      element.addEventListener('click', onCloseClick)
    }
  })
}

/** Immediate initialization **/
if (document.querySelector('.msds-alert')) {
  initialize()
}
