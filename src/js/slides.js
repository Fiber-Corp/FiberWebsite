$(function() {
    var $content = $('#slides-inner');
    var data = {
        rss_url: 'https://medium.com/feed/@CryptoPets',
    };
    $.get('https://api.rss2json.com/v1/api.json', data, function(response) {
        if (response.status == 'ok') {
            var output = '';
            var count = 0;
            $.each(response.items, function(k, item) {
                console.log(item);
                // container
                if (count == 0) {
                    output += '<div class="carousel-item active container slide_card"><div class="row">';
                } else {
                    output += '<div class="carousel-item container slide_card"><div class="row">';
                }
                // blog img
                output += '<div class="col-12 col-lg-6"><img src="' + item.thumbnail + '" alt="thumbnail"></div>';
                // description
                output += '<div class="col-12 col-lg-6">';
                // blog link
                output += '<a href="' + item.link + '">';
                // blog title
                output += '<h1>' + item.title + '</h1>';
                output += '<br>';
                // blog subtitle
                output += '<h2>' + item.content.substr(5, item.content.indexOf('</h4>') + 1) + '</h2>';
                output += '<br>';
                // blog time
                output += '<p>' + item.pubDate + '</p></div></a>';
                // end tag
                output += '</div></div>';
                count++;
                if (count == 3) {
                    return false;
                }
            });
            $content.html(output);

        }
    });
});
