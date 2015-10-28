# js-playlist
*Version: 1.2.0, Last updated: 10/28/2015*

A simple video playlist using HTML5 and vanilla JS. For a full how-to on how to build this, go to [the full tutorial](http://kristiwitts.com/blog/html-5-video-playlist-tutorial/).

## How to Use

#### HTML
```html
<div id="player">
   <video controls="controls" width="640" height="360" preload="auto" autoplay>
      <source src="video1.mp4" type="video/mp4" />
      <source src="video1.webm" type="video/webm" />
      <source src="video1.ogv" type="video/ogg" />
      <!--optional line for subtitles-->
      <track src="video/video1.srt" kind="subtitle" srclang="en-US" label="English" />
   </video>
   <div id="playlist">
      <h1>Videos</h1>
      <a href="video1.mp4">Video 1</a>
      <a href="video2.mp4">Video 2</a>
      <a href="video2.mp4">Video 3</a>
   </div>
</div>
```

#### Javascript
```html
<script type="text/javascript" src="path/to/js-playlist.js"></script>
<!--optional file for subtitles-->
<script type="text/javascript" src="path/to/videosub.js"></script>
```

---

## Including Subtitles
*Oct 28, 2015* - I was recently asked about subtitles. I added a couple of lines to the playlist js file and it is included in the folder "subtitles". It requires the use of a plugin called [VideoSub](https://github.com/thomassturm/VideoSub) by [thomassturm](https://github.com/thomassturm). All you need to do is use [js-playlist-sub.js](https://github.com/kwitts/js-playlist/blob/gh-pages/subtitles/js-playlist-sub.js) instead of the original js-playlist.js and add two lines to your HTML file.

#### Add this to the bottom of the video source list (inside the <video> tags)
```html
<track src="video/video1.srt" kind="subtitle" srclang="en-US" label="English" />
```

#### Add the <a href="https://github.com/thomassturm/VideoSub">plugin</a>:
```html
<script type="text/javascript" src="path/to/videosub.js"></script>
```

Visit https://github.com/thomassturm/VideoSub for the plugin js file.

## Release History
- *Oct 28 2015* - Added support for subtitles using plugin: [VideoSub](https://github.com/thomassturm/VideoSub) by [thomassturm](https://github.com/thomassturm).
- *Jun 23 2015* - Initial commit.

##License
Licensed under the MIT license. The plugin [VideoSub](https://github.com/thomassturm/VideoSub) is licensed under MIT - &copy;[thomassturm](https://github.com/thomassturm).
