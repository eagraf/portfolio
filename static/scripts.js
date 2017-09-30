$(window).on('load',function(){
    $('#profile-modal').modal('show');
});

function initMap() {
    const bedford = { lat: 42.490556, lng: -71.276667 };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: bedford
    });
}
    

