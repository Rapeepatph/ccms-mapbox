app.controller('dataCtrl', function ($scope, mockupDatas) {
    //$scope.obj = mockupDatas.getEquipment(1)
    //$scope.choices = [{ parent: null }];
    //$scope.serviceName = '';
    
    //$scope.addNewChoice = function () {
    //    var newItemNo = $scope.choices.length-1;
    //    $scope.choices.push({ 'parent':  $scope.choices[newItemNo].name });
    //};

    //$scope.removeChoice = function () {
    //    var lastItem = $scope.choices.length - 1;
    //    $scope.choices.splice(lastItem);
    //};
   
    //console.log($scope.obj);

    // var data = [
    //{ "name": "Level 2: A", "parent": "Top Level" },
    //{ "name": "Top Level", "parent": "null" },
    //{ "name": "Son of A", "parent": "Level 2: A" },
    //{ "name": "Daughter of A", "parent": "Level 2: A" },
    //{ "name": "Level 2: B", "parent": "Top Level" }
    // ];
    // var data2 = [
    // { "name": "Level 2: A", "parent": "Top Level" },
    // { "name": "Top Level", "parent": "null" },
    // {"parent": "Level 2: A", "name": "Son of A",  }
    // ];

     $scope.updateDiagram = function () {
         var areaId = document.getElementById('areaId').value;
         var input = changeArrayFormat($scope.choices);
         mockupDatas.updateDiagram(input, $scope.serviceName);
         $scope.choices = [{ parent: null }];
         mockupDatas.AddService($scope.serviceName,input,areaId)
     }
     //mockupDatas.generateDiagram(data,'test0');

     //var changeArrayFormat = function (array) {
     //    var output = [];
     //    $scope.choices.forEach(function (element) {
     //        var obj = { "name": element.name, "parent": element.parent }
     //        output.push(obj);
     //    });
     //    return output;
     //}


})