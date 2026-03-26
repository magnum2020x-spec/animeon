/**
 * AnimeBest - Main JavaScript File
 * Handles interactive features and animations
 */

// ============================================
// Utility Functions
// ============================================

/**
 * Smooth scroll to element
 */
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Add class to element
 */
function addClass(selector, className) {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.add(className);
    });
}

/**
 * Remove class from element
 */
function removeClass(selector, className) {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.remove(className);
    });
}

/**
 * Toggle class on element
 */
function toggleClass(selector, className) {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.toggle(className);
    });
}

/**
 * Show element
 */
function show(selector) {
    document.querySelectorAll(selector).forEach(el => {
        el.style.display = 'block';
    });
}

/**
 * Hide element
 */
function hide(selector) {
    document.querySelectorAll(selector).forEach(el => {
        el.style.display = 'none';
    });
}

/**
 * Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// Navigation
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Active link highlighting
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// ============================================
// Button Interactions
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Primary buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Login button
    const loginBtn = document.querySelector('.btn-login');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            console.log('Login clicked');
            // Redirect to login page
            // window.location.href = '/login';
        });
    }
});

// ============================================
// Animations on Scroll
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.feature-card, .anime-card, .stat-item').forEach(el => {
        observer.observe(el);
    });
});

// ============================================
// Search Functionality
// ============================================

class SearchManager {
    constructor() {
        this.searchInput = document.querySelector('.search-input');
        this.searchResults = document.querySelector('.search-results');
        this.animeData = [];
        this.init();
    }

    init() {
        if (this.searchInput) {
            this.searchInput.addEventListener('input', debounce((e) => {
                this.search(e.target.value);
            }, 300));
        }
    }

    async search(query) {
        if (!query.trim()) {
            this.clearResults();
            return;
        }

        try {
            // Simulate API call
            const results = this.filterAnime(query);
            this.displayResults(results);
        } catch (error) {
            console.error('Search error:', error);
        }
    }

    filterAnime(query) {
        // Mock data - replace with actual API call
        const mockData = [
            { id: 1, title: 'Attack on Titan', rating: 9.0 },
            { id: 2, title: 'Death Note', rating: 8.9 },
            { id: 3, title: 'Demon Slayer', rating: 8.8 },
        ];

        return mockData.filter(anime =>
            anime.title.toLowerCase().includes(query.toLowerCase())
        );
    }

    displayResults(results) {
        if (!this.searchResults) return;

        if (results.length === 0) {
            this.searchResults.innerHTML = '<p>لم يتم العثور على نتائج</p>';
            return;
        }

        const html = results.map(anime => `
            <div class="search-result-item">
                <h4>${anime.title}</h4>
                <p>⭐ ${anime.rating}/10</p>
            </div>
        `).join('');

        this.searchResults.innerHTML = html;
    }

    clearResults() {
        if (this.searchResults) {
            this.searchResults.innerHTML = '';
        }
    }
}

// Initialize search
document.addEventListener('DOMContentLoaded', function() {
    new SearchManager();
});

// ============================================
// Modal Management
// ============================================

class Modal {
    constructor(selector) {
        this.modal = document.querySelector(selector);
        this.closeBtn = this.modal?.querySelector('.close');
        this.init();
    }

    init() {
        if (!this.modal) return;

        this.closeBtn?.addEventListener('click', () => this.close());
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
    }

    open() {
        if (this.modal) {
            this.modal.style.display = 'block';
            this.modal.classList.add('animate-fadeIn');
        }
    }

    close() {
        if (this.modal) {
            this.modal.style.display = 'none';
        }
    }
}

// ============================================
// Form Validation
// ============================================

class FormValidator {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validate()) {
                this.submit();
            }
        });
    }

    validate() {
        const inputs = this.form.querySelectorAll('input, textarea, select');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showError(input, 'هذا الحقل مطلوب');
                isValid = false;
            } else {
                this.clearError(input);
            }
        });

        return isValid;
    }

    showError(input, message) {
        input.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentElement.appendChild(errorDiv);
    }

    clearError(input) {
        input.classList.remove('error');
        const errorDiv = input.parentElement.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    submit() {
        console.log('Form submitted');
        // Handle form submission
    }
}

// ============================================
// Notifications
// ============================================

class Notification {
    static show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type} animate-slideInRight`;
        notification.textContent = message;
        
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, duration);
    }

    static success(message) {
        this.show(message, 'success');
    }

    static error(message) {
        this.show(message, 'danger');
    }

    static warning(message) {
        this.show(message, 'warning');
    }

    static info(message) {
        this.show(message, 'info');
    }
}

// ============================================
// API Calls
// ============================================

class API {
    static baseURL = '/api';

    static async get(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`);
            if (!response.ok) throw new Error('API Error');
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    static async post(endpoint, data) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error('API Error');
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    static async put(endpoint, data) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error('API Error');
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    static async delete(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('API Error');
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
}

// ============================================
// Local Storage Manager
// ============================================

class StorageManager {
    static set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Storage Error:', error);
        }
    }

    static get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Storage Error:', error);
            return null;
        }
    }

    static remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Storage Error:', error);
        }
    }

    static clear() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Storage Error:', error);
        }
    }
}

// ============================================
// Dark Mode Toggle
// ============================================

class ThemeManager {
    constructor() {
        this.theme = StorageManager.get('theme') || 'dark';
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggle());
        }
    }

    toggle() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.theme);
        StorageManager.set('theme', this.theme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }
}

// Initialize theme manager
document.addEventListener('DOMContentLoaded', function() {
    new ThemeManager();
});

// ============================================
// Export for use in other files
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        smoothScroll,
        addClass,
        removeClass,
        toggleClass,
        show,
        hide,
        debounce,
        throttle,
        Modal,
        FormValidator,
        Notification,
        API,
        StorageManager,
        ThemeManager,
    };
}
