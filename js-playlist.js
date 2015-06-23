//Simple JS Playlist by Kristi Witts - https://github.com/kwitts/js-playlist/
//MIT License

//Ensure all links in the div "#player" act in the same way:
  var video_playlist = document.getElementById("player"); //Element ID should be the same as the ID used in the container div in the HTML.
  var links = video_playlist.getElementsByTagName('a');
  for (var i=0; i<links.length; i++) {
    links[i].onclick = handler;
  };
//Give functionality to the links:
function handler(e) {
  e.preventDefault(); //Prevents default action of links going directly to the source file
  videotarget = this.getAttribute("href"); //looks at the filename in the link's href attribute
  filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget; //Splits the filename and takes everything before the ".", giving us just name without the extension
  video = document.querySelector("#player video"); //Finds div #player and video
  video.removeAttribute("poster"); //Removes the poster attribute in the video tag
  source = document.querySelectorAll("#player video source"); //Finds source elements inside the video tag
  source[0].src = filename + ".mp4"; //defines the MP4 source
  source[1].src = filename + ".webm"; //defines the WEBM source
  source[2].src = filename + ".ogv"; //defines the OGG source
  video.load(); //Loads video when video is selected
  video.play(); //Plays video automatically
};
