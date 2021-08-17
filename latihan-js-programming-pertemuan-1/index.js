/*
class User {
   // Apabila sudah ada constructor, maka variable satu satu ini udah ga digunakan lagi
   name = "John";
   phoneNumber = "0812345";
   address = "Jl. Setapa";
   sayHi() {
      console.log("Selamat Pagi dari", this.name);
   }

   constructor(name, phoneNumber, address) {
      this.name = name; // this merujuk name yang ada di atas (variable yang dimiliki class)
      this.phoneNumber = phoneNumber;
      this.address = address;
   }

   get userName() {
      return "Nama saya " + this.name;
   }

   get userProfile() {
      return "Nama saya " + this.name + " tinggal di " + this.address + " bisa dihubungi " + this.phoneNumber;
   }

   set userName(value) {
      if (value.length > 3) {
         console.log("Name is too long");
         return;
      }
      this.name = value;
   }
}

let user = new User("David", "123", "Jl. Kenangan");
//let user2 = new User("Janet", "456", "Jl. Setapak");
//let user3 = new User("Alex", "567", "Jl. Kamu");

console.log(user.userProfile);
user.userName = "David";
console.log(user.name);
//console.log(user2);
//console.log(user3);
//console.log("--------------------------------------------");
//console.log(user.phoneNumber);
//console.log(user.address);
//user.sayHi();
//user2.sayHi();
//user3.sayHi();
*/

// Getter & Setter (mengambil data dari class dan set data yang ada di dalam class)
// Inheritance = sebuah class bisa memiliki turunan
/*
class Animal {
   speed = 5;
   age = 2;
   run() {
      console.log("Running with speed", this.speed);
   }
   stop() {
      console.log("Stop");
   }
}

let animal = new Animal();
//animal.run();

// Extends bisa mengambil kelas induknya
class Fish extends Animal {
   length = 10;
   swim() {
      console.log("Swimming with speed", this.speed);
   }
   // Apabila ada nama function yang sama antara induk dengan turunan, maka yang turunan duluan
   run() {
      console.log("Fish can't run");
   }
}

let fish = new Fish();
fish.swim();
fish.run();
console.log(fish.age);
console.log(fish); // hanya mengeluarkan isi object saja, tidak mengeluarkan isi function
*/

// Encapsulation adalah pembatasan terhadap class agar tidak semuanya bisa diakses
// Internal interface (Private)
// External interface (Public)

class CoffeeMachine {
   #voltage = 10;
   #waterTemperature = 90;
   #waterVolume = 1;
   #time = 2;

   #takeVoltage() {
      console.log("Taking electricity");
   }

   #fillWater() {
      console.log("Filling water with", this.#waterVolume, "litre");
   }

   #boilCoffee() {
      console.log("Heating water until", this.#waterTemperature, "degrees for", this.#time);
   }

   start() {
      this.#takeVoltage();
      this.#fillWater();
      this.#boilCoffee();
      console.log("Coffee is finished");
   }
}

let coffeemachine = new CoffeeMachine();
coffeemachine.start();
