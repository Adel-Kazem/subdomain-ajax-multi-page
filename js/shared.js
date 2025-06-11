// shared.js - Common functionality for all pages
document.addEventListener('alpine:init', () => {
    // Global Alpine Store for Cart
    Alpine.store('cart', {
        items: [],

        init() {
            // Load cart from localStorage on initialization
            const savedCart = localStorage.getItem('primeBeefCart');
            if (savedCart) {
                this.items = JSON.parse(savedCart);
            }
        },

        saveCart() {
            // Save cart to localStorage whenever it changes
            localStorage.setItem('primeBeefCart', JSON.stringify(this.items));
        },

        addItem(product, quantity = 1) {
            const existingItem = this.items.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                this.items.push({...product, quantity});
            }
            this.saveCart();

            // Show cart notification
            Alpine.store('ui').showCartNotification = true;
            setTimeout(() => {
                Alpine.store('ui').showCartNotification = false;
            }, 3000);
        },

        removeItem(productId) {
            this.items = this.items.filter(item => item.id !== productId);
            this.saveCart();
        },

        updateQuantity(productId, quantity) {
            const item = this.items.find(item => item.id === productId);
            if (item) {
                if (quantity > 0) {
                    item.quantity = quantity;
                } else {
                    this.removeItem(productId);
                }
                this.saveCart();
            }
        },

        increaseQuantity(productId) {
            const item = this.items.find(item => item.id === productId);
            if (item) {
                item.quantity++;
                this.saveCart();
            }
        },

        decreaseQuantity(productId) {
            const item = this.items.find(item => item.id === productId);
            if (item && item.quantity > 1) {
                item.quantity--;
                this.saveCart();
            } else {
                this.removeItem(productId);
            }
        },

        getTotalPrice() {
            return this.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
        },

        getTotalItems() {
            return this.items.reduce((total, item) => total + item.quantity, 0);
        },

        clearCart() {
            this.items = [];
            this.saveCart();
        },

        openWhatsApp(purchaseDetails = true) {
            let message = 'Hello, I would like to make an inquiry.';

            if (purchaseDetails && this.items.length > 0) {
                message = `Hello, I would like to place the following order:\n\n`;

                // Add items details
                this.items.forEach(item => {
                    message += `• ${item.name} (${item.quantity} × $${item.price.toFixed(2)})\n`;
                });

                // Add total
                message += `\nTotal: $${this.getTotalPrice()}\n`;
                message += `\nPlease contact me to confirm my order.`;
            }

            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/96170608543?text=${encodedMessage}`, '_blank');
        }
    });

    // UI State Store
    Alpine.store('ui', {
        isMenuOpen: false,
        showCartNotification: false,
        showCart: false,

        scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        },

        openWhatsApp() {
            window.open('https://wa.me/96170608543', '_blank');
        }
    });
});

// Utility Functions
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}