// Управление анимациями и состояниями загрузки
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        // Добавляем анимации появления для карточек
        this.setupCardAnimations();
        
        // Добавляем анимации для кнопок
        this.setupButtonAnimations();
        
        // Добавляем анимации для поиска
        this.setupSearchAnimations();
        
        // Добавляем анимации для модальных окон
        this.setupModalAnimations();
        
        // Добавляем анимации для уведомлений
        this.setupNotificationAnimations();
    }

    setupCardAnimations() {
        // Анимация появления карточек с задержкой
        const cards = document.querySelectorAll('.function-card, .objection-card');
        cards.forEach((card, index) => {
            card.classList.add('card-enter');
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }

    setupButtonAnimations() {
        // Анимация для кнопок при клике
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .tab-filter');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.createRippleEffect(e);
            });
        });
    }

    setupSearchAnimations() {
        // Анимация для полей поиска
        const searchInputs = document.querySelectorAll('.search-input');
        searchInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.classList.add('input-micro');
            });
            
            input.addEventListener('blur', () => {
                input.classList.remove('input-micro');
            });
        });
    }

    setupModalAnimations() {
        // Анимация для модальных окон
        const modals = document.querySelectorAll('#functionModal, #objectionModal');
        modals.forEach(modal => {
            const content = modal.querySelector('.modal-content');
            if (content) {
                content.classList.add('modal-content-enhanced');
            }
        });
    }

    setupNotificationAnimations() {
        // Анимация для уведомлений
        const notifications = document.querySelectorAll('.notification-enhanced');
        notifications.forEach(notification => {
            notification.addEventListener('animationend', () => {
                setTimeout(() => {
                    notification.style.opacity = '0';
                    notification.style.transform = 'translateX(100%)';
                    setTimeout(() => {
                        if (notification.parentNode) {
                            notification.parentNode.removeChild(notification);
                        }
                    }, 300);
                }, 3000);
            });
        });
    }

    createRippleEffect(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Метод для показа состояния загрузки
    showLoading(element) {
        element.classList.add('loading-card');
        element.style.pointerEvents = 'none';
    }

    // Метод для скрытия состояния загрузки
    hideLoading(element) {
        element.classList.remove('loading-card');
        element.style.pointerEvents = 'auto';
    }

    // Метод для показа спиннера загрузки
    showSpinner(container) {
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.style.margin = '20px auto';
        container.appendChild(spinner);
        return spinner;
    }

    // Метод для скрытия спиннера загрузки
    hideSpinner(spinner) {
        if (spinner && spinner.parentNode) {
            spinner.parentNode.removeChild(spinner);
        }
    }

    // Метод для анимации появления элемента
    fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 10);
    }

    // Метод для анимации исчезновения элемента
    fadeOut(element, duration = 300) {
        element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
        element.style.opacity = '0';
        element.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }, duration);
    }

    // Метод для создания пульсирующей анимации
    pulse(element, duration = 1000) {
        element.classList.add('pulse');
        setTimeout(() => {
            element.classList.remove('pulse');
        }, duration);
    }

    // Метод для анимации успешного действия
    successAnimation(element) {
        element.style.transition = 'all 0.3s ease-out';
        element.style.transform = 'scale(1.05)';
        element.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.4)';
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.boxShadow = '';
        }, 300);
    }

    // Метод для анимации ошибки
    errorAnimation(element) {
        element.style.transition = 'all 0.3s ease-out';
        element.style.transform = 'scale(0.95)';
        element.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.4)';
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.boxShadow = '';
        }, 300);
    }
}

// Инициализация менеджера анимаций при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    window.animationManager = new AnimationManager();
});

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationManager;
}
