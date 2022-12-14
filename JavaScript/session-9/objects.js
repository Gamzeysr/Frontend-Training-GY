//?Diziler sıralı bellek bölgelerisir.Bu yuzden dizilere indeksleme ile erişenbiliriz ama daha karmasık verilerimiz icin object'eri kullanabiliriz.

//? Object'lerde Key-Value yapisi kullanılır.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("********** Objects ***********");

const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

//!ReaD
console.log(arabalar.lpg); //? .notation
console.log("MODEL:", arabalar["model"]); //? Square bracket notation


//? Square bracket notation yönteminin en buyuk avantajı key degerini degisken olarak kullanabilmemizdir.

const key = "marka";
console.log(arabalar[key]);

arabalar.motor = "1.6";
console.log(arabalar);

//? Burada motor adındaki key i 1.6 olarak değişmiş olur artık çağırdıgım her sefer 1.6 gelir yani en son ki hangi değeri atadıysam o gelir

//*--------------------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//*--------------------------------------------------------------------

//? Object Constructure

function Personel(id, ad, maas) {
    this.id = id;
    this.ad = ad;
    this.maas = maas;
}

const kisi1 = new Personel("1234567890", "Mustafa", 15000);
const kisi2 = new Personel("177567890", "Canan", 2500);

// console.log(kisi1.ad);
// console.log(kisi2.maas);
// console.log(kisi2["id"]);

//? Global alanda window objesini gosterir.

// console.log(this);
// window.alert("Merhaba");

//* -------------------------------------------------------
//* 3-Object literal (En cok tercih edilen yontem)
//* -------------------------------------------------------

const worker = {
    name: "Can",
    surname: "Canan",
    age: 33,
    job: "developer",
    languages: ["C++", "Java", "Javascript", "Pyhton", "Go"],
    salary: 140000,
};
// objeclerimizin içinde neler var görmek için çağırdık 
console.log(worker);


// erişmek için objelere 
console.log("JOB:", worker.job);
console.log("Lang:", worker["languages"]);

// languagesin içinde tek tek bana yazdırması için aş. gibi yapıcaz 
worker["languages"].forEach((l) => console.log(l));

// yebni bir şeyler eklemek istersek 

worker.dob = "1990";
console.log(worker);

// keyin değişkenini değiştirmek istersek burada örnek olarak salary i değiştirelim 

worker["salary"] = worker["salary"] * 1.1;
console.log(worker);

//** Objecleri kopyalama */
const person = worker;
console.log("PERSON:", person);

// workerin içindekileri persona kopyaladık 
//! bu şekilde kopyalamaya sığ kopyalama denir 

person.dob = 2000;
console.log("PERSON:", person);

console.log(worker);

//! Deep Copy

let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
console.log(deepCopyOfWorker);



//* ==================================================
//* Object Metotlari
//* ==================================================

// const people = {
// name: "Can",
// surname: "Canan",
// dob: "1990",
// job: "developer",
// salary: 140000,
// drivingLicense: true,
// console.log(this);
// calculateAge: function () {
// return new Date().getFullYear() - this.dob;
// },
// summary: () => {
// console.log(this); //? window
// return `${this.name} is ${this.calculateAge()} years old`;
// },
// };

// console.log("DOB:", personal.calculateAge());
// console.log("SUMMARY:", personal.summary());

//* ==============================================================
//* OBJECT ITERATION
//* ==============================================================
const peoples = {
    person1: {
        name: "Can",
        surname: "Canan",
        dob: "1990",
        job: "developer",
        salary: 110000,
        drivingLicense: true,
    },

    person2: {
        name: "John",
        surname: "Sweet",
        dob: "2022",
        job: "tester",
        drivingLicense: false,
        salary: 140000,
    },
};
console.log(peoples);
//? yukarıdaki object içinde object oluşumuna örnek
//? yani nested bi yapıdır
//? peoples içinde ki verilere ben erişmek istiyorum diyelim.person2 nin maaşına erişmek istiyorum diyelim

// console.log("Salary of p2:", peoples.person2.salary);$
//! FOR - IN

//* for (key in object) {
//*    //code block to be executed
//* }

// for (let person in peoples) {
// console.log(person);
// console.log(peoples[person]);
// }

//! FOR - OF

//* for (x of iterable) {
//* code block to be executed
//*}

// for of iterable larla çalışıyor

// for (let person of peoples) {
// console.log(person);
// }
//  dediğimde calışmaz cünkü iterable yapamıyor tek basına yardımcı methodlar ile yapması gerekiyor bunlarda asagıdakiler

// for (let person of Object.keys(peoples)) {
// console.log(person);
// burası bana keylşeri döndürür
// }
//
// for (let person of Object.values(peoples)) {
// console.log(person);
// }
// burası bana valuesleri döndürür
//
// for (let person of Object.entries(peoples)) {
// console.log(person);
// }
// burasıda bana hem valueları hem keyleri döndürür

//! ARRAYS METHODLARI 
Object.keys(peoples).forEach((p) => console.log(p));
// burası bana keysleri getirir 

Object.values(peoples).forEach((p) => console.log(p.surname));
// people objesindeki valueların her birinin surnamelerini bana getir dedik burada 



Object.values(peoples).forEach((p) => console.log(p.dob));
// Buradada developer olanların dob degerlerini yazdırdık 



//************************************************
//* .JSON.=>.Javascript.Object.notation
//**************************************************

// JSON objectsi bir dizi içerisindeki objecttir. 

const team = [
    { name: "Josh", surname: "Adams", job: "developer", age: 30 },
    { name: "Mary", surname: "Bary", job: "tester", age: 22 },
    { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]
console.log(team);
console.log(team[2]);
// hazel yazılı kısmı getirir bu bana 

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((person) => console.log(person.job));
// bu bana tek tek jobları döndürür 


//* Ornek2: age'leri bir artırarak yeni bir diziye saklayiniz.
const ages = team.map((p) => p.age + 1);
// map fonk yeni bir dizi döndürür unutma
console.log(ages);


//* Ornek3: name ve surname'leri birleştirip buyuk harfe ceviren ve bunu fullname key'i olarak saklayan, ayni zamanda age degerlerini 5 arttırarak age key'ine saklayan ve olusan diziyi donduren kod yazınız.

// const teamFullName = team.map((p) => ({ fullName: p.name.toUpperCase() + p.surname.toUpperCase(), age: p.age + 5 }));
// console.log(teamFullName);

//? Alternaticly çözümü
// const teamFullName = team.map((p) => {
// return {
// fullName: p.name.toUpperCase() + p surname.toUpperCase(), age: p.age + 5,
// 
// };
// });
// 
// 
//*Örnek4: Yası(age) 22'den kücük eşit olan kisilerin adlarını (name) listeleyiniz.
team.filter((x) => x.age <= 22).forEach((x) => console.log(x.name));
// ilk önce filter gidiyor teamdeki üç elemanlı diziyi alıyor. daha sonra yaası 22 ve 22den küçük mü dye herbirine foreach ile bakıyor ve en sonunda bulduguklarını yazdurıyor 



//* Ornek5: 22 yasindan kucuk ve esit olanların isimlerini diziye saklayiniz.
const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);
console.log(teamUnder22);



//*Ornek6: ortalama yasi hesaplayiniz.
// const avgAges = team.reduce((sum, person) => (sum += person.age), 0) / team.length;
// console.log(avgAges);

// tek bir değer döndüreceksen reduce kullanabilirim . tek bir değer dediğim age oluyor.
// reduce un espirisi iki tane zorunlu parament
// resi vardı unutma bir tanesi acc birisi vvalue,bu acc ve valuenın isimleri değişebilir.

// let fullStack = {
// languages: ["JavaScript", "React", "HTML"],
// jira: true,
// gitHub: true,
// difficulty: 8,
// }
//
// for (let item of Object.values(fullStack)) {
// console.log(item[0]);
// console.log(item[1]);
// console.log(item[2]);
// }
// for (let languages in fullStack) {
// console.log(fullStack.languages.slice(0));
// }

// let fullStack = {
// languages: ["JavaScript", "React", "HTML"],
// jira: true,
// gitHub: true,
// difficulty: 8,
// }
//
// Object.keys(fullStack).forEach((p) => console.log(p));

// for (a of Object.keys(fullStack)) {
//
// console.log(a);
// }

const myCar = {
    make: 'ford',
    model: 'Mustang',
    year: 1965,
    color: 'Black',

    calculateAge: function () {
        return new Date().getFullYear() - this.year;
    },

};


//
// 