// let phrases = ['отправить другу смешную гифку',
//'посмотреть скидки на авиабилеты',
//'разобраться, о чём поют рэперы',
//'Юрий Дудь',
//'расставить книги на полке по цвету',
//'читать про зарплаты в Сан-Франциско',
//'пойти на демонстрацию протеста против режима',
//'пойти на демонстрацию протеста против диктатуры',
//'пойти на демонстрацию протеста против таракана',
//'посчитать количество петелек на свитере у Ксюши']; // Для начала создайте переменную phrases и присвойте ей пустой массив, затем заполните его фразами в столбик

let phrases = [ // Каждый элемент массива см выше предстоит превратить в объект со ссылкой на картинку: 
  { text: 'отправить другу смешную гифку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'посмотреть скидки на авиабилеты', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
{ text: 'разобраться, о чём поют рэперы', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
{ text: 'Юрий Дудь', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
{ text: 'расставить книги на полке по цвету', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
{ text: 'читать про зарплаты в Сан-Франциско', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
{ text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
{ text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
{ text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
{ text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }  
];

console.log(phrases[0]);  //  выведите первый элемент массива phrases в консоль.
console.log(phrases[2]);  //  выведите 3й  элемент массива phrases в консоль.
console.log(phrases[4]);  //  выведите 5й элемент массива phrases в консоль.

//let randIndex = Math.random()*6; //создайте переменную randIndex и присвойте ей выражение, генерирующее случайное число от 0 до 1.
							     // Но пока сделайте так, чтобы в переменную randIndex попало случайное число между 0 и 5.999999999999	
//let randIndex = Math.floor(Math.random() * 6); // Округлите результат Math.random() * 6 вниз и посмотрите, что из этого выйдет.							     	
// let randIndex = Math.floor(Math.random() * phrases.length); // Здесь у массива есть свойство length, оно хранит его длину мааслива, 
															//Чтобы её получить, нужно после имени массива поставить точку и написать length
															//	т.е.:    phrases.length в данном случае = 6.

//function getRandomElement() { //Сделайте так, чтобы код, выбирающий случайный элемент массива, стал функцией. 
							  //Для этого создайте (объявите) функцию getRandomElement
//	let randIndex = Math.floor(Math.random() * phrases.length);
//	console.log(randIndex); // выводит в консоль случайное число
//	console.log(phrases[randIndex]); // выводит в консоль текст из массива соответствующий случайному  числу}
// getRandomElement(); // вызов фунции getRandomElement(), в данном случае в консоль 

//function getRandomElement(arr) { //Сделайте так, чтобы функция getRandomElement принимала на вход массив. Дайте ему имя arr и используйте его
								 // в теле функции вместо phrases. При вызове функции getRandomElement передайте переменную phrases как аргумент.
//  let randIndex = Math.floor(Math.random() * arr.length);
//  console.log(randIndex);
//  console.log(phrases[randIndex]);}
// getRandomElement(phrases); // При вызове функции getRandomElement передайте переменную phrases как аргумент.

function getRandomElement(arr) { //Сделайте так, чтобы функция getRandomElement принимала на вход массив. Дайте ему имя arr и используйте его
								 // в теле функции вместо phrases. При вызове функции getRandomElement передайте переменную phrases как аргумент.
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];} // Чтобы вернуть значение из функции, уберите из кода выводы в консоль и используйте return
  						  // Нужно чтобы функция возвращала результат, а не выводила его в консоль. Тогда результат можно будет сохранить в переменную
  
getRandomElement(phrases); // При вызове функции getRandomElement передайте переменную phrases как аргумент.
let randomElement = getRandomElement(phrases); // Чтобы не потерять результат выполнения функции, создайте переменную randomElement. 
			//Затем вызовите функцию getRandomElement с массивом phrases в качестве аргумента — так, чтобы результат выполнения «вернулся» в переменную.
console.log(randomElement); // Проверьте, что в переменную попало то, что нужно — выведите её содержимое в консоль.

	// для сохранения в GitHub нужно обязательно сначала сохранить проект на винчестере, затем нажать ctrl + shift + P. 
	// Затем набраьть "stage", выбрать "git:quick stage", затем снова ctrl + shift + P и набрать push. ВСЁ !!!

let button = document.querySelector('.button'); // Инструментом document.querySelector выберите кнопку, то есть элемент с классом button. 
												// Положите его в переменную с таким же именем. Теперь информация о кнопке лежит в переменной button 

let advice = document.querySelector('.advice'); // Всего в проекте вам понадобятся 4 элемента: элемент с классом button, с классом advice, классом phrase и с классом image.
												// Первый вы уже выбрали, выберите и остальные, присвоив их к одноимённым переменным.
let image = document.querySelector('.image');
let phrase = document.querySelector('.phrase');



button.addEventListener('click', function () {
    console.log('Счастье не за горами');  // Создайте слушатель клика по элементу button. Сделайте так, чтобы клик по кнопке выводил в КОНСОЛЬ фразу Счастье не за горами.
	
	//phrase.textContent = getRandomElement(phrases); //  Создайте слушатель клика по элементу button. Сделайте так, чтобы фраза на сайте изменялась по нажатию кнопки.
													//Когда элемент выбран, им можно манипулировать. 
												// Используйте инструмент textContent и замените текст элемента .phrase на случайный элемент массива phrases
												// Вызовите функцию getRandomElement, при вызове передайте массив phrases в круглые скобки функции

	phrase.textContent = randomElement.text; //  Изменилось только одно: элементы массива были строками, а стали объектами. Хм, стало быть randomElement теперь не строка, а объект
											 //В коде исправьте randomElement(phrases) на randomElement.text
	image.src = randomElement.image; // Сделайте так, чтобы картинка тоже менялась по клику. 
									 // Элемент картинки мы уже выбрали, он в переменной image. Надо заменить его свойство src
 	if (randomElement.text.length > 40) {advice.style.fontSize = '33px'}  // уменьшим шрифт до 33px  если длина текста > 40 букв.
 			// Для элемента advice установите размер шрифта 33px. Такой приём будет в новинку, и мы подскажем: advice.style.fontSize = '33px'.

  else {advice.style.fontSize = '42px'}  //  оставим шрифт 42px  если длина текста < 40 букв.
});