const Certosa292 = {

    modalParking: null,
    modalCheckin: null,
    modalWifi: null,
    modalRules: null,
    modalGuide: null,
    modalDove: null,
    modalMuoversi: null,
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
        if( $('#modal-parking').length ) Certosa292.modalParking = new bootstrap.Modal('#modal-parking');
        if( $('#modal-checkin').length ) Certosa292.modalCheckin = new bootstrap.Modal('#modal-checkin');
        if( $('#modal-wifi').length ) Certosa292.modalWifi = new bootstrap.Modal('#modal-wifi');
        if( $('#modal-rules').length ) Certosa292.modalRules = new bootstrap.Modal('#modal-rules');
        if( $('#modal-guide').length ) Certosa292.modalGuide = new bootstrap.Modal('#modal-guide');
        if( $('#modal-dove').length ) Certosa292.modalDove = new bootstrap.Modal('#modal-dove');
        if( $('#modal-muoversi').length ) Certosa292.modalMuoversi = new bootstrap.Modal('#modal-muoversi');
        if( $('#modal-food').length ) Certosa292.modalFood = new bootstrap.Modal('#modal-food');
        if( $('#modal-emergency').length ) Certosa292.modalEmergency = new bootstrap.Modal('#modal-emergency');
        if( $('#modal-city').length ) Certosa292.modalCity = new bootstrap.Modal('#modal-city');
        
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

                case 'menu-dove':
                    Certosa292.modalDove.show();
                break;

                case 'menu-muoversi':
                    Certosa292.modalMuoversi.show();
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

        const thumb = document.getElementById('thumbnail');
        const overlay = document.getElementById('overlay');
        
        if ( $('.thumbnail').length ){
            thumb.addEventListener('click', () => {
                overlay.classList.add('active');
            });
    
            overlay.addEventListener('click', () => {
                overlay.classList.remove('active');
            });
        }

    }

}
Certosa292.init();