
let address = new Address('a','b','c')

console.log(address);

//Factory Function
function creatAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    }
}

//Constructor function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}