// 1) создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты 
// разные по набору полей. (Т.е поле name  должно присутствовать только 1 
//     раз в одном объекте )

// let dog = { name: "Radriga", age: 5, owner: "Ivan" }
// let person = { job: "taxidermist", passion: "fishing", wife: "Ilona" }
// let car = { mark: "Nissan", year: 10, salon: "textil" }
// let flat = { room: 5, floor: 2, kitchen: "black" }
// let book = { tirage: 500, page: 255, color: "gray" }


// 2) создать 5 объектов с полностью разным набором полей. В каждом объекте
//  должен присутсвовать массив и внутренний объект. Опишите что угодно, 
//  машину, картину, болт... Пример : let man = { name: 'kokos', skills :
//   ['java','js'] , wife: { name: 'cherry' } };


// let house = {
//     floor: 5,
//     room: ["kitchen", "badroom"],
//     residents: { family: 5, nationality: "Ukrainian" }
// }

// let driver = {
//     age: 45,
//     clothes: ["pant", "shirt"],
//     characteristic: { salary: 200, passion: "fishing" }
// }

// let toy = {
//     price: 20,
//     clothes: ["pant", "shirt"],
//     accsessories: { bag: "red", inside: "lipstic" }
// }

// let table = {
//     height: 2,
//     matter: ["wood", "glass"],
//     apply: { room: "kitchen", function: "decor" }
// }

// let bag = {
//     color: "black",
//     material: ["leather", "textil"],
//     owner: { name: "Ilona", age: 25 }
// }

// 3) При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let keyDog in dog) {
//     console.log(keyDog)
// }
// for (let keyPers in person) {
//     console.log(keyPers)
// }
// for (let keyCar in car) {
//     console.log(keyCar)
// }
// for (let keyFlat in flat) {
//     console.log(keyFlat)
// }
// for (let keyBook in book) {
//     console.log(keyBook)
// }

// for (let keyHouse in house) {
//     console.log(keyHouse)
// }
// for (let keyDriver in driver) {
//     console.log(keyDriver)
// }
// for (let keyToy in toy) {
//     console.log(keyToy)
// }
// for (let keyTable in table) {
//     console.log(keyTable)
// }
// for (let keyBag in bag) {
//     console.log(keyBag)
// }



// 4) При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let keyDog =Object.keys(dog)
// console.log(keyDog)
// let keyPers =Object.keys(person)
// console.log(keyPers)
// let keyCar =Object.keys(car)
// console.log(keyCar)
// let keyflat =Object.keys(flat)
// console.log(keyflat)
// let keyBook =Object.keys(book)
// console.log(keyBook)


// let keyHouse =Object.keys(house)
// console.log(keyHouse)
// let keyDriver =Object.keys(driver)
// console.log(keyDriver)
// let keyToy =Object.keys(toy)
// console.log(keyToy)
// let keyTable =Object.keys(table)
// console.log(keyTable)
// let keyBag =Object.keys(bag)
// console.log(keyBag)


// 5) Создать массив из 10 объектов cars и заполнить его машинами с полями
//  модель, год выпуска, мощность, цвет. (Значаения полей могу быть
//      выдуманными)

// let cars = [ {model: 'tesla', year: 2020, power:170, color:'red'},
//              {model: 'niva', year: 2000, power:100, color:'blue'},
//              {model: 'nissan', year: 1995, power:170, color:'black'},
//              {model: 'mazda', year: 2019, power:166, color:'white'},
//              {model: 'infiniti', year: 2004, power:200, color:'silver'},
//              {model: 'vaz', year: 2004, power:150, color:'white'},
//              {model: 'hundai', year: 2019, power:175, color:'black'},
//              {model: 'lexus', year: 2020, power:220, color:'darkgray'},
//              {model: 'pevgeot', year: 2016, power:190, color:'blue'},
//              {model: 'daihutsu', year: 2018, power:20150, color:'yellow'}]  


// 6)Создать массив объектов cities и заполнить его объектами с полями 
// название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [ {name: 'Kiev', country:'Ukraine', population:2.88, region:'central'},
// {name: 'New York', country:'USA', population:19.45, region:'southeast'},
// {name: 'Paris', country:'Fracnce', population:2.15, region:'central'},
// ]

// 7) Создать массив объектов cars и заполнить его машинами с полями модель,
//  год выпуска, мощность, цвет, водитель. Водитель является отдельным 
//  объектом с полями имя, возраст, пол, стаж.

// let cars1 = [ {model: 'tesla', year: 2020, power:170, color:'red',
//         driver:{name:'Fedor',age:55,works:15}},
//              {model: 'niva', year: 2000, power:100, color:'blue',
//         driver:{name:'Ivan',age:43,works:15}},     
//              {model: 'nissan', year: 1995, power:170, color:'black',
//         driver:{name:'Petro',age:44,works:10}},      
//              {model: 'mazda', year: 2019, power:166, color:'white',
//         driver:{name:'Ignat',age:47,works:7}},       
//              {model: 'infiniti', year: 2004, power:200, color:'silver',
//         driver:{name:'Igor',age:43,works:10}},  
//              ]  


// 8) проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i=0
// while(i<cars.length){
//     console.log(cars[i])
//     i++
// }

// let i=0
// while(i<cars1.length){
//     console.log(cars1[i])
//     i++
// }

// let i=0
// while(i<cities.length){
//     console.log(cities[i])
//     i++
// }



// 9) проитерировать каждый массив из задания 5,6,7 при помощи for .

// for(let i=0;i<cars.length;i++){
//     console.log(cars[i])
// }
// for(let i=0;i<cities.length;i++){
//     console.log(cities[i])
// }
// for(let i=0;i<cars1.length;i++){
//     console.log(cars1[i])
// }



// 10) проитерировать каждый массив из задания 5,6,7 при помощи  for of.       
// for(let car1 of cars)     {
//     console.log(car1)
// }
// for(let cities1 of cities)     {
//     console.log(cities1)
// }
// for(let car2 of cars1)     {
//     console.log(car2)
// }

// 11) взять объекты из задания 1 и превратить каждый в json.
// let dog = { name: "Radriga", age: 5, owner: "Ivan" }
// let person = { job: "taxidermist", passion: "fishing", wife: "Ilona" }
// let car = { mark: "Nissan", year: 10, salon: "textil" }
// let flat = { room: 5, floor: 2, kitchen: "black" }
// let book = { tirage: 500, page: 255, color: "gray" }

// console.log(JSON.stringify(dog))
// console.log(JSON.stringify(person))
// console.log(JSON.stringify(car))
// console.log(JSON.stringify(flat))
// console.log(JSON.stringify(book))



// 12) взять json из задания 11 и превратить их обратно в объекты.
// let dog = { name: "Radriga", age: 5, owner: "Ivan" }
// let dogStr=JSON.stringify(dog)
// console.log(dogStr)
// let person = { job: "taxidermist", passion: "fishing", wife: "Ilona" }
// let personStr=JSON.stringify(person)
// console.log(personStr)
// let car = { mark: "Nissan", year: 10, salon: "textil" }
// let carStr=JSON.stringify(car)
// console.log(carStr)
// let flat = { room: 5, floor: 2, kitchen: "black" }
// let flatStr=JSON.stringify(flat)
// console.log(flatStr)
// let book = { tirage: 500, page: 255, color: "gray" }
// let bookStr=JSON.stringify(book)
// console.log(bookStr)

// console.log(JSON.parse(dogStr))
// console.log(JSON.parse(personStr))
// console.log(JSON.parse(carStr))
// console.log(JSON.parse(flatStr))
// console.log(JSON.parse(bookStr))

// -13) взять массив из задания 5,в цикле перебрать его объекты превратив
//  их в json .

// let cars = [ {model: 'tesla', year: 2020, power:170, color:'red'},
//              {model: 'niva', year: 2000, power:100, color:'blue'},
//              {model: 'nissan', year: 1995, power:170, color:'black'},
//              {model: 'mazda', year: 2019, power:166, color:'white'},
//              {model: 'infiniti', year: 2004, power:200, color:'silver'},
//              {model: 'vaz', year: 2004, power:150, color:'white'},
//              {model: 'hundai', year: 2019, power:175, color:'black'},
//              {model: 'lexus', year: 2020, power:220, color:'darkgray'},
//              {model: 'pevgeot', year: 2016, power:190, color:'blue'},
//              {model: 'daihutsu', year: 2018, power:20150, color:'yellow'}] 
             

//              for(let i=0;i<cars.length;i++){   
//                  console.log(JSON.stringify(cars[i]))}


// 14) взять массив из задания 6,в цикле перебрать его объекты превратив их 
// в json .


// let cities = [ {name: 'Kiev', country:'Ukraine', population:2.88, region:'central'},
// {name: 'New York', country:'USA', population:19.45, region:'southeast'},
// {name: 'Paris', country:'Fracnce', population:2.15, region:'central'},
// ]
// for(let i=0;i<cities.length;i++){   
// console.log(JSON.stringify(cities[i]))}
// 15) взять массив из задания 7,в цикле перебрать его объекты превратив их
//  в json и сразу скоприовать в новый массив.

// let cars1 = [ {model: 'tesla', year: 2020, power:170, color:'red',
//         driver:{name:'Fedor',age:55,works:15}},
//              {model: 'niva', year: 2000, power:100, color:'blue',
//         driver:{name:'Ivan',age:43,works:15}},     
//              {model: 'nissan', year: 1995, power:170, color:'black',
//         driver:{name:'Petro',age:44,works:10}},      
//              {model: 'mazda', year: 2019, power:166, color:'white',
//         driver:{name:'Ignat',age:47,works:7}},       
//              {model: 'infiniti', year: 2004, power:200, color:'silver',
//         driver:{name:'Igor',age:43,works:10}},  
//              ]  
// for(let i=0;i<cars1.length;i++){       
// console.log(JSON.stringify(cars1[i]))}
// let newCars=JSON.stringify(cars1)  
// console.log(newCars)


// 16) Создать массив пользователей. У каждого пользователя обязательно должено
//  быть поле skills которое является массивом. Проитерировать массив
//   пользователей и в каждом пользователе проитерировать его массив skills

// let users = [{ name:'Petro', age:43, hight: 178, skills:['driver',20]}, 
//             { name:'Ivan', age:20, hight:175, skills:['js',2]}  ,      
//            {name:'Alla', age:43, hight:165, skills:['SQl',5]}]            

// for (let  user of users){
//     console.log(user.name)
// for(let skill of user.skills){
//      console.log(skill)
// }}

    
// 17) Создать массив пользователей. У каждого пользователя обязательно 
// должено быть поле skills которое является массивом. Проитерировать массив 
// пользователей и в каждом пользователе проитерировать его массив skills.
//  Скопировать все skills всех пользователей в отедльный массив


// let newmass = []
// for (let  user of users){
//     console.log(user.name) 
// for(let skill of user.skills){     
//      newmass.push(skill)        
// }
// }
// console.log(newmass)

// 18 За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного 
// об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
//  {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//   {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

//     for (let  user of users){
//     console.log(user) 
//      for(let skill of user.skills){     
//       console.log(skill)     }}

// 19 З масиву users за допомогою циклу витягнути адреси користувачів і
//  записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];



// let addressUsers = []
 
// for(let user of users){     
//      addressUsers.push(user.address)        
// }
 
// console.log(addressUsers)


// 20) За допомоги циклу проітерувати  масив users, записати кожного юзера в
//  сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (let i=0;i<users.length;i++){
//     let user=users[i]
//     let div =document.createElement('div')
//     div.innerText=`${user.name} ${user.age}`
//     document.body.appendChild(div)
// }


// 21) За допомоги циклу проітерувати  масив users, записати кожного юзера в 
// сівй блок за допомоги document.createElement, розділивши всі властивості 
// по своїм блокам (div>div*4)

 

// 22) За допомоги циклу проітерувати  масив users, записати кожного юзера в 
// сівй блок за допомоги document.createElement, розділивши всі властивості
//  по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// 24) - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//             {id: 2, name: 'petya', age: 30, status: true}, 
//             {id: 3, name: 'kolya', age: 29, status: true},
//             {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, 
//             {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//             {user_id: 2, country: 'Poland', city: 'Krakow'},
//             {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
//  for (user of usersWithId){
//      for (citi of citiesWithId){
//          if (user.id===citi.user_id){
//              user.address = citi
//          }
//      }
//  }
//  console.log(usersWithId)

// 25) створити розмітці блок з id, class та текстом в середені. 
// Зчитати окремо цей текст з селекторів по id , class та тегу

// let className = document.getElementsByClassName('rules')
// let elementbyid = document.getElementById('content') 
// let elementsByTagName = document.getElementsByTagName('h2')

// 26) змінити цей текст використовуючи селектори id, class,  tag
// let elementsByTagName = document.getElementsByTagName('h2')
// for (let element of elementsByTagName){
//     element.innerText='bla bla bla'
//     console.log(element)
// }

// let elementsByClassName = document.getElementsByClassName('rules')
// for (let element1 of elementsByClassName){
//     element1.innerText='заголовок'
//     console.log(element1)
// }

// let elementbyid = document.getElementById('content')
// for (let element2 of elementbyid){
//     element2.innerText='jnjjf'
//     console.log(element2)
// }


// 27) змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let elementsByTagName = document.getElementsByTagName('h2')
// console.log(elementsByTagName)
// for (let element of elementsByTagName){
//     element.style.width='200px';
//     element.style.height='200px';
// }

// 28) за допомоги document.createElement та appendChild створити таблицю на 1 
// рядок з трьома ячейками всередені

// const table = document.createElement('table')
// const tr = document.createElement('tr')
// const td = document.createElement('td')
// const td1 = document.createElement('td')
// const td2 = document.createElement('td')

// tr.appendChild(td)
// tr.appendChild(td1)
// tr.appendChild(td2)

// table.appendChild(tr)

// document.body.appendChild(table)



// 29) за допомоги document.createElement, appendChild та циклу створити 
// таблицю на 10 рядків з трьома ячейками всередені

// const table = document.createElement('table')
// for(let i=0;i<10;i++){
//     const tr=document.createElement('tr')
//     for (let i=0;i<3;i++){
//         const td=document.createElement('td')
//         tr.appendChild(td)}

// table.appendChild(tr)
//     }



// 30) за допомоги document.createElement, appendChild та 2х циклів створити
//  таблицю на 10 рядків з 5 ячейками всередені


// 31)за допомоги document.createElement, appendChild та 2х циклів створити 
// таблицю на n рядків з m ячейками всередені. n та m отримати з prompt