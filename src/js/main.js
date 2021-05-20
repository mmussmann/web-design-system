import '../scss/main.scss'
import 'components/tab-tile/tab-tile.js'
import 'components/_alert/alert.js'
import 'components/forms/_text-areas/text-area.js'
import 'components/button-cards/card.js'
import 'components/button-cards/_generic-card/generic-card.js'
import 'components/colors/background-colors.js'
import 'components/colors/text-colors.js'
import 'components/_icons/icons.js'
import 'components/_icons/flat-icons.js'
import 'components/_modals/modal.js'
import 'components/_modals/modal-manager.js'
import 'components/button-cards/_category-card/category-card.js'
import 'components/_Progress-Bar/progress-bar.js'

// To be removed as it is for MSDS documentation only ----
import 'components/_expanding-components/accordion-initialization.js'
import 'components/_expanding-components/section-initialization.js'
// ----

//Component imports for main solution
import { SelectInput } from 'components/forms/_select-input/select-input.js'
import { ExpandingElement } from 'components/_expanding-components/expanding-component.js'
import { modalManager } from 'components/_modals/modal-manager.js'
import { modal } from 'components/_modals/modal.js'
import { progressBar } from 'components/_Progress-Bar/progress-bar.js'

//Component exports for main solution
export const SelectInputComponent = SelectInput
export const ExpandingComponent = ExpandingElement
export const msdsModalManager = modalManager
export const msdsModal = modal
export const msdsProgressBar = progressBar
