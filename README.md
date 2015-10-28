# js-playlist
A simple video playlist using HTML5 and vanilla JS. For a full how-to on how to build this, go to <a href="http://kristiwitts.com/blog/html-5-video-playlist-tutorial/">the full tutorial</a>.

## How to Use
---

###HTML
```html
<div id="player">
   <video controls="controls" width="640" height="360" preload="auto" autoplay>
      <source src="video1.mp4" type="video/mp4" />
      <source src="video1.webm" type="video/webm" />
      <source src="video1.ogv" type="video/ogg" />
      <track src="video/video1.srt" kind="subtitle" srclang="en-US" label="English" /> <!--optional for subtitles-->
   </video>
   <div id="playlist">
      <h1>Videos</h1>
      <a href="video1.mp4">Video 1</a>
      <a href="video2.mp4">Video 2</a>
      <a href="video2.mp4">Video 3</a>
   </div>
</div>
```

### Javascript
```html
<script type="text/javascript" src="path/to/js-playlist.js"></script>
```

---

## Including Subtitles
---
<i>Oct 28, 2015</i> - I was recently asked about subtitles. I added a coupe of lines to the playlist js file and it is included in the folder "subtitles". It requires the use of a plugin called <a href="https://github.com/thomassturm/VideoSub">VideoSub</a> by <a href="https://github.com/thomassturm">thomassturm</a>. All you need to do is use <a href="https://github.com/kwitts/js-playlist/blob/gh-pages/subtitles/js-playlist-sub.js">js-playlist-sub.js</a> instead of the original js-playlist.js and add two lines to your HTML file.

#### Add this to the bottom of the video source list (inside the <video> tags)
```html
<track src="video/video1.srt" kind="subtitle" srclang="en-US" label="English" />
```

#### Add the <a href="https://github.com/thomassturm/VideoSub">plugin</a>:
```html
<script type="text/javascript" src="path/to/videosub.js"></script>
```

If you need subtitles, visit <a href="https://github.com/thomassturm/VideoSub">https://github.com/thomassturm/VideoSub</a> for the plugin js file.

## Release History
---
Oct 28 2015 - Added support for subtitles using plugin: <a href="https://github.com/thomassturm/VideoSub">VideoSub</a> by <a href="https://github.com/thomassturm">thomassturm</a>
Jun 23 2015 - Initial commit.

##License
---
Licensed under the MIT license. The plugin <a href="https://github.com/thomassturm/VideoSub">VideoSub</a> is licensed under MIT - &copy; <a href="https://github.com/thomassturm">thomassturm</a>.
