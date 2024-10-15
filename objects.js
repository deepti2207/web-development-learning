let person = {
    firstName: "Deepti",
    lastName: "Rai",
    age: 24,
    greet: function() {
      return "Hello " + this.age;
    }
  };
  console.log(person.greet());.