var myApp = angular.module('myApp',[]);

myApp.controller('Mercado', function($scope){
  $scope.lista = []
  $scope.qtElemento = []
  $scope.produtos = ""
  $scope.quantidadeProdutos = ""
    //$scope.lista.push ("teste")
  $scope.enviaProdutos = function(){
    $scope.lista.push ($scope.produtos)
    $scope.qtElemento.push ($scope.quantidadeProdutos)
  }
  $scope.limpaProdutos = function(){
    $scope.lista = []
    $scope.qtElemento = []
  }
})
