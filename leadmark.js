
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})
   // api url
   const api_url = "https://api.thingspeak.com/channels/2058417/feeds.json?api_key=8SR93EEU386WIQUR&results=1";
   // masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >
   
   setInterval(() => {
     fetch(api_url)
       .then((hasil) => hasil.json())
       .then((res) => {
         var field = JSON.stringify(res.feeds[0]);
         var obj = JSON.parse(field);
         document.getElementById("Gerakan").innerHTML = obj.field1;
         document.getElementById("PIR").innerHTML = obj.field2;
       });
   }, );
