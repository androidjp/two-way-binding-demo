var obj = {name:"a", hobby : ["f","b"]};
Object.defineProperty(obj, "name", {
	get : function(){
		console.log("get..")
	},
	set : function(newVal){
		console.log("set.."+newVal);
	}
});

obj.name;
obj.name = "abel";


