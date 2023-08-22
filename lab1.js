/*
1. Diketahui air memiliki kondisi tertentu kapan cair, uap maupun beku, berikut rentangnya
    -Beku suhu minus -100 sampai 0
    -Cair suhu 1 sampai 100
    -Uap suhu 101 sampai 500
    -Suhu selain rentang tersebut tidak terdefinisi

2. Diketahui SPBU memiliki logika sebagai berikut
    -Jika plat kuning atau motor maka BBM subsidi
    -Jika mobil CC kurang dari 1500 maka PERTAMAX
    -Jika mobil CC diatas atau sama dengan 1500 maka pertamax turbo
*/

// Tugas 1
let suhu = 101
let rentang = 
suhu >= 101 ? "Air Dalam Bentuk: Uap" : 
suhu >= 1 ? "Air Dalam Bentuk: Cair" : 
suhu >= -100 ? "Beku" : 
"Tidak Terdefinisi"
console.log(rentang)


// Tugas 2
const id = "Plat Kuning";

if (id == "Plat Kuning") {
    console.log('Jenis BBM: Subsidi') ;
} else if (id == "Motor") {
    console.log('Jenis BBM: Subsidi') ;
} else if (id <1500) {
    console.log('Jenis BBM: Pertamax') ;
} else if (id >= 1500) {
    console.log('Jenis BBM : Pertamax Turbo') ;
}