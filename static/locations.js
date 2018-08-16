// Global state
var map;
var geoLoaded = false;
var geoData;

// On load show introduction modal slide.
$(window).on('load', () => {
    $('#profile-modal').modal('show');
});

// Move the map based on scrolling.
$(function () {
    currentHash = '#bedford';
    $('#drawer-content').scroll(function () {
        $('.location').each(function () {
            var top = window.pageYOffset;
            var distance = top - $(this).offset().top;
            var hash = $(this).attr('id');
            if (distance < 72 && distance > -72 && currentHash != hash) {
                // ew
                for (var i = 0; i < geoData.length; i++) {
                    if (geoData[i].id == hash) {
                        map.panTo(geoData[i].geo);
                        currentHash = hash;
                        break;
                    }
                }
            }
        });
    });
});

// Initialize the map.
function initMap() {
    const bedford = { lat: 42.490556, lng: -71.276667 };
    // Instantiate a new map.
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: bedford
    });

    $.ajax({
        url: '/locations',
        dataType: 'json'
    }).done((data) => {
        // Update global state.
        geoData = data;
        geoLoaded = true;
        // Create a marker for each location.
        for (let i = 0; i < data.length; i++) {
            var marker = new google.maps.Marker({
                position: data[i].geo,
                map: map,
                title: data[i].title
            });
            marker.addListener('click', () => {
                window.location.href = "#" + data[i].id;
                map.panTo(data[i].geo);
                openDrawer();
            });
        }
    });
}

// Open the right side nav drawer.
function openDrawer(currentLocation = 0) {
    const drawer = document.getElementById('drawer');
    drawer.style.width = '30%';
    drawer.style.paddingLeft = '32px';
    drawer.style.paddingRight = '16px';
}

// Close the right side nav drawer.
function closeDrawer() {
    const drawer = document.getElementById('drawer');
    drawer.style.width = '0%';
    drawer.style.paddingLeft = '0px';
    drawer.style.paddingRight = '0px';
}
