
//a. write a constructor for the class movie,
class Tamilmovie {
    constructor(title,studio,rating){
        this.title =title;
        this.studio =studio;
        this.rating = rating ;
    }
    Title(){
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio(){
        console.log(`The studio that made this moviie "${this.title}" is  "${this.studio}"`);
    
    }
    Rating(){
        console.log(`The rating of the movie "${this.title}" is - "${this.rating}"`);
    }
}
let movie1 = new Tamilmovie("Dada","olympia movies","PG13")
movie1.Title();
movie1.Studio();
movie1.Rating();

console.log("----------------------------------")
class kannadamovie{
    constructor(title,studio,rating){
        this.title =title;
        this.studio =studio;
        this.rating = rating ;
    }
    Title(){
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio(){
        console.log(`The studio that made this moviie "${this.title}" is  "${this.studio}"`);
    
    }
    Rating(){
        console.log(`The rating of the movie "${this.title}" is - "${this.rating}"`);
    }
}
let movie2 = new kannadamovie("KGF","Hombale Films","PG")
movie2.Title();
movie2.Studio();
movie2.Rating();

console.log("----------------------------------")

class telugumovie {
    constructor(title,studio,rating){
        this.title =title;
        this.studio =studio;
        this.rating = rating ;
    }
    Title(){
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio(){
        console.log(`The studio that made this moviie "${this.title}" is  "${this.studio}"`);
    
    }
    Rating(){
        console.log(`The rating of the movie "${this.title}" is - "${this.rating}"`);
    }
}
class movienew extends telugumovie{
    getPG(){
        console.log(`only PG rating movies is "${this.title}" rating is "${this.rating}"`);
    }
}
let movie3 = new telugumovie("RRR","DVV Entertainment","PG13")
movie3.Title();
movie3.Studio();
movie3.Rating();

console.log("-------2nd question--------")
 


class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    toString(radius = this.radius) {
        this.radius = radius;
        return `after converting to string ${(this.radius).toString()+(this.color).toString()}`
    }
    circle() {
        return `color is ${this.color} and radius is ${this.radius}`;
    }
    circle(radius) {
        this.radius = radius;
        return `radius is ${this.radius}`;
    }
    circle(radius, color) {
        this.radius = radius;
        this.color = color;
        return `the radius is ${this.radius} and color is ${this.color}`;
    }
    setRadius(radius = 1.0) {
        this.radius = radius;
    }
    getRadius() {
        return `the radius by get and set is ${this.radius}`;
    }
    setColor(color = "red") {
        this.color = color;
    }
    getColor() {
        return `the color by get and set is ${this.color}`;
    }
    getArea() {
        return `the area is ${(this.radius)*(this.radius)*4}`;
    }
    getCircumference() {
        return `the circumference is ${(this.radius)+(Math.PI)}`;
    }
}
let cir = new Circle(6, "Green");
console.log(cir);
console.log(cir.circle());
console.log(cir.circle(5));
console.log(cir.circle(4, "white"));
console.log(cir.getRadius());
cir.setColor();
console.log(cir.getColor());
console.log(cir.toString(6));
cir.setRadius();
console.log(cir.getArea());
console.log(cir.getCircumference());


console .log ("----3rd question-----")


class person {
    constructor(Name,Father_Name,Mother_Name,Gender,Age,Address,Mobile_No,Email,Languages_known) {
    this.Name = Name ;
    this.Father_Name = Father_Name ;
    this.Mother_Name = Mother_Name;
    this.Gender = Gender; 
    this.Age=Age
    this.Address = Address ;
    this.Mobile_No = Mobile_No; ;
    this.Email = Email;
    this.Languages_known=Languages_known;
    }
    person_name() {
    return `my name is ${this.Name}`;
    }
    person_father_name() {
    return `my father name is ${this.Father_Name}`;
    }
    person_mother_name() {
    return `my mother name is ${this.Mother_Name}`;
    }
    person_gender() {
    return `i am a ${this.Gender}`;
    }
    person_age() {
        return `my age is ${this.Age}`;
        }
    person_address() {
    return `my address is ${this.Address}`;
    }
    person_mobile_no() {
    return `my mobile_no is ${this.Mobile_No}`;
    }
    person_Email() {
    return `my email id is ${this.Email}`;
    }
    person_languages_known() {
        return `languages known is ${this.Languages_known}`;
        }
    }
    
    const person_obj = new person("kukila","singaravelu","nirmala","female","20","Thanjavur","8220351692","kukilasingaram@gmail.com","Tamil,English");
    console.log(person_obj.person_name());
    console.log(person_obj.person_father_name());
    console.log(person_obj.person_mother_name());
    console.log(person_obj.person_gender());
    console.log(person_obj.person_age());
    console.log(person_obj.person_address());
    console.log(person_obj.person_mobile_no());
    console.log(person_obj.person_Email());
    console.log(person_obj.person_languages_known());
    


console.log("----4 th question---")

class Uber {
    constructor(BaseFare=15,CostPerMile=2,CostPerMinute=1,BookingFee=10,time=1,mile=2){
    this.BaseFare=BaseFare;
    this.CostPerMile=CostPerMile
    this.CostPerMinute=CostPerMinute;
    this.BookingFee=BookingFee;
    this.time=time;
    this.mile=time;
    }
    totalPrice(time=this.time , mile=this.mile){
        console.log(this.BaseFare)+(this.BookingFee)+
        (this.CostPerMinute)+(this.time)+(this.mile)
    }
}
let bike = new Uber();
bike.totalPrice(10,100); 
bike.totalPrice(15,20);

