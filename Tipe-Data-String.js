/* 

Tipe data string dalam javascript digunakan untuk
merepresentasikan data tekstual/plain text

Cara nulis string bisa pake " " atau ' ' tergantung teksnya

Ada yg namanya escape character, yg berfungsi untuk menampilkan sebuah karakter
yang di interpresentasikan berbeda dalam sebuah bahasa pemrograman, contohnya tanda kutip
tadi. Kutip tadi diinterpresentasikan sebagai pembuka dan penutup string. 
Nah untuk menuliskan kutip sebagai string kutip, yg kita lakukan adalah menambahkan
tanda backslash (\) sebelum tanda kutipnya, ini yg disebut dengan escape character

Sehingga nantinya tanda kutipnya akan di identifikasi sebagai string kutip, bukan
penutup string

Macam-macam escape character dan hasilnya/outputnya :
1. \0   => karakter NULL
2. \'   => '
3. \"   => "
4. \\   => \
5. \n   => new line / baris baru
6. \t   => tab
7. \b   => backspace
8. \uxxxx => unicode
9. \u00A9 => simbol copyright
referensi unicode = https://en.wikipedia.org/wiki/List_of_Unicode_characters

Didalam string ada yg namanya Concatenation/konkatenasi dengan menggunakan karakter +
penggabungan string lah intinya mah

Kita juga bisa membandingkan 2 buah string dengan menggunakan operator == atau ===
(ada di contoh 5)

Ada juga function .length digunakan untuk menghitung panjang dari sebuah string
(ada di contoh 6)
*/

// contoh1
var kalimat = "Hari jum'at nanti akan diadakan pengajian malam"
console.log(kalimat)
// karena ada tanda ' pada kata jum'at, maka nulis string nya pake " "

// contoh2
var kalimat = 'Aku membeli buku yang berjudul "Cara menjadi anime"'
console.log(kalimat)
// karena ada tanda "" yg digunakan pada isi string, maka nulis string nya pake ' '

// contoh3
var kalimat = '"Gerakan Pungut Sampah" dilaksanakan pada hari jum\'at' 
console.log(kalimat)

var kalimat = "\"Gerakan Pungut Sampah\" dilaksanakan pada hari jum'at"
console.log(kalimat)

// contoh4
var kalimat = "ini simbol CopyRight \u00A9"
console.log(kalimat)

// contoh 5
var kalimat = "Yazid Akbar" === "yazid akbar"
console.log(kalimat) // false, karena huruf besar dan huruf kecil itu berbeda sehingga outputnya false

var kalimat = "Yazid Akbar" === "Yazid Akbar"
console.log(kalimat) // true

// contoh 6
var kalimat = "Muhammad Yazid Akbar".length
console.log(kalimat) // 20 (karakter string dalam kalimat, spasi juga diitung)