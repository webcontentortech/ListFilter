var list1=[{Name:"Galaxy7pro",Id:1,color:"Gold",Price:8000,Company:"Samsung",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"GalaxyJ3",Id:2,color:"white",Price:5000,Company:"Samsung",Memory:"4Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Galaxyz3",Id:3,color:"black",Price:3000,Company:"Samsung",Memory:"2Gb",feature:{touch:"false",camera:"true",sensor:"false"}},{Name:"Nokiaj4",Id:4,color:"Gold",Price:10000,Company:"Nokia",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"NokiaA3",Id:5,color:"blue",Price:7000,Company:"Nokia",Memory:"8Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"htcA25",Id:6,color:"Gold",Price:6000,Company:"htc",Memory:"8Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"htcNeo",Id:7,color:"black",Price:4000,Company:"htc",Memory:"4Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Micromax24",Id:8,color:"white",Price:7000,Company:"Micromax",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"MicromaxE",Id:9,color:"Gold",Price:1000,Company:"Micromax",Memory:"8Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Mc10",Id:10,color:"white",Price:9000,Company:"sony",Memory:"2Gb",feature:{touch:"false",camera:"true",sensor:"false"}}];
var list2=[{Name:"Dells1",Id:1,color:"Gold",Price:50000,Company:"Dell",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Dells3",Id:2,color:"white",Price:70000,Company:"lenovo",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hp1",Id:3,color:"black",Price:75000,Company:"hp",Memory:"128Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hp3",Id:4,color:"Gold",Price:50000,Company:"Acer",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hp4",Id:5,color:"Gold",Price:60000,Company:"hp",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Apple*i",Id:6,color:"white",Price:80000,Company:"Apple",Memory:"256Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Apple5",Id:7,color:"Gold",Price:90000,Company:"Apple",Memory:"256Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Sony2",Id:8,color:"black",Price:40000,Company:"sony",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Sony1",Id:9,color:"white",Price:50000,Company:"sony",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Sony3",Id:10,color:"Gold",Price:60000,Company:"sony",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"false"}}];
var list3=[{Name:"hpT1",Id:1,color:"Gold",Price:15000,Company:"hp",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"hpt2",Id:2,color:"white",Price:30000,Company:"hp",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hpt3",Id:3,color:"Gold",Price:15000,Company:"hp",Memory:"8Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"DellT8",Id:4,color:"Gold",Price:30000,Company:"Dell",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"DellT6",Id:5,color:"white",Price:45000,Company:"Dell",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"AppleT9",Id:6,color:"Gold",Price:60000,Company:"Apple",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"AppleT3",Id:7,color:"Gold",Price:55000,Company:"Apple",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"SonyTu",Id:8,color:"black",Price:40000,Company:"Sony",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"SonyT1",Id:9,color:"Gold",Price:30000,Company:"Sony",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"SonyT3",Id:10,color:"black",Price:40000,Company:"Sony",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}}];

$(document).ready(function(){
    $("#hello11").hide();
    $("#hello12").hide();
    $("#hello13").hide();
    var a;
    var b;
    showMobileData();
    showLaptopData();
    showTabletData();
           
    function showMobileData(){
        for (var j =31; j <=32; j++) {
            $("#"+j).hide()
        }
        $("#m1").click(function(){
            $("#hello11").show();
            for (var i = 0; i < 10; i++) {
                "obj"+i=list1[i];
                document.getElementById("1"+i).innerHTML = "Id:"+"obj"+i.Id+",name:"+"obj"+i.Name+",color:"+"obj"+i.color+",Price:"+"obj"+i.Price+",company:"+"obj"+i.Company+",Memory:"+"obj"+i.Memory+",feature:camera:"+"obj"+i.feature.camera+",sensor:"+"obj"+i.feature.sensor+",touch:"+"obj"+i.feature.touch;
            }     
            });
        } 

    function showLaptopData(){
        $("#l1").click(function(){
            $("#hello12").show();
            for (var j = 0; j < 10; j++) {
            var "ob"+j=list2[j];
                document.getElementById("11"+j).innerHTML = "Id:"+"ob"+j.Id+",name:"+"ob"+j.Name+",color:"+"ob"+j.color+",Price:"+"ob"+j.Price+",company:"+"ob"+j.Company+",Memory:"+"ob"+j.Memory+",feature:camera:"+"ob"+j.feature.camera+",sensor:"+"ob"+j.feature.sensor+",touch:"+"ob"+j.feature.touch;
               
            }    
        });
    }

    function showTabletData(){
        $("#t1").click(function(){
            $("#hello13").show();
            for (var k = 0; k < 10; k++) {
            var "o"+k =list3[k];
                document.getElementById("21"+k).innerHTML = "Id:"+"o"+k.Id+",name:"+"o"+k.Name+",color:"+"o"+k.color+",Price:"+"o"+k.Price+",company:"+"o"+k.Company+",Memory:"+"o"+k.Memory+",feature:camera:"+"o"+k.feature.camera+",touch:"+"o"+k.feature.touch;
               
            }
        });
    }
    $("#mobile").on("change", function(){
        var price=$("#mobile").val();
        a =_.find(list1, function(val, key) { 
            return val.Price == price;
        });
        console.log(a);
        $("#hello14").hide();
        $("#31").show();
        document.getElementById("31").innerHTML= "Id:"+a.Id+",name:"+a.Name+",color:"+a.color+",Price:"+a.Price+",company:"+a.Company+",Memory:"+a.Memory+",feature:camera:"+a.feature.camera+",sensor:"+a.feature.sensor+",touch:"+a.feature.touch;

    });
    $("#company").on("change", function(){
        var cmpany=$("#company").val();
        console.log(cmpany);
        b =_.find(list1, function(val, key) { 
            return val.Company == cmpany; 
        });
        console.log(b);
        $("#hello14").hide();
        $("#31").show();
        document.getElementById("31").innerHTML= "Id:"+b.Id+",name:"+b.Name+",color:"+b.color+",Price:"+b.Price+",company:"+b.Company+",Memory:"+b.Memory+",feature:camera:"+b.feature.camera+",sensor:"+b.feature.sensor+",touch:"+b.feature.touch;
    });


 });


