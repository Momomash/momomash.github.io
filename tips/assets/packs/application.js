require.context('../images', true)
require('jquery')
import "../stylesheets/application";
import * as mdc from 'material-components-web';
import {MDCDrawer} from "@material/drawer";
import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCTextField} from '@material/textfield';
import Glide from '@glidejs/glide';
import Rails from 'rails-ujs';
import Turbolinks from 'turbolinks';
Rails.start();
Turbolinks.start();

document.addEventListener('turbolinks:load', function(){
  const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
  const topAppBar = MDCTopAppBar.attachTo(document.getElementById('top-app-bar'));
  const buttons = document.querySelectorAll('.mdc-button, .mdc-fab');
  for (const button of buttons) {
    mdc.ripple.MDCRipple.attachTo(button);
  }
  // const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
  mdc.autoInit();
//topAppBar.setScrollTarget(document.getElementById('main-content'));
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });
  const snackbar = document.querySelector('.mdc-snackbar');
  if(snackbar) snackbar.MDCSnackbar.open();
});
import {} from './custom_registrations'