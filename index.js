

const a = 'Hello wolrd!'

console.log(a);

const root = document.getElementById('root');

const child = document.createElement('div')

child.innerText = a;

root.appendChild(child);
