$(window).on('load', () => {
    $('#profile-modal').modal('show');
});

function initMap() {
    const bedford = { lat: 42.490556, lng: -71.276667 };
    // Instantiate a new map.
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: bedford
    });

    $.ajax({
        url: '/locations',
        dataType: 'json'
    }).done((data) => {
        console.log("Test");
        console.log(data);
        // Create a marker for each location.
        for (let i = 0; i < data.length; i++) {
            var marker = new google.maps.Marker({
                position: data[i].geo,
                map: map,
                title: data[i].title
            });
        }
    });
}

function openDrawer() {
    document.getElementById('drawer').style.width = '30%';
}

function closeDrawer() {
    document.getElementById('drawer').style.width = '0';
}
    

