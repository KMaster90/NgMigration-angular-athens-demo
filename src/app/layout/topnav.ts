declare var angular: angular.IAngularStatic;

export class Topnav implements angular.IComponentController {
  title = '';

  constructor(private settings: any) {}

  $onInit() {
    this.title = this.settings.appTitle;
  }
}

angular
  .module('ngaApp.layout')
  .component('ngaTopnav', {
      controller: Topnav,
      templateUrl: 'app/layout/topnav.html'
  });