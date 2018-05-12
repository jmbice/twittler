var mracusDisplayLength = 0;
var sharkDisplayLength = 0;
var douglasDisplayLength = 0;
var shawnDisplayLength = 0;
var currentCount = 0;

var snippet = ' | '
var dateFormat = 'dddd, h:mm a'

var loadInitialTweets = function(){
  for (var j = 0; j < streams.home.length; j++){
    var tweet = streams.home[j];
    var $tweet = $('<div class="tweetz"></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + snippet + moment(tweet.created_at).format(dateFormat));
    $tweet.appendTo($('#feed'));
    currentCount++;
  };
  refreshLinks();
};

var refreshFeed = function(){
  var currentLength = streams.home.length;
  if (currentLength > currentCount){
    for (var j = currentCount; j < currentLength; j++){
      var tweet = streams.home[j];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + snippet + moment(tweet.created_at).format(dateFormat));
      $tweet.appendTo($('#feed'));
    }
  currentCount = currentLength;
  }
  refreshLinks();
}

var newMracusTweets = function(){
  var currentLength = streams.users.mracus.length;
  if (currentLength > mracusDisplayLength){
    for (var j = mracusDisplayLength; j < currentLength; j++){
      var tweet = streams.users.mracus[j];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + snippet + moment(tweet.created_at).format(dateFormat));
      $tweet.appendTo($('#mracus'))
    }
    mracusDisplayLength = currentLength;
  }
  refreshLinks();
}

var newSharkTweets = function(){
  var currentLength = streams.users.sharksforcheap.length;
  if (currentLength > sharkDisplayLength){
    for (var j = sharkDisplayLength; j < currentLength; j++){
      var tweet = streams.users.sharksforcheap[j];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + snippet + moment(tweet.created_at).format(dateFormat));
      $tweet.appendTo($('#shark'))
    }
    sharkDisplayLength = currentLength;
  }
  refreshLinks();
}

var newShawnTweets = function(){
  var currentLength = streams.users.shawndrost.length;
  if (currentLength > shawnDisplayLength){
    for (var j = shawnDisplayLength; j < currentLength; j++){
      var tweet = streams.users.shawndrost[j];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + snippet + moment(tweet.created_at).format(dateFormat));
      $tweet.appendTo($('#shawn'))
    }
    shawnDisplayLength = currentLength;
  }
  refreshLinks();
}

var newDouglasTweets = function(){
  var currentLength = streams.users.douglascalhoun.length;
  if (currentLength > douglasDisplayLength){
    for (var j = douglasDisplayLength; j < currentLength; j++){
      var tweet = streams.users.douglascalhoun[j];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + snippet + moment(tweet.created_at).format(dateFormat));
      $tweet.appendTo($('#douglas'))
    }
    douglasDisplayLength = currentLength;
  }
  refreshLinks();
}

var refreshLinks = function(){
  $(".tweets-wrapper:contains('@mracus')").html(function(_, html) {
    return  html.replace(/@mracus/g, '<a href="https://google.com/$1">@ marcus</a>')
  });

  $(".tweets-wrapper:contains('@sharksforcheap')").html(function(_, html) {
    return  html.replace(/@sharksforcheap/g, '<a href="https://google.com/$1">@ sharksforcheap</a>')
  });

  $(".tweets-wrapper:contains('@douglascalhoun')").html(function(_, html) {
    return  html.replace(/@douglascalhoun/g, '<a href="https://google.com/$1">@ douglascalhoun</a>')
  });

  $(".tweets-wrapper:contains('@shawndrost')").html(function(_, html) {
    return  html.replace(/@shawndrost/g, '<a href="https://google.com/$1">@ shawndrost</a>')
  });
}
