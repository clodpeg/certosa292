const Certosa292 = {

    modalParking: null,
    modalCheckin: null,
    modalWifi: null,
    modalRules: null,
    modalGuide: null,
    modalDove: null,
    modalComeMuoversi: null,
    modalFood: null,
    modalCity: null,
    modalEmergency: null,

    init: function(){
        this.Modals();
        this.Menu();
        this.Hash();
        this.Language();
        this.Zoom();
    },

    Modals: () => {
        
        // modal parking
        Certosa292.modalParking = new bootstrap.Modal('#modal-parking');
        Certosa292.modalCheckin = new bootstrap.Modal('#modal-checkin');
        Certosa292.modalWifi = new bootstrap.Modal('#modal-wifi');
        Certosa292.modalRules = new bootstrap.Modal('#modal-rules');
        Certosa292.modalGuide = new bootstrap.Modal('#modal-guide');
        Certosa292.modalDove = new bootstrap.Modal('#modal-dove-lo-trovo');
        Certosa292.modalComeMuoversi = new bootstrap.Modal('#modal-come-muoversi');
        Certosa292.modalFood = new bootstrap.Modal('#modal-food');
        Certosa292.modalEmergency = new bootstrap.Modal('#modal-emergency');
        Certosa292.modalCity = new bootstrap.Modal('#modal-city');
        
        const modals = document.querySelectorAll('.modal');

        modals.forEach(el => {

            el.addEventListener('hide.bs.modal', () => {
                if (document.activeElement && el.contains(document.activeElement)) {
                  document.activeElement.blur();
                }
            });

            el.addEventListener('hidden.bs.modal', event => {
                history.replaceState(null, '', window.location.pathname + window.location.search);
            })
        });


    },



    Menu: () => {
        $('#menu a').on('click', function(){
            
            switch( $(this).attr('id') ){
                
                case 'menu-parking':
                    Certosa292.modalParking.show();
                break;

                case 'menu-checkin':
                    Certosa292.modalCheckin.show();
                break;

                case 'menu-wifi':
                    Certosa292.modalWifi.show();
                break;

                case 'menu-rules':
                    Certosa292.modalRules.show();
                break;

                case 'menu-guide':
                    Certosa292.modalGuide.show();
                break;

                case 'menu-dove-lo-trovo':
                    Certosa292.modalDove.show();
                break;

                case 'menu-come-muoversi':
                    Certosa292.modalComeMuoversi.show();
                break;

                case 'menu-food':
                    Certosa292.modalFood.show();
                break;

                case 'menu-emergency':
                    Certosa292.modalEmergency.show();
                break;

                case 'menu-city':
                    Certosa292.modalCity.show();
                break;

            }

            history.replaceState(null, '', window.location.pathname + window.location.search + '#' + $(this).attr('id').replace('menu-', ''));
        });
    },

    Hash: () => {
        if ( window.location.hash != ''){
            let hash = window.location.hash.replace('#','');

            const modalName = 'modal' + hash.charAt(0).toUpperCase() + hash.slice(1);
                
            if (Certosa292 && Certosa292[modalName] && typeof Certosa292[modalName].show === 'function') {
                Certosa292[modalName].show();
            }

        }
    },

    Language: () => {


        $('.selector-button').on('click', function(){
            document.getElementById("languageDropdown").style.display = document.getElementById("languageDropdown").style.display === "block" ? "none" : "block";
        });

        $('.dropdown-item').on('click', function(){
            const lang = $(this).data('lang');
            document.getElementById("languageDropdown").style.display = "none";

            document.location = '../' + lang;
            
        });

        document.addEventListener("click", function(e) {
            const dropdown = document.getElementById("languageDropdown");
            const button = document.querySelector(".selector-button");
            if (!button.contains(e.target) && !dropdown.contains(e.target)) {
              dropdown.style.display = "none";
            }
        });

    },

    Zoom: () => {
        const img = document.getElementById('zoomImage');
        let scale = 1, startX = 0, startY = 0, panX = 0, panY = 0, isDragging = false;

        img.addEventListener('wheel', e => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            scale = Math.min(Math.max(1, scale + delta), 3);
            updateTransform();
        });

        img.addEventListener('touchstart', e => {
            if (e.touches.length === 2) {
            e.preventDefault();
            pinchStart(e);
            } else if (e.touches.length === 1) {
            isDragging = true;
            startX = e.touches[0].clientX - panX;
            startY = e.touches[0].clientY - panY;
            }
        });

        img.addEventListener('touchmove', e => {
            if (e.touches.length === 1 && isDragging) {
            panX = e.touches[0].clientX - startX;
            panY = e.touches[0].clientY - startY;
            updateTransform();
            } else if (e.touches.length === 2) {
            pinchMove(e);
            }
        });

        img.addEventListener('touchend', e => {
            if (e.touches.length === 0) isDragging = false;
        });

        let initialDistance = 0;
        let initialScale = 1;

        function pinchStart(e) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            initialDistance = Math.sqrt(dx * dx + dy * dy);
            initialScale = scale;
        }

        function pinchMove(e) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const newDistance = Math.sqrt(dx * dx + dy * dy);
            const pinchScale = newDistance / initialDistance;
            scale = Math.min(Math.max(1, initialScale * pinchScale), 3);
            updateTransform();
        }

        function updateTransform() {
            img.style.transform = `scale(${scale}) translate(${panX / scale}px, ${panY / scale}px)`;
        }

        // Doppio tap per zoom in
        let lastTap = 0;
        img.addEventListener('touchend', function (e) {
            const now = new Date().getTime();
            if (now - lastTap < 300) {
            scale = scale === 1 ? 2 : 1;
            panX = 0;
            panY = 0;
            updateTransform();
            }
            lastTap = now;
        });
    }

}
Certosa292.init();