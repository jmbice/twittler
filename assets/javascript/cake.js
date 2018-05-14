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
  cakeDisplayLength++
};
