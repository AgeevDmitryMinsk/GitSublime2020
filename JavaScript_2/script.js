let phrases = ['отправить другу смешную гифку',
'посмотреть скидки на авиабилеты',
'разобраться, о чём поют рэперы',
'Юрий Дудь',
'расставить книги на полке по цвету',
'читать про зарплаты в Сан-Франциско']; // Для начала создайте переменную phrases и присвойте ей пустой массив, затем заполните его фразами в столбик

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