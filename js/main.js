document.addEventListener('DOMContentLoaded', function() {
    const openCartModalBtn = document.getElementById('open_cart_modal');
    const closeCartModalBtn = document.getElementById('close_cart_modal');
    const container_books = document.getElementById('container_books');
    const counter_cart = document.getElementById('counter_cart');
    const container_cart = document.getElementById('container_cart');
    const cartModal = document.getElementById('cart_modal');
    const modalContent = document.getElementById('modal_content');
    const clear_cart = document.getElementById('clear_cart');

    let cart = [];

    if (openCartModalBtn) {
        openCartModalBtn.addEventListener('click', openCartModal);
    }

    if (closeCartModalBtn) {
        closeCartModalBtn.addEventListener('click', closeCartModal);
    }

    if (clear_cart) {
        clear_cart.addEventListener('click', cartClear);
    }

    function getBooks() {
        books.forEach(item => {
            const content_book = document.createElement('div');
            content_book.classList.add('card');
            content_book.innerHTML = `
                <h1>${item.title}</h1>
                <img src="${item.image}" alt="${item.title}">
                <p>${item.author}</p>
                <p>${item.year}</p>
                <button class="btn_add-to-cart" data-id="${item.id}">Agregar al carrito</button>
            `;
            container_books.appendChild(content_book);

            const addToCartButton = content_book.querySelector('.btn_add-to-cart');
            addToCartButton.addEventListener('click', addToCart);
        });
    }

    function addToCart(event) {
        const bookId = event.target.dataset.id;
        const book = books.find(item => item.id === parseInt(bookId));

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
            <button class="btn_remove-from-cart" data-id="${product.id}">Eliminar</button>
        `;

        const removeButton = cart_book.querySelector('.btn_remove-from-cart');
        removeButton.addEventListener('click', removeItemCart);

        container_cart.appendChild(cart_book);
    }

    function removeItemCart(event) {
        const bookId = event.target.dataset.id;
        const index = cart.findIndex(item => item.id === parseInt(bookId));

        if (index !== -1) {
            cart.splice(index, 1);
            counter_cart.innerText = cart.length;
            event.target.parentNode.remove();
        }
    }

    function cartClear() {
        cart = [];
        counter_cart.innerText = '0';
        container_cart.innerHTML = '';
    }

    function openCartModal() {
        cartModal.style.display = 'block';
        populateModalContent();
    }

    function closeCartModal() {
        cartModal.style.display = 'none';
    }

    function populateModalContent() {
        modalContent.innerHTML = '';

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.textContent = `${item.title} - ${item.author}`;
            modalContent.appendChild(cartItem);
        });
    }

    getBooks();
});

