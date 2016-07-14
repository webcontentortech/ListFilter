var list1=[{Name:"Galaxy7pro",Id:1,color:"Gold",Price:8000,Company:"Samsung",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"GalaxyJ3",Id:2,color:"white",Price:5000,Company:"Samsung",Memory:"4Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Galaxyz3",Id:3,color:"black",Price:3000,Company:"Samsung",Memory:"2Gb",feature:{touch:"false",camera:"true",sensor:"false"}},{Name:"Nokiaj4",Id:4,color:"Gold",Price:10000,Company:"Nokia",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"NokiaA3",Id:5,color:"blue",Price:7000,Company:"Nokia",Memory:"8Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"htcA25",Id:6,color:"Gold",Price:6000,Company:"htc",Memory:"8Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"htcNeo",Id:7,color:"black",Price:5000,Company:"htc",Memory:"4Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Micromax24",Id:8,color:"white",Price:7000,Company:"Micromax",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"MicromaxE",Id:9,color:"Gold",Price:5000,Company:"Micromax",Memory:"8Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Mc10",Id:10,color:"white",Price:3000,Company:"Micromax",Memory:"2Gb",feature:{touch:"false",camera:"true",sensor:"false"}}];
var list2=[{Name:"Dells1",Id:1,color:"Gold",Price:50000,Company:"Dell",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Dells3",Id:2,color:"white",Price:70000,Company:"Dell",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hp1",Id:3,color:"black",Price:75000,Company:"hp",Memory:"128Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hp3",Id:4,color:"Gold",Price:50000,Company:"hp",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hp4",Id:5,color:"Gold",Price:60000,Company:"hp",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Apple*i",Id:6,color:"white",Price:80000,Company:"Apple",Memory:"256Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Apple5",Id:7,color:"Gold",Price:90000,Company:"Apple",Memory:"256Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Sony2",Id:8,color:"black",Price:40000,Company:"sony",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Sony1",Id:9,color:"white",Price:50000,Company:"sony",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Sony3",Id:10,color:"Gold",Price:60000,Company:"sony",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"false"}}];
var list3=[{Name:"hpT1",Id:1,color:"Gold",Price:15000,Company:"hp",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"hpt2",Id:2,color:"white",Price:30000,Company:"hp",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hpt3",Id:3,color:"Gold",Price:15000,Company:"hp",Memory:"8Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"DellT8",Id:4,color:"Gold",Price:30000,Company:"Dell",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"DellT6",Id:5,color:"white",Price:45000,Company:"Dell",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"AppleT9",Id:6,color:"Gold",Price:60000,Company:"Apple",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"AppleT3",Id:7,color:"Gold",Price:55000,Company:"Apple",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"SonyTu",Id:8,color:"black",Price:40000,Company:"Sony",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"SonyT1",Id:9,color:"Gold",Price:30000,Company:"Sony",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"SonyT3",Id:10,color:"black",Price:40000,Company:"Sony",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}}];

$(document).ready(function(){
    $("#hello11").hide();
    $("#hello12").hide();
    $("#hello13").hide();
    var a;
    showMobileData();
    showLaptopData();
    showTabletData();
    
    function showMobileData(){
        for (var j =31; j <=32; j++) {
            $("#"+j).hide()
        }
        $("#m1").click(function(){
            $("#hello11").show();
            var obj=list1[0];
            var obj1=list1[1];
            var obj2=list1[2];
            var obj3=list1[3];
            var obj4=list1[4];
            var obj5=list1[5];
            var obj6=list1[6];
            var obj7=list1[7];
            var obj8=list1[8];
            var obj9=list1[9];
                document.getElementById("1").innerHTML = "Id:"+obj.Id+",name:"+obj.Name+",color:"+obj.color+",Price:"+obj.Price+",company:"+obj.Company+",Memory:"+obj.Memory+",feature:camera:"+obj.feature.camera+",sensor:"+obj.feature.sensor+",touch:"+obj.feature.touch;
                document.getElementById("2").innerHTML = "Id:"+obj1.Id+",name:"+obj1.Name+",color:"+obj1.color+",Price:"+obj1.Price+",company:"+obj1.Company+",Memory:"+obj1.Memory+",feature:camera:"+obj1.feature.camera+",touch:"+obj1.feature.touch;
                document.getElementById("3").innerHTML = "Id:"+obj2.Id+",name:"+obj2.Name+",color:"+obj2.color+",Price:"+obj2.Price+",company:"+obj2.Company+",Memory:"+obj2.Memory+",feature:camera:"+obj2.feature.camera;
                document.getElementById("4").innerHTML = "Id:"+obj3.Id+",name:"+obj3.Name+",color:"+obj3.color+",Price:"+obj3.Price+",company:"+obj3.Company+",Memory:"+obj3.Memory+",feature:camera:"+obj3.feature.camera+",sensor:"+obj3.feature.sensor+",touch:"+obj3.feature.touch;
                document.getElementById("5").innerHTML = "Id:"+obj4.Id+",name:"+obj4.Name+",color:"+obj4.color+",Price:"+obj4.Price+",company:"+obj4.Company+",Memory:"+obj4.Memory+",feature:camera:"+obj4.feature.camera+",touch:"+obj4.feature.touch;
                document.getElementById("6").innerHTML = "Id:"+obj5.Id+",name:"+obj5.Name+",color:"+obj5.color+",Price:"+obj5.Price+",company:"+obj5.Company+",Memory:"+obj5.Memory+",feature:camera:"+obj5.feature.camera+",sensor:"+obj5.feature.sensor+",touch:"+obj5.feature.touch;
                document.getElementById("7").innerHTML = "Id:"+obj6.Id+",name:"+obj6.Name+",color:"+obj6.color+",Price:"+obj6.Price+",company:"+obj6.Company+",Memory:"+obj6.Memory+",feature:camera:"+obj6.feature.camera+",touch:"+obj6.feature.touch;
                document.getElementById("8").innerHTML = "Id:"+obj7.Id+",name:"+obj7.Name+",color:"+obj7.color+",Price:"+obj7.Price+",company:"+obj7.Company+",Memory:"+obj7.Memory+",feature:camera:"+obj7.feature.camera+",sensor:"+obj7.feature.sensor+",touch:"+obj7.feature.touch;
                document.getElementById("9").innerHTML = "Id:"+obj8.Id+",name:"+obj8.Name+",color:"+obj8.color+",Price:"+obj8.Price+",company:"+obj8.Company+",Memory:"+obj8.Memory+",feature:camera:"+obj8.feature.camera+",touch:"+obj8.feature.touch;
                document.getElementById("10").innerHTML ="Id:"+obj9.Id+",name:"+obj9.Name+",color:"+obj9.color+",Price:"+obj9.Price+",company:"+obj9.Company+",Memory:"+obj9.Memory+",feature:camera:"+obj9.feature.camera;
            });
        } 

    function showLaptopData(){
        $("#l1").click(function(){
            $("#hello12").show();
            var ob=list2[0];
            var ob1=list2[1];
            var ob2=list2[2];
            var ob3=list2[3];
            var ob4=list2[4];
            var ob5=list2[5];
            var ob6=list2[6];
            var ob7=list2[7];
            var ob8=list2[8];
            var ob9=list2[9];
                document.getElementById("11").innerHTML = "Id:"+ob.Id+",name:"+ob.Name+",color:"+ob.color+",Price:"+ob.Price+",company:"+ob.Company+",Memory:"+ob.Memory+",feature:camera:"+ob.feature.camera+",sensor:"+ob.feature.sensor+",touch:"+ob.feature.touch;
                document.getElementById("12").innerHTML = "Id:"+ob1.Id+",name:"+ob1.Name+",color:"+ob1.color+",Price:"+ob1.Price+",company:"+ob1.Company+",Memory:"+ob1.Memory+",feature:camera:"+ob1.feature.camera+",sensor:"+ob1.feature.sensor+",touch:"+ob1.feature.touch;
                document.getElementById("13").innerHTML = "Id:"+ob2.Id+",name:"+ob2.Name+",color:"+ob2.color+",Price:"+ob2.Price+",company:"+ob2.Company+",Memory:"+ob2.Memory+",feature:camera:"+ob2.feature.camera+",sensor:"+ob2.feature.sensor+",touch:"+ob2.feature.touch;
                document.getElementById("14").innerHTML = "Id:"+ob3.Id+",name:"+ob3.Name+",color:"+ob3.color+",Price:"+ob3.Price+",company:"+ob3.Company+",Memory:"+ob3.Memory+",feature:camera:"+ob3.feature.camera+",sensor:"+ob3.feature.sensor+",touch:"+ob3.feature.touch;
                document.getElementById("15").innerHTML = "Id:"+ob4.Id+",name:"+ob4.Name+",color:"+ob4.color+",Price:"+ob4.Price+",company:"+ob4.Company+",Memory:"+ob4.Memory+",feature:camera:"+ob4.feature.camera+",sensor:"+ob4.feature.sensor+",touch:"+ob4.feature.touch;
                document.getElementById("16").innerHTML = "Id:"+ob5.Id+",name:"+ob5.Name+",color:"+ob5.color+",Price:"+ob5.Price+",company:"+ob5.Company+",Memory:"+ob5.Memory+",feature:camera:"+ob5.feature.camera+",sensor:"+ob5.feature.sensor+",touch:"+ob5.feature.touch;
                document.getElementById("17").innerHTML = "Id:"+ob6.Id+",name:"+ob6.Name+",color:"+ob6.color+",Price:"+ob6.Price+",company:"+ob6.Company+",Memory:"+ob6.Memory+",feature:camera:"+ob6.feature.camera+",sensor:"+ob6.feature.sensor+",touch:"+ob6.feature.touch;
                document.getElementById("18").innerHTML = "Id:"+ob7.Id+",name:"+ob7.Name+",color:"+ob7.color+",Price:"+ob7.Price+",company:"+ob7.Company+",Memory:"+ob7.Memory+",feature:camera:"+ob7.feature.camera+",touch:"+ob7.feature.touch;
                document.getElementById("19").innerHTML = "Id:"+ob8.Id+",name:"+ob8.Name+",color:"+ob8.color+",Price:"+ob8.Price+",company:"+ob8.Company+",Memory:"+ob8.Memory+",feature:camera:"+ob8.feature.camera+",sensor:"+ob8.feature.sensor+",touch:"+ob8.feature.touch;
                document.getElementById("20").innerHTML = "Id:"+ob9.Id+",name:"+ob9.Name+",color:"+ob9.color+",Price:"+ob9.Price+",company:"+ob9.Company+",Memory:"+ob9.Memory+",feature:camera:"+ob9.feature.camera+",touch:"+ob9.feature.touch;
        });
    }

    function showTabletData(){
        $("#t1").click(function(){
            $("#hello13").show();
            var o =list3[0];
            var o1=list3[1];
            var o2=list3[2];
            var o3=list3[3];
            var o4=list3[4];
            var o5=list3[5];
            var o6=list3[6];
            var o7=list3[7];
            var o8=list3[8];
            var o9=list3[9];
                document.getElementById("21").innerHTML = "Id:"+o.Id+",name:"+o.Name+",color:"+o.color+",Price:"+o.Price+",company:"+o.Company+",Memory:"+o.Memory+",feature:camera:"+o.feature.camera+",touch:"+o.feature.touch;
                document.getElementById("22").innerHTML = "Id:"+o1.Id+",name:"+o1.Name+",color:"+o1.color+",Price:"+o1.Price+",company:"+o1.Company+",Memory:"+o1.Memory+",feature:camera:"+o1.feature.camera+",sensor:"+o1.feature.sensor+",touch:"+o1.feature.touch;
                document.getElementById("23").innerHTML = "Id:"+o2.Id+",name:"+o2.Name+",color:"+o2.color+",Price:"+o2.Price+",company:"+o2.Company+",Memory:"+o2.Memory+",feature:camera:"+o2.feature.camera+",touch:"+o2.feature.touch;
                document.getElementById("24").innerHTML = "Id:"+o3.Id+",name:"+o3.Name+",color:"+o3.color+",Price:"+o3.Price+",company:"+o3.Company+",Memory:"+o3.Memory+",feature:camera:"+o3.feature.camera+",sensor:"+o3.feature.sensor+",touch:"+o3.feature.touch;
                document.getElementById("25").innerHTML = "Id:"+o4.Id+",name:"+o4.Name+",color:"+o4.color+",Price:"+o4.Price+",company:"+o4.Company+",Memory:"+o4.Memory+",feature:camera:"+o4.feature.camera+",sensor:"+o4.feature.sensor+",touch:"+o4.feature.touch;
                document.getElementById("26").innerHTML = "Id:"+o5.Id+",name:"+o5.Name+",color:"+o5.color+",Price:"+o5.Price+",company:"+o5.Company+",Memory:"+o5.Memory+",feature:camera:"+o5.feature.camera+",sensor:"+o5.feature.sensor+",touch:"+o5.feature.touch;
                document.getElementById("27").innerHTML = "Id:"+o6.Id+",name:"+o6.Name+",color:"+o6.color+",Price:"+o6.Price+",company:"+o6.Company+",Memory:"+o6.Memory+",feature:camera:"+o6.feature.camera+",sensor:"+o6.feature.sensor+",touch:"+o6.feature.touch;
                document.getElementById("28").innerHTML = "Id:"+o7.Id+",name:"+o7.Name+",color:"+o7.color+",Price:"+o7.Price+",company:"+o7.Company+",Memory:"+o7.Memory+",feature:camera:"+o7.feature.camera+",sensor:"+o7.feature.sensor+",touch:"+o7.feature.touch;
                document.getElementById("29").innerHTML = "Id:"+o8.Id+",name:"+o8.Name+",color:"+o8.color+",Price:"+o8.Price+",company:"+o8.Company+",Memory:"+o8.Memory+",feature:camera:"+o8.feature.camera+",touch:"+o8.feature.touch;
                document.getElementById("30").innerHTML = "Id:"+o9.Id+",name:"+o9.Name+",color:"+o9.color+",Price:"+o9.Price+",company:"+o9.Company+",Memory:"+o9.Memory+",feature:camera:"+o9.feature.camera+",sensor:"+o6.feature.sensor+",touch:"+o9.feature.touch;
        });
    }
    $("#mobile").on("change", function(){
        var price=$("#mobile").val();
        console.log(price);
        a =_.find(list1, function(val, key) { 
            return val.Price == price; 
        });
        console.log(a);
        $("#hello14").hide();
        $("#31").show();
        document.getElementById("31").innerHTML= "Id:"+a.Id+",name:"+a.Name+",color:"+a.color+",Price:"+a.Price+",company:"+a.Company+",Memory:"+a.Memory+",feature:camera:"+a.feature.camera+",sensor:"+a.feature.sensor+",touch:"+a.feature.touch;;
    });
});     
