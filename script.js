/* ============================================
   NOVA CART HUB - PROFESSIONAL JAVASCRIPT
   Complete Functionality with All Products
   ============================================ */

// ============================================
// COMPLETE PRODUCT DATA - 9 PRODUCTS
// ============================================
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "audio",
        price: 99.99,
        originalPrice: 149.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        reviews: 245,
        badge: "sale",
        badgeText: "-33%",
        description: "Premium sound quality with active noise cancellation and 30-hour battery life.",
        features: [
            "Active Noise Cancellation",
            "30-hour battery life",
            "Bluetooth 5.0 connectivity",
            "Built-in microphone",
            "Comfortable ear cushions",
            "Foldable design"
        ]
    },
    {
        id: 2,
        name: "Smart Watch Series 5",
        category: "electronics",
        price: 199.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        rating: 5.0,
        reviews: 189,
        badge: "popular",
        badgeText: "Best Seller",
        description: "Track your fitness, receive notifications, and monitor your heart rate.",
        features: [
            "Heart Rate Monitor",
            "GPS Tracking",
            "Water Resistant",
            "Sleep Tracking",
            "Smart Notifications",
            "5-day battery life"
        ]
    },
    {
        id: 3,
        name: "Wireless Earbuds Pro",
        category: "audio",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        rating: 4.0,
        reviews: 312,
        badge: "new",
        badgeText: "New",
        description: "Compact design with crystal clear sound and active noise cancellation.",
        features: [
            "24hr Battery (with case)",
            "Wireless Charging",
            "IPX4 Water Resistant",
            "Touch Controls",
            "Voice Assistant",
            "Quick Pair"
        ]
    },
    {
        id: 4,
        name: "Smart Watch Pro",
        category: "electronics",
        price: 249.99,
        originalPrice: 299.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        reviews: 156,
        badge: null,
        description: "Advanced fitness tracking, built-in GPS, and ECG monitoring.",
        features: [
            "ECG Monitor",
            "Fall Detection",
            "LTE Connectivity",
            "Blood Oxygen Monitor",
            "Stress Tracking",
            "7-day battery life"
        ]
    },
    {
        id: 5,
        name: "Portable Bluetooth Speaker",
        category: "audio",
        price: 129.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        rating: 5.0,
        reviews: 203,
        badge: "popular",
        badgeText: "Best Seller",
        description: "360° surround sound, 20-hour battery, and waterproof design.",
        features: [
            "360° Sound",
            "IP67 Waterproof",
            "20hr Battery",
            "Built-in Mic",
            "Party Mode",
            "Bluetooth 5.1"
        ]
    },
    {
        id: 6,
        name: "Aluminum Phone Stand",
        category: "accessories",
        price: 29.99,
        originalPrice: 39.99,
        image: "https://images.unsplash.com/photo-1495433983666-b1c2ab5c37e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        rating: 4.0,
        reviews: 89,
        badge: null,
        description: "Premium aluminum stand compatible with all smartphones and tablets.",
        features: [
            "Universal Compatibility",
            "360° Rotation",
            "Foldable Design",
            "Non-slip Base",
            "Cable Management",
            "Premium Aluminum"
        ]
    },
    {
        id: 7,
        name: "Ultra Slim Laptop",
        category: "electronics",
        price: 999.99,
        originalPrice: 1299.99,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        rating: 5.0,
        reviews: 134,
        badge: "sale",
        badgeText: "-23%",
        description: "Powerful laptop with 16GB RAM, 512GB SSD, and stunning 4K display.",
        features: [
            "16GB RAM",
            "512GB SSD",
            "4K Display",
            "Intel i7 Processor",
            "Backlit Keyboard",
            "Fingerprint Sensor"
        ]
    },
    {
        id: 8,
        name: '10.5" Tablet Pro',
        category: "electronics",
        price: 449.99,
        originalPrice: 499.99,
        image: "https://images.unsplash.com/photo-1544244011-0cccfeb84189?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        rating: 4.0,
        reviews: 98,
        badge: "new",
        badgeText: "New",
        description: "Perfect for entertainment and productivity with included stylus.",
        features: [
            "Stylus Included",
            "Keyboard Support",
            "12hr Battery",
            "Retina Display",
            "Face ID",
            "USB-C Charging"
        ]
    },
    {
        id: 9,
        name: "Gaming Mouse",
        category: "accessories",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        reviews: 167,
        badge: "sale",
        badgeText: "-25%",
        description: "High-precision gaming mouse with RGB lighting and programmable buttons.",
        features: [
            "16000 DPI Sensor",
            "RGB Lighting",
            "8 Programmable Buttons",
            "Ergonomic Design",
            "Braided Cable",
            "On-board Memory"
        ]
    }
];

// ============================================
// CART STATE
// ============================================
let cart = JSON.parse(localStorage.getItem('novaCart')) || [];
let quickViewQuantity = 1;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initProductGrid();
    initProductFilters();
    initSearch();
    initNewsletterForm();
    initContactForm();
    initScrollToTop();
    initCartModal();
    updateCartCount();
    initAnimations();
    setActiveNavLink();
});

// ============================================
// NAVBAR FUNCTIONALITY
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

// ============================================
// PRODUCT GRID - RENDER ALL 9 PRODUCTS
// ============================================
function initProductGrid() {
    const productGrid = document.getElementById('productsGrid');
    if (!productGrid) return;
    
    renderProducts(products);
}

function renderProducts(productsToRender) {
    const productGrid = document.getElementById('productsGrid');
    if (!productGrid) return;
    
    productGrid.innerHTML = productsToRender.map(product => createProductCard(product)).join('');
    attachProductEventListeners();
}

function createProductCard(product) {
    const badgeClass = product.badge === 'sale' ? 'bg-danger' : 
                      product.badge === 'new' ? 'bg-success' : 
                      product.badge === 'popular' ? 'bg-warning text-dark' : '';
    
    const badgeHTML = product.badge ? 
        `<div class="product-badge">
            <span class="badge ${badgeClass}">${product.badgeText || product.badge}</span>
        </div>` : '';
    
    const originalPriceHTML = product.originalPrice > product.price ? 
        `<span class="old-price ms-2">$${product.originalPrice.toFixed(2)}</span>` : '';
    
    const starsHTML = generateStars(product.rating);
    
    return `
        <div class="col-md-6 col-lg-4 product-item" data-category="${product.category}" data-product-name="${product.name}" data-id="${product.id}">
            <div class="card product-card h-100">
                ${badgeHTML}
                <img src="${product.image}" class="card-img-top" alt="${product.name}" loading="lazy">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title fw-bold">${product.name}</h5>
                        <span class="product-rating">
                            ${starsHTML}
                            <span class="ms-1 small">(${product.rating})</span>
                        </span>
                    </div>
                    <p class="card-text text-muted small">${product.description}</p>
                    <div class="product-features">
                        <small class="text-muted d-block"><i class="fas fa-check-circle text-success me-1"></i> ${product.features[0]}</small>
                        <small class="text-muted d-block"><i class="fas fa-check-circle text-success me-1"></i> ${product.features[1]}</small>
                        <small class="text-muted d-block"><i class="fas fa-check-circle text-success me-1"></i> ${product.features[2]}</small>
                    </div>
                    <div class="price-section d-flex justify-content-between align-items-center">
                        <div>
                            <span class="current-price">$${product.price.toFixed(2)}</span>
                            ${originalPriceHTML}
                        </div>
                        <button class="btn-view" onclick="openProductModal(${product.id})">
                            View <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star text-warning"></i>';
        } else if (i === Math.floor(rating) + 1 && rating % 1 >= 0.5) {
            stars += '<i class="fas fa-star-half-alt text-warning"></i>';
        } else {
            stars += '<i class="far fa-star text-warning"></i>';
        }
    }
    return stars;
}

// ============================================
// PRODUCT MODALS - ALL 9 PRODUCTS
// ============================================
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create modal dynamically
    const modalId = `productModal${productId}`;
    let modal = document.getElementById(modalId);
    
    if (!modal) {
        modal = createProductModal(product);
        document.body.appendChild(modal);
    }
    
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

function createProductModal(product) {
    const modalDiv = document.createElement('div');
    modalDiv.className = 'modal fade';
    modalDiv.id = `productModal${product.id}`;
    modalDiv.tabIndex = '-1';
    
    const featuresList = product.features.map(f => `<li>${f}</li>`).join('');
    
    modalDiv.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold">${product.name} - Product Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
                        </div>
                        <div class="col-md-6">
                            <h4>${product.name}</h4>
                            <p class="text-muted">${product.description}</p>
                            <div class="d-flex align-items-center gap-3 mb-3">
                                <h3 class="text-primary fw-bold mb-0">$${product.price.toFixed(2)}</h3>
                                ${product.originalPrice > product.price ? 
                                    `<span class="text-muted text-decoration-line-through">$${product.originalPrice.toFixed(2)}</span>` : ''}
                            </div>
                            <div class="mb-3">
                                ${generateStars(product.rating)}
                                <span class="ms-2">(${product.reviews} reviews)</span>
                            </div>
                            <h5 class="fw-bold mb-3">Features:</h5>
                            <ul>
                                ${featuresList}
                            </ul>
                            <div class="d-flex gap-2 mt-4">
                                <div class="input-group" style="width: 120px;">
                                    <button class="btn btn-outline-secondary" type="button" onclick="updateModalQty(${product.id}, -1)">-</button>
                                    <input type="text" class="form-control text-center" id="modalQty${product.id}" value="1" readonly>
                                    <button class="btn btn-outline-secondary" type="button" onclick="updateModalQty(${product.id}, 1)">+</button>
                                </div>
                                <button class="btn btn-primary flex-grow-1" onclick="addToCartFromModal(${product.id})">
                                    <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return modalDiv;
}

// Modal quantity functions
function updateModalQty(productId, change) {
    const qtyInput = document.getElementById(`modalQty${productId}`);
    if (qtyInput) {
        let qty = parseInt(qtyInput.value) + change;
        qty = Math.max(1, qty);
        qtyInput.value = qty;
    }
}

function addToCartFromModal(productId) {
    const qtyInput = document.getElementById(`modalQty${productId}`);
    const quantity = qtyInput ? parseInt(qtyInput.value) : 1;
    addToCart(productId, quantity);
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById(`productModal${productId}`));
    if (modal) modal.hide();
}

// ============================================
// PRODUCT FILTERS
// ============================================
function initProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter products
            productItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
function initSearch() {
    const searchInput = document.getElementById('productSearch');
    const searchBtn = document.getElementById('searchBtn');
    const productItems = document.querySelectorAll('.product-item');
    
    if (!searchInput || !searchBtn) return;
    
    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        productItems.forEach(item => {
            const productName = item.getAttribute('data-product-name').toLowerCase();
            if (productName.includes(searchTerm) || searchTerm === '') {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    searchBtn.addEventListener('click', searchProducts);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchProducts();
    });
}

// ============================================
// CART FUNCTIONALITY
// ============================================
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartCount();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartItems();
    updateCartTotal();
    showToast(`${product.name} removed from cart!`);
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartCount();
            renderCartItems();
            updateCartTotal();
        }
    }
}

function clearCart() {
    if (cart.length === 0) return;
    
    cart = [];
    saveCart();
    updateCartCount();
    renderCartItems();
    updateCartTotal();
    showToast('Cart cleared!');
}

function saveCart() {
    localStorage.setItem('novaCart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function initCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (!cartModal) return;
    
    cartModal.addEventListener('show.bs.modal', function() {
        renderCartItems();
        updateCartTotal();
    });
    
    // Clear cart button
    const clearBtn = document.getElementById('clearCartBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearCart);
    }
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length > 0) {
                alert('Thank you for your purchase! This is a demo checkout.');
            }
        });
    }
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartFooter = document.getElementById('cartFooter');
    
    if (!cartItemsContainer || !emptyCart || !cartFooter) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCart.style.display = 'block';
        cartFooter.style.display = 'none';
        return;
    }
    
    emptyCart.style.display = 'none';
    cartFooter.style.display = 'block';
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item d-flex justify-content-between align-items-center mb-3 p-3 border-bottom">
            <div class="d-flex align-items-center">
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 10px;" class="me-3">
                <div>
                    <h6 class="fw-bold mb-1">${item.name}</h6>
                    <span class="text-primary fw-bold">$${item.price.toFixed(2)}</span>
                </div>
            </div>
            <div class="d-flex align-items-center gap-3">
                <div class="input-group" style="width: 100px;">
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="form-control text-center">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function updateCartTotal() {
    const cartTotal = document.getElementById('cartTotal');
    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

// ============================================
// QUICK VIEW (Index Page)
// ============================================
function initQuickView() {
    const quickViewButtons = document.querySelectorAll('.product-action-btn:last-child');
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productTitle = productCard.querySelector('.fw-bold.mt-2').textContent;
            const productPrice = productCard.querySelector('.text-primary').textContent;
            const productImage = productCard.querySelector('.product-image').src;
            
            document.getElementById('quickViewTitle').textContent = productTitle;
            
            const quickViewContent = document.getElementById('quickViewContent');
            quickViewContent.innerHTML = `
                <div class="col-md-6">
                    <img src="${productImage}" alt="${productTitle}" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <h4 class="fw-bold mb-3">${productTitle}</h4>
                    <p class="text-muted mb-3">Experience premium quality with our ${productTitle}. Perfect for everyday use.</p>
                    <h5 class="text-primary fw-bold mb-3">${productPrice}</h5>
                    <ul class="list-unstyled mb-4">
                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Premium Quality</li>
                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>1 Year Warranty</li>
                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Free Shipping</li>
                    </ul>
                    <button class="btn btn-primary rounded-pill w-100" onclick="addToCartFromQuickView('${productTitle}', ${parseFloat(productPrice.replace('$', ''))})">
                        <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                    </button>
                </div>
            `;
            
            const quickViewModal = new bootstrap.Modal(document.getElementById('quickViewModal'));
            quickViewModal.show();
        });
    });
}

function addToCartFromQuickView(productName, price) {
    const product = products.find(p => p.name === productName);
    if (product) {
        addToCart(product.id, 1);
    }
    
    const quickViewModal = bootstrap.Modal.getInstance(document.getElementById('quickViewModal'));
    if (quickViewModal) quickViewModal.hide();
}

// ============================================
// FORMS
// ============================================
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        showToast('Thank you for subscribing!');
        this.reset();
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('Message sent successfully!');
        this.reset();
    });
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message) {
    const toastEl = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');
    
    if (!toastEl || !toastMessage) return;
    
    toastMessage.textContent = message;
    const toast = new bootstrap.Toast(toastEl, { autohide: true, delay: 3000 });
    toast.show();
}

// ============================================
// SCROLL TO TOP
// ============================================
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (!scrollBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// ANIMATIONS
// ============================================
function initAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .product-card, .testimonial-card, .stat-card, .value-card, .team-card, .faq-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// GLOBAL FUNCTIONS
// ============================================
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openProductModal = openProductModal;
window.updateModalQty = updateModalQty;
window.addToCartFromModal = addToCartFromModal;
window.addToCartFromQuickView = addToCartFromQuickView;