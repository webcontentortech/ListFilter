var list1=[{Name:"Galaxy7pro",Id:1,color:"Gold",Price:8000,Company:"samsung",Memory:"16gb",touch:true,camera:true,sensor:true},{Name:"iphone",Id:2,color:"white",Price:20000,Company:"apple",Memory:"16gb",touch:true,camera:true,sensor:true},{Name:"gionee1",Id:3,color:"black",Price:9000,Company:"gionee",Memory:"32gb",touch:true,camera:true,sensor:true},{Name:"Nokiaj4",Id:4,color:"Gold",Price:1500,Company:"nokia",Memory:"2gb",touch:false,camera:false,sensor:false},{Name:"motorolas",Id:5,color:"blue",Price:2000,Company:"motorola",Memory:"4gb",touch:true,camera:true,sensor:false},{Name:"htcA25",Id:6,color:"Gold",Price:6000,Company:"htc",Memory:"8gb",touch:true,camera:true,sensor:true},{Name:"micromax2",Id:7,color:"black",Price:7000,Company:"micromax",Memory:"32gb",touch:true,camera:true,sensor:true},{Name:"blackberry",Id:8,color:"white",Price:4000,Company:"blackberry",Memory:"8gb",touch:true,camera:true,sensor:false},{Name:"sony2",Id:9,color:"Gold",Price:3000,Company:"sony",Memory:"4gb",touch:false,camera:true,sensor:false},{Name:"Mc10",Id:10,color:"white",Price:2500,Company:"LG",Memory:"2gb",touch:false,camera:true,sensor:false}];
var list2=[{Name:"Dells1",Id:1,color:"Gold",Price:10000,Company:"dell",Memory:"32gb",touch:true,camera:true,sensor:true},{Name:"lenovo1",Id:2,color:"white",Price:50000,Company:"lenovo",Memory:"64gb",touch:true,camera:true,sensor:true},{Name:"hp1",Id:3,color:"black",Price:60000,Company:"hp",Memory:"128gb",touch:true,camera:true,sensor:true},{Name:"sony1",Id:4,color:"Gold",Price:70000,Company:"sony",Memory:"256gb",touch:true,camera:true,sensor:true},{Name:"apple1",Id:5,color:"Gold",Price:75000,Company:"apple",Memory:"512gb",touch:true,camera:true,sensor:true},{Name:"gionee1",Id:6,color:"white",Price:86000,Company:"gionee",Memory:"256gb",touch:true,camera:true,sensor:true},{Name:"blackberry2",Id:7,color:"Gold",Price:94000,Company:"blackberry",Memory:"32gb",touch:true,camera:true,sensor:true},{Name:"micromax1",Id:8,color:"black",Price:95000,Company:"micromax",Memory:"512gb",touch:true,camera:true,sensor:false},{Name:"motorola",Id:9,color:"white",Price:110000,Company:"motorola",Memory:"64gb",touch:true,camera:true,sensor:true},{Name:"lg1",Id:10,color:"Gold",Price:80000,Company:"lg",Memory:"128gb",touch:true,camera:true,sensor:false}];
var list3=[{Name:"Samsung1",Id:1,color:"Gold",Price:7000,Company:"samsung",Memory:"8gb",touch:true,camera:true,sensor:false},{Name:"Nokia1",Id:2,color:"white",Price:8000,Company:"nokia",Memory:"16gb",touch:true,camera:true,sensor:true},{Name:"htc2",Id:3,color:"Gold",Price:9500,Company:"htc",Memory:"32gb",touch:true,camera:true,sensor:false},{Name:"sony2",Id:4,color:"Gold",Price:10000,Company:"sony",Memory:"64gb",touch:true,camera:true,sensor:true},{Name:"Apple3",Id:5,color:"white",Price:12000,Company:"apple",Memory:"128gb",touch:true,camera:true,sensor:true},{Name:"gioneex",Id:6,color:"Gold",Price:17000,Company:"gionee",Memory:"8gb",touch:true,camera:true,sensor:true},{Name:"blackberrye",Id:7,color:"Gold",Price:20000,Company:"blackberry",Memory:"16gb",touch:true,camera:true,sensor:true},{Name:"micromax2",Id:8,color:"black",Price:30000,Company:"micromax",Memory:"32gb",touch:true,camera:true,sensor:true},{Name:"moto1",Id:9,color:"Gold",Price:46000,Company:"motorola",Memory:"64gb",touch:true,camera:true,sensor:false},{Name:"lgx",Id:10,color:"black",Price:60000,Company:"lg",Memory:"128gb",touch:true,camera:true,sensor:true}];

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
    mobilenoneprice();
    var x;
    var p;
    var q;
    var r;
    var a;
    var cameraAvailable;
    var sensorAvailable;
    var touchAvailable;


    function showMobileData() {
        $("#div2").hide();
        $("#row").hide();
        $("#mobile1").click(function() {
            $("#filter1").show();
            $("#row").show();
            for (var i = 0; i < list1.length; i++) {
                var rowDataObj = list1[i];
                document.getElementById("row" + i).innerHTML = getRowHtml(rowDataObj);
               //console.log(getRowHtml(rowDataObj));
            }
        });
    }

    var getRowHtml = function(rowDataObj) {
        cameraAvailable = rowDataObj.camera ? "Yes" : "No";
        //console.log('In getRowHtml for camera:: ', rowDataObj.camera, cameraAvailable);
        sensorAvailable = rowDataObj.sensor ? "Yes" : "No";
        touchAvailable = rowDataObj.touch ? "Yes" : "No";


        var idHtml = "Id: " + rowDataObj.Id;
        var nameHtml = "  Name: " + rowDataObj.Name;
        var colorHtml = "  Color: " + rowDataObj.color;
        var priceHtml = "  Price: " + rowDataObj.Price;
        var companyHtml = "  Company: " + rowDataObj.Company;
        var memoryHtml = "  Memory: " + rowDataObj.Memory;
        var cameraHtml = "  Camera: " + cameraAvailable ;
        var sensorHtml = "  Sensor: " + sensorAvailable;
        var touchHtml = "  Touch: " + touchAvailable;

        var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;

        return completeRowHtml;
    }

    function showLaptopData() {
        $("#div1").hide();
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
            $("#ok").hide();
            $("#div4").hide();
            $("#div5").hide();
            $("#div2").show();
            cameraAvailable = a.camera ? "Yes" : "No";
            sensorAvailable = a.sensor ? "Yes" : "No";
            touchAvailable = a.touch ? "Yes" : "No";
            var idHtml = "Id: " + a.Id;
            var nameHtml = "  Name: " + a.Name;
            var colorHtml = "  Color: " + a.color;
            var priceHtml = "  Price: " + a.Price;
            var companyHtml = "  Company: " + a.Company;
            var memoryHtml = "  Memory: " + a.Memory;
            var cameraHtml = "  Camera: " + cameraAvailable;
            var sensorHtml = "  Sensor: " + sensorAvailable;
            var touchHtml = "  Touch: " + touchAvailable;

            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("div2").innerHTML = completeRowHtml;
            console.log(completeRowHtml);
        });

        $("#company").on("change", function() {
            var cmpany = $("#company").val();
            a  = _.find(list1, function(val, key) {
                return val.Company == cmpany;
            });
            console.log(a);
            $("#row").hide();
            $("#ok").hide();
             $("#div4").hide();
            $("#div5").hide();
            $("#div2").show();
            cameraAvailable = a.camera ? "Yes" : "No";
            sensorAvailable = a.sensor ? "Yes" : "No";
            touchAvailable = a.touch ? "Yes" : "No";
            var idHtml = "Id: " + a.Id;
            var nameHtml = "  Name: " + a.Name;
            var colorHtml = "  Color: " + a.color;
            var priceHtml = "  Price: " + a.Price;
            var companyHtml = "  Company: " + a.Company;
            var memoryHtml = "  Memory: " + a.Memory;
            var cameraHtml = "  Camera: " + cameraAvailable;
            var sensorHtml = "  Sensor: " + sensorAvailable;
            var touchHtml = "  Touch: " + touchAvailable;

            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("div2").innerHTML = completeRowHtml;
        });

        $("#memory").on("change", function() {
            var mmory = $("#memory").val();
            a  = _.filter(list1, function(val, key) {
                return val.Memory == mmory;
            });
            console.log(a);
            $("#row").hide();
            $("#ok").hide();
             $("#div4").show();
            $("#div5").show();
            $("#div2").hide();
            cameraAvailable = a.camera ? "Yes" : "No";
            sensorAvailable = a.sensor ? "Yes" : "No";
            touchAvailable = a.touch ? "Yes" : "No";
            var idHtml = "Id: " + a.Id;
            var nameHtml = "  Name: " + a.Name;
            var colorHtml = "  Color: " + a.color;
            var priceHtml = "  Price: " + a.Price;
            var companyHtml = "  Company: " + a.Company;
            var memoryHtml = "  Memory: " + a.Memory;
            var cameraHtml = "  Camera: " + cameraAvailable;
            var sensorHtml = "  Sensor: " + sensorAvailable ;
            var touchHtml = "  Touch: " + touchAvailable;
            for (var l = 0; l < a.length; l++) {
                var rowDataObj = a[l];
            }
            for (var i = 4; i <= 5; i++) {
                var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
                document.getElementById("div" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });

    }



    function mobiletouch() {
       $("#div2").hide();
      $("#row").hide();
        $("#touch").on("change", function() {
            p = document.getElementById("touch").checked;
           console.log(p);
           x = _.filter(list1, function(val, key) {
               return val.touch == p;
            });
           console.log(x);
            $("#row").hide();
            $("#div4").hide();
            $("#div5").hide();
           $("#ok").show();
           for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("ok" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function mobilecamera() {
        $("#div2").hide();
        $("#row").hide();
        $("#camera").on("change", function() {
            q = document.getElementById("camera").checked;
            x = _.filter(list1, function(val, key) {
                return val.camera == q;
            });
            console.log(x);
            $("#row").hide();
             $("#div4").hide();
            $("#div5").hide();
            $("#ok").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("ok" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function mobilesensor() {
        $("#div2").hide();
        $("#row").hide();
        $("#sensor").on("change", function() {
            r = document.getElementById("sensor").checked;
            console.log(sensor);
            x = _.filter(list1, function(val, key) {
                return val.sensor == r;
            });
            console.log(x);
            $("#row").hide();
             $("#div4").hide();
            $("#div5").hide();
            $("#ok").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("ok" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function Tabletfilter() {
        $("#price3").on("change", function() {
            var prices = $("#price3").val();
            a = _.find(list3, function(val, key) {
                return val.Price == prices;
            });
            console.log(a);
            $("#rowss").hide();
            $("#okk").hide();
             $("#div8").hide();
            $("#div9").hide();
            $("#div3").show();
            cameraAvailable = a.camera ? "Yes" : "No";
            sensorAvailable = a.sensor ? "Yes" : "No";
            touchAvailable = a.touch ? "Yes" : "No";
            var idHtml = "Id: " + a.Id;
            var nameHtml = "  Name: " + a.Name;
            var colorHtml = "  Color: " + a.color;
            var priceHtml = "  Price: " + a.Price;
            var companyHtml = "  Company: " + a.Company;
            var memoryHtml = "  Memory: " + a.Memory;
            var cameraHtml = "  Camera: " +  cameraAvailable;
            var sensorHtml = "  Sensor: " + sensorAvailable;
            var touchHtml = "  Touch: " + touchAvailable;

            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("div3").innerHTML = completeRowHtml;
        });


        $("#company2").on("change", function() {
            var cmpnys = $("#company2").val();
            a = _.find(list3, function(val, key) {
                return val.Company == cmpnys;
            });
            console.log(a);
            $("#rowss").hide();
            $("#okk").hide();
             $("#div8").hide();
            $("#div9").hide();
            $("#div3").show();
            cameraAvailable = a.camera ? "Yes" : "No";
            sensorAvailable = a.sensor ? "Yes" : "No";
            touchAvailable = a.touch ? "Yes" : "No";
            var idHtml = "Id: " + a.Id;
            var nameHtml = "  Name: " + a.Name;
            var colorHtml = "  Color: " + a.color;
            var priceHtml = "  Price: " + a.Price;
            var companyHtml = "  Company: " + a.Company;
            var memoryHtml = "  Memory: " + a.Memory;
            var cameraHtml = "  Camera: " +  cameraAvailable;
            var sensorHtml = "  Sensor: " + sensorAvailable;
            var touchHtml = "  Touch: " + touchAvailable;

            var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
            document.getElementById("div3").innerHTML = completeRowHtml;
        });
        $("#memory2").on("change", function() {
            var memrys = $("#memory2").val();
            a = _.filter(list3, function(val, key) {
                return val.Memory == memrys;
            });
            console.log(a);
            $("#rowss").hide();
            $("#okk").hide();
            $("#div8").show();
            $("#div9").show();
            $("#div3").hide();
            cameraAvailable = a.camera ? "Yes" : "No";
            sensorAvailable = a.sensor ? "Yes" : "No";
            touchAvailable = a.touch ? "Yes" : "No";
            var idHtml = "Id: " + a.Id;
            var nameHtml = "  Name: " + a.Name;
            var colorHtml = "  Color: " + a.color;
            var priceHtml = "  Price: " + a.Price;
            var companyHtml = "  Company: " + a.Company;
            var memoryHtml = "  Memory: " + a.Memory;
            var cameraHtml = "  Camera: " + cameraAvailable;
            var sensorHtml = "  Sensor: " + sensorAvailable;
            var touchHtml = "  Touch: " + touchAvailable;
            for (var l = 0; l < a.length; l++) {
                var rowDataObj = a[l];
            }
            for (var i = 8; i <= 9; i++) {

                var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
                document.getElementById("div" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });

    }

    function Tablettouch() {
        $("#rowss").hide();
        $("#touch2").on("change", function() {
            p = document.getElementById("touch2").checked;
            console.log(p);
            x = _.filter(list3, function(val, key) {
                return val.touch == p;
                console.log(x);
            });
            console.log(x);
            $("#rowss").hide();
            $("#okk").show();
             $("#div8").hide();
            $("#div9").hide();
            $("#div1").hide();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("okk" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }


    function Tabletcamera() {
        $("#rowss").hide();
        $("#camera2").on("change", function() {
            q = document.getElementById("camera2").checked;
            console.log(q);
            x = _.filter(list3, function(val, key) {
                return val.camera == q;
                console.log(x);
            });
            console.log(q);
            $("#rowss").hide();
            $("#okk").show();
             $("#div8").hide();
            $("#div9").hide();
            $("#div1").hide();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("okk" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function Tabletsensor() {
        $("#rowss").hide();
        $("#sensor2").on("change", function() {
            r = document.getElementById("sensor2").checked;
            console.log(p);
            x = _.filter(list3, function(val, key) {
                return val.sensor == r;
                console.log(x);
            });
            console.log(x);
            $("#rowss").hide();
            $("#okk").show();
            $("#div8").hide();
            $("#div9").hide();
            $("#div1").hide();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("okk" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function laptopfilter() {
        $("#price2").on("change", function() {
            var pric = $("#price2").val();
            a = _.find(list2, function(val, key) {
                return val.Price == pric;
            });
            console.log(a);
            $("#rows").hide();
            $("#okks").hide();
            $("#div6").hide();
            $("#div7").hide();
            $("#div1").show();
            cameraAvailable = a.camera ? "Yes" : "No";
            sensorAvailable = a.sensor ? "Yes" : "No";
            touchAvailable = a.touch ? "Yes" : "No";
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
            document.getElementById("div1").innerHTML = completeRowHtml;
        });
        $("#company1").on("change", function() {
            var cmpny = $("#company1").val();
            a = _.find(list2, function(val, key) {
                return val.Company == cmpny;
            });
            console.log(a);
            $("#rows").hide();
            $("#okks").hide();
            $("#div6").hide();
            $("#div7").hide();
            $("#div1").show();
            cameraAvailable = a.camera ? "Yes" : "No";
            sensorAvailable = a.sensor ? "Yes" : "No";
            touchAvailable = a.touch ? "Yes" : "No";
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
            document.getElementById("div1").innerHTML = completeRowHtml;
        });

        $("#memory1").on("change", function() {
            var memry = $("#memory1").val();
            a = _.filter(list2, function(val, key) {
                return val.Memory == memry;
            });
            console.log(a);
            $("#rows").hide();
            $("#okks").hide();
            $("#div6").show();
            $("#div7").show();
            $("#div1").hide();
            cameraAvailable = a.camera ? "Yes" : "No";
            sensorAvailable = a.sensor ? "Yes" : "No";
            touchAvailable = a.touch ? "Yes" : "No";
            var idHtml = "Id: " + a.Id;
            var nameHtml = "  Name: " + a.Name;
            var colorHtml = "  Color: " + a.color;
            var priceHtml = "  Price: " + a.Price;
            var companyHtml = "  Company: " + a.Company;
            var memoryHtml = "  Memory: " + a.Memory;
            var cameraHtml = "  Camera: " + a.camera;
            var sensorHtml = "  Sensor: " + a.sensor;
            var touchHtml = "  Touch: " + a.touch;
            for (var l = 0; l < a.length; l++) {
                var rowDataObj = a[l];
            }
            for (var i = 6; i <= 7; i++) {

                var completeRowHtml = idHtml + nameHtml + colorHtml + priceHtml + companyHtml + memoryHtml + cameraHtml + sensorHtml + touchHtml;
                document.getElementById("div" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function Laptoptouch() {
        $("#rows").hide();
        $("#touch1").on("change", function() {
            p = document.getElementById("touch1").checked;
            console.log(p);
            x = _.filter(list2, function(val, key) {
                return val.touch == p;
                console.log(x);
            });
            console.log(x);
            $("#rows").hide();
            $("#div1").hide();
             $("#div6").hide();
            $("#div7").hide();
            $("#okks").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("okks" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }

    function Laptopcamera() {
        $("#rows").hide();
        $("#camera1").on("change", function() {
            q = document.getElementById("camera1").checked;
            console.log(q);
            x = _.filter(list2, function(val, key) {
                return val.camera == q;
                console.log(x);
            });
            console.log(x);
            $("#rows").hide();
            $("#div1").hide();
             $("#div6").hide();
            $("#div7").hide();
            $("#okks").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("okks" + i).innerHTML = getRowHtml(rowDataObj);

            }
        });
    }

    function Laptopsensor() {
        $("#rows").hide();
        $("#sensor1").on("change", function() {
            r = document.getElementById("sensor1").checked;
            console.log(r);
            x = _.filter(list3, function(val, key) {
                return val.sensor == r;
                console.log(x);
            });
            console.log(x);
            $("#rows").hide();
            $("#div1").hide();
             $("#div6").hide();
            $("#div7").hide();
            $("#okks").show();
            for (var i = 0; i < x.length; i++) {
                var rowDataObj = x[i];
                document.getElementById("okks" + i).innerHTML = getRowHtml(rowDataObj);
            }
        });
    }
           
    function mobilenoneprice(){
         $("#price").on("change", function() {
            var p = $("#price").val();
           if(p == undefined){
            showMobileData();
            console.log("jhjhgkgh");
           }
            });

    }


});