const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toastBox = document.getElementById('toast');
const showSuccessToast = $('.btn--success');
const showErrorToast = $('.btn--danger');
const showWarningToast = $('.btn--warn');
const showInfoToast = $('.btn--info');

const app = {
    notifications: function({title, message, type, duration}) {
        if(toastBox) {
            const toast = document.createElement('div');
            const icons = {
                success: "fa-solid fa-tree",
                error: "fa-solid fa-heart",
                warning: "fa-solid fa-bell",
                info: "fa-solid fa-paper-plane",
            }

            const icon = icons[type];
            const delay = (duration / 1000).toFixed(2);

            const autoRemoveID = setTimeout(() => {
                toastBox.removeChild(toast);
            }, duration + 1000)

            toast.onclick = function(e) {
               if(e.target.closest('.toast__close')) {
                    toastBox.removeChild(toast);
                    clearTimeout(autoRemoveID);
               }
            },

            toast.classList.add('toast', `toast--${type}`);
            toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
            toast.innerHTML = `
            <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>
            `;    
        toastBox.appendChild(toast);        
            
        }

       
    },

    handleToastEvents: function() {
        showSuccessToast.onclick = function() {
            app.showSuccessToast();
        },

        showErrorToast.onclick = function() {
            app.showErrorToast();
        },

        showWarningToast.onclick = function() {
            app.showWarningToast();
        },

        showInfoToast.onclick = function() {
            app.showInfoToast();
        }

    },

    showSuccessToast: function() {
        this.notifications({
            title: "Christmas",
            message: 'Just about a few more weeks, Christmas will come',
            type: "success",
            duration:  6000,
        });
    },

    showErrorToast: function() {
        this.notifications({
            title: "Is",
            message: 'Wish that you would have a warm Christmas with your beloved ones',
            type: "error",
            duration:  9000,
        });
    },

    showWarningToast: function() {
        this.notifications({
            title: "Coming",
            message: 'And remember to check your door bell, maybe a present is on its way',
            type: "warning",
            duration:  12000,
        });
    },

    showInfoToast: function() {
        this.notifications({
            title: "Soon",
            message: 'Make some resolutions for next year and try to keep it. Again, have a great Christmas',
            type: "info",
            duration: 15000,
        });
    },

    start: function() {
        this.notifications({});
        this.handleToastEvents();
    }
}



app.start();