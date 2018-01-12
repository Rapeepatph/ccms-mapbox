app.controller('displayMapController', function ($scope, markerFactory, mockupDatas) {
    var framesPerSecond = 30;               //-----------------------------
    var initialOpacity = 1                  //
    var opacity = initialOpacity;           //    initial animate circle  
    var initialRadius = 8;                  //
    var radius = initialRadius;             //
    var maxRadius = 18;                     //-----------------------------

    
    var coordinateMarker = mockupDatas.getCoordinateMarker();
    var paint = {
        "circle-radius": initialRadius,
        "circle-radius-transition": { duration: 0 },
        "circle-opacity-transition": { duration: 0 },
        "circle-color": "#007cbf"
    };
    var paint1 = {
        "circle-radius": initialRadius,
        "circle-color": "#007cbf"
    }
    var obj = markerFactory.newMarker(coordinateMarker, "point", 'circle',paint);
    var map = mockupDatas.getMap();
    map.addControl(new mapboxgl.NavigationControl());           // Add zoom and rotation controls to the map.
    map.on('load', function () {
        map.addLayer(obj);

        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        map.on('mouseenter', 'point', function (e) {                                  //****Do not forget change name depend on marker name
            map.getCanvas().style.cursor = 'pointer';

            popup.setLngLat(e.features[0].geometry.coordinates)
            .setHTML("<strong>" + e.features[0].properties.name + "</strong>")
            .addTo(map);
        });

        map.on('mouseleave', 'point', function () {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });

        map.on('mouseover', 'point', function (e) {
            console.log("mouse over", e);
        });
    })

})