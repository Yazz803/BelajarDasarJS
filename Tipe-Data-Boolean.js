/*

Boolean adalah sebuah tipe data yang digunakan untuk merepresentasikan
logika true atau false

Boolean ini biasanya digunakan pada statement pengkondisian, untuk menentukan aksi
yang berbeda dan mengatur alur kendali program

*/

var contoh = Boolean(10) // true
var contoh = Boolean(0) // false
var contoh = Boolean(-1) // true
var contoh = Boolean(10 > 20) // false
var contoh = Boolean("Yazid") // true
var contoh = Boolean("Yazid" == "Akbar") // false
console.log(contoh)

// contoh penggunaan boolean dalam mengatur alur pemrograman
var angka = 20
if(angka % 2 === 0){ // menghasilkan boolean true
    console.log("Genap") // maka menjalankan code ini
}else{
    console.log("Ganjil") // kalau false maka jalankan code ini
}