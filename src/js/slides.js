$(function() {
    var $content = $('#blog');
    var data = {
        rss_url: 'https://medium.com/feed/@CryptoPets'
    };
    $.get('https://api.rss2json.com/v1/api.json', data, function(response) {
        if (response.status == 'ok') {
            var output = '';
            $.each(response.items, function(k, item) {
                console.log(item);
                // blog card
                output += '<div class="blogCard col-sm-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="800" data-aos-delay="0">';
                // blog thumbnail
                output += '<div class="blogImg"><img src="' + item.thumbnail + '" alt="thumbnail"></div>';
                // blog link
                output += '<a href="' + item.link + '">';
                // blog time
                output += '<div class="blogTitle"><span>' + item.pubDate + '</span>';
                // blog title
                output += '<h4>' + item.title + '</h4></div></a>';
                // end tag
                output += '</div>';
            });
            $content.html(output);
        }
    });
});
