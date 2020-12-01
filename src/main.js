import * as environment from '../config/environment.json';
import {PLATFORM} from 'aurelia-pal';
import "froala-editor/js/froala_editor.pkgd.min";

export function configure(aurelia) {
  aurelia.use.plugin(PLATFORM.moduleName('aurelia-froala-editor'));
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
