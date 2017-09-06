hubble.getXML('http://www.ifanr.com/feed', function (error, response, $) {
	$('item').each(function (index, value) {

		var url = $(this).find('link').text();
		var key = url.substring(url.lastIndexOf('/') + 1);
		var dom = $(this);

		articles.get('key', key, function (article) {
			if (article) {
				return;
			}

			var title   = dom.find('title').text().trim();
			var summary = dom.find('description').text().replace(/<\/?[^>]*>/g,'').trim();
			var content = dom.find('content\\:encoded').text();
			var image   = dom.find('image').text();

			var article = {
				key: key,
				title: title,
				content: content,
				summary: summary,
				url: url,
				image: image
			};
			articles.append(article);
		});
	});
});
