var x= new String("hello")
var y= "hello"

var preson ={
    firstName : "hamza",
    lastName: "jack",
    age: 20,
    fullName: function(){
        return this .firstName +""+ lastName
    }
}
console.log(person,"we are logging person object")
console.log(person.firstName, "we are logging")
person.firstName= "dave"
console.log(person.firstName,"we are logging personfirst name after changing it");
