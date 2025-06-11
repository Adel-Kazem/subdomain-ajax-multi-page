// app.js - Shared functionality for all pages
document.addEventListener('alpine:init', () => {
    // Create a shared cart store that persists between page navigations
    Alpine.store('cart', {
        items: [],

        init() {
            // Load cart from localStorage on initialization
            const savedCart = localStorage.getItem('primeBeefCart');
            if (savedCart) {
                this.items = JSON.parse(savedCart);
            }
        },

        // Save cart to localStorage whenever it changes
        saveCart() {
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

            // Show cart notification (implement in each page)
            this.showCartNotification();
        },

        removeItem(productId) {
            this.items = this.items.filter(item => item.id !== productId);
            this.saveCart();
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

        clearCart() {
            this.items = [];
            this.saveCart();
        },

        getTotalPrice() {
            return this.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
        },

        getTotalItems() {
            return this.items.reduce((total, item) => total + item.quantity, 0);
        },

        // To be implemented in each page
        showCartNotification() {
            // This function will be overridden by each page's implementation
            console.log('Cart updated');
        },

        // WhatsApp integration with purchase details
        openWhatsApp(purchaseDetails = null) {
            let message = 'Hello, I would like to make an inquiry.';

            if (purchaseDetails || this.items.length > 0) {
                message = `Hello, I would like to place the following order:\n\n`;

                // Add items details
                (purchaseDetails || this.items).forEach(item => {
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

    // Common UI functionality
    Alpine.data('commonUI', () => ({
        isMenuOpen: false,
        showCart: false,

        scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        },

        toggleCart() {
            this.showCart = !this.showCart;
        },

        closeCart() {
            this.showCart = false;
        }
    }));
});

// Helper function to get URL parameters
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Navigate to a product detail page
function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}