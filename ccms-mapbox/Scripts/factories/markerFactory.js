app.factory('markerFactory', function () {
    return {

        newMarker: function (arrayGeo) {
            var objArrayLatLng = [];
            if (arrayGeo.length > 0) {
                for (i = 0; i < arrayGeo.length; i++) {
                    if (arrayGeo[i].lat != null && arrayGeo[i].lng != null) {
                        var objLatLng ={
                            "type": "Feature",
                            "properties": {
                                id:arrayGeo[i].id,
                                name:arrayGeo[i].name
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    arrayGeo[i].lng,
                                    arrayGeo[i].lat
                                ]
                            }
                        }
                        objArrayLatLng.push(objLatLng);
                    }
                }
                var objNewMarker = {
                    "id": "symbols",
                    "type": "symbol",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": objArrayLatLng
                        }
                    },
                    "layout": {
                        "icon-image": "cat",
                        "icon-size": 0.05
                    }
                }
                return objNewMarker;
            }
        }
    }
    
});