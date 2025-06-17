const Certosa292 = {

    modalParking: null,
    modalCheckin: null,
    modalWifi: null,
    modalRules: null,
    modalGuide: null,
    modalDove: null,
    modalComeMuoversi: null,
    modalFood: null,
    modalEmergency: null,

    init: function(){
        this.Modals();
        this.Menu();
        this.Hash();
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
    }

}
Certosa292.init();