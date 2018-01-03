﻿app.controller('myCtrl', function ($scope,$q, markerFactory, mockupDatas) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.AreaId = 0;
    $scope.AreaName = '';
    $scope.Services = [];

    $("#myModal1").draggable({
        handle: ".modal-header"
    });

    $scope.removeService = function (id) {
       
        var item = $scope.Services.find(x=>x.id === id);
        var indexItem = $scope.Services.indexOf(item);
        $scope.Services.splice(indexItem, 1);
        mockupDatas.removeService(id);
        updateListService($scope.AreaId);
        console.log('Service ctrl', $scope.Services);
    }
    $scope.gotoService = function (id) {
        
        //var data = mockupDatas.getServicebyId(id);
        //mockupDatas.updateDiagram(data.dataArray, data.name);
        //$("#myModal2").modal();
        var list = [];
        list.push(mockupDatas.getServicebyId(id))
        $q.all(list).then(function success(res) {
            
            var unlock  = mockupDatas.updateDiagram(res[0].dataArray, res[0].name);
            if (unlock) {
                openModal('#myModal2');
            }
        })
    }
    //-----------------------Add New Service-------------------------------------------

    $scope.choices = [{ parent: null }];
    $scope.serviceName = '';

    $scope.addNewChoice = function () {
        var newItemNo = $scope.choices.length - 1;
        $scope.choices.push({ 'parent': $scope.choices[newItemNo].name });
    };

    $scope.removeChoice = function () {
        if ($scope.choices.length > 1) {
            var lastItem = $scope.choices.length - 1;
            $scope.choices.splice(lastItem);
        }
    };
    var changeArrayFormat = function (array) {
        var output = [];
        $scope.choices.forEach(function (element) {
            var obj = { "name": element.name, "parent": element.parent }
            output.push(obj);
        });
        return output;
    }

    $scope.updateDiagram = function () {
        var input = changeArrayFormat($scope.choices);
        $scope.choices = [{ parent: null }];
        // --------------------- update service 2 time----------------------------------------------------------------------
        var obj = mockupDatas.AddService($scope.serviceName, input, $scope.AreaId)  //1. send update service to server
        $scope.Services.push(obj);                                                  // 2. update service to this controller
        //-------------------------------------------------------------------------------------------------------------------
        $scope.listServices = $scope.Services.filter(function (e) {
            return e.AreaId == $scope.AreaId;
        });
        console.log('Service ctrl', $scope.Services);
    }

    
    //---------------------------------------------------------


    $scope.updateStatus = function (serviceId) {
        var item = $scope.Services.find(x=>x.id === serviceId);
        if (item.dataArray[0].alarm == "y") {
            item.dataArray[0].alarm = "";
        }
        else {
            item.dataArray[0].alarm = "y";
        }


        mockupDatas.updateDiagram(item.dataArray, item.name);
    }

    
    var updateListService = function () {
        $scope.listServices = [];
        $scope.listServices = $scope.Services.filter(function (e) {
            return e.AreaId == $scope.AreaId;
        });
        console.log('listService', $scope.listServices);
    }

    var openModal = function (name) {
        $(name).modal('show');
    }


    //-----------------------------------Create map---------------------------------------------------------------------------------
    mapboxgl.accessToken = 'pk.eyJ1IjoicmFwZWVwYXRwaCIsImEiOiJjamFpejVrOGgyMXBxMzNxdTQ5aWdtcTM1In0.XCwwqYiQ2AA9va7j2jUMwg';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [102.788247, 17.386436], // starting position
        zoom: 15 ,// starting zoom
        bearing: 28, // bearing in degrees
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
    
    var obj = markerFactory.newMarker([
         {
             id:1,
             name:'Tower',
             lng: 102.777419,
             lat: 17.386123
         },
         {
             id: 2,
             name: 'SSR',
             lng: 102.769973,
             lat: 17.387600
         },
         {
             id: 3,
             name: 'VOR',
             lng: 102.774959,
             lat: 17.384789
         },
         {
             id: 4,
             name: 'Localizer',
             lng: 102.771181,
             lat: 17.394792
         },
         {
             id: 5,
             name: 'Glide Slope',
             lng: 102.798872,
             lat: 17.382417
         }
    ])
    map.on('load', function () {
        // Add a symbol layer.
        map.loadImage('/images/city.png', function (error, image) {
            if (error) throw error;
            map.addImage('cat', image);
            map.addLayer(obj);
        })
        //map.addLayer(obj);

        // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
        map.on('click', 'symbols', function (e) {
            $scope.AreaName = e.features[0].properties.name;
            var list = [];
            list.push
            console.log('click',e);
            //map.flyTo({ center: e.features[0].geometry.coordinates });
            $scope.AreaId = e.features[0].properties.id;
            console.log('areaIdd', $scope.AreaId);
            $('#collapseExample').collapse('hide');
            $q.all(list).then(function success(res) {
                updateListService();
                $scope.obj = mockupDatas.getEquipment(e.features[0].properties.id)
                openModal('#myModal1');
            })
            console.log('listServices', $scope.listServices);
            
        });

        // Create a popup, but don't add it to the map yet.
        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });


        // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
        map.on('mouseenter', 'symbols', function (e) {
            map.getCanvas().style.cursor = 'pointer';

            popup.setLngLat(e.features[0].geometry.coordinates)
            .setHTML("<strong>" +e.features[0].properties.name+"</strong>")
            .addTo(map);
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'symbols', function () {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
        map.on('mouseover', 'symbols', function (e) {
            console.log("mouse over",e);
        });
    });
});

