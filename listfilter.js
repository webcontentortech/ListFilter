var List1=[{Name:"Galaxy7pro",Id:1,color:"Gold",Price:15000,Company:"Samsung",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"GalaxyJ3",Id:3,color:"white",Price:5000,Company:"Samsung",Memory:"4Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Galaxyz3",Id:5,color:"black",Price:3000,Company:"Samsung",Memory:"2Gb",feature:{touch:"false",camera:"true",sensor:"false"}},{Name:"Nokiaj4",Id:2,color:"Gold",Price:15000,Company:"Nokia",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"NokiaA3",Id:4,color:"blue",Price:7000,Company:"Nokia",Memory:"8Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"htcA25",Id:6,color:"Gold",Price:15000,Company:"htc",Memory:"8Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"htcNeo",Id:7,color:"black",Price:5000,Company:"htc",Memory:"4Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Micromax24",Id:8,color:"white",Price:7000,Company:"Micromax",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"MicromaxE",Id:10,color:"Gold",Price:5000,Company:"Micromax",Memory:"8Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Mc10",Id:9,color:"white",Price:3000,Company:"Micromax",Memory:"2Gb",feature:{touch:"false",camera:"true",sensor:"false"}}];
var List2=[{Name:"Dells1",Id:1,color:"Gold",Price:50000,Company:"Dell",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Dells3",Id:3,color:"white",Price:70000,Company:"Dell",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hp1",Id:5,color:"black",Price:75000,Company:"hp",Memory:"128Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hp3",Id:7,color:"Gold",Price:50000,Company:"hp",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hp4",Id:9,color:"Gold",Price:60000,Company:"hp",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Apple*i",Id:2,color:"white",Price:80000,Company:"Apple",Memory:"256Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Apple5",Id:4,color:"Gold",Price:90000,Company:"Apple",Memory:"256Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Sony2",Id:6,color:"black",Price:40000,Company:"sony",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"Sony1",Id:8,color:"white",Price:50000,Company:"sony",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"Sony3",Id:10,color:"Gold",Price:60000,Company:"sony",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"false"}}];
var List3=[{Name:"hpT1",Id:1,color:"Gold",Price:15000,Company:"hp",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"hpt2",Id:3,color:"white",Price:30000,Company:"hp",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"hpt3",Id:5,color:"Gold",Price:15000,Company:"hp",Memory:"8Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"DellT8",Id:7,color:"Gold",Price:30000,Company:"Dell",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"DellT6",Id:9,color:"white",Price:45000,Company:"Dell",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"AppleT9",Id:2,color:"Gold",Price:60000,Company:"Apple",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"AppleT3",Id:4,color:"Gold",Price:55000,Company:"Apple",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"SonyTu",Id:6,color:"black",Price:40000,Company:"Sony",Memory:"32Gb",feature:{touch:"true",camera:"true",sensor:"true"}},{Name:"SonyT1",Id:8,color:"Gold",Price:30000,Company:"Sony",Memory:"16Gb",feature:{touch:"true",camera:"true",sensor:"false"}},{Name:"SonyT3",Id:10,color:"black",Price:40000,Company:"Sony",Memory:"64Gb",feature:{touch:"true",camera:"true",sensor:"true"}}];

$(document).ready(function(){
	showMobileData();
	function showMobileData(){
		$("#m1").click(function(){
			var obj=List1[0];
			console.log(obj);
			document.getElementById("1").innerHTML ="Id:1"+"name :"+obj.Name;
		});
	}		 	
});	 	

	 
	
	
	
	
			
            	
		
	
    





