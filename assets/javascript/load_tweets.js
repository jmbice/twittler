var dateFormat = 'dddd, h:mm a'
var cakeTweets = [];
var tweetCounts = {
  douglascalhoun: 0,
  cake: 0,
  mracus: 0,
  shawndrost: 0,
  sharksforcheap: 0,
  feed: 0,
};

// load home feed
var loadFeed = function(){
  for (var j = 0; j < streams.home.length; j++){
    var tweet = streams.home[j];
    var $tweet = $('<div class="individual-tweets"></div>');
    $tweet.text('@' + tweet.user + tweet.message + ' • ' + moment(tweet.created_at).format(dateFormat) + ' •');
    $tweet.prependTo($('#feed'));
    tweetCounts.feed += 1;
  };
  formatTweets();
};

// refresh feeds based on handle parameter (feed, douglascalhoun, cake, mracus, shawndrost, sharksforcheap)
var refreshFeed = function(handle){
  var destination = '#' + handle;
  var source;

  if (handle === 'feed'){
    source = streams.home;
  } else if (handle === 'cake'){
    source = cakeTweets;
  } else {
    source = streams.users[handle];
  }

  if (source.length > tweetCounts[handle]){
    for (var j = tweetCounts[handle]; j < source.length; j++){
      var tweet = source[j];
      var $tweet = $('<div class="individual-tweets"></div>');
      $tweet.text('@' + tweet.user + tweet.message + ' • ' + moment(tweet.created_at).format(dateFormat) + ' •');
      $tweet.prependTo($(destination));
    }
  tweetCounts[handle] = source.length;
  }
  formatTweets();
}

// writes your tweets
var myTweets = function(tweetText){
  var tweet = {};
  tweet.user = 'cake';
  tweet.message = tweetText;
  tweet.created_at = moment();
  streams.home.push(tweet);
  cakeTweets.push(tweet);
};

var submitTwit = function() {
  var textArea= document.getElementById("twitTextArea").value;
  myTweets(textArea);
  $('#cake').hasClass('active') ? refreshFeed('cake') : refreshFeed('feed');
}

// Format tweet handles and times
var formatTweets = function(){
  $(".tweets-wrapper:contains('@cake')").html(function(_, html) {
    return  html.replace(/@cake/g, "<a id='cake-link' class='links'>@ cake: </a>")
  });

  $(".tweets-wrapper:contains('@douglascalhoun')").html(function(_, html) {
    return  html.replace(/@douglascalhoun/g, "<a id='douglas-link' class='links'>@ douglascalhoun: </a>")
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
