'use strict';

// window.Ammo = Ember.Application.create();
var key = '72ba71f6b1a5511c33d79e03be3ff7b7';
var url = 'https://api.flickr.com/services/rest/?' +
'method=flickr.interestingness.getList&' +
'api_key=' + key + '&format=json';
$.ajax(url, { dataType: 'jsonp', jsonp: 'jsoncallback' })
  .then(function(data, status, xhr) {
    console.log(status);
    console.log('success (promises): ' + data.name);
    jsonFlickrApi(data);
    console.log(list);
}, function(xhr, status, error) {
  console.log('failed (promises): ' + error);
});

/* Flickr getting data from API and Displaying */
var list = [];
function jsonFlickrApi(jsonData) {

  var items = jsonData.photos.photo;

  for (var i = 0; i < 40; i++) {
    var title = '(untitled)';
    if (items[i].title != '') {
      title = items[i].title;
    }
    list.push ({
      farm: items[i].farm,
      server: items[i].server,
      photo: items[i].id,
      secret: items[i].secret,
      owner: items[i].owner,
      title: title

    });
  }

}
