
function Person(){
	this.getMethods = function(obj){
		console.log(Object.getOwnPropertyNames(obj).filter(function (p) {
			return typeof obj[p] === 'function';
		})
		)
	}
}
var x = [1,2,3,4];
var xluis = new Person();
xluis.getMethods(String);
