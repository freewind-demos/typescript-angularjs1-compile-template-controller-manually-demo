import angular, {ICompileService, IRootScopeService} from 'angular';

const helloModule = angular.module('hello', ['ng'])
  .controller('helloController', ($scope) => {
    $scope.hello = 'Hello AngularJS!!!';
  })

const $injector = angular.injector([helloModule.name]);


$injector.invoke(($compile: ICompileService, $rootScope: IRootScopeService) => {
  const template = `
    <div ng-controller="helloController">
      <input type="text" ng-model="hello" />
      <hr/>
      {{ hello }}
    </div>`;
  const $dom = $compile(template)($rootScope)
  // necessary to calculate the expressions
  $rootScope.$digest();

  document.getElementById('main')!.appendChild($dom[0]);
})
