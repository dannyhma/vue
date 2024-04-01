// Jumlah boneka yang diberikan pada umur tertentu
const jumlahBoneka = 55;

// Fungsi untuk menghitung umur si A
function hitungUmurWhile(jumlahBoneka) {
  // Menggunakan rumus matematika umur = jumlahBoneka / (2 * (1 + n)), n adalah jumlah kali bertambahnya boneka
  let n = 0;
  let umur = 0;

  while (jumlahBoneka > 0) {
    n++;
    jumlahBoneka = jumlahBoneka - n;
    umur++;
  }

  return umur;
}

// Memanggil fungsi hitungUmur untuk mencari umur si A
// console.log(hitungUmur(jumlahBoneka));
const umurSiAW = hitungUmurWhile(jumlahBoneka);
console.log(`Umur si A adalah ${umurSiAW} tahun.`);

function hitungUmurFor() {
  let n = 0;
  let umur = 0;

  for (let i = jumlahBoneka; i > 0; i = i - n) {
    n++;
    umur++;
  }
  return umur;
}

const umurSiAF = hitungUmurFor(jumlahBoneka);
console.log(`Umur si A adalah ${umurSiAF} tahun.`);

let total = 0;
let number = 1;
while (total < 100) {
  total = total + number;
  number++;
}
console.log("Total: " + total);

let i = 1;
do {
  console.log("Iterasi ke-" + i);
  i++;
} while (i <= 5);
