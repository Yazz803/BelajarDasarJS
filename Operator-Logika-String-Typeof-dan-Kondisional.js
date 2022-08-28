/*
====================================================

Operator logika ini digunakan untuk menentukan logika dari beberapa
ekspresi yg kalian gabungkan. 
Simbol dari Operator Logika :
1. && (dan/AND)
2. || (atau/OR)
3. ! (tidak sama/NOT)

=====================================================

Operator String menggunakan "+"
jika operand adalah angka, maka "+" akan menjadi operator aritmatika
jika operand-nya string, maka "+" akan menjadi operator penggabung string

=====================================================

Operator typeof digunakan untuk mengetahui tipe data apa yg kita masukan
nanti ke dalamnya
contoh = typeof(operand)

=====================================================

Operator kondisional dan ini jenis operatornya adalah operator ternary
dimana kita butuh 3 operand didalamnya, ini digunakan untuk melakukan 
pengecekan pada sebuah kondisi, dan menentukan nilai yg dihasilkan
ketika kondisinya bernilai true atau false

=====================================================
*/

// contoh1 Operator Logika
var x = 5
var logika = (x % 2 === 0)
console.log(logika); // false, karena 5 dibagi 2 itu ada sisanya

// contoh2 Operator Logika
var x = 12
var logika = (x % 2 === 0) && (x < 13) // keduanya benar = true, salah satu salah = false
console.log(logika) // true, karena 12 dibagi 2 itu tidak ada sisanya, dan 12 itu lebih kecil dari 13

// contoh3 Operator Logika
var x = 5
var logika = (x % 2 === 0) || (x < 10) // keduanya benar = true, salah satu benar = true
console.log(logika) // true, karena 5 lebih kecil dari 10

// contoh4 Operator Logika
var x = 5
var logika = !(x < 10) // 
console.log(logika) // false, karena dibalikan yg tadinya true jadi false kalo pake "!"

/* ==================================================================== */

// contoh1 Operator String
var a = "Apple"
var b = "Pen"
console.log(a + b) // Outputnya = "ApplePen"

// contoh2 Operator String
var a = "Apple"
var b = "Pen"
console.log(a + " " + b) // Outputnya = "Apple Pen"

// contoh3 Operator String
console.log(10 + "10") // Outputnya = "1010"

// contoh4 Operator String
console.log(10 + 10 + "10") // Outputnya = "2010"

// contoh5 Operator String
console.log("10" + 10 + 10) // Outputnya = "101010"

/* ==================================================================== */

// Contoh Operator typeof
console.log(typeof(10)); // number
console.log(typeof("10")); // string
console.log(typeof(true)); // boolean

/* ==================================================================== */

// Contoh Operator Kondisional
var x = 10
var kondisi = (x % 2 == 0) ? "genap" : "ganjil" // outputnya = genap
console.log(kondisi)

/* ==================================================================== */


