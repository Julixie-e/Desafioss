const container_books = document.getElementById('container_books');
const counter_cart = document.getElementById('counter_cart');
const container_cart = document.getElementById('container_cart');
const clear_cart = document.getElementById('clear_cart');

const cart = [];

clear_cart.addEventListener('click', cartClear);


getBooks();

function getBooks() {
    books.forEach(item => {
        const content_book = document.createElement('div');
        content_book.classList.add('card');
        content_book.innerHTML = `
            <h1>${item.title}</h1>
            <img src="${item.image}" alt="${item.title}">
            <p>${item.author}</p>
            <p>${item.year}</p>
            <button class="btn_add-to-cart" value="${item.id}">Agregar al carrito</button>
        `;
        container_books.appendChild(content_book);
    });

    const addToCartButtons = document.querySelectorAll('.btn_add-to-cart');

    addToCartButtons.forEach(item => {
        item.addEventListener('click', addToCart);
    });
}

function addToCart(event) {
    const bookId = event.target.value;

    const book = books.find(book => book.id === parseInt(bookId));

    if (book) {
        cart.push(book);
        counter_cart.innerText = cart.length;
        cartDisplay(book);
    }
}

function cartDisplay(product) {
    const cart_book = document.createElement('div');
    cart_book.classList.add('card');
    cart_book.innerHTML = `
        <h1>${product.title}</h1>
        <img src="${product.image}" alt="${product.title}">
        <p>${product.author}</p>
        <p>${product.year}</p>
        <button class="btn_remove-from-cart" value="${product.id}">Eliminar</button>
    `;

    const removeButton = cart_book.querySelector('.btn_remove-from-cart');

    removeButton.addEventListener('click', removeItemCart);

    container_cart.appendChild(cart_book);
}

function cartClear() {
    cart.length = 0;
    counter_cart.innerText = '0';
    container_cart.innerHTML = '';
}

function removeItemCart(event) {
    const bookId = event.target.value;

    const index = cart.findIndex(book => book.id === parseInt(bookId));

    if (index !== -1) {
        cart.splice(index, 1);
        counter_cart.innerText = cart.length;
        container_cart.innerHTML = '';
        cart.forEach(item => {
            cartDisplay(item);
        });
    }
}
