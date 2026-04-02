const student1={
     //key value 
     Rollno:21,
     Name:"Ali",
     class:"CIT",
     contact:"00112233",
      
}
console.log (student1.Name)

student1.user=function(){
  console.log ("Hello world ${this.name}") 

}

console.log(student1.user())

student1.goodbye=function(){
console.log("bye bye" + student1["Name"])
}
console.log (student1.goodbye())
delete student1.goodbye()
console.log(student1)


    

 



