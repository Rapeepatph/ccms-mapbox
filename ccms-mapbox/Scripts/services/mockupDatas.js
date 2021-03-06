﻿app.service('mockupDatas', function () {
    //var Services = [];
   // var idService = 1;
    var Equipment = [
        {
            idArea: 1,
            equipments: [
                {
                    id:'11',
                    name: 'Main Unit'
                },
                {
                    id: '12',
                    name: 'VCCS'
                },
                {
                    id: '13',
                    name: 'Selector'
                },
                {
                    id: '14',
                    name: 'MUX'
                },
                {
                    id: '15',
                    name: 'Antenna'
                },
                {
                    id: '16',
                    name: 'Standby Unit'
                },
                {
                    id: '17',
                    name: 'Satellite RF Terminal'
                },
                {
                    id: '18',
                    name: 'MF-TDMA Satellite Modem'
                },
                {
                    id: '19',
                    name: 'Wireless Link'
                },
                {
                    id: '111',
                    name: 'Multi Access Multiplexer'
                },
                {
                    id: '112',
                    name: 'Core Switch/Router'
                },
                {
                    id: '113',
                    name: 'Access Switch'
                },
                {
                    id: '114',
                    name: 'Firewall'
                },
                {
                    id: '115',
                    name: 'Server'
                },
                {
                    id: '116',
                    name: 'WLAN Controller'
                },
                {
                    id: '117',
                    name: 'WLAN Access Point'
                },
                {
                    id: '118',
                    name: 'UA Terminal'
                },
                {
                    id: '119',
                    name: 'Fibre Optic'
                },
                {
                    id: '120',
                    name: 'NTP'
                },
                {
                    id: '121',
                    name: 'AC / DC Power System'
                },
            
            ]
        },
        {
            idArea: 2,
            equipments: [
                {
                    id: '21',
                    name: 'Transmitter/Receiver'
                },
                {
                    id: '22',
                    name: 'Antenna'
                },
                {
                    id: '23',
                    name: 'CPS'
                },
                {
                    id: '24',
                    name: 'SDP'
                },
                {
                    id: '25',
                    name: 'RPS'
                },
                {
                    id: '26',
                    name: 'CDP'
                },
                {
                    id: '27',
                    name: 'SUP'
                },
                {
                    id: '28',
                    name: 'LCL'
                },
                {
                    id: '29',
                    name: 'GND'
                },
                {
                    id: '30',
                    name: 'COR'
                }
            ]
        },
        {
            idArea: 3,
            equipments: [
                {
                    id: '31',
                    name: 'VOR'
                },
                {
                    id: '32',
                    name: 'DME'
                },
                 {
                     id: '33',
                     name: 'DVOR'
                 },
                {
                    id: '34',
                    name: 'LLZ'
                },
                {
                    id: '35',
                    name: 'Glide Slope'
                },
            ]
        }

    ]
    this.getCoordinateMarker = function () {
        var obj = [
                    {
                        id: 1,
                        name: 'Tower',
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
        ];
        return obj;
}

    this.getMap = function () {
        mapboxgl.accessToken = 'pk.eyJ1IjoicmFwZWVwYXRwaCIsImEiOiJjamFpejVrOGgyMXBxMzNxdTQ5aWdtcTM1In0.XCwwqYiQ2AA9va7j2jUMwg';
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [102.788247, 17.386436], // starting position
            zoom: 15,// starting zoom
            bearing: 28, // bearing in degrees
        });
        return map;

}
    //this.removeService = function (id) {
    //    var item =Services.find(x=>x.id === id);
    //    var indexItem = Services.indexOf(item);
    //    Services.splice(indexItem, 1);
    //    console.log('Services Mock', Services);
    //}
    //this.getServicebyId = function (id) {                 -------------------------
    //    var obj = Services.find(x=>x.id === id);                  move to myCtrl
    //    return obj;                                       -------------------------
    //}


    this.getEquipment = function (id) {
        //var obj = Equipment.find(x=>x.idArea === id)       query equipment by areaId 
        
        var arrayEquip = [];
        Equipment.forEach(function (element) {
            element.equipments.forEach(function (ele) {
                arrayEquip.push(ele);
            })
        })
        var obj = {equipments : arrayEquip};
        return obj;
    }



    //this.getListService = function (areaId) {
    //    var defer = $.Deferred();
    //    var listServices = Services.filter(function (e) {
    //        return e.AreaId == areaId;
    //    })
        
    //    return defer.resolve(listServices);
        
        
    //}
    //this.AddService = function (serviceName, data,areaId) {
    //    var lastArray = Services.length - 1;
        
    //    if (lastArray >= 0) {
    //        idService++;
    //    }
    //    var obj = {
    //        id:idService,
    //        name: serviceName,
    //        dataArray: data,
    //        AreaId: parseInt(areaId)
    //    }
    //    Services.push(obj);
    //    console.log('Services Mock', Services);
    //    return obj;
    //}
    this.generateDiagram = function (inputData,nameofService) {

        var treeData = changeDataToTreeData(inputData);
        generate(treeData, nameofService);
    }

    this.updateDiagram = function (objArray, nameofService) {
        var widthModal = $("#myModal2 .modal-body").width();
        var treeData = changeDataToTreeData(objArray);
        d3.select("svg").remove();
        generate(treeData, nameofService,widthModal);
        return true;
    }
    function changeDataToTreeData(data) {
        var dataMap = data.reduce(function (map, node) {
            map[node.name] = node;
            return map;
        }, {});

        var treeData = [];
        data.forEach(function (node) {
            // add to parent
            var parent = dataMap[node.parent];
            if (parent) {
                // create child array if it doesn't exist
                (parent.children || (parent.children = []))
                 // add node to child array
                 .push(node);
            } else {
                // parent is null or missing
                treeData.push(node);
            }
        });
        return treeData;
    }
    function generate(treeData, nameofService, widthModal) {

        
        if (widthModal<=0)
            widthModal = 1523;
        // ************** Generate the tree diagram	 *****************
        var margin = { top: 20, right: 120, bottom: 20, left: 120 },
            width = widthModal - margin.right - margin.left,
            height = 200 - margin.top - margin.bottom;

        var i = 0,
            duration = 750,
            root;

        var tree = d3.layout.tree()
            .size([height, width]);

        var diagonal = d3.svg.diagonal()
            .projection(function (d) { return [d.y, d.x]; });




        var svg = d3.select("#tree-diagram").append("svg")
            .attr("width", width +margin.right+margin.left)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append("text")
      .attr("class", "title")
      .text('Service Name : '+ nameofService);


        root = treeData[0];
        root.x0 = height / 2;
        root.y0 = 0;

        update(root);

        d3.select(self.frameElement).style("height", "500px");
        function update(source) {

            // Compute the new tree layout.
            var nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);

            // Normalize for fixed-depth.
            nodes.forEach(function (d) { d.y = d.depth * width / nodes.length; });
            // Update the nodes…
            var node = svg.selectAll("g.node")
                .data(nodes, function (d) { return d.id || (d.id = ++i); });

            // Enter any new nodes at the parent's previous position.
            var nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
                .on("click", click);

            nodeEnter.append("circle")
                .attr("r", 1e-6)
                .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

            nodeEnter.append("text")
                .attr("x", function (d) { return d.children || d._children ? -13 : 13; })
                .attr("dy", ".35em")
                .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
                .text(function (d) { return d.name; })
                .style("fill-opacity", 1e-6);

            // Transition nodes to their new position.
            var nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

            nodeUpdate.select("circle")
                .attr("r", 10)
                .style("fill", function (d) {
                    if (d.alarm == "w") return "yellow";
                    return d.alarm == "y" ? "red" : "#fff";
                });

            nodeUpdate.select("text")
                .style("fill-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
                .remove();

            nodeExit.select("circle")
                .attr("r", 1e-6);

            nodeExit.select("text")
                .style("fill-opacity", 1e-6);

            // Update the links…
            var link = svg.selectAll("path.link")
                .data(links, function (d) { return d.target.id; });

            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", function (d) {
                    var o = { x: source.x0, y: source.y0 };
                    return diagonal({ source: o, target: o });
                });

            // Transition links to their new position.
            link.transition()
                .duration(duration)
                .attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(duration)
                .attr("d", function (d) {
                    var o = { x: source.x, y: source.y };
                    return diagonal({ source: o, target: o });
                })
                .remove();

            // Stash the old positions for transition.
            nodes.forEach(function (d) {
                d.x0 = d.x;
                d.y0 = d.y;
            });
        }

        // Toggle children on click.
        function click(d) {
            //if (d.children) {
            //    d._children = d.children;
            //    d.children = null;
            //} else {
            //    d.children = d._children;
            //    d._children = null;

            //    if (d.children == null) {
            //        if (d.alarm == "y")
            //            d.alarm = "";
            //        else
            //            d.alarm = "y";
            //        //-----------------------click at chidren and the status of self and parent nodes will change 
            //        var par = d.parent;
            //        while (par != null) {
            //            var alarmfound = false;
            //            var warnfound = false;
            //            var normalfound = false;
            //            var mainstandby = false;
            //            for (var i = 0; i < par.children.length; i++) {
            //                if (par.children[i].alarm == "y")
            //                    alarmfound = true;
            //                else if (par.children[i].alarm == "w")
            //                    warnfound = true;
            //                else
            //                    normalfound = true;

            //                if (par.children.length > 1 && (par.children[i].name == "Main" || par.children[i].name == "Standby"))
            //                    mainstandby = true;
            //            }
            //            if (mainstandby) {
            //                if (alarmfound && normalfound) par.alarm = "w";
            //                else if (alarmfound) par.alarm = "y";
            //                else par.alarm = "";
            //            }
            //            else {
            //                if (alarmfound) par.alarm = "y";
            //                else if (warnfound) par.alarm = "w";
            //                else par.alarm = "";
            //            }
            //            update(par);
            //            par = par.parent;

            //         //-------------------------------------------------------
            //        }
            //    }
            //}
            if (d.alarm == "y"){
                d.alarm = "";
            }
            else {
                d.alarm = "y";
            }
            update(d);
        }
    }

   
})