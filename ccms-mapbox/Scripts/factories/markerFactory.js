app.factory('markerFactory', function () {
    return {

        newMarker: function (arrayGeo,paintObj,id) {
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
                    "id": id,
                    "type": "symbol",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": objArrayLatLng
                        }
                    },
                    //"paint": paintObj,
                    "layout": {
                        "icon-image": "cat",
                        "icon-size": 0.05
                    }
                }
                return objNewMarker;
            }
        },

        pointsMarker: function (arrayGeo) {
            var objArrayLatLng = [];
            if (arrayGeo.length > 0) {
                for (i = 0; i < arrayGeo.length; i++) {
                    if (arrayGeo[i].lat != null && arrayGeo[i].lng != null) {
                        var objLatLng = {
                            "type": "Feature",
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
            }
            return objArrayLatLng;
        }  
    }
    
});