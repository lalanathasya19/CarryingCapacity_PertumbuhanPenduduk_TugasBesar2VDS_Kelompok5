let img;
let bgatas;
//let populationSize = 0; // Ukuran populasi awal
//let carryingCapacity = 2000; // Kapasitas dukungan maksimum
let growthRate = 0.001; // Tingkat pertumbuhan populasi
let carryingCapacity;
let populationSize;
let population = [];
function preload() {
  img=loadImage('grafik.png');
  bgatas=loadImage("bgatas.jpg");
}
function setup() {
  createCanvas(1300, 2350);
  //input carrying c
  p=createInput(2000)
  p.position(1050, 525)
  p.changed(CP)
  CP();
 function CP(){
   carryingCapacity = (p.value())
} 
//input population
  j=createInput(10)
  j.position(800, 525)
  j.changed(popu)
  popu();
function popu(){
   populationSize = (j.value())
}
  for (let i = 0; i < populationSize; i++) {
    population.push(new Organism(random(width/2), random(2440,2800)));
  } 
}
function draw() {
  background("lightblue");
  image(bgatas, 0, 0, 1400, 350);
  //Judul
  fill("black")
  textSize(40)
  textFont("Georgia")
  text("CARRYING CAPACITY",450,200)
  fill("white")
  textSize(40)
  textFont("Georgia")
  text("CARRYING CAPACITY",452,202)
  fill("black")
  textSize(30)
  textFont("Georgia")
  text("Pertumbuhan Penduduk",500,230)
  fill("white")
  textSize(30)
  textFont("Georgia")
  text("Pertumbuhan Penduduk",502,232)
   //SIMULASI
  // fill("#778899")
  // rect(0,1835,1200,450)
  image(img,425,1035,400,400) 
  fill("black")
  textSize(30)
  textFont("Georgia")
  text("SIMULASI",570,1020)
  fill("white")
  textSize(18)
  textFont("Courier New")
  text("",150,1900)
  text("",150,1930)
  text("",150,1960)
  text("",150,1990)
  //Anggota Kelompok
  fill("black")
  textSize(20)
  textFont("Times New Roman")
  text("By : KELOMPOK 5",10,1930)
  text("1. Desi Era P. Siregar", 10,1980)
  text("2. Lala Nathasya", 10,2010)
  text("3. Ike Mastita", 10,2040)
  text("4. Meliana Debora", 10,2070)
  text("5. Derri Setiawan", 10,2100)
  text("NIM",400,1950)
  text("121160029",400,1980)
  text("121160023",400,2010)
  text("121160036",400,2040)
  text("121160042",400,2070)
  text("122160051",400,2100)
  fill("black")
  textSize(50)
  text("Thank You",500,2300)
   //PEMBAHASAN
  noStroke();
  fill("pink")
  rect(50,1470,1200,250, 20)
  fill("black")
  textSize(25)
  textFont("Georgia")
  text("PEMBAHASAN",570,1505)
  textSize(15)
  text("Memilih Jepang sebagai studi kasus untuk simulasi carrying capacity pertumbuhan penduduk memberikan peluang untuk memahami berbagai aspek demografi yang kompleks." , 70,1545) 
  text("Dari sejarah pertumbuhan yang dramatis hingga tantangan demografis modern, Jepang menawarkan konteks yang kaya untuk mengeksplorasi dinamika populasi dan kapasitas" ,70,1575)
  text("dukungan dalam lingkungan yang berubah. Model untuk populasi Jepang  dari tahun 1100 hingga 2000, dengan populasi awal 126,5 juta, populasi pulau itu terutama merupakan",70,1605)
  text("masyarakat feodal yang mendatar menjadi sekitar 130 juta. Setiap titik pada visualisasi diatas melambangkan satu individu dalam populasi Jepang. Dengan demikian,",70,1635)
  text("banyaknya titik menunjukkan ukuran populasi saat ini. Titik-titik bertambah seiring waktu, mencerminkan pertumbuhan populasi. Penambahan titik-titik ini terjadi sesuai",70,1665)
  text("dengan tingkat pertumbuhan yang ditentukan growthRate), sampai populasi mendekati atau mencapai carryingCapacity (kapasitas dukungan)." ,70,1695)
  text("",120,1725)
  fill("black")
  textSize(30)
  textFont("Georgia")
  text("VISUALISASI",575,430)
  fill("black")
  textSize(15)
  textFont("Georgia")
  text("Masukan nilai populasi awal",800,515)
  text("Masukan nilai Carrying Capacity",1050,515)
//KESIMPULAN
  noStroke();
  fill("pink")
  rect(50,1750,1200,120, 20)
  fill("black")
  textSize(25)
  text("KESIMPULAN",570,1780)
  textSize(15)
  text("Kesimpulan yang dapat diambil dari simulasi dan visualisasi data penduduk Jepang, dari tahun 1100-2000 jumlah penduduk Jepang mengalami pertumbuhan yang sangat pesat",70,1810)
  text("sehingga jumlah penduduk Jepang dari tahun ke ahun meningkat hingga tahun 2000.", 70,1840)
  // Menggambar populasi
  fill("white")
  rect(0,580,1300,390)
  for (let i = 1; i < population.length; i++) {
    population[i].display();
    population[i].update();
  }
  // Menghitung jumlah populasi
  let currentPopulation = population.length;
  // Menambahkan populasi jika belum mencapai kapasitas dukungan
  if (currentPopulation < carryingCapacity) {
    let newPopulation = currentPopulation * growthRate;
    for (let i = 0; i < newPopulation; i++) {
      population.push(new Organism(random(width), random(600,950)));
    }
  }
  // Membatasi jumlah populasi agar tidak melebihi kapasitas dukungan
  if (currentPopulation > carryingCapacity) {
    let excess = currentPopulation - carryingCapacity;
    population.splice(0, excess);
  }
  // Menampilkan informasi
  textSize(25);
  fill("black");
  text("Population: " + currentPopulation, 0, 500);
  text("Carrying Capacity: " + carryingCapacity, 0, 550);
}
// Kelas Organism (Organisme)
class Organism {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(0, 1), random(0, 1));
    this.radius = 4;
  }
  display() {
    fill("purple");
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }
  update() {
    this.position.add(this.velocity);
    // Memantulkan organisme ketika mencapai tepi
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
    }
    if (this.position.y > 2800 || this.position.y < 2440) {
      this.velocity.y *= -1;
    }
  }
} 
