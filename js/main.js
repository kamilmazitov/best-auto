function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

include("js/menu-icon.js");
include("js/services_menu.js");
include("js/reviews_slider.js");
