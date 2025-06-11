// products.js - Updated product data with category information
const PRODUCTS = [
    {
        id: 1,
        name: 'Prime Ribeye Steak',
        description: 'Our premium ribeye steak is perfectly marbled for exceptional flavor and tenderness. Ideal for grilling or pan-searing to medium-rare perfection.',
        price: 35.99,
        rating: 4.8,
        stock: 12,
        categoryId: 1, // Ribeye
        featured: true,
        new: false,
        sale: false,
        images: [
            'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        options: ['8oz', '12oz', '16oz'],
        features: [
            'Prime grade beef',
            'Exceptional marbling',
            'Wet-aged for 28 days',
            'Expertly trimmed',
            'Vacuum-sealed for freshness'
        ]
    },
    {
        id: 2,
        name: 'Sirloin Steak',
        description: 'A leaner cut that still delivers robust beef flavor. Our sirloin steaks are hand-selected for consistent quality and perfect thickness.',
        price: 28.99,
        rating: 4.6,
        stock: 25,
        categoryId: 2, // Sirloin
        featured: true,
        new: true,
        sale: false,
        images: [
            'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        options: ['8oz', '10oz', '12oz'],
        features: [
            'Choice grade beef',
            'Lean yet flavorful',
            'Aged for 21 days',
            'Consistent 1-inch thickness',
            'Individually vacuum-sealed'
        ]
    },
    {
        id: 3,
        name: 'Beef Tenderloin',
        description: 'The most tender cut of beef, our tenderloin is buttery soft with a mild, delicate flavor. Perfect for special occasions or when only the best will do.',
        price: 42.99,
        rating: 4.9,
        stock: 18,
        categoryId: 3, // Tenderloin
        featured: true,
        new: false,
        sale: false,
        images: [
            'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        options: ['6oz', '8oz'],
        features: [
            'Prime grade beef',
            'Center-cut filet',
            'Exceptionally tender',
            'Minimal trimming required',
            'Perfect for special occasions'
        ]
    },
    {
        id: 4,
        name: 'Beef Brisket',
        description: 'Our carefully selected brisket has the perfect amount of fat content for slow smoking or braising to achieve that melt-in-your-mouth texture.',
        price: 16.99,
        salePrice: 14.99,
        rating: 4.7,
        stock: 8,
        categoryId: 4, // Brisket
        featured: false,
        new: false,
        sale: true,
        images: [
            'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        options: ['4-5 lbs', '8-10 lbs'],
        features: [
            'Choice grade beef',
            'Perfect fat-to-meat ratio',
            'Ideal for smoking or slow cooking',
            'Full packer cut available',
            'Trimmed to specification upon request'
        ]
    },
    {
        id: 5,
        name: 'Beef Short Ribs',
        description: 'These meaty short ribs are rich in flavor and perfect for slow cooking. They become fall-off-the-bone tender when braised, smoked, or sous vide.',
        price: 18.99,
        rating: 4.8,
        stock: 15,
        categoryId: 5, // Short Ribs
        featured: false,
        new: false,
        sale: false,
        images: [
            'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        options: ['English Cut', 'Flanken Cut'],
        features: [
            'Choice grade beef',
            'Well-marbled',
            'Cut to 2-inch thickness',
            'Available bone-in or boneless',
            'Perfect for low and slow cooking'
        ]
    },
    {
        id: 6,
        name: 'Premium Ground Beef',
        description: 'Our ground beef is freshly ground daily from premium cuts. Available in various lean-to-fat ratios to suit your cooking needs.',
        price: 12.99,
        rating: 4.5,
        stock: 30,
        categoryId: 6, // Ground Beef
        featured: false,
        new: true,
        sale: false,
        images: [
            'https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        options: ['80/20', '85/15', '90/10'],
        features: [
            'Freshly ground daily',
            'No fillers or additives',
            'Available in multiple lean-to-fat ratios',
            'Packaged in 1lb portions',
            'Perfect for burgers, meatballs, and more'
        ]
    }
];

// Helper function to get a product by ID
function getProductById(id) {
    return PRODUCTS.find(product => product.id === parseInt(id));
}

// Helper function to get products by category ID
function getProductsByCategoryId(categoryId) {
    return PRODUCTS.filter(product => product.categoryId === parseInt(categoryId));
}

// Helper function to get featured products
function getFeaturedProducts() {
    return PRODUCTS.filter(product => product.featured);
}

// Helper function to get new arrivals
function getNewProducts() {
    return PRODUCTS.filter(product => product.new);
}

// Helper function to get sale products
function getSaleProducts() {
    return PRODUCTS.filter(product => product.sale);
}