 document.addEventListener('DOMContentLoaded', function() {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });  
    function initMap() {
        var location = { lat: -34.397, lng: 150.644 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        initMap();
    });


