var myApp = angular.module('myApp',[]);

myApp.controller('Mercado', function($scope){
  $scope.lista=[]
  $scope.qtElemento=[]
  IDProduto=1
  $scope.produtos=""
  $scope.quantidadeProdutos=""
  $scope.pesagemProduto=""
  var validaMarcado=

  //funcionalidade do botão de incrementar um produto
  $scope.enviaProdutos = function(){
    //valida se o produto já foi inserido
    if($scope.lista.length == 0){
      $scope.lista.push({produto: $scope.produtos, quantidade: $scope.quantidadeProdutos, medida: $scope.pesagemProduto})
      console.log(IDProduto)
      IDProduto++
    }else {
      for(var i = 0; i < $scope.lista.length; i++){
        if ($scope.lista[i].produto == $scope.produtos && $scope.lista[i].medida == $scope.pesagemProduto){
        //incrementa a quantidade.
          $scope.lista[i].quantidade += $scope.quantidadeProdutos
        }else {
          $scope.lista.push({produto: $scope.produtos, quantidade: $scope.quantidadeProdutos, medida: $scope.pesagemProduto})
          console.log(IDProduto)
          IDProduto++
          break
        }
      }
    }
  }

  //funcionalidade de limpar os arrays (a página)
  $scope.limpaProdutos = function(){
    $scope.lista = []
    $scope.qtElemento = []
  }
})
