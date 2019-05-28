
function RunPlayer(VideoPlayerID, VideoWidth, VideoHeight, ServerIP, ServerPort, IsSecureWebSocket, StrOrArrayAlias, SecureToken, IsAutoPlay, IsShowControls, LocalSeekMinutes, PosterUrl,
    IsBigButton) {
    if (!('MediaSource' in window && 'WebSocket' in window)) {
        return
    };
    var mimeCodec;
    var mediaSrc = null;
    var ws = null;
    var sourceBuffer = null;
    var playerStarted = false;
    var latestTimeStamp = 0;
    var _0xcc6ex15 = 0;
    var segmentQueue = [];
    var localBufferMinutes = LocalSeekMinutes * 60;
    var _0xcc6ex18 = false;
    var _0xcc6ex19 = false;
    var camAliasName;
    var _0xcc6ex1b = 0;
    var showVideoControls = false;
    var IsChromeBrowser = false;
    var _0xcc6ex1e = 100;
    var _0xcc6ex1f = false;
    var _0xcc6ex20 = 0;
    var _0xcc6ex21 = 0;
    var _0xcc6ex22 = false;
    var realTimeStream = false;
    var _0xcc6ex24 = false;
    var _0xcc6ex25 = false;
    var _0xcc6ex26 = null;
    var _0xcc6ex27 = null;
    var bufferFillingCounter = 0;
    var bufferEmptyCounter = 1;
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

    if (StrOrArrayAlias['constructor'] === Array) {
        camAliasName = StrOrArrayAlias[0];
    }
    else {
        camAliasName = StrOrArrayAlias;
    }

    if (localBufferMinutes < 0) {
        localBufferMinutes = 0;
    }

    var _0xcc6ex3d = Math['min'](0.99, VideoWidth * 0.00004 + 0.95);

    var webSocketURL = (IsSecureWebSocket) ? 'wss://' : 'ws://';     /// URL untuk merender video via WebSocket 
    webSocketURL += ServerIP + ':' + ServerPort + '/' + camAliasName;

    if (SecureToken != '') {
        webSocketURL += '/sid:' + SecureToken;
    }
    ///console.log(webSocketURL);
    var videoPlayerElementID = document['getElementById'](VideoPlayerID);
    if (videoPlayerElementID == null) {
        return;
    }

    videoPlayerElementID['style']['width'] = VideoWidth + 'px';
    videoPlayerElementID['style']['height'] = VideoHeight + 'px';
    videoPlayerElementID['style']['position'] = 'relative';

    var _0xcc6ex40 = VideoPlayerID + '_Video';
    var _0xcc6ex41 = VideoPlayerID + '_videoControls';
    var _0xcc6ex42 = VideoPlayerID + '_volSlider';
    var _0xcc6ex43 = VideoPlayerID + '_showTime';
    var _0xcc6ex44 = VideoPlayerID + '_playpause';
    var _0xcc6ex45 = VideoPlayerID + '_stop';
    var _0xcc6ex46 = VideoPlayerID + '_volume';
    var _0xcc6ex47 = VideoPlayerID + '_progress';
    var _0xcc6ex48 = VideoPlayerID + '_fullscreen';
    var _0xcc6ex49 = VideoPlayerID + '_progressTip';
    var _0xcc6ex4a = VideoPlayerID + '_statusmessage';
    videoPlayerElementID['innerHTML'] = '<video id="' + _0xcc6ex40 + '" width="' + VideoWidth + '" height="' + VideoHeight + '" style="background-color: black"></video>' +
        '<div id="' + _0xcc6ex41 + '" class="controls" data-state="hidden">' + '<button id="' + _0xcc6ex44 +
        '" type="button" data-state="play">Play/Pause</button>' + '<button id="' + _0xcc6ex45 + '" type="button" data-state="stop">Stop</button>' + '<div id="' +
        _0xcc6ex43 + '" style="width:130px; text-align:center; margin-top: 11px; padding-left: 2px; color: #FFFFFF;">0:00 / 0:00</div>' +
        '<input type="range" id="' + _0xcc6ex47 + '" min="0" max="0" step="0.1" value="0" style="cursor:pointer; margin-top: 14px;"/>' + '<button id="' +
        _0xcc6ex46 + '" type="button" data-state="volume">Volume</button>' + '<button id="' + _0xcc6ex48 +
        '" type="button" data-state="go-fullscreen">Fullscreen</button></div>' + '<div id="' + _0xcc6ex49 +
        '" style="z-index: 100; white-space: nowrap; position: absolute; display: none; color: #FFFFFF; "></div>' + '<input type="range" id="' + _0xcc6ex42 +
        '" min="0" max="1" step="0.01" value="0.5" style="cursor:pointer; z-index: 100; position: absolute; display: none; width: 100px; height: 12px; padding:20px; -webkit-transform:rotate(270deg); -moz-transform:rotate(270deg); -o-transform:rotate(270deg); -ms-transform:rotate(90deg); transform:rotate(270deg);"/>' +
        '<div id="' + _0xcc6ex4a + '" style="z-index: 100; position: absolute; display: none; color: red; "></div>';
    var videoPlayerAttribute = document['getElementById'](_0xcc6ex40);
    var videoControlsAttribute = document['getElementById'](_0xcc6ex41);
    var timeSliderAttribute = document['getElementById'](_0xcc6ex42);
    var showTimeAttribute = document['getElementById'](_0xcc6ex43);
    var playPauseBtnAttribute = document['getElementById'](_0xcc6ex44);
    var stopBtnAttribute = document['getElementById'](_0xcc6ex45);
    var volumeBtnAttribute = document['getElementById'](_0xcc6ex46);
    var videoProgressAttribute = document['getElementById'](_0xcc6ex47);
    var fullScreenBtnAttribute = document['getElementById'](_0xcc6ex48);
    var progressTipAttribute = document['getElementById'](_0xcc6ex49);
    var statusMessageAttribute = document['getElementById'](_0xcc6ex4a);
    videoPlayerAttribute['autoplay'] = true;
    videoPlayerAttribute['controls'] = false;
    videoPlayerAttribute['poster'] = PosterUrl;

    if (IsMobile()) {
        IsAutoPlay = false; // edit agar bisa auto play dalam mobile version IsMobile()
        IsBigButton = false;
        videoPlayerAttribute['autoplay'] = false;
        showVideoControls = true;
    }
    
    //IsChromeBrowser = false;
    IsChromeBrowser = IsChrome();

    if (!IsAutoPlay) {
        IsShowControls = true;
    };

    RenderVideoControl();

    if (IsBigButton && IsShowControls) {
        //console.log(IsBigButton + " && " + IsShowControls);
        SetVideoControls();
    };

    if (IsAutoPlay) {
        //console.log("IsAutoPlay");
        IsAutoPlay = false;
        VideoPlayedState();
    };

    function IsMobile() {
        if (navigator['userAgent']['match'](/Android/i) || navigator['userAgent']['match'](/webOS/i) || navigator['userAgent']['match'](/iPhone/i) || navigator[
            'userAgent']['match'](/iPad/i) || navigator['userAgent']['match'](/iPod/i) || navigator['userAgent']['match'](/BlackBerry/i) || navigator[
                'userAgent']['match'](/Windows Phone/i)) {
            return true;
        }
        else {
            return false;
        }
    }

    function IsChrome() {
        var _0xcc6ex58 = window['chrome'],
            _0xcc6ex59 = window['navigator'],
            _0xcc6ex5a = _0xcc6ex59['vendor'],
            _0xcc6ex5b = _0xcc6ex59['userAgent']['indexOf']('Edge') > -1;
        if (_0xcc6ex58 !== null && _0xcc6ex58 !== undefined && _0xcc6ex5a === 'Google Inc.' && _0xcc6ex5b == false) {
            console.log('isChrome');
            return true;
        }
        else {
            console.log('NotChrome');
            return false;
            
        }
    }

    function _0xcc6ex5c(_0xcc6ex5d) {
        _0xcc6ex5d = Number(_0xcc6ex5d);
        var _0xcc6ex5e = Math['floor'](_0xcc6ex5d / 3600);
        var _0xcc6ex5f = Math['floor'](_0xcc6ex5d % 3600 / 60);
        var _0xcc6ex60 = Math['floor'](_0xcc6ex5d % 3600 % 60);
        return ((_0xcc6ex5e > 0 ? _0xcc6ex5e + ':' + (_0xcc6ex5f < 10 ? '0' : '') : '') + _0xcc6ex5f + ':' + (_0xcc6ex60 < 10 ? '0' : '') + _0xcc6ex60)
    }

    function closePlayback() {
        if (ws != null) {
            ws['onmessage'] = null;
            ws['onclose'] = null;
            ws['onerror'] = null;
            ws['close']();
            ws = null;
        }

        playerStarted = false;
        _0xcc6ex1f = false;
        _0xcc6ex22 = false;
        realTimeStream = false;
        _0xcc6ex24 = false;
        _0xcc6ex25 = false;
        videoPlayerAttribute['pause']();
        videoProgressAttribute['value'] = 0;
        videoProgressAttribute['disabled'] = true;
        videoProgressAttribute['max'] = 0;
        _0xcc6ex1b = 0;
        _0xcc6ex1e = 100;
        timeSliderAttribute['style']['display'] = 'none';
        showTimeAttribute['innerHTML'] = '0:00 / 0:00';
        playPauseBtnAttribute['setAttribute']('data-state', 'play');
        if (sourceBuffer != null) {
            mediaSrc['removeSourceBuffer'](sourceBuffer);
            sourceBuffer['onupdateend'] = null;
            sourceBuffer = null
        };
        if (mediaSrc != null) {
            mediaSrc['onsourceopen'] = null;
            mediaSrc = null
        };
        latestTimeStamp = 0;
        _0xcc6ex15 = 0;
        _0xcc6ex20 = 0;
        _0xcc6ex21 = 0;
        segmentQueue['length'] = 0;
        playPauseBtnAttribute['disabled'] = false;
        stopBtnAttribute['disabled'] = false;
        videoPlayerAttribute['src'] = '';
        videoPlayerAttribute['load']();
        if (_0xcc6ex27 != null) {
            clearInterval(_0xcc6ex27);
            _0xcc6ex27 = null
        };
        if (_0xcc6ex26 != null) {
            clearInterval(_0xcc6ex26);
            _0xcc6ex26 = null
        };
        bufferFillingCounter = 0;
        bufferEmptyCounter = 1;
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
            ws['send']('continue');
            _0xcc6ex39 = false
        }
    }

    function _0xcc6ex63(_0xcc6ex64) {
        _0xcc6ex36 = true;
        segmentQueue['length'] = 0;
        playPauseBtnAttribute['disabled'] = false;
        _0xcc6ex24 = false;
        statusMessageAttribute['style']['display'] = 'none';
        if ((sourceBuffer != null) && (!sourceBuffer['updating'])) {
            sourceBuffer['remove'](_0xcc6ex20, videoPlayerAttribute['duration']);
            _0xcc6ex20 = videoPlayerAttribute['duration']
        };
        ws['send']('seek:' + _0xcc6ex64)
    }

    function _0xcc6ex65() {
        if (playerStarted && !isNaN(videoPlayerAttribute['duration'])) {
            if (_0xcc6ex2e && _0xcc6ex34 != 0 && !_0xcc6ex36 && !_0xcc6ex37) {
                if ((videoPlayerAttribute['duration'] - videoPlayerAttribute['currentTime'] < 10) && (!videoPlayerAttribute['paused']) && (_0xcc6ex39)) {
                    _0xcc6ex62()
                }
            };
            if (videoPlayerAttribute['duration'] > 0) {
                _0xcc6ex1f = true
            };
            if (!_0xcc6ex2e && (videoPlayerAttribute['duration'] > _0xcc6ex1b)) {
                _0xcc6ex1b = videoPlayerAttribute['duration'];
                if (localBufferMinutes > 0 && !_0xcc6ex18) {
                    videoProgressAttribute['max'] = (_0xcc6ex1b - _0xcc6ex15 / 1000);
                    if (videoPlayerAttribute['currentTime'] > _0xcc6ex15 / 1000) {
                        videoProgressAttribute['value'] = videoPlayerAttribute['currentTime'] - _0xcc6ex15 / 1000
                    }
                };
                showTimeAttribute['innerHTML'] = _0xcc6ex5c(Math['floor'](videoPlayerAttribute['currentTime'])) + ' / ' + _0xcc6ex5c(Math['floor'](_0xcc6ex1b))
            }
            else {
                if (_0xcc6ex2e && (videoPlayerAttribute['duration'] > 0) && !_0xcc6ex36 && !_0xcc6ex37) {
                    var _0xcc6ex5d = new Date();
                    var _0xcc6ex66 = (_0xcc6ex34 == 0) ? _0xcc6ex2f : 0;
                    _0xcc6ex3a = videoPlayerAttribute['currentTime'] - _0xcc6ex31 + _0xcc6ex30 - _0xcc6ex66 + 1;
                    if (_0xcc6ex35) {
                        _0xcc6ex3b = _0xcc6ex5d['getTime']() / 1000 - _0xcc6ex32 / 1000 + _0xcc6ex30 + _0xcc6ex34 - _0xcc6ex66 + 1
                    };
                    var _0xcc6ex67;
                    if (_0xcc6ex3b >= _0xcc6ex33) {
                        _0xcc6ex67 = _0xcc6ex33
                    }
                    else {
                        _0xcc6ex67 = _0xcc6ex3b;
                    };
                    _0xcc6ex3c = Math['max'](0, _0xcc6ex3b - _0xcc6ex67);
                    showTimeAttribute['innerHTML'] = _0xcc6ex5c(_0xcc6ex3a) + ' / ' + _0xcc6ex5c(_0xcc6ex3b);
                    if (!_0xcc6ex18) {
                        videoProgressAttribute['max'] = _0xcc6ex67;
                        videoProgressAttribute['value'] = _0xcc6ex3a - _0xcc6ex3c
                    }
                }
            }
        }
    }

    function RenderVideoControl() {
        'use strict';
        videoControlsAttribute['setAttribute']('data-state', 'visible');
        var _0xcc6ex69 = videoPlayerAttribute['width'] + 'px';
        videoControlsAttribute['style']['width'] = _0xcc6ex69;
        videoProgressAttribute['disabled'] = true;
        videoProgressAttribute['style']['width'] = videoPlayerAttribute['width'] - 280 + 'px';
        timeSliderAttribute['value'] = videoPlayerAttribute['volume'];
        videoPlayerAttribute['addEventListener']('contextmenu', function (_0xcc6ex6a) {
            _0xcc6ex6a['preventDefault']()
        });

        var _0xcc6ex6b = function () {
            return !!(videoPlayerAttribute['fullScreen'] || videoPlayerAttribute['webkitIsFullScreen'] || videoPlayerAttribute['mozFullScreen'] || videoPlayerAttribute['msFullscreenElement'] ||
                videoPlayerAttribute['fullscreenElement'])
        };

        var _0xcc6ex6c = function () {
            if (_0xcc6ex6b()) {
                if (videoPlayerAttribute['exitFullscreen']) {
                    videoPlayerAttribute['exitFullscreen']();
                }
                else {
                    if (videoPlayerAttribute['mozCancelFullScreen']) {
                        videoPlayerAttribute['mozCancelFullScreen']();
                    }
                    else {
                        if (videoPlayerAttribute['webkitCancelFullScreen']) {
                            videoPlayerAttribute['webkitCancelFullScreen']();
                        }
                        else {
                            if (videoPlayerAttribute['msExitFullscreen']) {
                                videoPlayerAttribute['msExitFullscreen']();
                            }
                        }
                    }
                }
            }
            else {
                if (videoPlayerAttribute['requestFullscreen']) {
                    videoPlayerAttribute['requestFullscreen']();
                }
                else {
                    if (videoPlayerAttribute['mozRequestFullScreen']) {
                        videoPlayerAttribute['mozRequestFullScreen']();
                    }
                    else {
                        if (videoPlayerAttribute['webkitRequestFullScreen']) {
                            videoPlayerAttribute['webkitRequestFullScreen']();
                        }
                        else {
                            if (videoPlayerAttribute['msRequestFullscreen']) {
                                videoPlayerAttribute['msRequestFullscreen']();
                            }
                        }
                    }
                }
            }
        };

        var _0xcc6ex6d = function () {
            if (videoPlayerAttribute['paused']) {
                playPauseBtnAttribute['setAttribute']('data-state', 'play')
            }
            else {
                playPauseBtnAttribute['setAttribute']('data-state', 'pause')
            }
        };

        if (!IsShowControls) {
            videoControlsAttribute['style']['display'] = 'none';
        }
        else {
            var _0xcc6ex6e;

            videoPlayerAttribute['addEventListener']('mouseover', function () {
                videoControlsAttribute['style']['display'] = 'block'
            });

            videoPlayerAttribute['addEventListener']('mouseout', function () {
                videoControlsAttribute['style']['display'] = 'none'
            });

            videoControlsAttribute['addEventListener']('mouseover', function () {
                clearTimeout(_0xcc6ex6e);
                videoControlsAttribute['style']['display'] = 'block'
            });

            videoControlsAttribute['addEventListener']('mouseout', function () {
                videoControlsAttribute['style']['display'] = 'none'
            });

            videoPlayerAttribute['addEventListener']('mousemove', function () {
                videoControlsAttribute['style']['display'] = 'block';
                clearTimeout(_0xcc6ex6e);
                _0xcc6ex6e = setTimeout(function () {
                    videoControlsAttribute['style']['display'] = 'none';
                    timeSliderAttribute['style']['display'] = 'none'
                }, 3000);
            })
        };

        videoPlayerAttribute['addEventListener']('play', function () {
            _0xcc6ex25 = true;
            if (statusMessageAttribute['style']['display'] != 'none' && !_0xcc6ex22) {
                videoPlayerAttribute['pause']();
                ShowMessage('Buffering...', false);
            };
            _0xcc6ex6d();
        });

        videoPlayerAttribute['addEventListener']('pause', function () {
            _0xcc6ex6d();
        });

        playPauseBtnAttribute['addEventListener']('click', function (_0xcc6ex6a) {
            if (!playerStarted) {
                VideoPlayedState()
            }
            else {
                if (videoPlayerAttribute['paused']) {
                    if (!_0xcc6ex2e) {
                        if (_0xcc6ex21 < _0xcc6ex15 / 1000) {
                            videoPlayerAttribute['currentTime'] = _0xcc6ex15 / 1000 + 1
                        };
                        videoPlayerAttribute['play']()
                    }
                    else {
                        if (_0xcc6ex3a <= _0xcc6ex3c) {
                            _0xcc6ex63(Math['max'](1, _0xcc6ex3c - 1))
                        }
                        else {
                            if (_0xcc6ex34 == 0) {
                                _0xcc6ex63(Math['max'](1, _0xcc6ex3a - 1))
                            }
                        };
                        videoPlayerAttribute['play']();
                        _0xcc6ex62()
                    }
                }
                else {
                    if (!_0xcc6ex2e) {
                        if (localBufferMinutes > 0) {
                            _0xcc6ex21 = videoPlayerAttribute['currentTime'];
                            videoPlayerAttribute['pause']()
                        }
                    }
                    else {
                        videoPlayerAttribute['pause']();
                        ws['send']('pause');
                        _0xcc6ex39 = true
                    }
                }
            }
        });
        stopBtnAttribute['addEventListener']('click', function (_0xcc6ex6a) {
            _0xcc6ex19 = true;
            statusMessageAttribute['style']['display'] = 'none';
            closePlayback()
        });
        volumeBtnAttribute['addEventListener']('click', function (_0xcc6ex6a) {
            if (timeSliderAttribute['style']['display'] == 'none') {
                if (IsBigButton) {
                    timeSliderAttribute['style']['left'] = this['offsetLeft'] - 50 + 'px';
                    timeSliderAttribute['style']['top'] = this['offsetTop'] - 150 + 'px'
                }
                else {
                    timeSliderAttribute['style']['left'] = this['offsetLeft'] - 60 + 'px';
                    timeSliderAttribute['style']['top'] = this['offsetTop'] - 120 + 'px'
                };
                timeSliderAttribute['style']['display'] = 'block'
            }
            else {
                timeSliderAttribute['style']['display'] = 'none'
            }
        });
        fullScreenBtnAttribute['addEventListener']('click', function (_0xcc6ex6a) {
            _0xcc6ex6c()
        });
        videoProgressAttribute['addEventListener']('mouseup', function (_0xcc6ex6a) {
            _0xcc6ex18 = false;
            var _0xcc6ex6f = (_0xcc6ex6a['layerX'] - (this['offsetLeft'] + this['offsetParent']['offsetLeft'])) / this['offsetWidth'];
            if (_0xcc6ex6f < 0) {
                _0xcc6ex6f = 0
            };
            var _0xcc6ex70 = (realTimeStream) ? 0.1 : 1;
            _0xcc6ex70 += _0xcc6ex1e / 1000;
            if (!_0xcc6ex2e) {
                if (localBufferMinutes > 0) {
                    if (_0xcc6ex6f > _0xcc6ex3d) {
                        videoPlayerAttribute['currentTime'] = videoPlayerAttribute['duration'] - _0xcc6ex70
                    }
                    else {
                        videoPlayerAttribute['currentTime'] = _0xcc6ex15 / 1000 + _0xcc6ex6f * (videoPlayerAttribute['duration'] - _0xcc6ex15 / 1000)
                    };
                    _0xcc6ex65();
                }
            }
            else {
                var _0xcc6ex64;
                if (_0xcc6ex6f > _0xcc6ex3d) {
                    _0xcc6ex64 = 0
                }
                else {
                    _0xcc6ex64 = Math['max'](1, _0xcc6ex3c + _0xcc6ex6f * (_0xcc6ex3b - _0xcc6ex3c) - 1)
                };
                if (!((_0xcc6ex64 == 0) && (!_0xcc6ex35))) {
                    if ((_0xcc6ex34 == 0) && (_0xcc6ex64 == 0)) {
                        videoPlayerAttribute['currentTime'] = videoPlayerAttribute['duration'] - _0xcc6ex70
                    }
                    else {
                        _0xcc6ex63(_0xcc6ex64)
                    }
                }
            };
            if (videoPlayerAttribute['paused']) {
                videoPlayerAttribute['play']();
                _0xcc6ex62()
            }
        });
        videoProgressAttribute['addEventListener']('mousedown', function (_0xcc6ex6a) {
            _0xcc6ex18 = true
        });
        var _0xcc6ex71;
        videoProgressAttribute['addEventListener']('mousemove', function (_0xcc6ex6a) {
            if (!isNaN(videoPlayerAttribute['duration']) && !videoProgressAttribute['disabled'] && this['offsetParent'] != null) {
                progressTipAttribute['style']['left'] = _0xcc6ex6a['layerX'] - 15 + 'px';
                progressTipAttribute['style']['top'] = this['offsetTop'] + this['offsetParent']['offsetTop'] - 25 + 'px';
                progressTipAttribute['style']['display'] = 'block';
                var _0xcc6ex6f = (_0xcc6ex6a['layerX'] - (this['offsetLeft'] + this['offsetParent']['offsetLeft'])) / this['offsetWidth'];
                if (_0xcc6ex6f < 0) {
                    _0xcc6ex6f = 0
                };
                var _0xcc6ex72;
                if (!_0xcc6ex2e) {
                    _0xcc6ex72 = _0xcc6ex15 / 1000 + _0xcc6ex6f * (videoPlayerAttribute['duration'] - _0xcc6ex15 / 1000)
                }
                else {
                    _0xcc6ex72 = _0xcc6ex3c + _0xcc6ex6f * (_0xcc6ex3b - _0xcc6ex3c)
                };
                if (_0xcc6ex6f <= _0xcc6ex3d) {
                    progressTipAttribute['innerHTML'] = _0xcc6ex5c(Math['floor'](_0xcc6ex72));
                    progressTipAttribute['style']['color'] = 'white'
                }
                else {
                    if (_0xcc6ex2e && !_0xcc6ex35) {
                        progressTipAttribute['innerHTML'] = 'Broadcast ended'
                    }
                    else {
                        progressTipAttribute['innerHTML'] = 'LIVE'
                    };
                    progressTipAttribute['style']['color'] = 'red'
                };
                clearTimeout(_0xcc6ex71);
                _0xcc6ex71 = setTimeout(function () {
                    progressTipAttribute['style']['display'] = 'none'
                }, 1000)
            }
        });
        videoProgressAttribute['addEventListener']('mouseout', function () {
            progressTipAttribute['style']['display'] = 'none'
        });
        timeSliderAttribute['addEventListener']('change', function (_0xcc6ex6a) {
            videoPlayerAttribute['volume'] = this['value']
        });
        timeSliderAttribute['addEventListener']('mouseout', function () {
            timeSliderAttribute['style']['display'] = 'none'
        })
    }

    function SetVideoControls() {
        videoControlsAttribute['style']['height'] = '70px';
        videoProgressAttribute['style']['width'] = videoPlayerAttribute['width'] - 410 + 'px';
        playPauseBtnAttribute['style']['width'] = '64px';
        playPauseBtnAttribute['style']['backgroundSize'] = '64px 64px';
        stopBtnAttribute['style']['width'] = '64px';
        stopBtnAttribute['style']['backgroundSize'] = '64px 64px';
        volumeBtnAttribute['style']['width'] = '64px';
        volumeBtnAttribute['style']['backgroundSize'] = '64px 64px';
        fullScreenBtnAttribute['style']['width'] = '64px';
        fullScreenBtnAttribute['style']['backgroundSize'] = '64px 64px';
        videoProgressAttribute['style']['marginTop'] = '30px';
        showTimeAttribute['style']['marginTop'] = '27px'
    }

    function _0xcc6ex74(_0xcc6ex6a) {
        mediaSrc['duration'] = 0;
        stopBtnAttribute['disabled'] = false;
        RunWebSocket();
    }

    function ShowMessage(messages, err) {
        if (err) {
            statusMessageAttribute['style']['top'] = -1 * videoPlayerAttribute['height'] + 20 + 'px';          
        }
        else {
            if (IsBigButton) {
                statusMessageAttribute['style']['top'] = '-80px';
            }
            else {
                statusMessageAttribute['style']['top'] = '-50px';
            }
        };

        statusMessageAttribute['style']['left'] = videoPlayerAttribute['offsetWidth'] - videoPlayerAttribute['width'] + 5 + 'px';
        //console.log("offset " + videoPlayerAttribute['offsetWidth'] + " - " + videoPlayerAttribute['width'] + " + 5 px");
       // console.log(videoPlayerAttribute['offsetWidth']);
       // console.log (videoPlayerAttribute['width']);
        statusMessageAttribute['innerHTML'] = messages;
        statusMessageAttribute['style']['display'] = 'block';
    }

    function VideoPlayedState() {
        segmentQueue['length'] = 0;
        _0xcc6ex19 = false;
        playPauseBtnAttribute['disabled'] = true;
        stopBtnAttribute['disabled'] = true;

        if (localBufferMinutes > 0) {
            videoProgressAttribute['disabled'] = false;
        }

        mediaSrc = new window.MediaSource();
        videoPlayerAttribute['src'] = window['URL']['createObjectURL'](mediaSrc);
        mediaSrc['addEventListener']('sourceopen', _0xcc6ex74, false);

        if (showVideoControls) {
            //console.log("playButton");
            videoPlayerAttribute['play']();
        }
        //console.log(videoPlayerAttribute['play']());
        ShowMessage('Connecting...', false);
    }

    function _0xcc6ex79(_0xcc6ex6a) {
        if ((sourceBuffer != null) && !sourceBuffer['updating']) {
            if (segmentQueue['length'] > 0) {
                sourceBuffer['appendBuffer'](segmentQueue['shift']())
            }
            else {
                if (!_0xcc6ex2e) {
                    var _0xcc6ex7a = (latestTimeStamp - _0xcc6ex15) - localBufferMinutes * 1000;
                    if (_0xcc6ex7a >= 1000) {
                        _0xcc6ex15 = _0xcc6ex15 + _0xcc6ex7a
                    };
                    var _0xcc6ex7b = (latestTimeStamp - _0xcc6ex20) - localBufferMinutes * 1000;
                    if ((_0xcc6ex7b >= 10000) && (_0xcc6ex15 / 1000 >= 30)) {
                        sourceBuffer['remove'](Math['max'](0, _0xcc6ex15 / 1000 - 35), _0xcc6ex15 / 1000 - 20);
                        _0xcc6ex20 = _0xcc6ex20 + _0xcc6ex7b
                    }
                }
                else {
                    if (_0xcc6ex36 && _0xcc6ex20 < videoPlayerAttribute['duration']) {
                        sourceBuffer['remove'](_0xcc6ex20, videoPlayerAttribute['duration']);
                        _0xcc6ex20 = videoPlayerAttribute['duration']
                    }
                    else {
                        if ((!_0xcc6ex36) && (videoPlayerAttribute['currentTime'] >= 30)) {
                            var _0xcc6ex7b = (videoPlayerAttribute['currentTime'] - _0xcc6ex20 - 20);
                            if (_0xcc6ex7b >= 10) {
                                sourceBuffer['remove'](_0xcc6ex20, videoPlayerAttribute['currentTime'] - 20);
                                _0xcc6ex20 = videoPlayerAttribute['currentTime'] - 20
                            }
                        }
                    }
                }
            }
        }
    }

    function _0xcc6ex7c() {
        if (StrOrArrayAlias['constructor'] === Array) {
            var _0xcc6ex7d = bufferFillingCounter / bufferEmptyCounter;
            var _0xcc6ex7e = false;
            if (_0xcc6ex7d > 0.05) {
                if (_0xcc6ex2a + 1 < StrOrArrayAlias['length']) {
                    _0xcc6ex2a++;
                    _0xcc6ex7e = true;
                    _0xcc6ex2d = false
                }
            }
            else {
                if (_0xcc6ex2a - 1 >= 0) {
                    if (_0xcc6ex2d) {
                        _0xcc6ex2b = 0;
                        _0xcc6ex2c = 0
                    };
                    if (_0xcc6ex2c == 0) {
                        _0xcc6ex2a--;
                        _0xcc6ex7e = true;
                        _0xcc6ex2d = true;
                        _0xcc6ex2b++;
                        _0xcc6ex2c = _0xcc6ex2b
                    }
                    else {
                        _0xcc6ex2c--
                    }
                }
            };
            if (_0xcc6ex7e) {
                _0xcc6ex2b++;
                ws['send']('switch:' + StrOrArrayAlias[_0xcc6ex2a])
            };
            bufferFillingCounter = 0;
            bufferEmptyCounter = 1;
        }
    }

    function _0xcc6ex7f() {
        if (playerStarted && !isNaN(videoPlayerAttribute['duration'])) {
            if (_0xcc6ex2e && _0xcc6ex34 != 0 && !_0xcc6ex36 && !_0xcc6ex37) {
                if ((videoPlayerAttribute['duration'] - videoPlayerAttribute['currentTime'] > 20) && (!_0xcc6ex39)) {
                    ws['send']('pause');
                    _0xcc6ex39 = true;
                }
            }
        }
    }

    function _0xcc6ex80() {
        if (_0xcc6ex36) {
            var _0xcc6ex5d = new Date();
            _0xcc6ex32 = _0xcc6ex5d['getTime']();
            _0xcc6ex39 = false;
            _0xcc6ex36 = false;
            _0xcc6ex37 = true;
            _0xcc6ex38 = videoPlayerAttribute['duration']
        }
    }

    function RunWebSocket() {
        ws = new WebSocket(webSocketURL);
        ws['binaryType'] = 'arraybuffer';
        ws['onmessage'] = function (evt) {
            var byteView = new Uint8Array(evt['data']);
            var segment;
            if (byteView[0] == 0) {
                var err = new Uint16Array(evt['data'], 2, (evt['data']['byteLength'] - 2) / 2);
                var str = String['fromCharCode']['apply'](null, err);

                ShowMessage('Error: ' + str, true);

                closePlayback();
                return;
            }

            if (byteView[0] == 1) {  // init segment
                if (!IsChromeBrowser) {
                    _0xcc6ex1e = 1000;
                };
                realTimeStream = (byteView[1] == 4) || (byteView[1] == 8) || (byteView[1] == 12);
                var _0xcc6ex86 = new Uint16Array(evt['data'], 2, 8);

                if (!_0xcc6ex2e) {
                    _0xcc6ex2f = _0xcc6ex86[0];
                    _0xcc6ex33 = _0xcc6ex86[2];
                    var _0xcc6ex5d = new Date();
                    _0xcc6ex32 = _0xcc6ex5d['getTime']();
                    if (_0xcc6ex2f != 0) {
                        _0xcc6ex2e = true
                    }
                };
                if (_0xcc6ex36 || (_0xcc6ex30 == -1)) {
                    _0xcc6ex34 = _0xcc6ex86[3]
                };

                var metadatalenArr = new Uint16Array(evt['data'], 18, 1);
                var metadatalen = metadatalenArr[0];

                if (!playerStarted) {
                    playerStarted = true;
                    var metadataArr = new Uint16Array(evt['data'], 20, metadatalen / 2);
                    var metadataStr = String['fromCharCode']['apply'](null, metadataArr);
                    var parser = new DOMParser();
                    var metadataXML = parser['parseFromString'](metadataStr, 'text/xml');

                    mimeCodec = metadataXML['getElementsByTagName']('mimetypecodec')[0]['childNodes'][0]['nodeValue'];
                    sourceBuffer = mediaSrc['addSourceBuffer'](mimeCodec);
                    sourceBuffer['addEventListener']('updateend', _0xcc6ex79, false)
                };
                segment = new Uint8Array(evt['data'], 20 + metadatalen, evt['data']['byteLength'] - 20 - metadatalen)
            }
            else {
                if (byteView[0] == 2) { // Media Segment
                    if (byteView[1] == 1) {
                        bufferFillingCounter++;
                    }
                    else {
                        bufferEmptyCounter++;
                    }

                    latestTimeStamp = new DataView(evt['data'])['getInt32'](6, true);
                    segment = new Uint8Array(evt['data'], 10, evt['data']['byteLength'] - 10);

                    if (_0xcc6ex2e) {
                        var _0xcc6ex8d = new Uint16Array(evt['data'], 2, 2);
                        _0xcc6ex35 = (_0xcc6ex8d[0] == 0);
                        if (_0xcc6ex8d[1] != 0) {
                            if (_0xcc6ex36 || (_0xcc6ex30 == -1)) {
                                _0xcc6ex30 = _0xcc6ex8d[1]
                            };
                            _0xcc6ex80()
                        }
                    }
                }
            }

            if (videoPlayerAttribute['error'] != null) {   // STOP Playing on error
                ShowMessage('Error during playback', true);
                closePlayback();
                return;
            }

            if (_0xcc6ex25 && _0xcc6ex22 && _0xcc6ex1f && !realTimeStream && !_0xcc6ex36 && !_0xcc6ex37) {
                if ((videoPlayerAttribute['duration'] - videoPlayerAttribute['currentTime'] < 0.5) && !_0xcc6ex24) {
                    playPauseBtnAttribute['disabled'] = true;
                    _0xcc6ex24 = true;
                    ShowMessage('Buffering...', false);
                    videoPlayerAttribute['pause']();
                   // console.log(videoPlayerAttribute['play']());
                }
                else {
                    if ((videoPlayerAttribute['duration'] - videoPlayerAttribute['currentTime'] >= 5) && _0xcc6ex24) {
                        playPauseBtnAttribute['disabled'] = false;
                        _0xcc6ex24 = false;
                        statusMessageAttribute['style']['display'] = 'none';
                        videoPlayerAttribute['play']();
                    }
                }
            }

            if ((sourceBuffer != null) && ((!_0xcc6ex36) || (byteView[0] == 1))) {
                if (sourceBuffer['updating'] || segmentQueue['length'] > 0) {
                    segmentQueue['push'](segment);
                }
                else {
                    sourceBuffer['appendBuffer'](segment);
                }
            }

            if (_0xcc6ex37) {
                var _0xcc6ex8e = (_0xcc6ex34 == 0) ? 1 : 4;
                var _0xcc6ex8f = (realTimeStream) ? 0 : 0.5;
                _0xcc6ex8e += _0xcc6ex8f;
                if (videoPlayerAttribute['duration'] - _0xcc6ex38 >= _0xcc6ex8e) {
                    _0xcc6ex37 = false;
                    videoPlayerAttribute['currentTime'] = videoPlayerAttribute['duration'] - _0xcc6ex8f;
                    _0xcc6ex31 = videoPlayerAttribute['currentTime'];
                    if ((!IsChromeBrowser || !realTimeStream) && (_0xcc6ex34 == 0)) {
                        var _0xcc6ex90 = (realTimeStream) ? 1500 : 1000;
                        videoPlayerAttribute['pause']();
                        setTimeout(function () {
                            if (!_0xcc6ex24) {
                                videoPlayerAttribute['play']()
                            }
                        }, _0xcc6ex90)
                    };
                    _0xcc6ex65();
                }
            }

            _0xcc6ex7f();

            var _0xcc6ex91 = (realTimeStream) ? 0 : 2000;
            if ((latestTimeStamp > _0xcc6ex1e) && (latestTimeStamp > _0xcc6ex91) && playerStarted && (statusMessageAttribute['style']['display'] != 'none') && !_0xcc6ex22) {
                statusMessageAttribute['style']['display'] = 'none';
                playPauseBtnAttribute['disabled'] = false;
                _0xcc6ex22 = true;
                videoPlayerAttribute['play']();
                if ((StrOrArrayAlias['constructor'] === Array) && (_0xcc6ex27 == null)) {
                    _0xcc6ex27 = setInterval(_0xcc6ex7c, 10000);
                };
                if (_0xcc6ex26 == null) {
                    _0xcc6ex26 = setInterval(_0xcc6ex65, 1000);
                }
            }
        };

        ws['onclose'] = function () {
            closePlayback();
        }

        ws['onerror'] = function () {
            if (!_0xcc6ex19) {
                ShowMessage('Error: Websocket connection is closed or could not be established.', true);
                closePlayback();
            }
        }
    }
}
