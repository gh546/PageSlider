window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    //console.log("We got device ready");
    cordova.exec(null, null, "SplashScreen", "hide", []);
    // Soon to be
    // navigator.splashscreen.hide();
}

// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var homePage =
    '<div>' +
        '<div class="header"><h1>Home</h1></div>' +
        '<div class="scroller">' +
            '<ul class="list">' +
                '<li><a href="#page1"><strong>Cafe 1</strong></a></li>' +
                '<li><a href="#page2"><strong>Cafe 2</strong></a></li>' +
                '<li><a href="#page3"><strong>Cafe 3</strong></a></li>' +
            '</ul>' +
        '</div>' +
    '</div>';

var detailsPage =
    '<div>' +
        '<div class="header"><a href="#" class="btn">Home</a><h1>Cafe</h1></div>' +
        '<div class="scroller">' +
            '<div class="robot">' +
                '<img src="images/{{img}}"/>' +
                '<h2>{{name}}</h2>' +
                '<p>{{description}}</p>' +
            '</div>' +
        '</div>' +
    '</div>';


var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;

    if (hash === "#page1") {
        page = merge(detailsPage, {img: "bhenry_logo-small.jpg", name: "Cafe 1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    } else if (hash === "#page2") {
        page = merge(detailsPage, {img: "Cafe_Barista_logo-small.jpg", name: "Cafe 2", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    } else if (hash === "#page3") {
        page = merge(detailsPage, {img: "Library-Cafe-Logo-small.jpg", name: "Cafe 3", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    }
    else {
        page = homePage;
//        slider.slide($(homePage), "left");
    }

    slider.slidePage($(page));

}

// Primitive template processing. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
function merge(tpl, data) {
    return tpl.replace("{{img}}", data.img)
              .replace("{{name}}", data.name)
              .replace("{{description}}", data.description);
}

route();