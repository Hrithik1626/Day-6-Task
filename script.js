// //3:Write a “person” class to hold all the details.
class Person{
    constructor(name,age,gender,section,department){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.section=section;
        this.department=department;
    }
        
    }
    const person1=new Person("Hrithik",24,"male","A","Biomaths");
    console.log(person1.name);
    console.log(person1.age);
    console.log(person1.gender);
    console.log(person1.section);
    console.log(person1.department);

   // 1:a;
    class Movie{
        constructor(title,studio,rating=3){
            this.title=title;
            this.studio=studio;
            this.rating=rating;
        }
            
        
        }
        const movie1=new Movie("leo","Red jaint studio",);
        console.log(movie1.title);
        console.log(movie1.studio);
        console.log(movie1.rating);
      
//1.b:
class Movie3 {
    constructor(title, studio,rating=PG){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const movie2=new Movie3("title","studio","rating/PG")
console.log(movie2.title);
console.log(movie2.studio);
console.log(movie2.rating);

//d:
class Movie5 {
    constructor(title, studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const CasinoRoyale = new Movie5( "Casino Royal", "Eon Productions", "PG13");
console.log( CasinoRoyale.title);
console.log( CasinoRoyale.studio);
console.log( CasinoRoyale.rating);


//c:
class movienew{
    constructor(today){
        this.today=today;
    }
    get today(){
        console.log("array with a rating with PG")
        return this.today
    }
}
var newmovie1=movienew();
console.log(newmovie1.today)