let phrases = ['отправить другу смешную гифку',
'посмотреть скидки на авиабилеты',
'разобраться, о чём поют рэперы',
'Юрий Дудь',
'расставить книги на полке по цвету',
'читать про зарплаты в Сан-Франциско']; // Для начала создайте переменную phrases и присвойте ей пустой массив, затем заполните его фразами в столбик

console.log(phrases[0]);  //  выведите первый элемент массива phrases в консоль.
console.log(phrases[2]);  //  выведите 3й  элемент массива phrases в консоль.
console.log(phrases[4]);  //  выведите 5й элемент массива phrases в консоль.

let randIndex = Math.random()*6; //создайте переменную randIndex и присвойте ей выражение, генерирующее случайное число от 0 до 1.
							     // Но пока сделайте так, чтобы в переменную randIndex попало случайное число между 0 и 5.999999999999		
console.log(randIndex); // выводит в консоль случайное число
console.log(phrases[randIndex]); // выводит в консоль текст из массива соответствующий случайному  числу