# js-playlist
A simple video playlist using HTML5 and vanilla JS. For a full how-to on how to build this, go to <a href="http://kristiwitts.com/blog/html-5-video-playlist-tutorial/">the full tutorial</a>.

MIT License.

---

To use, create an HTML5 video container, like this:

```html
<div id="player">
   <video controls="controls" width="640" height="360" preload="auto" autoplay>
      <source src="video1.mp4" type="video/mp4" />
      <source src="video1.webm" type="video/webm" />
      <source src="video1.ogv" type="video/ogg" />
   </video>
   <div id="playlist">
      <h1>Videos</h1>
      <a href="video1.mp4">Video 1</a>
      <a href="video2.mp4">Video 2</a>
      <a href="video2.mp4">Video 3</a>
   </div>
</div>
```
---

If using the external JS file, copy this into your HTML page:

```html
<script type="text/javascript" src="js-playlist.js"></script>
```
