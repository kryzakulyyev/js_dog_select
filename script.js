let dog = {
  name: "Alabay",
  legs: 4,
  color:"black",
  age: 3,
  bark(){
    return "woof woof"
  },
  breed: "Shepherd dog",
  getDogInfo(){
    return "My name is " + this.name + ". I am " + this.calcAge() + " years old in human years which is " + this.age + " years old in dog years"
  },
  
  calcAge(){
  
    if(this.age>=2){
     return humanAge = (2 * 10.5) + (this.age-2)*4;
    }else if (this.age===1){
      return 10.5;
    }
  }
}
console.log(dog.getDogInfo());
