var myApp = angular.module('myApp',[]);

myApp.controller('Mercado', function($scope){
  $scope.lista=[]
  $scope.qtElemento=[]
  IDProduto=1
  $scope.produtos=""
  $scope.quantidadeProdutos=""
  $scope.pesagemProduto=""
  naoTem = false

  //funcionalidade do botão de incrementar um produto
  $scope.enviaProdutos = function(){
    //valida se o produto já foi inserido
    if(!$scope.lista.length){
      $scope.lista.push({produto: $scope.produtos, quantidade: $scope.quantidadeProdutos, medida: $scope.pesagemProduto, IDProd: IDProduto})
      console.log(IDProduto)
      IDProduto++
    }else{
      for(var i = 0; i < $scope.lista.length; i++){
        if ($scope.lista[i].produto == $scope.produtos && $scope.lista[i].medida == $scope.pesagemProduto){
        //incrementa a quantidade.
        $scope.lista[i].quantidade += $scope.quantidadeProdutos
        console.log("aqui funfa")
        naoTem = true
        }else{
          if(naoTem == true){
            naoTem = true
          }else{
          naoTem = false
          }
        }
      }
      if(naoTem === false){
      $scope.lista.push({produto: $scope.produtos, quantidade: $scope.quantidadeProdutos, medida: $scope.pesagemProduto, IDProd: IDProduto})
      }else{
        naoTem = false
      }
    }
  }

  //funcionalidade de limpar os arrays (a página)
  $scope.limpaProdutos = function(){
    $scope.lista = []
    $scope.qtElemento = []
  }
})
