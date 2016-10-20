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

export default angular.module('mypage', [uiRouter])
  .config(routes)
  .component('mypage', {
    template: require('./mypage.html'),
    controller: MypageComponent, //forgot to change this to "mypage" and it gave me a console error. 
    controllerAs: 'mypageCtrl'
  })
  .name;