var list1=[{Name:"Galaxy7pro",Id:1,color:"Gold",Price:8000,Company:"samsung",Memory:"16gb",touch:"true",camera:"true",sensor:"true"},{Name:"iphone",Id:2,color:"white",Price:20000,Company:"apple",Memory:"64gb",touch:"true",camera:"true",sensor:"true"},{Name:"gionee1",Id:3,color:"black",Price:9000,Company:"gionee",Memory:"32gb",touch:"true",camera:"true",sensor:"true"},{Name:"Nokiaj4",Id:4,color:"Gold",Price:1500,Company:"nokia",Memory:"2gb",touch:"false",camera:"false",sensor:"false"},{Name:"motorolas",Id:5,color:"blue",Price:2000,Company:"motorola",Memory:"4gb",touch:"true",camera:"true",sensor:"false"},{Name:"htcA25",Id:6,color:"Gold",Price:6000,Company:"htc",Memory:"8gb",touch:"true",camera:"true",sensor:"true"},{Name:"micromax2",Id:7,color:"black",Price:7000,Company:"micromax",Memory:"16gb",touch:"true",camera:"true",sensor:"true"},{Name:"blackberry",Id:8,color:"white",Price:4000,Company:"blackberry",Memory:"8gb",touch:"true",camera:"true",sensor:"false"},{Name:"sony2",Id:9,color:"Gold",Price:3000,Company:"sony",Memory:"8gb",touch:"false",camera:"true",sensor:"false"},{Name:"Mc10",Id:10,color:"white",Price:2500,Company:"LG",Memory:"2gb",touch:"false",camera:"true",sensor:"false"}];
var list2=[{Name:"Dells1",Id:1,color:"Gold",Price:10000,Company:"dell",Memory:"32gb",touch:"true",camera:"true",sensor:"true"},{Name:"lenovo1",Id:2,color:"white",Price:50000,Company:"lenovo",Memory:"64gb",touch:"true",camera:"true",sensor:"true"},{Name:"hp1",Id:3,color:"black",Price:60000,Company:"hp",Memory:"128gb",touch:"true",camera:"true",sensor:"true"},{Name:"sony1",Id:4,color:"Gold",Price:70000,Company:"sony",Memory:"256gb",touch:"true",camera:"true",sensor:"true"},{Name:"apple1",Id:5,color:"Gold",Price:75000,Company:"apple",Memory:"512gb",touch:"true",camera:"true",sensor:"true"},{Name:"gionee1",Id:6,color:"white",Price:86000,Company:"gionee",Memory:"256gb",touch:"true",camera:"true",sensor:"true"},{Name:"blackberry2",Id:7,color:"Gold",Price:94000,Company:"blackberry",Memory:"256gb",touch:"true",camera:"true",sensor:"true"},{Name:"micromax1",Id:8,color:"black",Price:95000,Company:"micromax",Memory:"32gb",touch:"true",camera:"true",sensor:"false"},{Name:"motorola",Id:9,color:"white",Price:110000,Company:"motorola",Memory:"64gb",touch:"true",camera:"true",sensor:"true"},{Name:"lg1",Id:10,color:"Gold",Price:80000,Company:"lg",Memory:"32gb",touch:"true",camera:"true",sensor:"false"}];
var list3=[{Name:"Samsung1",Id:1,color:"Gold",Price:7000,Company:"samsung",Memory:"8gb",touch:"true",camera:"true",sensor:"false"},{Name:"Nokia1",Id:2,color:"white",Price:8000,Company:"nokia",Memory:"16gb",touch:"true",camera:"true",sensor:"true"},{Name:"htc2",Id:3,color:"Gold",Price:9500,Company:"htc",Memory:"32gb",touch:"true",camera:"true",sensor:"false"},{Name:"sony2",Id:4,color:"Gold",Price:10000,Company:"sony",Memory:"64gb",touch:"true",camera:"true",sensor:"true"},{Name:"Apple3",Id:5,color:"white",Price:12000,Company:"apple",Memory:"128gb",touch:"true",camera:"true",sensor:"true"},{Name:"gioneex",Id:6,color:"Gold",Price:17000,Company:"gionee",Memory:"64gb",touch:"true",camera:"true",sensor:"true"},{Name:"blackberrye",Id:7,color:"Gold",Price:20000,Company:"blackberry",Memory:"32gb",touch:"true",camera:"true",sensor:"true"},{Name:"micromax2",Id:8,color:"black",Price:30000,Company:"micromax",Memory:"32gb",touch:"true",camera:"true",sensor:"true"},{Name:"moto1",Id:9,color:"Gold",Price:46000,Company:"motorola",Memory:"16gb",touch:"true",camera:"true",sensor:"false"},{Name:"lgx",Id:10,color:"black",Price:60000,Company:"lg",Memory:"64gb",touch:"true",camera:"true",sensor:"true"}];
$(document).ready(function() {
    $("#filter1").hide();
    $("#filter2").hide();
    $("#filter3").hide();
    showMobileData();
    showLaptopData();
    showTabletData();
    laptopfilter();
    Mobilefilter();
    Tabletfilter();
    Laptoptouch();
    Laptopcamera();
    Laptopsensor();
    Tablettouch();
    Tabletcamera();
    Tabletsensor();
    mobiletouch();
    mobilecamera();
    mobilesensor();
    var x;
    var p;
    var q;
    var r;
    var a;

    function showMobileData() {
        for (var j = 0; j <= 5; j++) {
            $("#" + j).hide()
        }
        $("#row").hide();
        $("#mobile1").click(function() {
            $("#filter1").show();
            $("#row").show();
            for (var i = 0; i < list1.length; i++) {
                var rowDataObj = list1[i];

                document.getElementById("row" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    var getRowHtml = function(rowDataObj) {
        var idHtml = "Id: " + rowDataObj.Id;
        var nameHtml = "  Name: " + rowDataObj.Name;
        var colorHtml = "  Color: " + rowDataObj.color;
        var priceHtml = "  Price: " + rowDataObj.Price;
        var companyHtml = "  Company: " + rowDataObj.Company;
        var memoryHtml = "  Memory: " + rowDataObj.Memory;
        var cameraHtml = "  Camera: " + rowDataObj.camera; //!= false? rowDataObj.camera : '';
        var sensorHtml = "  Sensor: " + rowDataObj.sensor;  //!= false? rowDataObj.sensor: '';
        var touchHtml = "  Touch: " + rowDataObj.touch; //!= false? rowDataObj.touch: '';

        var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;

        return completeRowHtml;
    }

    function showLaptopData() {
        for (var j = 0; j <= 5; j++) {
            $("#" + j).hide()
        }
        $("#rows").hide();
        $("#laptop1").click(function() {
            $("#filter2").show();
            $("#rows").show();
            for (var k = 0; k < list2.length; k++) {
                var rowDataObj = list2[k];
                document.getElementById("rows" + k).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }


    function showTabletData() {
        for (var j = 1; j <= 5; j++) {
            $("#" + j).hide()
        }
        $("#rowss").hide();
        $("#tablet1").click(function() {
            $("#filter3").show();
            $("#rowss").show();
            for (var l = 0; l < list3.length; l++) {
                var rowDataObj = list3[l];
                document.getElementById("rowss" + l).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }



    function Mobilefilter() {

        $("#price").on("change", function() {
            var price = $("#price").val();
            a = _.find(list1, function(val, key) {
                return val.Price == price;
            });
            console.log(a);
            $("#row").hide();
            $("#1").show();
            var idHtml = "Id: " + a.Id;
            var nameHtml = "  Name: " + a.Name;
            var colorHtml = "  Color: " + a.color;
            var priceHtml = "  Price: " + a.Price;
            var companyHtml = "  Company: " + a.Company;
            var memoryHtml = "  Memory: " + a.Memory;
            var cameraHtml = "  Camera: " + a.camera;
            var sensorHtml = "  Sensor: " + a.sensor;
            var touchHtml = "  Touch: " + a.touch;

            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("ok0").innerHTML = completeRowHtml;
            console.log(completeRowHtml);
        });

        $("#company").on("change", function() {
            var cmpany = $("#company").val();
            var b = _.find(list1, function(val, key) {
                return val.Company == cmpany;
            });
            console.log(b);
            $("#row").hide();
            $("#1").show();
            var idHtml = "Id: " + b.Id;
            var nameHtml = "  Name: " + b.Name;
            var colorHtml = "  Color: " + b.color;
            var priceHtml = "  Price: " + b.Price;
            var companyHtml = "  Company: " + b.Company;
            var memoryHtml = "  Memory: " + b.Memory;
            var cameraHtml = "  Camera: " + b.camera;
            var sensorHtml = "  Sensor: " + b.sensor;
            var touchHtml = "  Touch: " + b.touch;

            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("ok0").innerHTML = completeRowHtml;
        });

        $("#memory").on("change", function() {
            var mmory = $("#memory").val();
            var c = _.find(list1, function(val, key) {
                return val.Memory == mmory;
            });
            console.log(c);
            $("#row").hide();
            $("#ok0").show();
            var idHtml = "Id: " + c.Id;
            var nameHtml = "  Name: " + c.Name;
            var colorHtml = "  Color: " + c.color;
            var priceHtml = "  Price: " + c.Price;
            var companyHtml = "  Company: " + c.Company;
            var memoryHtml = "  Memory: " + c.Memory;
            var cameraHtml = "  Camera: " + c.camera;
            var sensorHtml = "  Sensor: " + c.sensor;
            var touchHtml = "  Touch: " + c.touch;

            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("ok0").innerHTML = completeRowHtml;
        });
    }

    function mobiletouch() {
        for (var j = 1; j <= 2; j++) {
            $("#" + j).hide()
        }
        $("#row").hide();
        $("#touch").on("change", function() {
            p = document.getElementById("touch").checked;
            console.log(p);
            x = _.filter(list1, function(val, key) {
                return val.touch == "true";
            });
            console.log(x);
            $("#row").hide();
            $("#okk").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("ok" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function mobilecamera() {
        for (var j = 1; j <= 5; j++) {
            $("#" + j).hide()
        }
        $("#row").hide();
        $("#camera").on("change", function() {
            q = document.getElementById("camera").checked;
            x = _.filter(list1, function(val, key) {
                return val.camera == "true";
            });
            console.log(x);
            $("#row").hide();
            $("#okk").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("ok" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function mobilesensor() {
        for (var j = 1; j <= 5; j++) {
            $("#" + j).hide()
        }
        $("#row").hide();
        $("#sensor").on("change", function() {
            r = document.getElementById("sensor").checked;
            console.log(sensor);
            x = _.filter(list1, function(val, key) {
                return val.sensor == "true";
            });
            console.log(x);
            $("#row").hide();
            $("#okk").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("ok" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function Tabletfilter() {
        $("#price3").on("change", function() {
            var prices = $("#price3").val();
            var m = _.find(list3, function(val, key) {
                return val.Price == prices;
            });
            console.log(m);
            $("#rowss").hide();
            $("#okk0").show();
            var idHtml = "Id: " + m.Id;
            var nameHtml = "  Name: " + m.Name;
            var colorHtml = "  Color: " + m.color;
            var priceHtml = "  Price: " + m.Price;
            var companyHtml = "  Company: " + m.Company;
            var memoryHtml = "  Memory: " + m.Memory;
            var cameraHtml = "  Camera: " + m.camera;
            var sensorHtml = "  Sensor: " + m.sensor;
            var touchHtml = "  Touch: " + m.touch;

            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("okk0").innerHTML = completeRowHtml;
        });


        $("#company2").on("change", function() {
            var cmpnys = $("#company2").val();
            var n = _.find(list3, function(val, key) {
                return val.Company == cmpnys;
            });
            console.log(n);
            $("#rowss").hide();
            $("#okk0").show();
            var idHtml = "Id: " + n.Id;
            var nameHtml = "  Name: " + n.Name;
            var colorHtml = "  Color: " + n.color;
            var priceHtml = "  Price: " + n.Price;
            var companyHtml = "  Company: " + n.Company;
            var memoryHtml = "  Memory: " + n.Memory;
            var cameraHtml = "  Camera: " + n.camera;
            var sensorHtml = "  Sensor: " + n.sensor;
            var touchHtml = "  Touch: " + n.touch;

            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("okk0").innerHTML = completeRowHtml;
        });
        $("#memory2").on("change", function() {
            var memrys = $("#memory2").val();
            var o = _.find(list3, function(val, key) {
                return val.Memory == memrys;
            });
            console.log(o);
            $("#rowss").hide();
            $("#okk0").show();
            var idHtml = "Id: " + o.Id;
            var nameHtml = "  Name: " + o.Name;
            var colorHtml = "  Color: " + o.color;
            var priceHtml = "  Price: " + o.Price;
            var companyHtml = "  Company: " + o.Company;
            var memoryHtml = "  Memory: " + o.Memory;
            var cameraHtml = "  Camera: " + o.camera;
            var sensorHtml = "  Sensor: " + o.sensor;
            var touchHtml = "  Touch: " + o.touch;

            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("okk0").innerHTML = completeRowHtml;
        });

    }

    function Tablettouch() {
        for (var j = 1; j <= 5; j++) {
            $("#" + j).hide()
        }
        $("#rowss").hide();
        $("#touch2").on("change", function() {
            p = document.getElementById("touch2").checked;
            console.log(p);
            x = _.filter(list3, function(val, key) {
                return val.touch == "true";
                console.log(x);
            });
            console.log(x);
            $("#rowss").hide();
             $("#okk").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("okk" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }
   

    function Tabletcamera() {
        for (var j = 1; j <= 5; j++) {
            $("#" + j).hide()
        }

        $("#rowss").hide();
        $("#camera2").on("change", function() {
            q = document.getElementById("camera2").checked;
            console.log(q);
            x = _.filter(list3, function(val, key) {
                return val.camera == "true";
                console.log(x);
            });
            console.log(x);
            $("#rowss").hide();
            $("#okk").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("okk" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function Tabletsensor() {
        for (var j = 1; j <= 5; j++) {
            $("#" + j).hide()
        }

        $("#rowss").hide();
        $("#sensor2").on("change", function() {
            r = document.getElementById("sensor2").checked;
            console.log(p);
            x = _.filter(list3, function(val, key) {
                return val.sensor == "true";
                console.log(x);
            });
            console.log(x);
            $("#rowss").hide();
            $("#okk").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("okk" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function laptopfilter() {
        $("#price2").on("change", function() {
            var pric = $("#price2").val();
            var e = _.find(list2, function(val, key) {
                return val.Price == pric;
            });
            console.log(e);
            $("#rows").hide();
            $("#okks0").show();
            var idHtml = "Id: " + e.Id;
            var nameHtml = "  Name: " + e.Name;
            var colorHtml = "  Color: " + e.color;
            var priceHtml = "  Price: " + e.Price;
            var companyHtml = "  Company: " + e.Company;
            var memoryHtml = "  Memory: " + e.Memory;
            var cameraHtml = "  Camera: " + e.camera;
            var sensorHtml = "  Sensor: " + e.sensor;
            var touchHtml = "  Touch: " + e.touch;

            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("okks0").innerHTML = completeRowHtml;
        });
        $("#company1").on("change", function() {
            var cmpny = $("#company1").val();
            var f = _.find(list2, function(val, key) {
                return val.Company == cmpny;
            });
            console.log(f);
            $("#rows").hide();
            $("#okks0").show();
            var idHtml = "Id: " + f.Id;
            var nameHtml = "  Name: " + f.Name;
            var colorHtml = "  Color: " + f.color;
            var priceHtml = "  Price: " + f.Price;
            var companyHtml = "  Company: " + f.Company;
            var memoryHtml = "  Memory: " + f.Memory;
            var cameraHtml = "  Camera: " + f.camera;
            var sensorHtml = "  Sensor: " + f.sensor;
            var touchHtml = "  Touch: " + f.touch;

            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("okks0").innerHTML = completeRowHtml;
        });

        $("#memory1").on("change", function() {
            var memry = $("#memory1").val();
            var g = _.find(list2, function(val, key) {
                return val.Memory == memry;
            });
            console.log(g);
            $("#rows").hide();
            $("#okk0").show();
            var idHtml = "Id: " + g.Id;
            var nameHtml = "  Name: " + g.Name;
            var colorHtml = "  Color: " + g.color;
            var priceHtml = "  Price: " + g.Price;
            var companyHtml = "  Company: " + g.Company;
            var memoryHtml = "  Memory: " + g.Memory;
            var cameraHtml = "  Camera: " + g.camera;
            var sensorHtml = "  Sensor: " + g.sensor;
            var touchHtml = "  Touch: " + g.touch;
            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("okks0").innerHTML = completeRowHtml;
        });
    }

    function Laptoptouch() {
        for (var j = 1; j <= 5; j++) {
            $("#" + j).hide()
        }
        $("#rows").hide();
        $("#touch1").on("change", function() {
            p = document.getElementById("touch1").checked;
            console.log(p);
            x = _.filter(list2, function(val, key) {
                return val.touch == "true";
                console.log(x);
            });
            console.log(x);
            $("#rows").hide();
            $("#okks").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("okks" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function Laptopcamera() {
        for (var j = 1; j <= 5; j++) {
            $("#" + j).hide()
        }
        $("#rows").hide();
        $("#camera1").on("change", function() {
            q = document.getElementById("camera1").checked;
            console.log(q);
            x = _.filter(list2, function(val, key) {
                return val.camera == "true";
                console.log(x);
            });
            console.log(x);
            $("#rows").hide();
            $("#okks").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("okks" + i).innerHTML = getRowHtml(rowDataObj);

            }
        });
    }

    function Laptopsensor() {
        for (var j = 1; j <= 5; j++) {
            $("#" + j).hide()
        }
        $("#rows").hide();
        $("#sensor1").on("change", function() {
            r = document.getElementById("sensor1").checked;
            console.log(r);
            x = _.filter(list3, function(val, key) {
                return val.sensor == "true";
                console.log(x);
            });
            console.log(x);
            $("#rows").hide();
            $("#okks").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("okks" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }
});