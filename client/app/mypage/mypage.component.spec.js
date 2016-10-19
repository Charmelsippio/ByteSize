'use strict';

describe('Component: MypageComponent', function() {
  // load the controller's module
  beforeEach(module('myApp'));

  var MypageComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MypageComponent = $componentController('mypage', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});