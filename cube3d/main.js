(function () {
	let rotateY = 0,
		  rotateX = 0;

	document.onkeydown = function (e) {
			   if (e.keyCode === 37) rotateY -= 4
		else if (e.keyCode === 38) rotateX += 4
		else if (e.keyCode === 39) rotateY += 4
		else if (e.keyCode === 40) rotateX -= 4

		document.querySelector('.cube').style.transform = 
      'rotateY(' + rotateY + 'deg)'+
      'rotateX(' + rotateX + 'deg)';
    }
})();

/* ========================= */

const strup = document.querySelector('.str1');
const strdown = document.querySelector('.str2');
const strleft = document.querySelector('.str3');
const strright = document.querySelector('.str4');

function init() {
  let rotateX = 0;
  let rotateY = 0;
  
  strup.addEventListener('click', jsup);
  strdown.addEventListener('click', jsdown);
  strright.addEventListener('click', jsright);
  strleft.addEventListener('click', jsleft);
  
  document.querySelector('.cube').style.transition = '1s ease-in-out';
  
  function jsup() {
    rotateX += 10
    
    document.querySelector('.cube').style.transform = 
      'rotateY(' + rotateY + 'deg)'+
      'rotateX(' + rotateX + 'deg)';
    }
    function jsdown() {
    rotateX -= 10
    
    document.querySelector('.cube').style.transform = 
      'rotateY(' + rotateY + 'deg)'+
      'rotateX(' + rotateX + 'deg)';
    }
    function jsright() {
      rotateY += 10
      
      document.querySelector('.cube').style.transform = 
      'rotateY(' + rotateY + 'deg)'+
      'rotateX(' + rotateX + 'deg)';
    }
    function jsleft() {
      rotateY -= 10
      
      document.querySelector('.cube').style.transform = 
      'rotateY(' + rotateY + 'deg)'+
      'rotateX(' + rotateX + 'deg)';
    }
  }
init();

/*============================SWITCH() {}======================================*/

// let a = 3;

// switch (a) {
//   case 3:
//     console.log( 'Маловато' );
//     break;
//   case 4:
//     console.log( 'В точку!' );
//     break;
//   case 5:
//     console.log( 'Перебор' );
//     break;
//   default:
//     console.log( "Нет таких значений" );
// }

/*============================MATH()=====================================*/

// let test = 0.2 + 0.1;

// console.log(Math.ceil(test));

// console.log(Math.round(0.1));
// console.log(Math.round(0.5));
// console.log(Math.round(0.9));

/*============================TOFIXED()=================================*/

// let test = 0.1 + 0.2;
// console.log(test.toFixed(4));

/*============================+NUMBER()==================================*/
// console.log('0.6'); //0.6 как строка

// console.log(Number('0.6')); //0.6 как number как число выводится а не как строка
// console.log(+('0.6')) //точно такая же но сокращенная запись Number.
// console.log(Number.parseInt('9.99px')); //9 оно не совсем идеально работает отбрасывает элоементы и приводит в число но так же округляет наше число но никто не пишет 9.999 вместе со строкой так что вы врятли с этим езще столкнетесь
// console.log(Number.parseInt('px9.999')) //ооно не работает если строка будет в начале нашего числа№ как я и говорил
// console.log(Number.parseInt('9pxpxpcisivj.94343p[px')) //оно видело сейчас только 9.94343 так как вначале было 9 оно вывело только его а все что было за ним оно отбросило

// const test = 15;
// console.log(typeof test.toString()); //test.toString() взяло и сделала нашу переменную тест из намбер значения в стринг значентие оно его перевело а с помощью typeof мы это поняли

// console.log(Math.pow(2, 5)) //мы возвлеи 2 в степень 5
// console.log(2 ** 5); //** Сокращенная запись Math.pow, используйте ** именно для того чтобы возвести это число в степень

//Number.isNaN() проверяет какое то значение в переменной является ли оно числом или нет если оно не является числом то оно дает значение false если же является то дает значение true

// let a = 2.2;
// let b = 2;
// console.log(Number.isInteger(a)); //false
// console.log(Number.toInteger(b)); //true
//Number.isInteger() проверяет значение введенной переменной в скобки. тестит является ли значение ЦЕЛЫМ числом. если является дробным то false если же целым то true

/*===============================Math.random()===================================*/

//дробные

console.log(Math.random() * 2) //находит рандомное знвчение от 0 до 2 в том числе и дробные до 3 не доходит но может быть 2.9...
console.log(Math.random() * 2 + 1) //находит рандомные значение от 1 до 2 в том числе и дробные до 3 не доходит 2.9...

//целые

console.log(Math.floor(Math.random() * 10 + 1)); //теперь оно ищет от 1 до 10 и выводит только ЦЕЛЫЕ числа. если напишем ceil то 1 до 11
console.log(Math.ceil(Math.random() * 10 + 1)); //теперь оно ищет ЦЕЛЫЕ числа от 1 до 11