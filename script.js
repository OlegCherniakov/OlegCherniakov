"use strict";

let phrases = [
  //массив
  {
    text: "отправить другу смешную гифку",
    image: "https://code.s3.yandex.net/web-code/procrastinate/1.gif"
  }, //в массив вставили объект
  {
    text: "посмотреть скидки на авиабилеты",
    image: "https://code.s3.yandex.net/web-code/procrastinate/2.png"
  },
  {
    text: "разобраться, о чём поют рэперы",
    image: "https://code.s3.yandex.net/web-code/procrastinate/3.png"
  },
  {
    text: "Юрий Дудь",
    image: "https://code.s3.yandex.net/web-code/procrastinate/4.png"
  },
  {
    text: "расставить книги на полке по цвету",
    image: "https://code.s3.yandex.net/web-code/procrastinate/5.png"
  },
  {
    text: "читать про зарплаты в Сан-Франциско",
    image: "https://code.s3.yandex.net/web-code/procrastinate/6.png"
  },
  {
    text: "прочитать новости и ужаснуться в комментариях",
    image: "https://code.s3.yandex.net/web-code/procrastinate/7.png"
  },
  {
    text: "попасть в поток грустных песен и вспомнить все ошибки молодости",
    image: "https://code.s3.yandex.net/web-code/procrastinate/8.png"
  },
  {
    text: "посмотреть трейлер сериала и заодно первый сезон",
    image: "https://code.s3.yandex.net/web-code/procrastinate/9.png"
  },
  {
    text: "проверить непрочитанное в Telegram-каналах",
    image: "https://code.s3.yandex.net/web-code/procrastinate/10.png"
  }
];

function getRandomElement(arr) {
  //задали функцию (уравнение) для getRandomElement
  let randIndex = Math.floor(Math.random() * arr.length); //условие
  return arr[randIndex]; //что возвращается при arr
}

let button = document.querySelector(".button"); //Привязали команду к стилю класса в CSS
let phrase = document.querySelector(".phrase"); //Привязали команду к стилю класса в CSS
let advice = document.querySelector(".advice"); //Привязали команду к стилю класса в CSS
let image = document.querySelector(".image"); //Привязали команду к стилю класса в CSS

button.addEventListener("click", function() {
  // при нажатии на кнопку будет происходить ... getRandomElement(phrases);
  let randomElement = getRandomElement(phrases); // randomElement теперь объект
  smoothly(phrase, "textContent", randomElement.text); //подключили библиотеку <script src="https://code.s3.yandex.net/web-code/smoothly.js"></script>
  smoothly(image, "src", randomElement.image); // вот так Чтобы заменить адрес картинки, нужно переписать свойство src. подключили библиотеку <script src="https://code.s3.yandex.net/web-code/smoothly.js"></script>

  if (randomElement.text.length > 40) {
    //если длина фразы randomElement больше 40 символов, то...
    advice.style.fontSize = "33px"; //Для элемента advice установите размер шрифта 33px
  } else {
    //если условие не выполняется. То есть если длина фразы не больше 40.
    advice.style.fontSize = "42px";
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  //Задали цикл из первых 3 фраз и картинок при загрузке страницы
  smoothly(phrase, "textContent", phrases[i].text);
}

for (let i = 0; i <= 2; i = i + 1) {
  //Задали цикл из первых 3 фраз и картинок при загрузке страницы
  smoothly(image, "src", image[i].image);
}
