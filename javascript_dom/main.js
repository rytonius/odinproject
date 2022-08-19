const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const test = document.createElement('divvy');
test.classList.add('test')
test.textContent = 'this is clearly a test'

container.appendChild(test)
