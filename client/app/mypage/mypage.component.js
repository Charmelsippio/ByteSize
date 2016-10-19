'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './mypage.routes';

export class MypageComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello again';
  }
}

export default angular.module('myApp', [uiRouter])
  .config(routes)
  .component('mypage', {
    template: require('./mypage.html'),
    controller: MyrouteComponent,
    controllerAs: 'mypageCtrl'
  })
  .name;