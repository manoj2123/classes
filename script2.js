//3. Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("Manoj", "Kumar",25, "B.com", "manojkumarg2123@gmail.com", 8978667890, "Coimbatore");
let person2 = new Person("Saranya","Mohan", 24, "Doctor", "dindan23@gmail.com", 7890654321, "chennai");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());