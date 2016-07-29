var app = angular.module('app', []);

app.controller('BuscaCepController', function ($scope, $http) {
     
    $scope.Endereco = {
        "cep": "",
        "logradouro": "",
        "complemento": "",
        "bairro": "",
        "localidade": "",
        "uf": "",
        "unidade": "",
        "ibge": "",
        "gia": ""
    }

    $scope.carregaCep = function (cep) {
        $http
        .get("https://viacep.com.br/ws/" + cep + "/json/")
        .success(function (data) {
            console.log(data);
            $scope.dados = data;
            console.log(data.cep);
            $scope.Endereco.cep = data.cep;
            $scope.Endereco.logradouro = data.logradouro;
            $scope.Endereco.complemento = data.complemento;
            $scope.Endereco.bairro = data.bairro;
            $scope.Endereco.localidade = data.localidade;
            $scope.Endereco.uf = data.uf;
            $scope.Endereco.unidade = data.unidade;
            $scope.Endereco.ibge = data.ibge;
            $scope.Endereco.gia = data.gia;
        })
         .error(function () {
             alert("Não foi possível carregar os dados");
         });
    }
});