// Homework - 1
// alert("Привіт");
// let firstName = prompt("Яке вас звати?");
// alert(firstName + "Раді вас бачити");

// Homework - 2
// const year = 2019;

// alert("Привіт");
// let bornYear = prompt("Вкажіть ваш рік народження");
// let age = year - bornYear;

// alert("Вам: " + age);

// Homework - 3

// let squareSide = prompt("Привіт, Вкажіть довжину сторони квадрату");
// let squarePerimeter = 4 * squareSide;
// alert("Периметр складає: " + squarePerimeter);

// Homework - 4

// let circleRadius = prompt("Привіт, Вкажіть радіус круга");
// let circleArea = Math.PI * circleRadius ** 2;
// alert("Площа складає: " + circleArea);

// Homework - 5

// let distance = prompt("Яка відстань між містами?");
// let time = prompt("За скільки годин ви хочете дістатись?");

// let speed = distance / time;

// alert("Вам потрібно рухатись зі швидкістю: " + speed + " км/год");

// Homework - 6

// let euro = prompt("Яку суму ви бажаєте обміняти?");
// const courseEuro = 1.11;
// let usd = euro * courseEuro;

// alert("Ви отримаєте: " + usd.toFixed(2) + "$");

// Homework - 7

// let flashCapacity = prompt("Який об'єм USB носія в ГБ?");
// const mbInGB = 1024;
// const fileSize = 820;
// let fileQty = flashCapacity * mbInGB / fileSize;

// alert("На даному носії поміститься близько " + fileQty.toFixed(0) + " файлів " + "розміром " + fileSize + "МБ" )

// Homework - 8
let myMoney = prompt("Скілько грошей в гаманці?");
let priceChocolate = prompt("Яка вартісь шоколаду вас влаштує?");

let chocolateQty = myMoney / priceChocolate;

let rest = myMoney - (chocolateQty.toFixed(0) * priceChocolate);

console.log(rest);

// alert("а данну суму ви можете придбати " + chocolateQty + " плиток" + "Ваша решта складе " + rest + "грн")

