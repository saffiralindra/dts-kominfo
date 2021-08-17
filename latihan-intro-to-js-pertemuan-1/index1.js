/* Object adalah variable yang bisa menyimpan banyak property
const user = {
   name: "John",
   age: 30,
   isMarried: false,
};
console.log(user.name);
console.log(user.age);
console.log(user.isMarried);
user.name = "David"; // bisa mengganti property user dibawah object
// name bisa diganti karena name merupakan salah satu komponen dari user, jadi ga keseluruhan digantinya
// const akan error kalo property nya diganti semua
console.log(user.name);
user.isWorking = true; // bisa menambhakan property diluar object
console.log(user.isWorking);
console.log(user.notExisted);
console.log(user); // mengambil keseluruhan
*/

/* Array hampir sama dengan object tapi tidak ada property dan dipanggil dengan index
const listOfName = ["David", "John", "Luke", "Sandra", "Pam"]; // disarankan menggunakan 1 tipe data saja
const someName = "Someone like you";
console.log(listOfName.length); // menunjukkan berapa data dalam array
let a = 0;
while (a < someName.length) {
   console.log(someName[a]);
   a++;
}
for (let a = 0; a < listOfName.length; a = a + 2) {
   console.log(listOfName[a]);
}
*/

/* Shift mengambil data array yang paling awal
const listOfName = ["David", "John", "Luke", "Sandra", "Pam"]; // disarankan menggunakan 1 tipe data saja
let taken = listOfName.shift();
console.log(listOfName);
console.log(taken);

// Unshift menambahkan data array di paling awal
const listOfName = ["David", "John", "Luke", "Sandra", "Pam"]; // disarankan menggunakan 1 tipe data saja
listOfName.unshift("Janet");
console.log(listOfName);

// Pop mengambil data array yang paling belakang
const listOfName = ["David", "John", "Luke", "Sandra", "Pam"]; // disarankan menggunakan 1 tipe data saja
let taken = listOfName.pop();
console.log(listOfName);
console.log(taken);

// Push menambahkan data array di paling belakang
const listOfName = ["David", "John", "Luke", "Sandra", "Pam"]; // disarankan menggunakan 1 tipe data saja
listOfName.push("Janet");
console.log(listOfName);
*/

/* Splice menghapus data dari index 1 sebanyak 2 data
const listOfName = ["David", "John", "Luke", "Sandra", "Pam"]; // disarankan menggunakan 1 tipe data saja
let taken = listOfName.splice(1, 2, "Alex"); // splice bisa menambahkan data pengganti yang dihapus
console.log(listOfName);
console.log(taken);
*/

/* Slice mengcopy data dari index 1 sebelum data 2
const listOfName = ["David", "John", "Luke", "Sandra", "Pam"]; // disarankan menggunakan 1 tipe data saja
let taken = listOfName.slice(1, 2); // splice bisa menambahkan data pengganti yang dihapus
console.log(listOfName);
console.log(taken);
*/

/* Concat menggambungkan 1 array dengan array lain
const listOfName = ["David", "John", "Luke", "Sandra", "Pam"]; // disarankan menggunakan 1 tipe data saja
const otherNames = ["Alex", "Guy"];

const combine = listOfName.concat(otherNames);
console.log(combine);
*/

/* forEach melakukan sesuatu dari setiap isi dari array
const listOfName = ["David", "John", "Luke", "Sandra", "Pam"]; // disarankan menggunakan 1 tipe data saja
listOfName.forEach((name) => {
   console.log(name);
});

const numbers = [1, 5, 8, 3, 7];
numbers.forEach((num) => {
   console.log(num + 2);
});
*/

/* indexOf digunakan untuk mencari index dari array
const listOfName = ["David", "John", "Luke", "Sandra", "Pam"]; // disarankan menggunakan 1 tipe data saja
let index = listOfName.indexOf("Luke");
console.log(index);
*/

/* Includes digunakan untuk cek apakah yang dicari ada atau tidak di array
const listOfName = ["David", "John", "Luke", "Sandra", "Pam"]; // disarankan menggunakan 1 tipe data saja
let index = listOfName.includes("Luke");
console.log(index);
*/

/* Find digunakan untuk mencari data dan mengembalikan 1 data yang ketemu duluan
const listOfName = ["David", "John", "Luke", "Sandra", "Pam"]; // disarankan menggunakan 1 tipe data saja
let name = listOfName.find((name) => {
   //return name === "John"; -- digunakan untuk mencari nama
   //return name[0] == "L"; -- digunakan untuk mencari yang huruf depannya L
   return name.length > 4; // digunakan untuk mencari data yang jumlah hurufnya diatas 4
});
console.log(name);
*/

/* Filter digunakan untuk mencari data dan mengembalikan semua data yang sesuai
const listOfName = ["David", "John", "Luke", "Sandra", "Janet"]; // disarankan menggunakan 1 tipe data saja
let name = listOfName.filter((name) => {
   //return name === "John"; -- digunakan untuk mencari nama
   return name[0] == "J"; // digunakan untuk mencari yang huruf depannya L
   //return name.length > 4; // digunakan untuk mencari data yang jumlah hurufnya diatas 4
});
console.log(name);
*/

/* Map hampir sama seperti forEach namun bisa di return dan ada hasilnya
const listOfName = ["David", "John", "Luke", "Sandra", "Janet"]; // disarankan menggunakan 1 tipe data saja
let hasil = listOfName.map((name) => {
   console.log(name);
   return name[0];
});
console.log(hasil);

const numbers = [1, 5, 6, 3, 4];
let hasil = numbers.map((num) => {
   return num * 2;
});
console.log(hasil);
*/

// Reduce dapat mengubah suatu array menjadi 1 angka
/* acc digunakan sebagai property untuk menampung akumulasi karena ada pada return
const numbers = [1, 5, 6, 3, 4];
let hasil = numbers.reduce((acc, num) => {
   console.log("ACC ", acc);
   console.log("NUM ", num);
   console.log("-------------------------");
   return acc + num;
});
console.log(hasil);
*/

const listOfName = ["David", "John", "Luke", "Sandra", "Janet"]; // disarankan menggunakan 1 tipe data saja
let result = listOfName.reduce((acc, name) => {
   return acc + name[0];
});
console.log(result);
