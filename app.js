const button = document.querySelector('.btn'); //получаем кнопку из html файла 
const image = document.querySelector('.img'); //получаем изображение из html файла 
const url = 'https://aws.random.cat/meow'; // записываем сайт api в константу

//функция 
async function fetchHandler() {
    try {
        const response = await fetch(url); // Ч/з fetch запрос придёт promise. Запишем его в константу. (await - асинхронный процес)
        const date = await response.json(); // Декодирует данные и позволяет ими воспользоваться в дальнейшем 
        image.src = date.file; // Приравниваем значению src тега c классом .img из константы дата с файлом json. В свойстве src из записанного файла автоматически вставляется ссылка.        
    } catch (error) {
        console.log(error);
    }
}

// Добавим действие при нажатии на кропку (при клике). А именно будет вызываться функция fetchHandler
button.addEventListener('click', () => {
    let isLoaded = image.complete; 
    if (isLoaded) { // Добавляем условие -"Если картинка загрузится полностью"
        fetchHandler();
    }

})

fetchHandler();