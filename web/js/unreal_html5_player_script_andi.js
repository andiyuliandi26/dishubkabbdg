var getParams = [
    "MediaSource",
    "WebSocket",
    "constructor",
    "min",
    "wss://",
    "ws://",
    ":",
    "/",
    "",
    "/sid:",
    "getElementById",
    "width",
    "style",
    "px",
    "height",
    "position",
    "relative",
    "_Video",
    "_videoControls",
    "_volSlider",
    "_showTime",
    "_playpause",
    "_stop",
    "_volume",
    "_progress",
    "_fullscreen",
    "_progressTip",
    "_statusmessage",
    "innerHTML",
    '<video id="',
    '" width= "',
    '" height= "',
    '" style= "background-color: black" ></video > ',
    ' <div id= "',
    '" class="controls" data-state="hidden" > ',
    ' <button id= "',
    '" type="button" data- state="play" > Play / Pause</button > ',
    '" type="button" data- state="stop" > Stop</button > ',
    '" style="width:130px; text-align:center; margin-top: 11px; padding-left: 2px; color: #FFFFFF;" > 0:00 / 0:00</div > ',
    ' <input type= "range" id="',
    '" min= "0" max= "0" step= "0.1" value= "0" style= "cursor: pointer; margin-top: 14px; " />',
    '" type="button" data-state="volume" > Volume</button > ',
    '" type="button" data-state="go- fullscreen" > Fullscreen</button ></div > ',
    '" style="z-index: 100; white-space: nowrap; position: absolute; display: none; color: #FFFFFF; " ></div > ',
    '" min="0" max="1" step="0.01" value= "0.5" style= "cursor: pointer; z-index: 100; position: absolute; display: none; width: 100px; height: 12px; padding: 20px; -webkit-transform:rotate(270deg); -moz-transform:rotate(270deg); -o-transform:rotate(270deg); -ms-transform:rotate(90deg); transform: rotate(270deg);"/>',
    '" style= "z-index: 100; position: absolute; display: none; color: red; " ></div > ',
    "autoplay",
    "controls",
    "poster",
    "match",
    "userAgent",
    "chrome",
    "navigator",
    "vendor",
    "Edge",
    "indexOf",
    "Google Inc.",
    "floor",
    "0",
    "onmessage",
    "onclose",
    "onerror",
    "close",
    "pause",
    "value",
    "disabled",
    "max",
    "display",
    "none",
    "0:00 / 0:00",
    "data-state",
    "play",
    "setAttribute",
    "removeSourceBuffer",
    "onupdateend",
    "onsourceopen",
    "length",
    "src",
    "load",
    "continue",
    "send",
    "updating",
    "duration",
    "remove",
    "seek: ",
    "currentTime",
    "paused",
    " / ",
    "getTime",
    "use strict",
    "visible",
    "volume",
    "contextmenu",
    "preventDefault",
    "addEventListener",
    "fullScreen",
    "webkitIsFullScreen",
    "mozFullScreen",
    "msFullscreenElement",
    "fullscreenElement",
    "exitFullscreen",
    "mozCancelFullScreen",
    "webkitCancelFullScreen",
    "msExitFullscreen",
    "requestFullscreen",
    "mozRequestFullScreen",
    "webkitRequestFullScreen",
    "msRequestFullscreen",
    "mouseover",
    "block",
    "mouseout",
    "mousemove",
    "Buffering...",
    "click",
    "left",
    "offsetLeft",
    "top",
    "offsetTop",
    "mouseup",
    "layerX",
    "offsetParent",
    "offsetWidth",
    "mousedown",
    "color",
    "white",
    "Broadcast ended",
    "LIVE",
    "red",
    "change",
    "70px",
    "64px",
    "backgroundSize",
    "64px 64px",
    "marginTop",
    "30px",
    "27px",
    "-80px",
    "-50px",
    "createObjectURL",
    "URL",
    "sourceopen",
    "Connecting...",
    "shift",
    "appendBuffer",
    "switch:",
    "binaryType",
    "arraybuffer",
    "data",
    "byteLength",
    "apply",
    "fromCharCode",
    "Error: ",
    "text/ xml",
    "parseFromString",
    "nodeValue",
    "childNodes",
    "mimetypecodec",
    "getElementsByTagName",
    "addSourceBuffer",
    "updateend",
    "getInt32",
    "error",
    "Error during playback",
    "push",
    "Error: Websocket connection is closed or could not be established."
];

//var getParams = ["\x4D\x65\x64\x69\x61\x53\x6F\x75\x72\x63\x65", "\x57\x65\x62\x53\x6F\x63\x6B\x65\x74", "\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72", "\x6D\x69\x6E", "\x77\x73\x73\x3A\x2F\x2F", "\x77\x73\x3A\x2F\x2F", "\x3A", "\x2F", "", "\x2F\x73\x69\x64\x3A", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x77\x69\x64\x74\x68", "\x73\x74\x79\x6C\x65", "\x70\x78", "\x68\x65\x69\x67\x68\x74", "\x70\x6F\x73\x69\x74\x69\x6F\x6E", "\x72\x65\x6C\x61\x74\x69\x76\x65", "\x5F\x56\x69\x64\x65\x6F", "\x5F\x76\x69\x64\x65\x6F\x43\x6F\x6E\x74\x72\x6F\x6C\x73", "\x5F\x76\x6F\x6C\x53\x6C\x69\x64\x65\x72", "\x5F\x73\x68\x6F\x77\x54\x69\x6D\x65", "\x5F\x70\x6C\x61\x79\x70\x61\x75\x73\x65", "\x5F\x73\x74\x6F\x70", "\x5F\x76\x6F\x6C\x75\x6D\x65", "\x5F\x70\x72\x6F\x67\x72\x65\x73\x73", "\x5F\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E", "\x5F\x70\x72\x6F\x67\x72\x65\x73\x73\x54\x69\x70", "\x5F\x73\x74\x61\x74\x75\x73\x6D\x65\x73\x73\x61\x67\x65", "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C", "\x3C\x76\x69\x64\x65\x6F\x20\x69\x64\x3D\x22", "\x22\x20\x77\x69\x64\x74\x68\x3D\x22", "\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22", "\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x20\x62\x6C\x61\x63\x6B\x22\x3E\x3C\x2F\x76\x69\x64\x65\x6F\x3E", "\x3C\x64\x69\x76\x20\x69\x64\x3D\x22", "\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6E\x74\x72\x6F\x6C\x73\x22\x20\x64\x61\x74\x61\x2D\x73\x74\x61\x74\x65\x3D\x22\x68\x69\x64\x64\x65\x6E\x22\x3E", "\x3C\x62\x75\x74\x74\x6F\x6E\x20\x69\x64\x3D\x22", "\x22\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x64\x61\x74\x61\x2D\x73\x74\x61\x74\x65\x3D\x22\x70\x6C\x61\x79\x22\x3E\x50\x6C\x61\x79\x2F\x50\x61\x75\x73\x65\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E", "\x22\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x64\x61\x74\x61\x2D\x73\x74\x61\x74\x65\x3D\x22\x73\x74\x6F\x70\x22\x3E\x53\x74\x6F\x70\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E", "\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x77\x69\x64\x74\x68\x3A\x31\x33\x30\x70\x78\x3B\x20\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x63\x65\x6E\x74\x65\x72\x3B\x20\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70\x3A\x20\x31\x31\x70\x78\x3B\x20\x70\x61\x64\x64\x69\x6E\x67\x2D\x6C\x65\x66\x74\x3A\x20\x32\x70\x78\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x46\x46\x46\x46\x46\x46\x3B\x22\x3E\x30\x3A\x30\x30\x20\x2F\x20\x30\x3A\x30\x30\x3C\x2F\x64\x69\x76\x3E", "\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x72\x61\x6E\x67\x65\x22\x20\x69\x64\x3D\x22", "\x22\x20\x6D\x69\x6E\x3D\x22\x30\x22\x20\x6D\x61\x78\x3D\x22\x30\x22\x20\x73\x74\x65\x70\x3D\x22\x30\x2E\x31\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x30\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x75\x72\x73\x6F\x72\x3A\x70\x6F\x69\x6E\x74\x65\x72\x3B\x20\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70\x3A\x20\x31\x34\x70\x78\x3B\x22\x2F\x3E", "\x22\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x64\x61\x74\x61\x2D\x73\x74\x61\x74\x65\x3D\x22\x76\x6F\x6C\x75\x6D\x65\x22\x3E\x56\x6F\x6C\x75\x6D\x65\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E", "\x22\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x64\x61\x74\x61\x2D\x73\x74\x61\x74\x65\x3D\x22\x67\x6F\x2D\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x22\x3E\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E\x3C\x2F\x64\x69\x76\x3E", "\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x20\x31\x30\x30\x3B\x20\x77\x68\x69\x74\x65\x2D\x73\x70\x61\x63\x65\x3A\x20\x6E\x6F\x77\x72\x61\x70\x3B\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x20\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x46\x46\x46\x46\x46\x46\x3B\x20\x22\x3E\x3C\x2F\x64\x69\x76\x3E", "\x22\x20\x6D\x69\x6E\x3D\x22\x30\x22\x20\x6D\x61\x78\x3D\x22\x31\x22\x20\x73\x74\x65\x70\x3D\x22\x30\x2E\x30\x31\x22\x20\x76\x61\x6C\x75\x65\x3D\x22\x30\x2E\x35\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x75\x72\x73\x6F\x72\x3A\x70\x6F\x69\x6E\x74\x65\x72\x3B\x20\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x20\x31\x30\x30\x3B\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x20\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x20\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x70\x78\x3B\x20\x68\x65\x69\x67\x68\x74\x3A\x20\x31\x32\x70\x78\x3B\x20\x70\x61\x64\x64\x69\x6E\x67\x3A\x32\x30\x70\x78\x3B\x20\x2D\x77\x65\x62\x6B\x69\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x72\x6F\x74\x61\x74\x65\x28\x32\x37\x30\x64\x65\x67\x29\x3B\x20\x2D\x6D\x6F\x7A\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x72\x6F\x74\x61\x74\x65\x28\x32\x37\x30\x64\x65\x67\x29\x3B\x20\x2D\x6F\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x72\x6F\x74\x61\x74\x65\x28\x32\x37\x30\x64\x65\x67\x29\x3B\x20\x2D\x6D\x73\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x72\x6F\x74\x61\x74\x65\x28\x39\x30\x64\x65\x67\x29\x3B\x20\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x72\x6F\x74\x61\x74\x65\x28\x32\x37\x30\x64\x65\x67\x29\x3B\x22\x2F\x3E", "\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x7A\x2D\x69\x6E\x64\x65\x78\x3A\x20\x31\x30\x30\x3B\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x20\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x72\x65\x64\x3B\x20\x22\x3E\x3C\x2F\x64\x69\x76\x3E", "\x61\x75\x74\x6F\x70\x6C\x61\x79", "\x63\x6F\x6E\x74\x72\x6F\x6C\x73", "\x70\x6F\x73\x74\x65\x72", "\x6D\x61\x74\x63\x68", "\x75\x73\x65\x72\x41\x67\x65\x6E\x74", "\x63\x68\x72\x6F\x6D\x65", "\x6E\x61\x76\x69\x67\x61\x74\x6F\x72", "\x76\x65\x6E\x64\x6F\x72", "\x45\x64\x67\x65", "\x69\x6E\x64\x65\x78\x4F\x66", "\x47\x6F\x6F\x67\x6C\x65\x20\x49\x6E\x63\x2E", "\x66\x6C\x6F\x6F\x72", "\x30", "\x6F\x6E\x6D\x65\x73\x73\x61\x67\x65", "\x6F\x6E\x63\x6C\x6F\x73\x65", "\x6F\x6E\x65\x72\x72\x6F\x72", "\x63\x6C\x6F\x73\x65", "\x70\x61\x75\x73\x65", "\x76\x61\x6C\x75\x65", "\x64\x69\x73\x61\x62\x6C\x65\x64", "\x6D\x61\x78", "\x64\x69\x73\x70\x6C\x61\x79", "\x6E\x6F\x6E\x65", "\x30\x3A\x30\x30\x20\x2F\x20\x30\x3A\x30\x30", "\x64\x61\x74\x61\x2D\x73\x74\x61\x74\x65", "\x70\x6C\x61\x79", "\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x72\x65\x6D\x6F\x76\x65\x53\x6F\x75\x72\x63\x65\x42\x75\x66\x66\x65\x72", "\x6F\x6E\x75\x70\x64\x61\x74\x65\x65\x6E\x64", "\x6F\x6E\x73\x6F\x75\x72\x63\x65\x6F\x70\x65\x6E", "\x6C\x65\x6E\x67\x74\x68", "\x73\x72\x63", "\x6C\x6F\x61\x64", "\x63\x6F\x6E\x74\x69\x6E\x75\x65", "\x73\x65\x6E\x64", "\x75\x70\x64\x61\x74\x69\x6E\x67", "\x64\x75\x72\x61\x74\x69\x6F\x6E", "\x72\x65\x6D\x6F\x76\x65", "\x73\x65\x65\x6B\x3A", "\x63\x75\x72\x72\x65\x6E\x74\x54\x69\x6D\x65", "\x70\x61\x75\x73\x65\x64", "\x20\x2F\x20", "\x67\x65\x74\x54\x69\x6D\x65", "\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74", "\x76\x69\x73\x69\x62\x6C\x65", "\x76\x6F\x6C\x75\x6D\x65", "\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75", "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74", "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72", "\x66\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E", "\x77\x65\x62\x6B\x69\x74\x49\x73\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E", "\x6D\x6F\x7A\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E", "\x6D\x73\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74", "\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x45\x6C\x65\x6D\x65\x6E\x74", "\x65\x78\x69\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E", "\x6D\x6F\x7A\x43\x61\x6E\x63\x65\x6C\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E", "\x77\x65\x62\x6B\x69\x74\x43\x61\x6E\x63\x65\x6C\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E", "\x6D\x73\x45\x78\x69\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E", "\x72\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E", "\x6D\x6F\x7A\x52\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E", "\x77\x65\x62\x6B\x69\x74\x52\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x53\x63\x72\x65\x65\x6E", "\x6D\x73\x52\x65\x71\x75\x65\x73\x74\x46\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E", "\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72", "\x62\x6C\x6F\x63\x6B", "\x6D\x6F\x75\x73\x65\x6F\x75\x74", "\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65", "\x42\x75\x66\x66\x65\x72\x69\x6E\x67\x2E\x2E\x2E", "\x63\x6C\x69\x63\x6B", "\x6C\x65\x66\x74", "\x6F\x66\x66\x73\x65\x74\x4C\x65\x66\x74", "\x74\x6F\x70", "\x6F\x66\x66\x73\x65\x74\x54\x6F\x70", "\x6D\x6F\x75\x73\x65\x75\x70", "\x6C\x61\x79\x65\x72\x58", "\x6F\x66\x66\x73\x65\x74\x50\x61\x72\x65\x6E\x74", "\x6F\x66\x66\x73\x65\x74\x57\x69\x64\x74\x68", "\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E", "\x63\x6F\x6C\x6F\x72", "\x77\x68\x69\x74\x65", "\x42\x72\x6F\x61\x64\x63\x61\x73\x74\x20\x65\x6E\x64\x65\x64", "\x4C\x49\x56\x45", "\x72\x65\x64", "\x63\x68\x61\x6E\x67\x65", "\x37\x30\x70\x78", "\x36\x34\x70\x78", "\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x53\x69\x7A\x65", "\x36\x34\x70\x78\x20\x36\x34\x70\x78", "\x6D\x61\x72\x67\x69\x6E\x54\x6F\x70", "\x33\x30\x70\x78", "\x32\x37\x70\x78", "\x2D\x38\x30\x70\x78", "\x2D\x35\x30\x70\x78", "\x63\x72\x65\x61\x74\x65\x4F\x62\x6A\x65\x63\x74\x55\x52\x4C", "\x55\x52\x4C", "\x73\x6F\x75\x72\x63\x65\x6F\x70\x65\x6E", "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6E\x67\x2E\x2E\x2E", "\x73\x68\x69\x66\x74", "\x61\x70\x70\x65\x6E\x64\x42\x75\x66\x66\x65\x72", "\x73\x77\x69\x74\x63\x68\x3A", "\x62\x69\x6E\x61\x72\x79\x54\x79\x70\x65", "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72", "\x64\x61\x74\x61", "\x62\x79\x74\x65\x4C\x65\x6E\x67\x74\x68", "\x61\x70\x70\x6C\x79", "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65", "\x45\x72\x72\x6F\x72\x3A\x20", "\x74\x65\x78\x74\x2F\x78\x6D\x6C", "\x70\x61\x72\x73\x65\x46\x72\x6F\x6D\x53\x74\x72\x69\x6E\x67", "\x6E\x6F\x64\x65\x56\x61\x6C\x75\x65", "\x63\x68\x69\x6C\x64\x4E\x6F\x64\x65\x73", "\x6D\x69\x6D\x65\x74\x79\x70\x65\x63\x6F\x64\x65\x63", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65", "\x61\x64\x64\x53\x6F\x75\x72\x63\x65\x42\x75\x66\x66\x65\x72", "\x75\x70\x64\x61\x74\x65\x65\x6E\x64", "\x67\x65\x74\x49\x6E\x74\x33\x32", "\x65\x72\x72\x6F\x72", "\x45\x72\x72\x6F\x72\x20\x64\x75\x72\x69\x6E\x67\x20\x70\x6C\x61\x79\x62\x61\x63\x6B", "\x70\x75\x73\x68", "\x45\x72\x72\x6F\x72\x3A\x20\x57\x65\x62\x73\x6F\x63\x6B\x65\x74\x20\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E\x20\x69\x73\x20\x63\x6C\x6F\x73\x65\x64\x20\x6F\x72\x20\x63\x6F\x75\x6C\x64\x20\x6E\x6F\x74\x20\x62\x65\x20\x65\x73\x74\x61\x62\x6C\x69\x73\x68\x65\x64\x2E"];


function RunPlayer(strVideoPlayerID, intVideoWidth, intVideoHeight, strServerIP, intServerPort, boolSecureWebsocket, strOrArrayLiveAlias, strSecureToken, boolAutoPlay, boolShowControls, intLocalSeekMinutes, strPosterURL, boolBigButtons) {

    if (!(getParams[0] in window && getParams[1] in window)) { return };

    var _0xcc6exf;
    var _0xcc6ex10 = null;
    var _0xcc6ex11 = null;
    var _0xcc6ex12 = null;
    var _0xcc6ex13 = false;
    var _0xcc6ex14 = 0;
    var _0xcc6ex15 = 0;
    var _0xcc6ex16 = [];
    var seekMinutes = intLocalSeekMinutes * 60;
    var _0xcc6ex18 = false;
    var _0xcc6ex19 = false;
    var _0xcc6ex1a;
    var _0xcc6ex1b = 0;
    var _0xcc6ex1c = false;
    var _0xcc6ex1d = false;
    var _0xcc6ex1e = 100;
    var _0xcc6ex1f = false;
    var _0xcc6ex20 = 0;
    var _0xcc6ex21 = 0;
    var _0xcc6ex22 = false;
    var _0xcc6ex23 = false;
    var _0xcc6ex24 = false;
    var _0xcc6ex25 = false;
    var _0xcc6ex26 = null;
    var _0xcc6ex27 = null;
    var _0xcc6ex28 = 0;
    var _0xcc6ex29 = 1;
    var _0xcc6ex2a = 0;
    var _0xcc6ex2b = 0;
    var _0xcc6ex2c = 1;
    var _0xcc6ex2d = false;
    var _0xcc6ex2e = false;
    var _0xcc6ex2f = 0;
    var _0xcc6ex30 = -1;
    var _0xcc6ex31 = 0;
    var _0xcc6ex32 = 0;
    var _0xcc6ex33 = 0;
    var _0xcc6ex34 = 0;
    var _0xcc6ex35 = true;
    var _0xcc6ex36 = false;
    var _0xcc6ex37 = false;
    var _0xcc6ex38 = 0;
    var _0xcc6ex39 = false;
    var _0xcc6ex3a = 0;
    var _0xcc6ex3b = 0;
    var _0xcc6ex3c = 0;

    if (strOrArrayLiveAlias[getParams[2]] === Array) { _0xcc6ex1a = strOrArrayLiveAlias[0] } else { _0xcc6ex1a = strOrArrayLiveAlias };

    if (seekMinutes < 0) { seekMinutes = 0 }; var _0xcc6ex3d = Math[getParams[3]](0.99, intVideoWidth * 0.00004 + 0.95);

    var _0xcc6ex3e = (boolSecureWebsocket) ? getParams[4] : getParams[5]; _0xcc6ex3e += strServerIP + getParams[6] + intServerPort + getParams[7] + _0xcc6ex1a;
    if (strSecureToken != getParams[8]) {
        _0xcc6ex3e += getParams[9] + strSecureToken
    };
    var videoElement = document[getParams[10]](strVideoPlayerID);

    if (videoElement == null) {
        return;
    };

    videoElement[getParams[12]][getParams[11]] = intVideoWidth + getParams[13];
    videoElement[getParams[12]][getParams[14]] = intVideoHeight + getParams[13];

    videoElement[getParams[12]][getParams[15]] = getParams[16];

    var _video = strVideoPlayerID + getParams[17];
    var _videocontrols = strVideoPlayerID + getParams[18];
    var _volSlider = strVideoPlayerID + getParams[19];
    var _showtime = strVideoPlayerID + getParams[20];
    var _playpause = strVideoPlayerID + getParams[21];
    var _stop = strVideoPlayerID + getParams[22];
    var _volume = strVideoPlayerID + getParams[23];
    var _progress = strVideoPlayerID + getParams[24];
    var _fullscreen = strVideoPlayerID + getParams[25];
    var _progressTip = strVideoPlayerID + getParams[26];
    var _statusmessage = strVideoPlayerID + getParams[27];

    videoElement[getParams[28]] = getParams[29] + _video + getParams[30] + intVideoWidth + getParams[31] + intVideoHeight + getParams[32] + getParams[33] + _videocontrols +
        getParams[34] + getParams[35] + _playpause + getParams[36] + getParams[35] + _stop + getParams[37] + getParams[33] + _showtime + getParams[38] + getParams[39] + _progress +
        getParams[40] + getParams[35] + _volume + getParams[41] + getParams[35] + _fullscreen + getParams[42] + getParams[33] + _progressTip + getParams[43] + getParams[39] + _volSlider + getParams[44] + getParams[33] + _statusmessage + getParams[45];

    var videoConfig = document[getParams[10]](_video);
    var videoControlsConfig = document[getParams[10]](_videocontrols);
    var videoSliderConfig = document[getParams[10]](_volSlider);
    var videoShowTimeConfig = document[getParams[10]](_showtime);
    var videoPlayPauseConfig = document[getParams[10]](_playpause);
    var videoStopConfig = document[getParams[10]](_stop);
    var videoVolumeConfig = document[getParams[10]](_volume);
    var videoProgressConfig = document[getParams[10]](_progress);
    var videoFullscreenConfig = document[getParams[10]](_fullscreen);
    var videoProgressTipConfig = document[getParams[10]](_progressTip);
    var videoStatusMessageConfig = document[getParams[10]](_statusmessage);

    videoConfig[getParams[46]] = true; // autoplay
    videoConfig[getParams[47]] = false; // controls
    videoConfig[getParams[48]] = strPosterURL; // poster

    if (browserNavigator()) {
        boolAutoPlay = false;
        boolBigButtons = true;
        videoConfig[getParams[46]] = false;
        _0xcc6ex1c = true;
    }

    _0xcc6ex1d = _0xcc6ex57();

    if (!boolAutoPlay) {
        boolShowControls = true;
    }

    _0xcc6ex68();

    if (boolBigButtons && boolShowControls) {
        _0xcc6ex73();
    }

    if (boolAutoPlay) {
        boolAutoPlay = false;
        _0xcc6ex78();
    }

    function browserNavigator() {      
        if (navigator[getParams[50]][getParams[49]]('/Android/i') || navigator[getParams[50]][getParams[49]]('/webOS/i') || navigator[getParams[50]][getParams[49]]('/iPhone/i') || navigator[getParams[50]][getParams[49]]('/iPad/i') || navigator[getParams[50]][getParams[49]]('/iPod/i') || navigator[getParams[50]][getParams[49]]('/BlackBerry/i') || navigator[getParams[50]][getParams[49]]('/Windows Phone/i')) {
            return true;
        } else {
            return false;
        }

       // return true;
    }

    function _0xcc6ex57() {
        var _0xcc6ex58 = window[getParams[51]], _0xcc6ex59 = window[getParams[52]], _0xcc6ex5a = _0xcc6ex59[getParams[53]], _0xcc6ex5b = _0xcc6ex59[getParams[50]][getParams[55]](getParams[54]) > -1;

        if (_0xcc6ex58 !== null && _0xcc6ex58 !== undefined && _0xcc6ex5a === getParams[56] && _0xcc6ex5b == false) {
            return true;
        } else {
            return false;
        }
    }

    function _0xcc6ex5c(_0xcc6ex5d) {
        _0xcc6ex5d = Number(_0xcc6ex5d);
        var _0xcc6ex5e = Math[getParams[57]](_0xcc6ex5d / 3600);
        var _0xcc6ex5f = Math[getParams[57]](_0xcc6ex5d % 3600 / 60);
        var _0xcc6ex60 = Math[getParams[57]](_0xcc6ex5d % 3600 % 60);

        return ((_0xcc6ex5e > 0 ? _0xcc6ex5e + getParams[6] + (_0xcc6ex5f < 10 ? getParams[58] : getParams[8]) : getParams[8]) + _0xcc6ex5f + getParams[6] + (_0xcc6ex60 < 10 ? getParams[58] : getParams[8]) + _0xcc6ex60)
    }

    function _0xcc6ex61() {
        if (_0xcc6ex11 != null) {
            _0xcc6ex11[getParams[59]] = null;
            _0xcc6ex11[getParams[60]] = null;
            _0xcc6ex11[getParams[61]] = null;
            _0xcc6ex11[getParams[62]]();
            _0xcc6ex11 = null
        };

        _0xcc6ex13 = false;
        _0xcc6ex1f = false;
        _0xcc6ex22 = false;
        _0xcc6ex23 = false;
        _0xcc6ex24 = false;
        _0xcc6ex25 = false;
        videoConfig[getParams[63]]();
        videoProgressConfig[getParams[64]] = 0;
        videoProgressConfig[getParams[65]] = true;
        videoProgressConfig[getParams[66]] = 0;
        _0xcc6ex1b = 0; _0xcc6ex1e = 100;
        videoSliderConfig[getParams[12]][getParams[67]] = getParams[68];
        videoShowTimeConfig[getParams[28]] = getParams[69];
        videoPlayPauseConfig[getParams[72]](getParams[70], getParams[71]);

        if (_0xcc6ex12 != null) {
            _0xcc6ex10[getParams[73]](_0xcc6ex12);
            _0xcc6ex12[getParams[74]] = null;
            _0xcc6ex12 = null
        };

        if (_0xcc6ex10 != null) {
            _0xcc6ex10[getParams[75]] = null;
            _0xcc6ex10 = null
        };

        _0xcc6ex14 = 0;
        _0xcc6ex15 = 0;
        _0xcc6ex20 = 0;
        _0xcc6ex21 = 0;
        _0xcc6ex16[getParams[76]] = 0;
        videoPlayPauseConfig[getParams[65]] = false;
        videoStopConfig[getParams[65]] = false;
        videoConfig[getParams[77]] = getParams[8];
        videoConfig[getParams[78]]();

        if (_0xcc6ex27 != null) {
            clearInterval(_0xcc6ex27);
            _0xcc6ex27 = null
        };

        if (_0xcc6ex26 != null) {
            clearInterval(_0xcc6ex26);
            _0xcc6ex26 = null
        };

        _0xcc6ex28 = 0;
        _0xcc6ex29 = 1;
        _0xcc6ex2a = 0;
        _0xcc6ex2b = 0;
        _0xcc6ex2c = 1;
        _0xcc6ex2d = false;
        _0xcc6ex2e = false;
        _0xcc6ex2f = 0;
        _0xcc6ex30 = -1;
        _0xcc6ex31 = 0;
        _0xcc6ex32 = 0;
        _0xcc6ex33 = 0;
        _0xcc6ex34 = 0;
        _0xcc6ex35 = true;
        _0xcc6ex36 = false;
        _0xcc6ex37 = false;
        _0xcc6ex38 = 0;
        _0xcc6ex39 = false;
        _0xcc6ex3a = 0;
        _0xcc6ex3b = 0;
        _0xcc6ex3c = 0
    }

    function _0xcc6ex62() {
        if (_0xcc6ex2e && _0xcc6ex34 != 0) {
            _0xcc6ex11[getParams[80]](getParams[79]);
            _0xcc6ex39 = false
        }
    }

    function _0xcc6ex63(_0xcc6ex64) {
        _0xcc6ex36 = true;
        _0xcc6ex16[getParams[76]] = 0;
        videoPlayPauseConfig[getParams[65]] = false;
        _0xcc6ex24 = false;
        videoStatusMessageConfig[getParams[12]][getParams[67]] = getParams[68];

        if ((_0xcc6ex12 != null) && (!_0xcc6ex12[getParams[81]])) {
            _0xcc6ex12[getParams[83]](_0xcc6ex20, videoConfig[getParams[82]]);
            _0xcc6ex20 = videoConfig[getParams[82]]
        };

        _0xcc6ex11[getParams[80]](getParams[84] + _0xcc6ex64)
    }

    function _0xcc6ex65() {
        if (_0xcc6ex13 && !isNaN(videoConfig[getParams[82]])) {
            if (_0xcc6ex2e && _0xcc6ex34 != 0 && !_0xcc6ex36 && !_0xcc6ex37) {
                if ((videoConfig[getParams[82]] - videoConfig[getParams[85]] < 10) && (!videoConfig[getParams[86]]) && (_0xcc6ex39)) { _0xcc6ex62() }
            };

            if (videoConfig[getParams[82]] > 0) { _0xcc6ex1f = true };

            if (!_0xcc6ex2e && (videoConfig[getParams[82]] > _0xcc6ex1b)) {
                _0xcc6ex1b = videoConfig[getParams[82]];
                if (seekMinutes > 0 && !_0xcc6ex18) {
                    videoProgressConfig[getParams[66]] = (_0xcc6ex1b - _0xcc6ex15 / 1000);
                    if (videoConfig[getParams[85]] > _0xcc6ex15 / 1000) {
                        videoProgressConfig[getParams[64]] = videoConfig[getParams[85]] - _0xcc6ex15 / 1000
                    }
                };

                videoShowTimeConfig[getParams[28]] = _0xcc6ex5c(Math[getParams[57]](videoConfig[getParams[85]])) + getParams[87] + _0xcc6ex5c(Math[getParams[57]](_0xcc6ex1b))

            } else {
                if (_0xcc6ex2e && (videoConfig[getParams[82]] > 0) && !_0xcc6ex36 && !_0xcc6ex37) {

                    var _0xcc6ex5d = new Date();
                    var _0xcc6ex66 = (_0xcc6ex34 == 0) ? _0xcc6ex2f : 0; _0xcc6ex3a = videoConfig[getParams[85]] - _0xcc6ex31 + _0xcc6ex30 - _0xcc6ex66 + 1;
                    if (_0xcc6ex35) {
                        _0xcc6ex3b = _0xcc6ex5d[getParams[88]]() / 1000 - _0xcc6ex32 / 1000 + _0xcc6ex30 + _0xcc6ex34 - _0xcc6ex66 + 1
                    };
                    var _0xcc6ex67;
                    if (_0xcc6ex3b >= _0xcc6ex33) {
                        _0xcc6ex67 = _0xcc6ex33
                    } else {
                        _0xcc6ex67 = _0xcc6ex3b
                    };
                    _0xcc6ex3c = Math[getParams[66]](0, _0xcc6ex3b - _0xcc6ex67);
                    videoShowTimeConfig[getParams[28]] = _0xcc6ex5c(_0xcc6ex3a) + getParams[87] + _0xcc6ex5c(_0xcc6ex3b);
                    if (!_0xcc6ex18) {
                        videoProgressConfig[getParams[66]] = _0xcc6ex67;
                        videoProgressConfig[getParams[64]] = _0xcc6ex3a - _0xcc6ex3c
                    }
                }
            }
        }
    }

    function _0xcc6ex68() {
        getParams[89];
        videoControlsConfig[getParams[72]](getParams[70], getParams[90]);
        var _0xcc6ex69 = videoConfig[getParams[11]] + getParams[13];
        videoControlsConfig[getParams[12]][getParams[11]] = _0xcc6ex69;
        videoProgressConfig[getParams[65]] = true;
        videoProgressConfig[getParams[12]][getParams[11]] = videoConfig[getParams[11]] - 280 + getParams[13]; videoSliderConfig[getParams[64]] = videoConfig[getParams[91]];
        videoConfig[getParams[94]](getParams[92], function (_0xcc6ex6a) { _0xcc6ex6a[getParams[93]]() });

        var _0xcc6ex6b = function () { return !!(videoConfig[getParams[95]] || videoConfig[getParams[96]] || videoConfig[getParams[97]] || videoConfig[getParams[98]] || videoConfig[getParams[99]]) };

        var _0xcc6ex6c = function () {
            if (_0xcc6ex6b()) { if (videoConfig[getParams[100]]) { videoConfig[getParams[100]]() } else { if (videoConfig[getParams[101]]) { videoConfig[getParams[101]]() } else { if (videoConfig[getParams[102]]) { videoConfig[getParams[102]]() } else { if (videoConfig[getParams[103]]) { videoConfig[getParams[103]]() } } } } } else { if (videoConfig[getParams[104]]) { videoConfig[getParams[104]]() } else { if (videoConfig[getParams[105]]) { videoConfig[getParams[105]]() } else { if (videoConfig[getParams[106]]) { videoConfig[getParams[106]]() } else { if (videoConfig[getParams[107]]) { videoConfig[getParams[107]]() } } } } }
        };

        var _0xcc6ex6d = function () {
            if (videoConfig[getParams[86]]) { videoPlayPauseConfig[getParams[72]](getParams[70], getParams[71]) } else { videoPlayPauseConfig[getParams[72]](getParams[70], getParams[63]) }
        };

        if (!boolShowControls) {
            videoControlsConfig[getParams[12]][getParams[67]] = getParams[68]
        } else {
            var _0xcc6ex6e; videoConfig[getParams[94]](getParams[108], function () {
                videoControlsConfig[getParams[12]][getParams[67]] = getParams[109]
            });
            videoConfig[getParams[94]](getParams[110], function () {
                videoControlsConfig[getParams[12]][getParams[67]] = getParams[68]
            }); videoControlsConfig[getParams[94]](getParams[108], function () {
                clearTimeout(_0xcc6ex6e); videoControlsConfig[getParams[12]][getParams[67]] = getParams[109]
            }); videoControlsConfig[getParams[94]](getParams[110], function () {
                videoControlsConfig[getParams[12]][getParams[67]] = getParams[68]
            }); videoConfig[getParams[94]](getParams[111], function () {
                videoControlsConfig[getParams[12]][getParams[67]] = getParams[109];

                clearTimeout(_0xcc6ex6e); _0xcc6ex6e = setTimeout(function () {
                    videoControlsConfig[getParams[12]][getParams[67]] = getParams[68]; videoSliderConfig[getParams[12]][getParams[67]] = getParams[68]
                }, 3000)
            })
        };

        videoConfig[getParams[94]](getParams[71], function () {
            _0xcc6ex25 = true;
            if (videoStatusMessageConfig[getParams[12]][getParams[67]] != getParams[68] && !_0xcc6ex22) {
                videoConfig[getParams[63]](); _0xcc6ex75(getParams[112], false)
            };

            _0xcc6ex6d()
        });

        videoConfig[getParams[94]](getParams[63], function () {
            _0xcc6ex6d()
        });

        videoPlayPauseConfig[getParams[94]](getParams[113], function (_0xcc6ex6a) {
            if (!_0xcc6ex13) {
                _0xcc6ex78()
            } else {
                if (videoConfig[getParams[86]]) {
                    if (!_0xcc6ex2e) {
                        if (_0xcc6ex21 < _0xcc6ex15 / 1000) {
                            videoConfig[getParams[85]] = _0xcc6ex15 / 1000 + 1
                        };
                        videoConfig[getParams[71]]()
                    } else {
                        if (_0xcc6ex3a <= _0xcc6ex3c) {
                            _0xcc6ex63(Math[getParams[66]](1, _0xcc6ex3c - 1))
                        } else {
                            if (_0xcc6ex34 == 0) {
                                _0xcc6ex63(Math[getParams[66]](1, _0xcc6ex3a - 1))
                            }
                        };
                        videoConfig[getParams[71]](); _0xcc6ex62()
                    }
                } else {
                    if (!_0xcc6ex2e) {
                        if (seekMinutes > 0) {
                            _0xcc6ex21 = videoConfig[getParams[85]]; videoConfig[getParams[63]]()
                        }
                    } else {
                        videoConfig[getParams[63]](); _0xcc6ex11[getParams[80]](getParams[63]); _0xcc6ex39 = true
                    }
                }
            }
        });

        videoStopConfig[getParams[94]](getParams[113], function (_0xcc6ex6a) {
            _0xcc6ex19 = true; videoStatusMessageConfig[getParams[12]][getParams[67]] = getParams[68]; _0xcc6ex61()
        });

        videoVolumeConfig[getParams[94]](getParams[113], function (_0xcc6ex6a) {
            if (videoSliderConfig[getParams[12]][getParams[67]] == getParams[68]) {
                if (boolBigButtons) {
                    videoSliderConfig[getParams[12]][getParams[114]] = "20px"; //this[getParams[115]] - 50 + getParams[13];
                    videoSliderConfig[getParams[12]][getParams[116]] = this[getParams[117]] - 150 + getParams[13];
                } else {
                    videoSliderConfig[getParams[12]][getParams[114]] = "20px"; //this[getParams[115]] - 60 + getParams[13];
                    videoSliderConfig[getParams[12]][getParams[116]] = this[getParams[117]] - 120 + getParams[13];
                };
                videoSliderConfig[getParams[12]][getParams[67]] = getParams[109]
            } else {
                videoSliderConfig[getParams[12]][getParams[67]] = getParams[68]
            }
        });

        videoFullscreenConfig[getParams[94]](getParams[113], function (_0xcc6ex6a) {
            _0xcc6ex6c()
        });

        videoProgressConfig[getParams[94]](getParams[118], function (_0xcc6ex6a) {
            _0xcc6ex18 = false;
            var _0xcc6ex6f = (_0xcc6ex6a[getParams[119]] - (this[getParams[115]] + this[getParams[120]][getParams[115]])) / this[getParams[121]]; if (_0xcc6ex6f < 0) { _0xcc6ex6f = 0 };
            var _0xcc6ex70 = (_0xcc6ex23) ? 0.1 : 1; _0xcc6ex70 += _0xcc6ex1e / 1000;
            if (!_0xcc6ex2e) {
                if (seekMinutes > 0) {
                    if (_0xcc6ex6f > _0xcc6ex3d) {
                        videoConfig[getParams[85]] = videoConfig[getParams[82]] - _0xcc6ex70
                    } else { videoConfig[getParams[85]] = _0xcc6ex15 / 1000 + _0xcc6ex6f * (videoConfig[getParams[82]] - _0xcc6ex15 / 1000) }; _0xcc6ex65()
                }
            } else {
                var _0xcc6ex64;
                if (_0xcc6ex6f > _0xcc6ex3d) {
                    _0xcc6ex64 = 0
                } else {
                    _0xcc6ex64 = Math[getParams[66]](1, _0xcc6ex3c + _0xcc6ex6f * (_0xcc6ex3b - _0xcc6ex3c) - 1)
                };

                if (!((_0xcc6ex64 == 0) && (!_0xcc6ex35))) {
                    if ((_0xcc6ex34 == 0) && (_0xcc6ex64 == 0)) {
                        videoConfig[getParams[85]] = videoConfig[getParams[82]] - _0xcc6ex70
                    } else {
                        _0xcc6ex63(_0xcc6ex64)
                    }
                }
            };

            if (videoConfig[getParams[86]]) {
                videoConfig[getParams[71]](); _0xcc6ex62()
            }
        });

        videoProgressConfig[getParams[94]](getParams[122], function (_0xcc6ex6a) {
            _0xcc6ex18 = true
        });

        var _0xcc6ex71;
        videoProgressConfig[getParams[94]](getParams[111], function (_0xcc6ex6a) {
            if (!isNaN(videoConfig[getParams[82]]) && !videoProgressConfig[getParams[65]] && this[getParams[120]] != null) {
                videoProgressTipConfig[getParams[12]][getParams[114]] = _0xcc6ex6a[getParams[119]] - 15 + getParams[13];
                videoProgressTipConfig[getParams[12]][getParams[116]] = "20px";//this[getParams[117]] + this[getParams[120]][getParams[117]] - 25 + getParams[13];
                videoProgressTipConfig[getParams[12]][getParams[67]] = getParams[109];
                var _0xcc6ex6f = (_0xcc6ex6a[getParams[119]] - (this[getParams[115]] + this[getParams[120]][getParams[115]])) / this[getParams[121]];
                if (_0xcc6ex6f < 0) { _0xcc6ex6f = 0 };
                var _0xcc6ex72;
                if (!_0xcc6ex2e) {
                    _0xcc6ex72 = _0xcc6ex15 / 1000 + _0xcc6ex6f * (videoConfig[getParams[82]] - _0xcc6ex15 / 1000)
                } else {
                    _0xcc6ex72 = _0xcc6ex3c + _0xcc6ex6f * (_0xcc6ex3b - _0xcc6ex3c)
                }; if (_0xcc6ex6f <= _0xcc6ex3d) {
                    videoProgressTipConfig[getParams[28]] = _0xcc6ex5c(Math[getParams[57]](_0xcc6ex72));
                    videoProgressTipConfig[getParams[12]][getParams[123]] = getParams[124]
                } else {
                    if (_0xcc6ex2e && !_0xcc6ex35) { videoProgressTipConfig[getParams[28]] = getParams[125] } else { videoProgressTipConfig[getParams[28]] = getParams[126] }; videoProgressTipConfig[getParams[12]][getParams[123]] = getParams[127]
                };

                clearTimeout(_0xcc6ex71);
                _0xcc6ex71 = setTimeout(function () { videoProgressTipConfig[getParams[12]][getParams[67]] = getParams[68] }, 1000)
            }
        });

        videoProgressConfig[getParams[94]](getParams[110], function () {
            videoProgressTipConfig[getParams[12]][getParams[67]] = getParams[68]
        });

        videoSliderConfig[getParams[94]](getParams[128], function (_0xcc6ex6a) {
            videoConfig[getParams[91]] = this[getParams[64]]
        });

        videoSliderConfig[getParams[94]](getParams[110], function () {
            videoSliderConfig[getParams[12]][getParams[67]] = getParams[68]
        })
    }

    function _0xcc6ex73() {
        videoControlsConfig[getParams[12]][getParams[14]] = getParams[129];
        videoProgressConfig[getParams[12]][getParams[11]] = videoConfig[getParams[11]] - 410 + getParams[13];
        videoPlayPauseConfig[getParams[12]][getParams[11]] = getParams[130];
        videoPlayPauseConfig[getParams[12]][getParams[131]] = getParams[132];
        videoStopConfig[getParams[12]][getParams[11]] = getParams[130];
        videoStopConfig[getParams[12]][getParams[131]] = getParams[132];
        videoVolumeConfig[getParams[12]][getParams[11]] = getParams[130];
        videoVolumeConfig[getParams[12]][getParams[131]] = getParams[132];
        videoFullscreenConfig[getParams[12]][getParams[11]] = getParams[130];
        videoFullscreenConfig[getParams[12]][getParams[131]] = getParams[132];
        videoProgressConfig[getParams[12]][getParams[133]] = getParams[134];
        videoShowTimeConfig[getParams[12]][getParams[133]] = getParams[135]
    }

    function _0xcc6ex74(_0xcc6ex6a) {
        _0xcc6ex10[getParams[82]] = 0;
        videoStopConfig[getParams[65]] = false; _0xcc6ex81()
    }

    function _0xcc6ex75(_0xcc6ex76, _0xcc6ex77) {
        if (_0xcc6ex77) {
            videoStatusMessageConfig[getParams[12]][getParams[116]] = -1 * videoConfig[getParams[14]] + 20 + getParams[13]
        } else {
            if (boolBigButtons) {
                videoStatusMessageConfig[getParams[12]][getParams[116]] = getParams[136]
            } else {
                videoStatusMessageConfig[getParams[12]][getParams[116]] = getParams[137]
            }
        };
        videoStatusMessageConfig[getParams[12]][getParams[114]] = videoConfig[getParams[121]] - videoConfig[getParams[11]] + 5 + getParams[13];
        videoStatusMessageConfig[getParams[28]] = _0xcc6ex76; videoStatusMessageConfig[getParams[12]][getParams[67]] = getParams[109]
    }

    function _0xcc6ex78() {
        _0xcc6ex16[getParams[76]] = 0;
        _0xcc6ex19 = false;
        videoPlayPauseConfig[getParams[65]] = true;
        videoStopConfig[getParams[65]] = true;
        if (seekMinutes > 0) {
            videoProgressConfig[getParams[65]] = false
        };
        _0xcc6ex10 = new window.MediaSource();
        videoConfig[getParams[77]] = window[getParams[139]][getParams[138]](_0xcc6ex10);
        _0xcc6ex10[getParams[94]](getParams[140], _0xcc6ex74, false);
        if (_0xcc6ex1c) {
            videoConfig[getParams[71]]()
        };
        _0xcc6ex75(getParams[141], false)
    }

    function _0xcc6ex79(_0xcc6ex6a) {
        if ((_0xcc6ex12 != null) && !_0xcc6ex12[getParams[81]]) {
            if (_0xcc6ex16[getParams[76]] > 0) {
                _0xcc6ex12[getParams[143]](_0xcc6ex16[getParams[142]]())
            } else {
                if (!_0xcc6ex2e) {
                    var _0xcc6ex7a = (_0xcc6ex14 - _0xcc6ex15) - seekMinutes * 1000;
                    if (_0xcc6ex7a >= 1000) { _0xcc6ex15 = _0xcc6ex15 + _0xcc6ex7a };
                    var _0xcc6ex7b = (_0xcc6ex14 - _0xcc6ex20) - seekMinutes * 1000;
                    if ((_0xcc6ex7b >= 10000) && (_0xcc6ex15 / 1000 >= 30)) {
                        _0xcc6ex12[getParams[83]](Math[getParams[66]](0, _0xcc6ex15 / 1000 - 35), _0xcc6ex15 / 1000 - 20); _0xcc6ex20 = _0xcc6ex20 + _0xcc6ex7b
                    }
                } else {
                    if (_0xcc6ex36 && _0xcc6ex20 < videoConfig[getParams[82]]) {
                        _0xcc6ex12[getParams[83]](_0xcc6ex20, videoConfig[getParams[82]]); _0xcc6ex20 = videoConfig[getParams[82]]
                    } else {
                        if ((!_0xcc6ex36) && (videoConfig[getParams[85]] >= 30)) {
                            var _0xcc6ex7b = (videoConfig[getParams[85]] - _0xcc6ex20 - 20);
                            if (_0xcc6ex7b >= 10) {
                                _0xcc6ex12[getParams[83]](_0xcc6ex20, videoConfig[getParams[85]] - 20);
                                _0xcc6ex20 = videoConfig[getParams[85]] - 20
                            }
                        }
                    }
                }
            }
        }
    }

    function _0xcc6ex7c() {
        if (strOrArrayLiveAlias[getParams[2]] === Array) {
            var _0xcc6ex7d = _0xcc6ex28 / _0xcc6ex29;
            var _0xcc6ex7e = false; if (_0xcc6ex7d > 0.05) {
                if (_0xcc6ex2a + 1 < strOrArrayLiveAlias[getParams[76]]) {
                    _0xcc6ex2a++;
                    _0xcc6ex7e = true; _0xcc6ex2d = false
                }
            } else {
                if (_0xcc6ex2a - 1 >= 0) {
                    if (_0xcc6ex2d) { _0xcc6ex2b = 0; _0xcc6ex2c = 0 };
                    if (_0xcc6ex2c == 0) {
                        _0xcc6ex2a--; _0xcc6ex7e = true;
                        _0xcc6ex2d = true;
                        _0xcc6ex2b++;
                        _0xcc6ex2c = _0xcc6ex2b
                    } else {
                        _0xcc6ex2c--
                    }
                }
            }; if (_0xcc6ex7e) {
                _0xcc6ex2b++;
                _0xcc6ex11[getParams[80]](getParams[144] + strOrArrayLiveAlias[_0xcc6ex2a])
            };

            _0xcc6ex28 = 0;
            _0xcc6ex29 = 1
        }
    }

    function _0xcc6ex7f() {
        if (_0xcc6ex13 && !isNaN(videoConfig[getParams[82]])) {
            if (_0xcc6ex2e && _0xcc6ex34 != 0 && !_0xcc6ex36 && !_0xcc6ex37) {
                if ((videoConfig[getParams[82]] - videoConfig[getParams[85]] > 20) && (!_0xcc6ex39)) {
                    _0xcc6ex11[getParams[80]](getParams[63]); _0xcc6ex39 = true
                }
            }
        }
    }

    function _0xcc6ex80() {
        if (_0xcc6ex36) {
            var _0xcc6ex5d = new Date();
            _0xcc6ex32 = _0xcc6ex5d[getParams[88]]();
            _0xcc6ex39 = false; _0xcc6ex36 = false;
            _0xcc6ex37 = true; _0xcc6ex38 = videoConfig[getParams[82]]
        }
    }

    function _0xcc6ex81() {
        _0xcc6ex11 = new WebSocket(_0xcc6ex3e);
        _0xcc6ex11[getParams[145]] = getParams[146];
        _0xcc6ex11[getParams[59]] = function (_0xcc6ex82) {
            var _0xcc6ex83 = new Uint8Array(_0xcc6ex82[getParams[147]]);
            var _0xcc6ex84;
            if (_0xcc6ex83[0] == 0) {
                var _0xcc6ex77 = new Uint16Array(_0xcc6ex82[getParams[147]], 2, (_0xcc6ex82[getParams[147]][getParams[148]] - 2) / 2);
                var _0xcc6ex85 = String[getParams[150]][getParams[149]](null, _0xcc6ex77); _0xcc6ex75(getParams[151] + _0xcc6ex85, true);
                _0xcc6ex61();
                return
            };

            if (_0xcc6ex83[0] == 1) {
                if (!_0xcc6ex1d) { _0xcc6ex1e = 1000 };
                _0xcc6ex23 = (_0xcc6ex83[1] == 4) || (_0xcc6ex83[1] == 8) || (_0xcc6ex83[1] == 12);
                var _0xcc6ex86 = new Uint16Array(_0xcc6ex82[getParams[147]], 2, 8);
                if (!_0xcc6ex2e) {
                    _0xcc6ex2f = _0xcc6ex86[0];
                    _0xcc6ex33 = _0xcc6ex86[2]; var _0xcc6ex5d = new Date(); _0xcc6ex32 = _0xcc6ex5d[getParams[88]](); if (_0xcc6ex2f != 0) { _0xcc6ex2e = true }
                };
                if (_0xcc6ex36 || (_0xcc6ex30 == -1)) {
                    _0xcc6ex34 = _0xcc6ex86[3]
                };
                var _0xcc6ex87 = new Uint16Array(_0xcc6ex82[getParams[147]], 18, 1);
                var _0xcc6ex88 = _0xcc6ex87[0]; if (!_0xcc6ex13) {
                    _0xcc6ex13 = true;
                    var _0xcc6ex89 = new Uint16Array(_0xcc6ex82[getParams[147]], 20, _0xcc6ex88 / 2);
                    var _0xcc6ex8a = String[getParams[150]][getParams[149]](null, _0xcc6ex89);
                    var _0xcc6ex8b = new DOMParser();
                    var _0xcc6ex8c = _0xcc6ex8b[getParams[153]](_0xcc6ex8a, getParams[152]);
                    _0xcc6exf = _0xcc6ex8c[getParams[157]](getParams[156])[0][getParams[155]][0][getParams[154]];
                    _0xcc6ex12 = _0xcc6ex10[getParams[158]](_0xcc6exf);
                    _0xcc6ex12[getParams[94]](getParams[159], _0xcc6ex79, false)
                };

                _0xcc6ex84 = new Uint8Array(_0xcc6ex82[getParams[147]], 20 + _0xcc6ex88, _0xcc6ex82[getParams[147]][getParams[148]] - 20 - _0xcc6ex88)
            } else {
                if (_0xcc6ex83[0] == 2) {
                    if (_0xcc6ex83[1] == 1) {
                        _0xcc6ex28++
                    } else {
                        _0xcc6ex29++
                    };
                    _0xcc6ex14 = new DataView(_0xcc6ex82[getParams[147]])[getParams[160]](6, true);
                    _0xcc6ex84 = new Uint8Array(_0xcc6ex82[getParams[147]], 10, _0xcc6ex82[getParams[147]][getParams[148]] - 10);
                    if (_0xcc6ex2e) {
                        var _0xcc6ex8d = new Uint16Array(_0xcc6ex82[getParams[147]], 2, 2);
                        _0xcc6ex35 = (_0xcc6ex8d[0] == 0);
                        if (_0xcc6ex8d[1] != 0) {
                            if (_0xcc6ex36 || (_0xcc6ex30 == -1)) {
                                _0xcc6ex30 = _0xcc6ex8d[1]
                            }; _0xcc6ex80()
                        }
                    }
                }
            };

            if (videoConfig[getParams[161]] != null) {
                _0xcc6ex75(getParams[162], true);
                _0xcc6ex61();
                return
            };
            if (_0xcc6ex25 && _0xcc6ex22 && _0xcc6ex1f && !_0xcc6ex23 && !_0xcc6ex36 && !_0xcc6ex37) {
                if ((videoConfig[getParams[82]] - videoConfig[getParams[85]] < 0.5) && !_0xcc6ex24) {
                    videoPlayPauseConfig[getParams[65]] = true;
                    _0xcc6ex24 = true;
                    _0xcc6ex75(getParams[112], false);
                    videoConfig[getParams[63]]()
                } else {
                    if ((videoConfig[getParams[82]] - videoConfig[getParams[85]] >= 5) && _0xcc6ex24) {
                        videoPlayPauseConfig[getParams[65]] = false;
                        _0xcc6ex24 = false;
                        videoStatusMessageConfig[getParams[12]][getParams[67]] = getParams[68]; videoConfig[getParams[71]]()
                    }
                }
            };
            if ((_0xcc6ex12 != null) && ((!_0xcc6ex36) || (_0xcc6ex83[0] == 1))) {
                if (_0xcc6ex12[getParams[81]] || _0xcc6ex16[getParams[76]] > 0) {
                    _0xcc6ex16[getParams[163]](_0xcc6ex84)
                } else {
                    _0xcc6ex12[getParams[143]](_0xcc6ex84)
                }
            };
            if (_0xcc6ex37) {
                var _0xcc6ex8e = (_0xcc6ex34 == 0) ? 1 : 4;
                var _0xcc6ex8f = (_0xcc6ex23) ? 0 : 0.5;
                _0xcc6ex8e += _0xcc6ex8f;
                if (videoConfig[getParams[82]] - _0xcc6ex38 >= _0xcc6ex8e) {
                    _0xcc6ex37 = false;
                    videoConfig[getParams[85]] = videoConfig[getParams[82]] - _0xcc6ex8f;
                    _0xcc6ex31 = videoConfig[getParams[85]];
                    if ((!_0xcc6ex1d || !_0xcc6ex23) && (_0xcc6ex34 == 0)) {
                        var _0xcc6ex90 = (_0xcc6ex23) ? 1500 : 1000;
                        videoConfig[getParams[63]]();
                        setTimeout(function () {
                            if (!_0xcc6ex24) { videoConfig[getParams[71]]() }
                        }, _0xcc6ex90)
                    };

                    _0xcc6ex65()
                }
            };
            _0xcc6ex7f();
            var _0xcc6ex91 = (_0xcc6ex23) ? 0 : 2000;
            if ((_0xcc6ex14 > _0xcc6ex1e) && (_0xcc6ex14 > _0xcc6ex91) && _0xcc6ex13 && (videoStatusMessageConfig[getParams[12]][getParams[67]] != getParams[68]) && !_0xcc6ex22) {
                videoStatusMessageConfig[getParams[12]][getParams[67]] = getParams[68]; videoPlayPauseConfig[getParams[65]] = false;
                _0xcc6ex22 = true;
                videoConfig[getParams[71]]();
                if ((strOrArrayLiveAlias[getParams[2]] === Array) && (_0xcc6ex27 == null)) {
                    _0xcc6ex27 = setInterval(_0xcc6ex7c, 10000)
                };
                if (_0xcc6ex26 == null) {
                    _0xcc6ex26 = setInterval(_0xcc6ex65, 1000)
                }
            }
        };

        _0xcc6ex11[getParams[60]] = function () {
            _0xcc6ex61()
        };

        _0xcc6ex11[getParams[61]] = function () {
            if (!_0xcc6ex19) {
                _0xcc6ex75(getParams[164], true);
                _0xcc6ex61();
            }
        };

    }

}

