// Создаем элемент div для окна

const body = document.body

body.style.backgroundColor = '#ff9'

console.log(body)

const myWindow = document.createElement('div');
myWindow.id = 'myWindow';

// Добавляем стили для окна
myWindow.style.position = 'fixed';
myWindow.style.top = '50%';
myWindow.style.left = '50%';
myWindow.style.transform = 'translate(-50%, -50%)';
myWindow.style.backgroundColor = 'white';
myWindow.style.padding = '100px';
myWindow.style.borderRadius = '5px';
myWindow.style.border = '1px solid #ccc';
myWindow.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
myWindow.style.zIndex = '100';
myWindow.style.display = 'flex'
myWindow.style.flexFlow = 'column'
// Создаем поля ввода

const input1 = document.createElement('input');
input1.type = 'text';
input1.placeholder = 'name';
const input2 = document.createElement('input');
input2.type = 'password';
input2.placeholder = 'password';


// Стили для полей ввода
input1.style.marginBottom = '35px'
input2.style.marginBottom = '30px'



// Создаем кнопку "Закрыть"
const closeButton = document.createElement('button');
closeButton.id = 'closeWindow';
closeButton.textContent = 'Sign in';

// Стиль для кнопки

closeButton.style.backgroundColor = '#C87934'; // Коричневый цвет
closeButton.style.color = 'white'; // Белый текст
closeButton.style.padding = '10px 20px'; // Отступы
closeButton.style.border = '2px solid #804000'; // Темно-коричневая рамка
closeButton.style.borderRadius = '5px'; // Скругленные углы
closeButton.style.fontFamily = 'Arial, Helvetica, sans-serif'; // Шрифт
closeButton.style.fontSize = '16px'; // Размер шрифта
closeButton.style.fontWeight = 'bold'; // Жирный шрифт
closeButton.style.cursor = 'pointer'; // Курсор в виде указателя
closeButton.style.transition = 'background-color 0.3s ease'; // Плавный переход цвета при наведении


// Изменение цвета фона при наведении курсора
closeButton.addEventListener('mouseover', () => {
  closeButton.style.backgroundColor = '#A55A2A'; // Более темный коричневый цвет
});

closeButton.addEventListener('mouseout', () => {
  closeButton.style.backgroundColor = '#C87934'; // Возвращаем исходный цвет
});


// Добавляем поля ввода и кнопку в окно
myWindow.appendChild(input1);
myWindow.appendChild(input2);
myWindow.appendChild(closeButton);

// Добавляем окно в документ
document.body.appendChild(myWindow);

// Добавляем обработчик события для кнопки "Закрыть"
closeButton.addEventListener('click', () => {
  myWindow.style.display = 'none';
});

