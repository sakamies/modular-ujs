//TODO: import all modules
//TODO: expose all for export

import CSRF from './modules/CSRF.js'
import LiteAjax from './modules/LiteAjax.js'
import AjaxForms from './modules/AjaxForms.js'
import ClickConfirm from './modules/ClickConfirm.js'
import ClickDisable from './modules/ClickDisable.js'
import ClickMethod from './modules/ClickMethod.js'

export default function VanillaUJS () {
  window.CSRF = CSRF
  window.LiteAjax = LiteAjax
  AjaxForms()
  ClickConfirm()
  ClickDisable()
  ClickMethod()
}
