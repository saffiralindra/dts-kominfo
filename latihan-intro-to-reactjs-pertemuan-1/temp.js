class Calculate {
   constructor() {}
   /*cekAngka(a) {
      if ((a = 0)) {
         return 0;
      }
   }*/
   hasilSama(a) {
      return a;
   }
   celcius_farenheit(a) {
      return (a * 9) / 5 + 32;
   }
   celcius_reamur(a) {
      return (a * 4) / 5;
   }
   farenheit_celcius(a) {
      return ((a - 32) * 5) / 9;
   }
   farenheit_reamur(a) {
      return ((a - 32) * 4) / 9;
   }
   reamur_celcius(a) {
      return (a * 5) / 4;
   }
   reamur_farenheit(a) {
      return (a * 9) / 4 + 32;
   }
   rubahBackground(warna) {
      return warna;
   }
}

module.exports = Calculate;
