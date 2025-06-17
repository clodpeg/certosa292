const Certosa292 = {

    modalParking: null,
    modalCheckin: null,
    modalWifi: null,
    modalRules: null,
    modalGuide: null,

    init: function(){
        this.Modals();
        this.Menu();
    },

    Modals: () => {
        
        // modal parking
        Certosa292.modalParking = new bootstrap.Modal('#modal-parking');
        Certosa292.modalCheckin = new bootstrap.Modal('#modal-checkin');
        Certosa292.modalWifi = new bootstrap.Modal('#modal-wifi');
        Certosa292.modalRules = new bootstrap.Modal('#modal-rules');
        Certosa292.modalGuide = new bootstrap.Modal('#modal-guide');

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

            }
        });
    }

}
Certosa292.init();