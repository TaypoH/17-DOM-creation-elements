const name = prompt('Введіть ваше ім\'я');

const h1 = document.createElement('h1');
h1.append(`Вітаю, ${name}`);
document.body.append(h1);