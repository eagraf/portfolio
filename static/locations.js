// Global state
var map;
var geoLoaded = false;
var geoData;
var currentLocation = 0;

// On load show introduction modal slide.
$(window).on('load', () => {
    $('#profile-modal').modal('show');
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
        console.log("Test");
        console.log(data);
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
                $('#drawer-content').load('/locations/' + data[i].id);
                currentLocation = 1;
                openDrawer();
            });
        }
    });
}

// Open the right side nav drawer.
function openDrawer(currentLocation = 0) {
    const drawer = document.getElementById('drawer');
    $('#drawer-content').load('/locations/' + geoData[currentLocation].id);
    drawer.style.width = '30%';
    drawer.style.paddingLeft = '32px';
    drawer.style.paddingRight = '32px';
}

// Close the right side nav drawer.
function closeDrawer() {
    const drawer = document.getElementById('drawer');
    drawer.style.width = '0%';
    drawer.style.paddingLeft = '0px';
    drawer.style.paddingRight = '0px';
}
    
// Move to the next location
function next() {
    currentLocation++;
    $('#drawer-content').load('/locations/' + geoData[currentLocation].id);
    map.panTo(geoData[currentLocation].geo);
}

