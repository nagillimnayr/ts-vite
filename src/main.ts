function main() {
    const hello = document.createElement('h1');
    hello.textContent = 'Hello, World!';
    document.body.appendChild(hello);
}

window.addEventListener('load', main);
