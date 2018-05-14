var douglasDisplayLength = 0;
var mracusDisplayLength = 0;
var sharkDisplayLength = 0;
var shawnDisplayLength = 0;
var currentCount = 0;
var snippet = ' • '
var dateFormat = 'dddd, h:mm a'
var cakeDisplayLength = 0;
var cakeTweets = [];

// writes your tweets
var generateUserTweets = function(tweetText){
  var tweet = {};
  tweet.user = 'cake';
  tweet.message = tweetText;
  tweet.created_at = moment();
  streams.home.push(tweet);
  cakeTweets.push(tweet);
};

// load home feed
var loadFeed = function(){
  for (var j = 0; j < streams.home.length; j++){
    var tweet = streams.home[j];
    var $tweet = $('<div class="individual-tweets"></div>');
    $tweet.text('@' + tweet.user + tweet.message + snippet + moment(tweet.created_at).format(dateFormat) + ' •');
    $tweet.prependTo($('#feed'));
    currentCount++;
  };
  formatTweets();
};

// refresh home feed
var refreshFeed = function(){
  var currentLength = streams.home.length;
  if (currentLength > currentCount){
    for (var j = currentCount; j < currentLength; j++){
      var tweet = streams.home[j];
      var $tweet = $('<div class="individual-tweets"></div>');
      $tweet.text('@' + tweet.user + tweet.message + snippet + moment(tweet.created_at).format(dateFormat) + ' •');
      $tweet.prependTo($('#feed'));
    }
  currentCount = currentLength;
  }
  formatTweets();
}

// load or refresh individual feeds... douglas, cake, mracus, shawn, shark.
var douglasFeed = function(){
  var currentLength = streams.users.douglascalhoun.length;
  if (currentLength > douglasDisplayLength){
    for (var j = douglasDisplayLength; j < currentLength; j++){
      var tweet = streams.users.douglascalhoun[j];
      var $tweet = $('<div class="individual-tweets"></div>');
      $tweet.text('@' + tweet.user + tweet.message + snippet + moment(tweet.created_at).format(dateFormat) + ' •');
      $tweet.prependTo($('#douglas'))
    }
    douglasDisplayLength = currentLength;
  }
  formatTweets();
}

var cakeFeed = function(){
  console.log(cakeTweets)
  var currentLength = cakeTweets.length;
  if (currentLength > cakeDisplayLength){
    for (var j = cakeDisplayLength; j < currentLength; j++){
      var tweet = cakeTweets[j];
      var $tweet = $('<div class="individual-tweets"></div>');
      $tweet.text('@' + tweet.user + tweet.message + snippet + moment(tweet.created_at).format(dateFormat) + ' •');
      $tweet.prependTo($('#cake'))
    }
    newCakeTweets = currentLength;
  }
  formatTweets();
}

var mracusFeed = function(){
  var currentLength = streams.users.mracus.length;
  if (currentLength > mracusDisplayLength){
    for (var j = mracusDisplayLength; j < currentLength; j++){
      var tweet = streams.users.mracus[j];
      var $tweet = $('<div class="individual-tweets"></div>');
      $tweet.text('@' + tweet.user + tweet.message + snippet + moment(tweet.created_at).format(dateFormat) + ' •');
      $tweet.prependTo($('#mracus'));
    }
    mracusDisplayLength = currentLength;
  }
  formatTweets();
}

var sharkFeed = function(){
  var currentLength = streams.users.sharksforcheap.length;
  if (currentLength > sharkDisplayLength){
    for (var j = sharkDisplayLength; j < currentLength; j++){
      var tweet = streams.users.sharksforcheap[j];
      var $tweet = $('<div class="individual-tweets"></div>');
      $tweet.text('@' + tweet.user + tweet.message + snippet + moment(tweet.created_at).format(dateFormat) + ' •');
      $tweet.prependTo($('#shark'))
    }
    sharkDisplayLength = currentLength;
  }
  formatTweets();
}

var shawnFeed = function(){
  var currentLength = streams.users.shawndrost.length;
  if (currentLength > shawnDisplayLength){
    for (var j = shawnDisplayLength; j < currentLength; j++){
      var tweet = streams.users.shawndrost[j];
      var $tweet = $('<div class="individual-tweets"></div>');
      $tweet.text('@' + tweet.user + tweet.message + snippet + moment(tweet.created_at).format(dateFormat) + ' •');
      $tweet.prependTo($('#shawn'))
    }
    shawnDisplayLength = currentLength;
  }
  formatTweets();
}

// Format tweet a
var formatTweets = function(){
  $(".tweets-wrapper:contains('@douglascalhoun')").html(function(_, html) {
    return  html.replace(/@douglascalhoun/g, "<a id='douglas-link' class='links'>@ douglascalhoun: </a>")
  });

  $(".tweets-wrapper:contains('@cake')").html(function(_, html) {
    return  html.replace(/@cake/g, "<a id='cake-link' class='links'>@ cake: </a>")
  });

  $(".tweets-wrapper:contains('@mracus')").html(function(_, html) {
    return  html.replace(/@mracus/g, "<a id='mracus-link' class='links'>@ mracus: </a>")
  });

  $(".tweets-wrapper:contains('@shawndrost')").html(function(_, html) {
    return  html.replace(/@shawndrost/g, "<a id='shawn-link' class='links'>@ shawndrost: </a>")
  });

  $(".tweets-wrapper:contains('@sharksforcheap')").html(function(_, html) {
    return  html.replace(/@sharksforcheap/g, "<a id='shark-link' class='links'>@ sharksforcheap: </a>")
  });

  $(".tweets-wrapper:contains(' • ')").html(function(_, html) {
    return  html.replace(/\•.*?( pm •| am •)/g, "<a id='time'>$&</a>")
  });

}
