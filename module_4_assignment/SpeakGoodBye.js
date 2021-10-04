(function(window) {
  var speakWord = "GoodBye";
  var ByeSpeaker = function (name) {
    console.log(speakWord + " " + name);
  }

  window.ByeSpeaker = ByeSpeaker;

})(window);
