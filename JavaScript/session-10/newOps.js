//* ==================================================
//* DESTRUCTURING (ARRAY)
//* ==================================================
// verileri ayırmak için kısa bir yöntem diyebiliriz

const car = {
    name: "BMW",
    model: 1990,
    engine: 1.6,
}

//? 1.Yontem (classical)
const name1 = car.name;
const model1 = car["model"];

console.log("name1");

//? 2.Yontem 
const { name, model, engine } = car;

// eğer ki objemiz nested olursa Örnek:
const cars = {
    car1: {
        name: "BMW",
        model: 1990,
        engine: 1.6,
    },
    car2: {
        name: "Mercedes",
        model: 2022,
        engine: 2.0,
    },
};
const { car1, car2 } = cars;
// burada ilk önce cars dan car1 car2 keyleri atayıp çağırmalıyım 
console.log(car1);
console.log(car2);

const { name: c1Name, model: c1Model } = car1;
const { name: c2Name, model: c2Model } = car2;
// name ismini c1Name model ismini cModel
// name: c2Name, model: c2Model yaptık
// artık programın asagılarında c1Name ve c2Name olarak kullanabiliriz 

console.log(c1Name);
console.log(c2Model);


const team = [
    {
        name: "Josh",
        surname: "Barry",
        job: "tester",
        age: 45
    },
    {
        name: "Gamze",
        surname: "Nut",
        job: "team lead",
        age: 40
    },
];

//? Classical
team.forEach((p) => {
    console.log("Name:", p.name);
    console.log("Surname:", p.surname);
    console.log("Job:", p["job"]);
    console.log("Name:", p.age);
});

//? DESTRUCTURİNG ile yaparken
team.forEach((p) => {
    const { name, surname, job, age } = p
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Job:", job);
    console.log("Name:", age);
});

// react kısmındA Destructuring ile yapıcaz 

//* function
const getInfo = () => {
    return {
        id: 1,
        productName: "Iphone",
        price: 30000,
    };
};

console.log(getInfo());

const { productName, price } = getInfo();
console.log("Product Name:", productName);
console.log("Product Price:", price);

// DESRUCTURING ile yaptıgımı artık ben asagıda biryerlerde de kullanabilirim .

let daltones = ['joe', 'Jack', 'Willam', 'Averell']
for (let i = 0; i < daltones.length; i++) {
    if (i == 1) {
        continue;
    }
    console.log(daltones[i]);
}
