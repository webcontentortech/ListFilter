var list1=[{Name:"Galaxy7pro",Id:1,color:"Gold",Price:8000,Company:"samsung",Memory:"16gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"GalaxyJ3",Id:2,color:"white",Price:5000,Company:"samsung",Memory:"4gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Galaxyz3",Id:3,color:"black",Price:3000,Company:"samsung",Memory:"2gb",feature:{touch:"false",camera:"true",sensor:"false"}},{Name:"Nokiaj4",Id:4,color:"Gold",Price:10000,Company:"nokia",Memory:"16gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"NokiaA3",Id:5,color:"blue",Price:7000,Company:"nokia",Memory:"8gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"htcA25",Id:6,color:"Gold",Price:6000,Company:"htc",Memory:"8gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"htcNeo",Id:7,color:"black",Price:4000,Company:"htc",Memory:"4gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Micromax24",Id:8,color:"white",Price:7000,Company:"micromax",Memory:"16gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"MicromaxE",Id:9,color:"Gold",Price:1000,Company:"micromax",Memory:"8gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Mc10",Id:10,color:"white",Price:9000,Company:"sony",Memory:"2gb",feature:{touch:"false",camera:"true",sensor:"false"}}];
var list2=[{Name:"Dells1",Id:1,color:"Gold",Price:50000,Company:"dell",Memory:"64gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Dells3",Id:2,color:"white",Price:70000,Company:"lenovo",Memory:"32gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hp1",Id:3,color:"black",Price:75000,Company:"hp",Memory:"128gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hp3",Id:4,color:"Gold",Price:60000,Company:"acer",Memory:"64gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hp4",Id:5,color:"Gold",Price:75000,Company:"hp",Memory:"32gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Apple*i",Id:6,color:"white",Price:80000,Company:"apple",Memory:"256gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Apple5",Id:7,color:"Gold",Price:40000,Company:"apple",Memory:"256gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Sony2",Id:8,color:"black",Price:40000,Company:"sony",Memory:"32gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Sony1",Id:9,color:"white",Price:50000,Company:"sony",Memory:"64gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Sony3",Id:10,color:"Gold",Price:60000,Company:"sony",Memory:"32gb",feature:{touch:"true",camera:"true",sensor:"false"}}];
var list3=[{Name:"hpT1",Id:1,color:"Gold",Price:15000,Company:"hp",Memory:"16gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"hpt2",Id:2,color:"white",Price:30000,Company:"hp",Memory:"32gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hpt3",Id:3,color:"Gold",Price:15000,Company:"hp",Memory:"8gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"DellT8",Id:4,color:"Gold",Price:30000,Company:"dell",Memory:"64gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"DellT6",Id:5,color:"white",Price:45000,Company:"dell",Memory:"32gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"AppleT9",Id:6,color:"Gold",Price:60000,Company:"apple",Memory:"64gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"AppleT3",Id:7,color:"Gold",Price:55000,Company:"apple",Memory:"32gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"SonyTu",Id:8,color:"black",Price:40000,Company:"sony",Memory:"32gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"SonyT1",Id:9,color:"Gold",Price:30000,Company:"sony",Memory:"16gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"SonyT3",Id:10,color:"black",Price:40000,Company:"sony",Memory:"64gb",feature:{touch:"true",camera:"true",sensor:"true"}}];

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
    Allfilter();

    function showMobileData() {
        for (var j = 1; j <= 2; j++) {
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
        var cameraHtml = "  Camera: " + rowDataObj.feature.camera;
        var sensorHtml = "  Sensor: " + rowDataObj.feature.sensor;
        var touchHtml = "  Touch: " + rowDataObj.feature.touch;

        var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;

        return completeRowHtml;
    }

    function showLaptopData() {
        for (var j = 3; j <= 4; j++) {
            $("#" + j).hide()
        }
        $("#rows").hide();
        $("#laptop1").click(function() {
            $("#filter2").show();
            $("#rows").show();
            for (var k = 0; k < list2.length; k++) {
                var rowDataObj1 = list2[k];
                document.getElementById("rows" + k).innerHTML = getRowHtml1(rowDataObj1);
            }
        });
    }

    var getRowHtml1 = function(rowDataObj1) {
        var idHtml = "Id: " + rowDataObj1.Id;
        var nameHtml = "  Name: " + rowDataObj1.Name;
        var colorHtml = "  Color: " + rowDataObj1.color;
        var priceHtml = "  Price: " + rowDataObj1.Price;
        var companyHtml = "  Company: " + rowDataObj1.Company;
        var memoryHtml = "  Memory: " + rowDataObj1.Memory;
        var cameraHtml = "  Camera: " + rowDataObj1.feature.camera;
        var sensorHtml = "  Sensor: " + rowDataObj1.feature.sensor;
        var touchHtml = "  Touch: " + rowDataObj1.feature.touch;

        var completeRowHtml1 = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;

        return completeRowHtml1;
    }

    function showTabletData() {
        for (var j = 5; j <= 6; j++) {
            $("#" + j).hide()
        }
        $("#rowss").hide();
        $("#tablet1").click(function() {
            $("#filter3").show();
            $("#rowss").show();
            for (var l = 0; l < list3.length; l++) {
                var rowDataObj2 = list3[l];
                document.getElementById("rowss" + l).innerHTML = getRowHtml2(rowDataObj2);
            }
        });
    }

    var getRowHtml2 = function(rowDataObj2) {
        var idHtml = "Id: " + rowDataObj2.Id;
        var nameHtml = "  Name: " + rowDataObj2.Name;
        var colorHtml = "  Color: " + rowDataObj2.color;
        var priceHtml = "  Price: " + rowDataObj2.Price;
        var companyHtml = "  Company: " + rowDataObj2.Company;
        var memoryHtml = "  Memory: " + rowDataObj2.Memory;
        var cameraHtml = "  Camera: " + rowDataObj2.feature.camera;
        var sensorHtml = "  Sensor: " + rowDataObj2.feature.sensor;
        var touchHtml = "  Touch: " + rowDataObj2.feature.touch;

        var completeRowHtml2 = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;

        return completeRowHtml2;
    }

    function Mobilefilter() {
        $("#price").on("change", function() {
            var price = $("#price").val();
            var a = _.find(list1, function(val, key) {
                return val.Price == price;
            });
            console.log(a);
            $("#row").hide();
            $("#1").show();
            document.getElementById("1").innerHTML = "Id:" + a.Id + ",name:" + a.Name + ",color:" + a.color + ",Price:" + a.Price + ",company:" + a.Company + ",Memory:" + a.Memory + ",feature:camera:" + a.feature.camera + ",sensor:" + a.feature.sensor + ",touch:" + a.feature.touch;
        });
        $("#company").on("change", function() {
            var cmpany = $("#company").val();
            var b = _.find(list1, function(val, key) {
                return val.Company == cmpany;
            });
            console.log(b);
            $("#row").hide();
            $("#1").show();
            document.getElementById("1").innerHTML = "Id:" + b.Id + ",name:" + b.Name + ",color:" + b.color + ",Price:" + b.Price + ",company:" + b.Company + ",Memory:" + b.Memory + ",feature:camera:" + b.feature.camera + ",sensor:" + b.feature.sensor + ",touch:" + b.feature.touch;
        })
        $("#memory").on("change", function() {
            var mmory = $("#memory").val();
            var c = _.find(list1, function(val, key) {
                return val.Memory == mmory;
            });
            console.log(c);
            $("#row").hide();
            $("#1").show();
            document.getElementById("1").innerHTML = "Id:" + c.Id + ",name:" + c.Name + ",color:" + c.color + ",Price:" + c.Price + ",company:" + c.Company + ",Memory:" + c.Memory + ",feature:camera:" + c.feature.camera + ",sensor:" + c.feature.sensor + ",touch:" + c.feature.touch;
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
            $("#5").show();
            document.getElementById("5").innerHTML = "Id:" + m.Id + ",name:" + m.Name + ",color:" + m.color + ",Price:" + m.Price + ",company:" + m.Company + ",Memory:" + m.Memory + ",feature:camera:" + m.feature.camera + ",sensor:" + m.feature.sensor + ",touch:" + m.feature.touch;
        });
        $("#company2").on("change", function() {
            var cmpnys = $("#company2").val();
            var n = _.find(list3, function(val, key) {
                return val.Company == cmpnys;
            });
            console.log(n);
            $("#rowss").hide();
            $("#5").show();
            document.getElementById("5").innerHTML = "Id:" + n.Id + ",name:" + n.Name + ",color:" + n.color + ",Price:" + n.Price + ",company:" + n.Company + ",Memory:" + n.Memory + ",feature:camera:" + n.feature.camera + ",sensor:" + n.feature.sensor + ",touch:" + n.feature.touch;
        })
        $("#memory2").on("change", function() {
            var memrys = $("#memory2").val();
            var o = _.find(list3, function(val, key) {
                return val.Memory == memrys;
            });
            console.log(o);
            $("#rowss").hide();
            $("#5").show();
            document.getElementById("5").innerHTML = "Id:" + o.Id + ",name:" + o.Name + ",color:" + o.color + ",Price:" + o.Price + ",company:" + o.Company + ",Memory:" + o.Memory + ",feature:camera:" + o.feature.camera + ",sensor:" + o.feature.sensor + ",touch:" + o.feature.touch;
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
            $("#3").show();
            document.getElementById("3").innerHTML = "Id:" + e.Id + ",name:" + e.Name + ",color:" + e.color + ",Price:" + e.Price + ",company:" + e.Company + ",Memory:" + e.Memory + ",feature:camera:" + e.feature.camera + ",sensor:" + e.feature.sensor + ",touch:" + e.feature.touch;
        });
        $("#company1").on("change", function() {
            var cmpny = $("#company1").val();
            var f = _.find(list2, function(val, key) {
                return val.Company == cmpny;
            });
            console.log(f);
            $("#rows").hide();
            $("#3").show();
            document.getElementById("3").innerHTML = "Id:" + f.Id + ",name:" + f.Name + ",color:" + f.color + ",Price:" + f.Price + ",company:" + f.Company + ",Memory:" + f.Memory + ",feature:camera:" + f.feature.camera + ",sensor:" + f.feature.sensor + ",touch:" + f.feature.touch;
        })
        $("#memory1").on("change", function() {
            var memry = $("#memory1").val();
            var g = _.find(list2, function(val, key) {
                return val.Memory == memry;
            });
            console.log(g);
            $("#rows").hide();
            $("#3").show();
            document.getElementById("3").innerHTML = "Id:" + g.Id + ",name:" + g.Name + ",color:" + g.color + ",Price:" + g.Price + ",company:" + g.Company + ",Memory:" + g.Memory + ",feature:camera:" + g.feature.camera + ",sensor:" + g.feature.sensor + ",touch:" + g.feature.touch;
        });
    }

    function Allfilter(){
         $("#price2,#company1,#memory1").on("change", function() {
            var allmob=$("#price2,#company1,#memory").val();
            console.log(allmob);
            });

    }




});