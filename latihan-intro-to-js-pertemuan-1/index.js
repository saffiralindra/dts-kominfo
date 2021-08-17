/* Variable -> untuk menyimpan suatu data
   Variable tidak boleh berawalkan angka dan tidak boleh ada spasi
   Apabila ada 2 suku kata, bisa digabung dengan diberikan huruf kapital di kata kedua, jangan strip / underscore
*/
let morningGreetings = "Selamat Pagi";
const afternoonGreetings = "Selamat Siang";

/* let digunakan untuk deklarasi variable awal. kalo mau diganti, ga perlu dikasih let
   Variable ada yang namanya constant (variable yang ga boleh diubah ubah)
*/

// Tipe data yang ada di javascript
let num = 90; // Tipe data number
let someString = "Hello World"; // Tipe data string
let bool = true; // Tipe data boolean
let boolNotOK = false; // Tipe data boolean
let age = null; // Null = Variabel yang tidak ada isinya
let undef; // Undefined (belum terdefinisikan)

morningGreetings = "Selamat Siang";
//afternoonGreetings = "Selamat Malam";

/* Comparison (mengecek apakah perbandingan itu benar / salah)
console.log(2 > 1); // hasilnya true / false
console.log(2 == 1); // kalo sama dengan dibuat 2 supaya beda dengan variable
console.log(2 != 1); // menandakan tidak sama dengan
console.log("a" > "b"); // dilihat dari urutan abjad, a harusnya lebih kecil dari b
console.log("egg" > "bird");
console.log("egg" > "egga"); // hasilnya false karerna a dibandingkan dengan yang tidak ada
console.log("2" > 1); // kalo membandingkan 2 tipe data yang berbeda, maka js akan merubah angka ini menjadi number. Sehingga hasilnya true
console.log("100" === 100); // kalo 3 sama dengan harus tipe datanya sama supaya bisa dibandingkan. Kalo sama dengannya ada 2, dia langsung convert ke angka
*/

/* If Statement
let a = 2;
if (a === 2) {
   console.log("Benar");
} else {
   console.log("Salah");
}
console.log("Selesai");
*/

/* Conditional Operator
let a = 3;
let b = 2;
let c = a < b ? "Benar" : "Salah";
console.log(c);
*/

/* Logical Operator
let a = 1;
let b = 2;
if (a < 5 && b > 3) {
   // AND harus dua duanya baru bisa bernilai true
   console.log("Pertama");
} else if (a < 5 || b > 3) {
   // OR minimal 1 aja true udah bisa bernilai true
   console.log("Kedua");
}*/

/* Looping
   While (kondisi dulu baru kerja)
let a = 1;
while (a < 5) {
   console.log(a);
   a = a + 1;
}
console.log("Selesai");
   
   Do While (kerja dulu baru kondisi)
let a = 0;
do {
   console.log(a);
   a = a + 1;
} while (a < 3);
console.log("Selesai");

   For
for (let a = 1; a < 4; a++) {
   console.log(a);
}
console.log("Selesai");
*/

// Function dan Return
function showMessage(name) {
   console.log("Selamat Pagi", name);
}

function sum(a, b) {
   console.log(a + b);
   return a + b;
}

function looping(a) {
   while (a < 5) {
      console.log(a);
      a++;
   }
}

showMessage("Ananta");
showMessage("David");
showMessage("Luke");
let hasil = sum(2, 3); // penjumlahan function
console.log(hasil);
looping(2);

/* Statement -> instruksi di bahasa pemrograman untuk memunculkan tulisan
    console.log(afternoonGreetings);
    console.log("Satu");
    console.log("Dua");
*/

// Comment-> tulisan yang ga bakal dijalankan, gunanya untuk mendeskripsikan coding dibawahnya */
/* 
    console.log("Satu");
    console.log("Dua"); 
*/
