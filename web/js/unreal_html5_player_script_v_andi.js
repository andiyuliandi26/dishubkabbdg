var _0x5296 = [
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
    '" style= "background- color: black" ></video > ',
    ' < div id= "',
    '" class="controls" data- state="hidden" > ',
    ' < button id= "',
    '" type= "button" data- state="play" > Play / Pause</button > ',
    '" type= "button" data- state="stop" > Stop</button > ',
    '" style= "width:130px; text - align:center; margin - top: 11px; padding - left: 2px; color: #FFFFFF; " > 0:00 / 0:00</div > ',
    ' < input type= "range" id= "", "" min= "0" max= "0" step= "0.1" value= "0" style= "cursor: pointer; margin - top: 14px; " />',
    '" type= "button" data- state="volume" > Volume</button > ',
    '" type= "button" data- state="go- fullscreen" > Fullscreen</button ></div > ',
    '" style= "z- index: 100; white - space: nowrap; position: absolute; display: none; color: #FFFFFF; " ></div > ',
    '" min= "0" max= "1" step= "0.01" value= "0.5" style= "cursor: pointer; z - index: 100; position: absolute; display: none; width: 100px; height: 12px; padding: 20px; -webkit - transform:rotate(270deg); -moz - transform:rotate(270deg); -o - transform:rotate(270deg); -ms - transform:rotate(90deg); transform: rotate(270deg); " />',
    '" style= "z- index: 100; position: absolute; display: none; color: red; " ></div > ',
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
    "data- state",
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
    "- 80px",
    "- 50px",
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

function RunPlayer(_0xcc6ex2, _0xcc6ex3, _0xcc6ex4, _0xcc6ex5, _0xcc6ex6, _0xcc6ex7, _0xcc6ex8, _0xcc6ex9, _0xcc6exa, _0xcc6exb, _0xcc6exc, _0xcc6exd, _0xcc6exe) {

    if (!(_0x5296[0] in window && _0x5296[1] in window)) { return };
    var _0xcc6exf;
    var _0xcc6ex10 = null;
    var _0xcc6ex11 = null;
    var _0xcc6ex12 = null;
    var _0xcc6ex13 = false;
    var _0xcc6ex14 = 0;
    var _0xcc6ex15 = 0;
    var _0xcc6ex16 = [];
    var _0xcc6ex17 = _0xcc6exc * 60;
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

    if (_0xcc6ex8[_0x5296[2]] === Array) { _0xcc6ex1a = _0xcc6ex8[0] } else { _0xcc6ex1a = _0xcc6ex8 };

    if (_0xcc6ex17 < 0) { _0xcc6ex17 = 0 }; var _0xcc6ex3d = Math[_0x5296[3]](0.99, _0xcc6ex3 * 0.00004 + 0.95);

    var _0xcc6ex3e = (_0xcc6ex7) ? _0x5296[4] : _0x5296[5]; _0xcc6ex3e += _0xcc6ex5 + _0x5296[6] + _0xcc6ex6 + _0x5296[7] + _0xcc6ex1a;
    if (_0xcc6ex9 != _0x5296[8]) { _0xcc6ex3e += _0x5296[9] + _0xcc6ex9 };
    var _0xcc6ex3f = document[_0x5296[10]](_0xcc6ex2);
    if (_0xcc6ex3f == null) { return }; _0xcc6ex3f[_0x5296[12]][_0x5296[11]] = _0xcc6ex3 + _0x5296[13]; _0xcc6ex3f[_0x5296[12]][_0x5296[14]] = _0xcc6ex4 + _0x5296[13]; _0xcc6ex3f[_0x5296[12]][_0x5296[15]] = _0x5296[16];
    var _0xcc6ex40 = _0xcc6ex2 + _0x5296[17];
    var _0xcc6ex41 = _0xcc6ex2 + _0x5296[18];
    var _0xcc6ex42 = _0xcc6ex2 + _0x5296[19];
    var _0xcc6ex43 = _0xcc6ex2 + _0x5296[20];
    var _0xcc6ex44 = _0xcc6ex2 + _0x5296[21];
    var _0xcc6ex45 = _0xcc6ex2 + _0x5296[22];
    var _0xcc6ex46 = _0xcc6ex2 + _0x5296[23];
    var _0xcc6ex47 = _0xcc6ex2 + _0x5296[24];
    var _0xcc6ex48 = _0xcc6ex2 + _0x5296[25];
    var _0xcc6ex49 = _0xcc6ex2 + _0x5296[26];
    var _0xcc6ex4a = _0xcc6ex2 + _0x5296[27]; _0xcc6ex3f[_0x5296[28]] = _0x5296[29] + _0xcc6ex40 + _0x5296[30] + _0xcc6ex3 + _0x5296[31] + _0xcc6ex4 + _0x5296[32] + _0x5296[33] + _0xcc6ex41 + _0x5296[34] + _0x5296[35] + _0xcc6ex44 + _0x5296[36] + _0x5296[35] + _0xcc6ex45 + _0x5296[37] + _0x5296[33] + _0xcc6ex43 + _0x5296[38] + _0x5296[39] + _0xcc6ex47 + _0x5296[40] + _0x5296[35] + _0xcc6ex46 + _0x5296[41] + _0x5296[35] + _0xcc6ex48 + _0x5296[42] + _0x5296[33] + _0xcc6ex49 + _0x5296[43] + _0x5296[39] + _0xcc6ex42 + _0x5296[44] + _0x5296[33] + _0xcc6ex4a + _0x5296[45];
    var _0xcc6ex4b = document[_0x5296[10]](_0xcc6ex40);
    var _0xcc6ex4c = document[_0x5296[10]](_0xcc6ex41);
    var _0xcc6ex4d = document[_0x5296[10]](_0xcc6ex42);
    var _0xcc6ex4e = document[_0x5296[10]](_0xcc6ex43);
    var _0xcc6ex4f = document[_0x5296[10]](_0xcc6ex44);
    var _0xcc6ex50 = document[_0x5296[10]](_0xcc6ex45);
    var _0xcc6ex51 = document[_0x5296[10]](_0xcc6ex46);
    var _0xcc6ex52 = document[_0x5296[10]](_0xcc6ex47);
    var _0xcc6ex53 = document[_0x5296[10]](_0xcc6ex48);
    var _0xcc6ex54 = document[_0x5296[10]](_0xcc6ex49);
    var _0xcc6ex55 = document[_0x5296[10]](_0xcc6ex4a);
    _0xcc6ex4b[_0x5296[46]] = true;
    _0xcc6ex4b[_0x5296[47]] = false;
    _0xcc6ex4b[_0x5296[48]] = _0xcc6exd;

    if (_0xcc6ex56()) {
        _0xcc6exa = false;
        _0xcc6exe = true;
        _0xcc6ex4b[_0x5296[46]] = false;
        _0xcc6ex1c = true
    };

    _0xcc6ex1d = _0xcc6ex57();

    if (!_0xcc6exa) { _0xcc6exb = true };

    _0xcc6ex68();

    if (_0xcc6exe && _0xcc6exb) { _0xcc6ex73() };

    if (_0xcc6exa) { _0xcc6exa = false; _0xcc6ex78() };

    function _0xcc6ex56() {
        if (navigator[_0x5296[50]][_0x5296[49]](/Android/i) || navigator[_0x5296[50]][_0x5296[49]](/webOS/i) || navigator[_0x5296[50]][_0x5296[49]](/iPhone/i) || navigator[_0x5296[50]][_0x5296[49]](/iPad/i) || navigator[_0x5296[50]][_0x5296[49]](/iPod/i) || navigator[_0x5296[50]][_0x5296[49]](/BlackBerry/i) || navigator[_0x5296[50]][_0x5296[49]](/Windows Phone/i)) {
            return true
        } else {
            return false
        }
    }

    function _0xcc6ex57() {
        var _0xcc6ex58 = window[_0x5296[51]], _0xcc6ex59 = window[_0x5296[52]], _0xcc6ex5a = _0xcc6ex59[_0x5296[53]], _0xcc6ex5b = _0xcc6ex59[_0x5296[50]][_0x5296[55]](_0x5296[54]) > -1;
        if (_0xcc6ex58 !== null && _0xcc6ex58 !== undefined && _0xcc6ex5a === _0x5296[56] && _0xcc6ex5b == false) {
            return true
        } else {
            return false
        }
    }

    function _0xcc6ex5c(_0xcc6ex5d) {
        _0xcc6ex5d = Number(_0xcc6ex5d);
        var _0xcc6ex5e = Math[_0x5296[57]](_0xcc6ex5d / 3600);
        var _0xcc6ex5f = Math[_0x5296[57]](_0xcc6ex5d % 3600 / 60);
        var _0xcc6ex60 = Math[_0x5296[57]](_0xcc6ex5d % 3600 % 60);

        return ((_0xcc6ex5e > 0 ? _0xcc6ex5e + _0x5296[6] + (_0xcc6ex5f < 10 ? _0x5296[58] : _0x5296[8]) : _0x5296[8]) + _0xcc6ex5f + _0x5296[6] + (_0xcc6ex60 < 10 ? _0x5296[58] : _0x5296[8]) + _0xcc6ex60)
    }

    function _0xcc6ex61() {
        if (_0xcc6ex11 != null) {
            _0xcc6ex11[_0x5296[59]] = null;
            _0xcc6ex11[_0x5296[60]] = null;
            _0xcc6ex11[_0x5296[61]] = null;
            _0xcc6ex11[_0x5296[62]]();
            _0xcc6ex11 = null
        };

        _0xcc6ex13 = false;
        _0xcc6ex1f = false;
        _0xcc6ex22 = false;
        _0xcc6ex23 = false;
        _0xcc6ex24 = false;
        _0xcc6ex25 = false;
        _0xcc6ex4b[_0x5296[63]]();
        _0xcc6ex52[_0x5296[64]] = 0;
        _0xcc6ex52[_0x5296[65]] = true;
        _0xcc6ex52[_0x5296[66]] = 0;
        _0xcc6ex1b = 0; _0xcc6ex1e = 100;
        _0xcc6ex4d[_0x5296[12]][_0x5296[67]] = _0x5296[68];
        _0xcc6ex4e[_0x5296[28]] = _0x5296[69];
        _0xcc6ex4f[_0x5296[72]](_0x5296[70], _0x5296[71]);

        if (_0xcc6ex12 != null) {
            _0xcc6ex10[_0x5296[73]](_0xcc6ex12);
            _0xcc6ex12[_0x5296[74]] = null;
            _0xcc6ex12 = null
        };

        if (_0xcc6ex10 != null) {
            _0xcc6ex10[_0x5296[75]] = null;
            _0xcc6ex10 = null
        };

        _0xcc6ex14 = 0;
        _0xcc6ex15 = 0;
        _0xcc6ex20 = 0;
        _0xcc6ex21 = 0;
        _0xcc6ex16[_0x5296[76]] = 0;
        _0xcc6ex4f[_0x5296[65]] = false;
        _0xcc6ex50[_0x5296[65]] = false;
        _0xcc6ex4b[_0x5296[77]] = _0x5296[8];
        _0xcc6ex4b[_0x5296[78]]();

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
            _0xcc6ex11[_0x5296[80]](_0x5296[79]);
            _0xcc6ex39 = false
        }
    }

    function _0xcc6ex63(_0xcc6ex64) {
        _0xcc6ex36 = true;
        _0xcc6ex16[_0x5296[76]] = 0;
        _0xcc6ex4f[_0x5296[65]] = false;
        _0xcc6ex24 = false;
        _0xcc6ex55[_0x5296[12]][_0x5296[67]] = _0x5296[68];

        if ((_0xcc6ex12 != null) && (!_0xcc6ex12[_0x5296[81]])) {
            _0xcc6ex12[_0x5296[83]](_0xcc6ex20, _0xcc6ex4b[_0x5296[82]]);
            _0xcc6ex20 = _0xcc6ex4b[_0x5296[82]]
        };

        _0xcc6ex11[_0x5296[80]](_0x5296[84] + _0xcc6ex64)
    }

    function _0xcc6ex65() {
        if (_0xcc6ex13 && !isNaN(_0xcc6ex4b[_0x5296[82]])) {
            if (_0xcc6ex2e && _0xcc6ex34 != 0 && !_0xcc6ex36 && !_0xcc6ex37) {
                if ((_0xcc6ex4b[_0x5296[82]] - _0xcc6ex4b[_0x5296[85]] < 10) && (!_0xcc6ex4b[_0x5296[86]]) && (_0xcc6ex39)) { _0xcc6ex62() }
            };

            if (_0xcc6ex4b[_0x5296[82]] > 0) { _0xcc6ex1f = true };

            if (!_0xcc6ex2e && (_0xcc6ex4b[_0x5296[82]] > _0xcc6ex1b)) {
                _0xcc6ex1b = _0xcc6ex4b[_0x5296[82]];
                if (_0xcc6ex17 > 0 && !_0xcc6ex18) {
                    _0xcc6ex52[_0x5296[66]] = (_0xcc6ex1b - _0xcc6ex15 / 1000);
                    if (_0xcc6ex4b[_0x5296[85]] > _0xcc6ex15 / 1000) {
                        _0xcc6ex52[_0x5296[64]] = _0xcc6ex4b[_0x5296[85]] - _0xcc6ex15 / 1000
                    }
                };

                _0xcc6ex4e[_0x5296[28]] = _0xcc6ex5c(Math[_0x5296[57]](_0xcc6ex4b[_0x5296[85]])) + _0x5296[87] + _0xcc6ex5c(Math[_0x5296[57]](_0xcc6ex1b))

            } else {
                if (_0xcc6ex2e && (_0xcc6ex4b[_0x5296[82]] > 0) && !_0xcc6ex36 && !_0xcc6ex37) {

                    var _0xcc6ex5d = new Date();
                    var _0xcc6ex66 = (_0xcc6ex34 == 0) ? _0xcc6ex2f : 0; _0xcc6ex3a = _0xcc6ex4b[_0x5296[85]] - _0xcc6ex31 + _0xcc6ex30 - _0xcc6ex66 + 1;
                    if (_0xcc6ex35) {
                        _0xcc6ex3b = _0xcc6ex5d[_0x5296[88]]() / 1000 - _0xcc6ex32 / 1000 + _0xcc6ex30 + _0xcc6ex34 - _0xcc6ex66 + 1
                    };
                    var _0xcc6ex67;
                    if (_0xcc6ex3b >= _0xcc6ex33) {
                        _0xcc6ex67 = _0xcc6ex33
                    } else {
                        _0xcc6ex67 = _0xcc6ex3b
                    };
                    _0xcc6ex3c = Math[_0x5296[66]](0, _0xcc6ex3b - _0xcc6ex67);
                    _0xcc6ex4e[_0x5296[28]] = _0xcc6ex5c(_0xcc6ex3a) + _0x5296[87] + _0xcc6ex5c(_0xcc6ex3b);
                    if (!_0xcc6ex18) {
                        _0xcc6ex52[_0x5296[66]] = _0xcc6ex67;
                        _0xcc6ex52[_0x5296[64]] = _0xcc6ex3a - _0xcc6ex3c
                    }
                }
            }
        }
    }

    function _0xcc6ex68() {
        _0x5296[89];
        _0xcc6ex4c[_0x5296[72]](_0x5296[70], _0x5296[90]);
        var _0xcc6ex69 = _0xcc6ex4b[_0x5296[11]] + _0x5296[13];
        _0xcc6ex4c[_0x5296[12]][_0x5296[11]] = _0xcc6ex69;
        _0xcc6ex52[_0x5296[65]] = true;
        _0xcc6ex52[_0x5296[12]][_0x5296[11]] = _0xcc6ex4b[_0x5296[11]] - 280 + _0x5296[13]; _0xcc6ex4d[_0x5296[64]] = _0xcc6ex4b[_0x5296[91]];
        _0xcc6ex4b[_0x5296[94]](_0x5296[92], function (_0xcc6ex6a) { _0xcc6ex6a[_0x5296[93]]() });

        var _0xcc6ex6b = function () { return !!(_0xcc6ex4b[_0x5296[95]] || _0xcc6ex4b[_0x5296[96]] || _0xcc6ex4b[_0x5296[97]] || _0xcc6ex4b[_0x5296[98]] || _0xcc6ex4b[_0x5296[99]]) };

        var _0xcc6ex6c = function () {
            if (_0xcc6ex6b()) { if (_0xcc6ex4b[_0x5296[100]]) { _0xcc6ex4b[_0x5296[100]]() } else { if (_0xcc6ex4b[_0x5296[101]]) { _0xcc6ex4b[_0x5296[101]]() } else { if (_0xcc6ex4b[_0x5296[102]]) { _0xcc6ex4b[_0x5296[102]]() } else { if (_0xcc6ex4b[_0x5296[103]]) { _0xcc6ex4b[_0x5296[103]]() } } } } } else { if (_0xcc6ex4b[_0x5296[104]]) { _0xcc6ex4b[_0x5296[104]]() } else { if (_0xcc6ex4b[_0x5296[105]]) { _0xcc6ex4b[_0x5296[105]]() } else { if (_0xcc6ex4b[_0x5296[106]]) { _0xcc6ex4b[_0x5296[106]]() } else { if (_0xcc6ex4b[_0x5296[107]]) { _0xcc6ex4b[_0x5296[107]]() } } } } }
        };

        var _0xcc6ex6d = function () {
            if (_0xcc6ex4b[_0x5296[86]]) { _0xcc6ex4f[_0x5296[72]](_0x5296[70], _0x5296[71]) } else { _0xcc6ex4f[_0x5296[72]](_0x5296[70], _0x5296[63]) }
        };

        if (!_0xcc6exb) {
            _0xcc6ex4c[_0x5296[12]][_0x5296[67]] = _0x5296[68]
        } else {
            var _0xcc6ex6e; _0xcc6ex4b[_0x5296[94]](_0x5296[108], function () {
                _0xcc6ex4c[_0x5296[12]][_0x5296[67]] = _0x5296[109]
            });
            _0xcc6ex4b[_0x5296[94]](_0x5296[110], function () {
                _0xcc6ex4c[_0x5296[12]][_0x5296[67]] = _0x5296[68]
            }); _0xcc6ex4c[_0x5296[94]](_0x5296[108], function () {
                clearTimeout(_0xcc6ex6e); _0xcc6ex4c[_0x5296[12]][_0x5296[67]] = _0x5296[109]
            }); _0xcc6ex4c[_0x5296[94]](_0x5296[110], function () {
                _0xcc6ex4c[_0x5296[12]][_0x5296[67]] = _0x5296[68]
            }); _0xcc6ex4b[_0x5296[94]](_0x5296[111], function () {
                _0xcc6ex4c[_0x5296[12]][_0x5296[67]] = _0x5296[109];

                clearTimeout(_0xcc6ex6e); _0xcc6ex6e = setTimeout(function () {
                    _0xcc6ex4c[_0x5296[12]][_0x5296[67]] = _0x5296[68]; _0xcc6ex4d[_0x5296[12]][_0x5296[67]] = _0x5296[68]
                }, 3000)
            })
        };

        _0xcc6ex4b[_0x5296[94]](_0x5296[71], function () {
            _0xcc6ex25 = true;
            if (_0xcc6ex55[_0x5296[12]][_0x5296[67]] != _0x5296[68] && !_0xcc6ex22) {
                _0xcc6ex4b[_0x5296[63]](); _0xcc6ex75(_0x5296[112], false)
            };

            _0xcc6ex6d()
        });

        _0xcc6ex4b[_0x5296[94]](_0x5296[63], function () {
            _0xcc6ex6d()
        });

        _0xcc6ex4f[_0x5296[94]](_0x5296[113], function (_0xcc6ex6a) {
            if (!_0xcc6ex13) {
                _0xcc6ex78()
            } else {
                if (_0xcc6ex4b[_0x5296[86]]) {
                    if (!_0xcc6ex2e) {
                        if (_0xcc6ex21 < _0xcc6ex15 / 1000) {
                            _0xcc6ex4b[_0x5296[85]] = _0xcc6ex15 / 1000 + 1
                        };
                        _0xcc6ex4b[_0x5296[71]]()
                    } else {
                        if (_0xcc6ex3a <= _0xcc6ex3c) {
                            _0xcc6ex63(Math[_0x5296[66]](1, _0xcc6ex3c - 1))
                        } else {
                            if (_0xcc6ex34 == 0) {
                                _0xcc6ex63(Math[_0x5296[66]](1, _0xcc6ex3a - 1))
                            }
                        };
                        _0xcc6ex4b[_0x5296[71]](); _0xcc6ex62()
                    }
                } else {
                    if (!_0xcc6ex2e) {
                        if (_0xcc6ex17 > 0) {
                            _0xcc6ex21 = _0xcc6ex4b[_0x5296[85]]; _0xcc6ex4b[_0x5296[63]]()
                        }
                    } else {
                        _0xcc6ex4b[_0x5296[63]](); _0xcc6ex11[_0x5296[80]](_0x5296[63]); _0xcc6ex39 = true
                    }
                }
            }
        });

        _0xcc6ex50[_0x5296[94]](_0x5296[113], function (_0xcc6ex6a) {
            _0xcc6ex19 = true; _0xcc6ex55[_0x5296[12]][_0x5296[67]] = _0x5296[68]; _0xcc6ex61()
        });

        _0xcc6ex51[_0x5296[94]](_0x5296[113], function (_0xcc6ex6a) {
            if (_0xcc6ex4d[_0x5296[12]][_0x5296[67]] == _0x5296[68]) {
                if (_0xcc6exe) {
                    _0xcc6ex4d[_0x5296[12]][_0x5296[114]] = this[_0x5296[115]] - 50 + _0x5296[13];
                    _0xcc6ex4d[_0x5296[12]][_0x5296[116]] = this[_0x5296[117]] - 150 + _0x5296[13]
                } else {
                    _0xcc6ex4d[_0x5296[12]][_0x5296[114]] = this[_0x5296[115]] - 60 + _0x5296[13];
                    _0xcc6ex4d[_0x5296[12]][_0x5296[116]] = this[_0x5296[117]] - 120 + _0x5296[13]
                };
                _0xcc6ex4d[_0x5296[12]][_0x5296[67]] = _0x5296[109]
            } else {
                _0xcc6ex4d[_0x5296[12]][_0x5296[67]] = _0x5296[68]
            }
        });

        _0xcc6ex53[_0x5296[94]](_0x5296[113], function (_0xcc6ex6a) {
            _0xcc6ex6c()
        });

        _0xcc6ex52[_0x5296[94]](_0x5296[118], function (_0xcc6ex6a) {
            _0xcc6ex18 = false;
            var _0xcc6ex6f = (_0xcc6ex6a[_0x5296[119]] - (this[_0x5296[115]] + this[_0x5296[120]][_0x5296[115]])) / this[_0x5296[121]]; if (_0xcc6ex6f < 0) { _0xcc6ex6f = 0 };
            var _0xcc6ex70 = (_0xcc6ex23) ? 0.1 : 1; _0xcc6ex70 += _0xcc6ex1e / 1000;
            if (!_0xcc6ex2e) {
                if (_0xcc6ex17 > 0) {
                    if (_0xcc6ex6f > _0xcc6ex3d) {
                        _0xcc6ex4b[_0x5296[85]] = _0xcc6ex4b[_0x5296[82]] - _0xcc6ex70
                    } else { _0xcc6ex4b[_0x5296[85]] = _0xcc6ex15 / 1000 + _0xcc6ex6f * (_0xcc6ex4b[_0x5296[82]] - _0xcc6ex15 / 1000) }; _0xcc6ex65()
                }
            } else {
                var _0xcc6ex64;
                if (_0xcc6ex6f > _0xcc6ex3d) {
                    _0xcc6ex64 = 0
                } else {
                    _0xcc6ex64 = Math[_0x5296[66]](1, _0xcc6ex3c + _0xcc6ex6f * (_0xcc6ex3b - _0xcc6ex3c) - 1)
                };

                if (!((_0xcc6ex64 == 0) && (!_0xcc6ex35))) {
                    if ((_0xcc6ex34 == 0) && (_0xcc6ex64 == 0)) {
                        _0xcc6ex4b[_0x5296[85]] = _0xcc6ex4b[_0x5296[82]] - _0xcc6ex70
                    } else {
                        _0xcc6ex63(_0xcc6ex64)
                    }
                }
            };

            if (_0xcc6ex4b[_0x5296[86]]) {
                _0xcc6ex4b[_0x5296[71]](); _0xcc6ex62()
            }
        });

        _0xcc6ex52[_0x5296[94]](_0x5296[122], function (_0xcc6ex6a) {
            _0xcc6ex18 = true
        });

        var _0xcc6ex71;
        _0xcc6ex52[_0x5296[94]](_0x5296[111], function (_0xcc6ex6a) {
            if (!isNaN(_0xcc6ex4b[_0x5296[82]]) && !_0xcc6ex52[_0x5296[65]] && this[_0x5296[120]] != null) {
                _0xcc6ex54[_0x5296[12]][_0x5296[114]] = _0xcc6ex6a[_0x5296[119]] - 15 + _0x5296[13];
                _0xcc6ex54[_0x5296[12]][_0x5296[116]] = this[_0x5296[117]] + this[_0x5296[120]][_0x5296[117]] - 25 + _0x5296[13];
                _0xcc6ex54[_0x5296[12]][_0x5296[67]] = _0x5296[109];
                var _0xcc6ex6f = (_0xcc6ex6a[_0x5296[119]] - (this[_0x5296[115]] + this[_0x5296[120]][_0x5296[115]])) / this[_0x5296[121]];
                if (_0xcc6ex6f < 0) { _0xcc6ex6f = 0 };
                var _0xcc6ex72;
                if (!_0xcc6ex2e) {
                    _0xcc6ex72 = _0xcc6ex15 / 1000 + _0xcc6ex6f * (_0xcc6ex4b[_0x5296[82]] - _0xcc6ex15 / 1000)
                } else {
                    _0xcc6ex72 = _0xcc6ex3c + _0xcc6ex6f * (_0xcc6ex3b - _0xcc6ex3c)
                }; if (_0xcc6ex6f <= _0xcc6ex3d) {
                    _0xcc6ex54[_0x5296[28]] = _0xcc6ex5c(Math[_0x5296[57]](_0xcc6ex72));
                    _0xcc6ex54[_0x5296[12]][_0x5296[123]] = _0x5296[124]
                } else {
                    if (_0xcc6ex2e && !_0xcc6ex35) { _0xcc6ex54[_0x5296[28]] = _0x5296[125] } else { _0xcc6ex54[_0x5296[28]] = _0x5296[126] }; _0xcc6ex54[_0x5296[12]][_0x5296[123]] = _0x5296[127]
                };

                clearTimeout(_0xcc6ex71);
                _0xcc6ex71 = setTimeout(function () { _0xcc6ex54[_0x5296[12]][_0x5296[67]] = _0x5296[68] }, 1000)
            }
        });

        _0xcc6ex52[_0x5296[94]](_0x5296[110], function () {
            _0xcc6ex54[_0x5296[12]][_0x5296[67]] = _0x5296[68]
        });

        _0xcc6ex4d[_0x5296[94]](_0x5296[128], function (_0xcc6ex6a) {
            _0xcc6ex4b[_0x5296[91]] = this[_0x5296[64]]
        });

        _0xcc6ex4d[_0x5296[94]](_0x5296[110], function () {
            _0xcc6ex4d[_0x5296[12]][_0x5296[67]] = _0x5296[68]
        })
    }

    function _0xcc6ex73() {
        _0xcc6ex4c[_0x5296[12]][_0x5296[14]] = _0x5296[129];
        _0xcc6ex52[_0x5296[12]][_0x5296[11]] = _0xcc6ex4b[_0x5296[11]] - 410 + _0x5296[13];
        _0xcc6ex4f[_0x5296[12]][_0x5296[11]] = _0x5296[130];
        _0xcc6ex4f[_0x5296[12]][_0x5296[131]] = _0x5296[132];
        _0xcc6ex50[_0x5296[12]][_0x5296[11]] = _0x5296[130];
        _0xcc6ex50[_0x5296[12]][_0x5296[131]] = _0x5296[132];
        _0xcc6ex51[_0x5296[12]][_0x5296[11]] = _0x5296[130];
        _0xcc6ex51[_0x5296[12]][_0x5296[131]] = _0x5296[132];
        _0xcc6ex53[_0x5296[12]][_0x5296[11]] = _0x5296[130];
        _0xcc6ex53[_0x5296[12]][_0x5296[131]] = _0x5296[132];
        _0xcc6ex52[_0x5296[12]][_0x5296[133]] = _0x5296[134];
        _0xcc6ex4e[_0x5296[12]][_0x5296[133]] = _0x5296[135]
    }

    function _0xcc6ex74(_0xcc6ex6a) {
        _0xcc6ex10[_0x5296[82]] = 0;
        _0xcc6ex50[_0x5296[65]] = false; _0xcc6ex81()
    }

    function _0xcc6ex75(_0xcc6ex76, _0xcc6ex77) {
        if (_0xcc6ex77) {
            _0xcc6ex55[_0x5296[12]][_0x5296[116]] = -1 * _0xcc6ex4b[_0x5296[14]] + 20 + _0x5296[13]
        } else {
            if (_0xcc6exe) {
                _0xcc6ex55[_0x5296[12]][_0x5296[116]] = _0x5296[136]
            } else {
                _0xcc6ex55[_0x5296[12]][_0x5296[116]] = _0x5296[137]
            }
        };
        _0xcc6ex55[_0x5296[12]][_0x5296[114]] = _0xcc6ex4b[_0x5296[121]] - _0xcc6ex4b[_0x5296[11]] + 5 + _0x5296[13];
        _0xcc6ex55[_0x5296[28]] = _0xcc6ex76; _0xcc6ex55[_0x5296[12]][_0x5296[67]] = _0x5296[109]
    }

    function _0xcc6ex78() {
        _0xcc6ex16[_0x5296[76]] = 0;
        _0xcc6ex19 = false;
        _0xcc6ex4f[_0x5296[65]] = true;
        _0xcc6ex50[_0x5296[65]] = true;
        if (_0xcc6ex17 > 0) {
            _0xcc6ex52[_0x5296[65]] = false
        };
        _0xcc6ex10 = new window.MediaSource();
        _0xcc6ex4b[_0x5296[77]] = window[_0x5296[139]][_0x5296[138]](_0xcc6ex10);
        _0xcc6ex10[_0x5296[94]](_0x5296[140], _0xcc6ex74, false);
        if (_0xcc6ex1c) {
            _0xcc6ex4b[_0x5296[71]]()
        };
        _0xcc6ex75(_0x5296[141], false)
    }

    function _0xcc6ex79(_0xcc6ex6a) {
        if ((_0xcc6ex12 != null) && !_0xcc6ex12[_0x5296[81]]) {
            if (_0xcc6ex16[_0x5296[76]] > 0) {
                _0xcc6ex12[_0x5296[143]](_0xcc6ex16[_0x5296[142]]())
            } else {
                if (!_0xcc6ex2e) {
                    var _0xcc6ex7a = (_0xcc6ex14 - _0xcc6ex15) - _0xcc6ex17 * 1000;
                    if (_0xcc6ex7a >= 1000) { _0xcc6ex15 = _0xcc6ex15 + _0xcc6ex7a };
                    var _0xcc6ex7b = (_0xcc6ex14 - _0xcc6ex20) - _0xcc6ex17 * 1000;
                    if ((_0xcc6ex7b >= 10000) && (_0xcc6ex15 / 1000 >= 30)) {
                        _0xcc6ex12[_0x5296[83]](Math[_0x5296[66]](0, _0xcc6ex15 / 1000 - 35), _0xcc6ex15 / 1000 - 20); _0xcc6ex20 = _0xcc6ex20 + _0xcc6ex7b
                    }
                } else {
                    if (_0xcc6ex36 && _0xcc6ex20 < _0xcc6ex4b[_0x5296[82]]) {
                        _0xcc6ex12[_0x5296[83]](_0xcc6ex20, _0xcc6ex4b[_0x5296[82]]); _0xcc6ex20 = _0xcc6ex4b[_0x5296[82]]
                    } else {
                        if ((!_0xcc6ex36) && (_0xcc6ex4b[_0x5296[85]] >= 30)) {
                            var _0xcc6ex7b = (_0xcc6ex4b[_0x5296[85]] - _0xcc6ex20 - 20);
                            if (_0xcc6ex7b >= 10) {
                                _0xcc6ex12[_0x5296[83]](_0xcc6ex20, _0xcc6ex4b[_0x5296[85]] - 20);
                                _0xcc6ex20 = _0xcc6ex4b[_0x5296[85]] - 20
                            }
                        }
                    }
                }
            }
        }
    }

    function _0xcc6ex7c() {
        if (_0xcc6ex8[_0x5296[2]] === Array) {
            var _0xcc6ex7d = _0xcc6ex28 / _0xcc6ex29;
            var _0xcc6ex7e = false; if (_0xcc6ex7d > 0.05) {
                if (_0xcc6ex2a + 1 < _0xcc6ex8[_0x5296[76]]) {
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
                _0xcc6ex11[_0x5296[80]](_0x5296[144] + _0xcc6ex8[_0xcc6ex2a])
            };

            _0xcc6ex28 = 0;
            _0xcc6ex29 = 1
        }
    }

    function _0xcc6ex7f() {
        if (_0xcc6ex13 && !isNaN(_0xcc6ex4b[_0x5296[82]])) {
            if (_0xcc6ex2e && _0xcc6ex34 != 0 && !_0xcc6ex36 && !_0xcc6ex37) {
                if ((_0xcc6ex4b[_0x5296[82]] - _0xcc6ex4b[_0x5296[85]] > 20) && (!_0xcc6ex39)) {
                    _0xcc6ex11[_0x5296[80]](_0x5296[63]); _0xcc6ex39 = true
                }
            }
        }
    }

    function _0xcc6ex80() {
        if (_0xcc6ex36) {
            var _0xcc6ex5d = new Date();
            _0xcc6ex32 = _0xcc6ex5d[_0x5296[88]]();
            _0xcc6ex39 = false; _0xcc6ex36 = false;
            _0xcc6ex37 = true; _0xcc6ex38 = _0xcc6ex4b[_0x5296[82]]
        }
    }

    function _0xcc6ex81() {
        _0xcc6ex11 = new WebSocket(_0xcc6ex3e);
        _0xcc6ex11[_0x5296[145]] = _0x5296[146];
        _0xcc6ex11[_0x5296[59]] = function (_0xcc6ex82) {
            var _0xcc6ex83 = new Uint8Array(_0xcc6ex82[_0x5296[147]]);
            var _0xcc6ex84;
            if (_0xcc6ex83[0] == 0) {
                var _0xcc6ex77 = new Uint16Array(_0xcc6ex82[_0x5296[147]], 2, (_0xcc6ex82[_0x5296[147]][_0x5296[148]] - 2) / 2);
                var _0xcc6ex85 = String[_0x5296[150]][_0x5296[149]](null, _0xcc6ex77); _0xcc6ex75(_0x5296[151] + _0xcc6ex85, true);
                _0xcc6ex61();
                return
            };

            if (_0xcc6ex83[0] == 1) {
                if (!_0xcc6ex1d) { _0xcc6ex1e = 1000 };
                _0xcc6ex23 = (_0xcc6ex83[1] == 4) || (_0xcc6ex83[1] == 8) || (_0xcc6ex83[1] == 12);
                var _0xcc6ex86 = new Uint16Array(_0xcc6ex82[_0x5296[147]], 2, 8);
                if (!_0xcc6ex2e) {
                    _0xcc6ex2f = _0xcc6ex86[0];
                    _0xcc6ex33 = _0xcc6ex86[2]; var _0xcc6ex5d = new Date(); _0xcc6ex32 = _0xcc6ex5d[_0x5296[88]](); if (_0xcc6ex2f != 0) { _0xcc6ex2e = true }
                };
                if (_0xcc6ex36 || (_0xcc6ex30 == -1)) {
                    _0xcc6ex34 = _0xcc6ex86[3]
                };
                var _0xcc6ex87 = new Uint16Array(_0xcc6ex82[_0x5296[147]], 18, 1);
                var _0xcc6ex88 = _0xcc6ex87[0]; if (!_0xcc6ex13) {
                    _0xcc6ex13 = true;
                    var _0xcc6ex89 = new Uint16Array(_0xcc6ex82[_0x5296[147]], 20, _0xcc6ex88 / 2);
                    var _0xcc6ex8a = String[_0x5296[150]][_0x5296[149]](null, _0xcc6ex89);
                    var _0xcc6ex8b = new DOMParser();
                    var _0xcc6ex8c = _0xcc6ex8b[_0x5296[153]](_0xcc6ex8a, _0x5296[152]);
                    _0xcc6exf = _0xcc6ex8c[_0x5296[157]](_0x5296[156])[0][_0x5296[155]][0][_0x5296[154]];
                    _0xcc6ex12 = _0xcc6ex10[_0x5296[158]](_0xcc6exf);
                    _0xcc6ex12[_0x5296[94]](_0x5296[159], _0xcc6ex79, false)
                };

                _0xcc6ex84 = new Uint8Array(_0xcc6ex82[_0x5296[147]], 20 + _0xcc6ex88, _0xcc6ex82[_0x5296[147]][_0x5296[148]] - 20 - _0xcc6ex88)
            } else {
                if (_0xcc6ex83[0] == 2) {
                    if (_0xcc6ex83[1] == 1) {
                        _0xcc6ex28++
                    } else {
                        _0xcc6ex29++
                    };
                    _0xcc6ex14 = new DataView(_0xcc6ex82[_0x5296[147]])[_0x5296[160]](6, true);
                    _0xcc6ex84 = new Uint8Array(_0xcc6ex82[_0x5296[147]], 10, _0xcc6ex82[_0x5296[147]][_0x5296[148]] - 10);
                    if (_0xcc6ex2e) {
                        var _0xcc6ex8d = new Uint16Array(_0xcc6ex82[_0x5296[147]], 2, 2);
                        _0xcc6ex35 = (_0xcc6ex8d[0] == 0);
                        if (_0xcc6ex8d[1] != 0) {
                            if (_0xcc6ex36 || (_0xcc6ex30 == -1)) {
                                _0xcc6ex30 = _0xcc6ex8d[1]
                            }; _0xcc6ex80()
                        }
                    }
                }
            };

            if (_0xcc6ex4b[_0x5296[161]] != null) {
                _0xcc6ex75(_0x5296[162], true);
                _0xcc6ex61();
                return
            };
            if (_0xcc6ex25 && _0xcc6ex22 && _0xcc6ex1f && !_0xcc6ex23 && !_0xcc6ex36 && !_0xcc6ex37) {
                if ((_0xcc6ex4b[_0x5296[82]] - _0xcc6ex4b[_0x5296[85]] < 0.5) && !_0xcc6ex24) {
                    _0xcc6ex4f[_0x5296[65]] = true;
                    _0xcc6ex24 = true;
                    _0xcc6ex75(_0x5296[112], false);
                    _0xcc6ex4b[_0x5296[63]]()
                } else {
                    if ((_0xcc6ex4b[_0x5296[82]] - _0xcc6ex4b[_0x5296[85]] >= 5) && _0xcc6ex24) {
                        _0xcc6ex4f[_0x5296[65]] = false;
                        _0xcc6ex24 = false;
                        _0xcc6ex55[_0x5296[12]][_0x5296[67]] = _0x5296[68]; _0xcc6ex4b[_0x5296[71]]()
                    }
                }
            };
            if ((_0xcc6ex12 != null) && ((!_0xcc6ex36) || (_0xcc6ex83[0] == 1))) {
                if (_0xcc6ex12[_0x5296[81]] || _0xcc6ex16[_0x5296[76]] > 0) {
                    _0xcc6ex16[_0x5296[163]](_0xcc6ex84)
                } else {
                    _0xcc6ex12[_0x5296[143]](_0xcc6ex84)
                }
            };
            if (_0xcc6ex37) {
                var _0xcc6ex8e = (_0xcc6ex34 == 0) ? 1 : 4;
                var _0xcc6ex8f = (_0xcc6ex23) ? 0 : 0.5;
                _0xcc6ex8e += _0xcc6ex8f;
                if (_0xcc6ex4b[_0x5296[82]] - _0xcc6ex38 >= _0xcc6ex8e) {
                    _0xcc6ex37 = false;
                    _0xcc6ex4b[_0x5296[85]] = _0xcc6ex4b[_0x5296[82]] - _0xcc6ex8f;
                    _0xcc6ex31 = _0xcc6ex4b[_0x5296[85]];
                    if ((!_0xcc6ex1d || !_0xcc6ex23) && (_0xcc6ex34 == 0)) {
                        var _0xcc6ex90 = (_0xcc6ex23) ? 1500 : 1000;
                        _0xcc6ex4b[_0x5296[63]]();
                        setTimeout(function () {
                            if (!_0xcc6ex24) { _0xcc6ex4b[_0x5296[71]]() }
                        }, _0xcc6ex90)
                    };

                    _0xcc6ex65()
                }
            };
            _0xcc6ex7f();
            var _0xcc6ex91 = (_0xcc6ex23) ? 0 : 2000;
            if ((_0xcc6ex14 > _0xcc6ex1e) && (_0xcc6ex14 > _0xcc6ex91) && _0xcc6ex13 && (_0xcc6ex55[_0x5296[12]][_0x5296[67]] != _0x5296[68]) && !_0xcc6ex22) {
                _0xcc6ex55[_0x5296[12]][_0x5296[67]] = _0x5296[68]; _0xcc6ex4f[_0x5296[65]] = false;
                _0xcc6ex22 = true;
                _0xcc6ex4b[_0x5296[71]]();
                if ((_0xcc6ex8[_0x5296[2]] === Array) && (_0xcc6ex27 == null)) {
                    _0xcc6ex27 = setInterval(_0xcc6ex7c, 10000)
                };
                if (_0xcc6ex26 == null) {
                    _0xcc6ex26 = setInterval(_0xcc6ex65, 1000)
                }
            }
        };

        _0xcc6ex11[_0x5296[60]] = function () {
            _0xcc6ex61()
        };

        0xcc6ex11[_0x5296[61]] = function () {
            if (!_0xcc6ex19) {
                _0xcc6ex75(_0x5296[164], true);
                _0xcc6ex61()
            }
        }
    }

}