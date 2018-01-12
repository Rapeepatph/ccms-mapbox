app.factory('markerFactory', function () {
    return {

        newMarker: function (arrayGeo,id,type,paintObj) {
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
                if (type == 'symbol') {
                    var objNewMarker = {
                        "id": id,
                        "type": type,
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
                else if (type == 'circle') {
                    var objNewMarker = {
                        "id": id,
                        "type": type,
                        "source": {
                            "type": "geojson",
                            "data": {
                                "type": "FeatureCollection",
                                "features": objArrayLatLng
                            }
                        },
                        "paint": paintObj,
                    }
                    return objNewMarker;
                }
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