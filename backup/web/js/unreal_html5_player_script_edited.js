function RunPlayer(_0xcc6ex2, _0xcc6ex3, _0xcc6ex4, _0xcc6ex5, _0xcc6ex6, _0xcc6ex7, _0xcc6ex8, _0xcc6ex9, _0xcc6exa, _0xcc6exb, _0xcc6exc, _0xcc6exd,
    _0xcc6exe) {
    if (!('MediaSource' in window && 'WebSocket' in window)) {
        return
    };
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
    if (_0xcc6ex8['constructor'] === Array) {
        _0xcc6ex1a = _0xcc6ex8[0]
    }
    else {
        _0xcc6ex1a = _0xcc6ex8
    };
    if (_0xcc6ex17 < 0) {
        _0xcc6ex17 = 0
    };
    var _0xcc6ex3d = Math['min'](0.99, _0xcc6ex3 * 0.00004 + 0.95);
    var _0xcc6ex3e = (_0xcc6ex7) ? 'wss://' : 'ws://';
    _0xcc6ex3e += _0xcc6ex5 + ':' + _0xcc6ex6 + '/' + _0xcc6ex1a;
    if (_0xcc6ex9 != '') {
        _0xcc6ex3e += '/sid:' + _0xcc6ex9
    };
    var _0xcc6ex3f = document['getElementById'](_0xcc6ex2);
    if (_0xcc6ex3f == null) {
        return
    };
    _0xcc6ex3f['style']['width'] = _0xcc6ex3 + 'px';
    _0xcc6ex3f['style']['height'] = _0xcc6ex4 + 'px';
    _0xcc6ex3f['style']['position'] = 'relative';
    var _0xcc6ex40 = _0xcc6ex2 + '_Video';
    var _0xcc6ex41 = _0xcc6ex2 + '_videoControls';
    var _0xcc6ex42 = _0xcc6ex2 + '_volSlider';
    var _0xcc6ex43 = _0xcc6ex2 + '_showTime';
    var _0xcc6ex44 = _0xcc6ex2 + '_playpause';
    var _0xcc6ex45 = _0xcc6ex2 + '_stop';
    var _0xcc6ex46 = _0xcc6ex2 + '_volume';
    var _0xcc6ex47 = _0xcc6ex2 + '_progress';
    var _0xcc6ex48 = _0xcc6ex2 + '_fullscreen';
    var _0xcc6ex49 = _0xcc6ex2 + '_progressTip';
    var _0xcc6ex4a = _0xcc6ex2 + '_statusmessage';
    _0xcc6ex3f['innerHTML'] = '<video id="' + _0xcc6ex40 + '" width="' + _0xcc6ex3 + '" height="' + _0xcc6ex4 + '" style="background-color: black"></video>' +
        '<div id="' + _0xcc6ex41 + '" class="controls" data-state="hidden">' + '<button id="' + _0xcc6ex44 +
        '" type="button" data-state="play">Play/Pause</button>' + '<button id="' + _0xcc6ex45 + '" type="button" data-state="stop">Stop</button>' + '<div id="' +
        _0xcc6ex43 + '" style="width:130px; text-align:center; margin-top: 11px; padding-left: 2px; color: #FFFFFF;">0:00 / 0:00</div>' +
        '<input type="range" id="' + _0xcc6ex47 + '" min="0" max="0" step="0.1" value="0" style="cursor:pointer; margin-top: 14px;"/>' + '<button id="' +
        _0xcc6ex46 + '" type="button" data-state="volume">Volume</button>' + '<button id="' + _0xcc6ex48 +
        '" type="button" data-state="go-fullscreen">Fullscreen</button></div>' + '<div id="' + _0xcc6ex49 +
        '" style="z-index: 100; white-space: nowrap; position: absolute; display: none; color: #FFFFFF; "></div>' + '<input type="range" id="' + _0xcc6ex42 +
        '" min="0" max="1" step="0.01" value="0.5" style="cursor:pointer; z-index: 100; position: absolute; display: none; width: 100px; height: 12px; padding:20px; -webkit-transform:rotate(270deg); -moz-transform:rotate(270deg); -o-transform:rotate(270deg); -ms-transform:rotate(90deg); transform:rotate(270deg);"/>' +
        '<div id="' + _0xcc6ex4a + '" style="z-index: 100; position: absolute; display: none; color: red; "></div>';
    var _0xcc6ex4b = document['getElementById'](_0xcc6ex40);
    var _0xcc6ex4c = document['getElementById'](_0xcc6ex41);
    var _0xcc6ex4d = document['getElementById'](_0xcc6ex42);
    var _0xcc6ex4e = document['getElementById'](_0xcc6ex43);
    var _0xcc6ex4f = document['getElementById'](_0xcc6ex44);
    var _0xcc6ex50 = document['getElementById'](_0xcc6ex45);
    var _0xcc6ex51 = document['getElementById'](_0xcc6ex46);
    var _0xcc6ex52 = document['getElementById'](_0xcc6ex47);
    var _0xcc6ex53 = document['getElementById'](_0xcc6ex48);
    var _0xcc6ex54 = document['getElementById'](_0xcc6ex49);
    var _0xcc6ex55 = document['getElementById'](_0xcc6ex4a);
    _0xcc6ex4b['autoplay'] = true;
    _0xcc6ex4b['controls'] = false;
    _0xcc6ex4b['poster'] = _0xcc6exd;
    if (_0xcc6ex56()) {
        _0xcc6exa = false;
        _0xcc6exe = true;
        _0xcc6ex4b['autoplay'] = false;
        _0xcc6ex1c = true
    };
    _0xcc6ex1d = _0xcc6ex57();
    if (!_0xcc6exa) {
        _0xcc6exb = true
    };
    _0xcc6ex68();
    if (_0xcc6exe && _0xcc6exb) {
        _0xcc6ex73()
    };
    if (_0xcc6exa) {
        _0xcc6exa = false;
        _0xcc6ex78()
    };

    function _0xcc6ex56() {
        if (navigator['userAgent']['match'](/Android/i) || navigator['userAgent']['match'](/webOS/i) || navigator['userAgent']['match'](/iPhone/i) || navigator[
            'userAgent']['match'](/iPad/i) || navigator['userAgent']['match'](/iPod/i) || navigator['userAgent']['match'](/BlackBerry/i) || navigator[
                'userAgent']['match'](/Windows Phone/i)) {
            return true
        }
        else {
            return false
        }
    }

    function _0xcc6ex57() {
        var _0xcc6ex58 = window['chrome'],
            _0xcc6ex59 = window['navigator'],
            _0xcc6ex5a = _0xcc6ex59['vendor'],
            _0xcc6ex5b = _0xcc6ex59['userAgent']['indexOf']('Edge') > -1;
        if (_0xcc6ex58 !== null && _0xcc6ex58 !== undefined && _0xcc6ex5a === 'Google Inc.' && _0xcc6ex5b == false) {
            return true
        }
        else {
            return false
        }
    }

    function _0xcc6ex5c(_0xcc6ex5d) {
        _0xcc6ex5d = Number(_0xcc6ex5d);
        var _0xcc6ex5e = Math['floor'](_0xcc6ex5d / 3600);
        var _0xcc6ex5f = Math['floor'](_0xcc6ex5d % 3600 / 60);
        var _0xcc6ex60 = Math['floor'](_0xcc6ex5d % 3600 % 60);
        return ((_0xcc6ex5e > 0 ? _0xcc6ex5e + ':' + (_0xcc6ex5f < 10 ? '0' : '') : '') + _0xcc6ex5f + ':' + (_0xcc6ex60 < 10 ? '0' : '') + _0xcc6ex60)
    }

    function _0xcc6ex61() {
        if (_0xcc6ex11 != null) {
            _0xcc6ex11['onmessage'] = null;
            _0xcc6ex11['onclose'] = null;
            _0xcc6ex11['onerror'] = null;
            _0xcc6ex11['close']();
            _0xcc6ex11 = null
        };
        _0xcc6ex13 = false;
        _0xcc6ex1f = false;
        _0xcc6ex22 = false;
        _0xcc6ex23 = false;
        _0xcc6ex24 = false;
        _0xcc6ex25 = false;
        _0xcc6ex4b['pause']();
        _0xcc6ex52['value'] = 0;
        _0xcc6ex52['disabled'] = true;
        _0xcc6ex52['max'] = 0;
        _0xcc6ex1b = 0;
        _0xcc6ex1e = 100;
        _0xcc6ex4d['style']['display'] = 'none';
        _0xcc6ex4e['innerHTML'] = '0:00 / 0:00';
        _0xcc6ex4f['setAttribute']('data-state', 'play');
        if (_0xcc6ex12 != null) {
            _0xcc6ex10['removeSourceBuffer'](_0xcc6ex12);
            _0xcc6ex12['onupdateend'] = null;
            _0xcc6ex12 = null
        };
        if (_0xcc6ex10 != null) {
            _0xcc6ex10['onsourceopen'] = null;
            _0xcc6ex10 = null
        };
        _0xcc6ex14 = 0;
        _0xcc6ex15 = 0;
        _0xcc6ex20 = 0;
        _0xcc6ex21 = 0;
        _0xcc6ex16['length'] = 0;
        _0xcc6ex4f['disabled'] = false;
        _0xcc6ex50['disabled'] = false;
        _0xcc6ex4b['src'] = '';
        _0xcc6ex4b['load']();
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
            _0xcc6ex11['send']('continue');
            _0xcc6ex39 = false
        }
    }

    function _0xcc6ex63(_0xcc6ex64) {
        _0xcc6ex36 = true;
        _0xcc6ex16['length'] = 0;
        _0xcc6ex4f['disabled'] = false;
        _0xcc6ex24 = false;
        _0xcc6ex55['style']['display'] = 'none';
        if ((_0xcc6ex12 != null) && (!_0xcc6ex12['updating'])) {
            _0xcc6ex12['remove'](_0xcc6ex20, _0xcc6ex4b['duration']);
            _0xcc6ex20 = _0xcc6ex4b['duration']
        };
        _0xcc6ex11['send']('seek:' + _0xcc6ex64)
    }

    function _0xcc6ex65() {
        if (_0xcc6ex13 && !isNaN(_0xcc6ex4b['duration'])) {
            if (_0xcc6ex2e && _0xcc6ex34 != 0 && !_0xcc6ex36 && !_0xcc6ex37) {
                if ((_0xcc6ex4b['duration'] - _0xcc6ex4b['currentTime'] < 10) && (!_0xcc6ex4b['paused']) && (_0xcc6ex39)) {
                    _0xcc6ex62()
                }
            };
            if (_0xcc6ex4b['duration'] > 0) {
                _0xcc6ex1f = true
            };
            if (!_0xcc6ex2e && (_0xcc6ex4b['duration'] > _0xcc6ex1b)) {
                _0xcc6ex1b = _0xcc6ex4b['duration'];
                if (_0xcc6ex17 > 0 && !_0xcc6ex18) {
                    _0xcc6ex52['max'] = (_0xcc6ex1b - _0xcc6ex15 / 1000);
                    if (_0xcc6ex4b['currentTime'] > _0xcc6ex15 / 1000) {
                        _0xcc6ex52['value'] = _0xcc6ex4b['currentTime'] - _0xcc6ex15 / 1000
                    }
                };
                _0xcc6ex4e['innerHTML'] = _0xcc6ex5c(Math['floor'](_0xcc6ex4b['currentTime'])) + ' / ' + _0xcc6ex5c(Math['floor'](_0xcc6ex1b))
            }
            else {
                if (_0xcc6ex2e && (_0xcc6ex4b['duration'] > 0) && !_0xcc6ex36 && !_0xcc6ex37) {
                    var _0xcc6ex5d = new Date();
                    var _0xcc6ex66 = (_0xcc6ex34 == 0) ? _0xcc6ex2f : 0;
                    _0xcc6ex3a = _0xcc6ex4b['currentTime'] - _0xcc6ex31 + _0xcc6ex30 - _0xcc6ex66 + 1;
                    if (_0xcc6ex35) {
                        _0xcc6ex3b = _0xcc6ex5d['getTime']() / 1000 - _0xcc6ex32 / 1000 + _0xcc6ex30 + _0xcc6ex34 - _0xcc6ex66 + 1
                    };
                    var _0xcc6ex67;
                    if (_0xcc6ex3b >= _0xcc6ex33) {
                        _0xcc6ex67 = _0xcc6ex33
                    }
                    else {
                        _0xcc6ex67 = _0xcc6ex3b
                    };
                    _0xcc6ex3c = Math['max'](0, _0xcc6ex3b - _0xcc6ex67);
                    _0xcc6ex4e['innerHTML'] = _0xcc6ex5c(_0xcc6ex3a) + ' / ' + _0xcc6ex5c(_0xcc6ex3b);
                    if (!_0xcc6ex18) {
                        _0xcc6ex52['max'] = _0xcc6ex67;
                        _0xcc6ex52['value'] = _0xcc6ex3a - _0xcc6ex3c
                    }
                }
            }
        }
    }

    function _0xcc6ex68() {
        'use strict';
        _0xcc6ex4c['setAttribute']('data-state', 'visible');
        var _0xcc6ex69 = _0xcc6ex4b['width'] + 'px';
        _0xcc6ex4c['style']['width'] = _0xcc6ex69;
        _0xcc6ex52['disabled'] = true;
        _0xcc6ex52['style']['width'] = _0xcc6ex4b['width'] - 280 + 'px';
        _0xcc6ex4d['value'] = _0xcc6ex4b['volume'];
        _0xcc6ex4b['addEventListener']('contextmenu', function (_0xcc6ex6a) {
            _0xcc6ex6a['preventDefault']()
        });
        var _0xcc6ex6b = function () {
            return !!(_0xcc6ex4b['fullScreen'] || _0xcc6ex4b['webkitIsFullScreen'] || _0xcc6ex4b['mozFullScreen'] || _0xcc6ex4b['msFullscreenElement'] ||
                _0xcc6ex4b['fullscreenElement'])
        };
        var _0xcc6ex6c = function () {
            if (_0xcc6ex6b()) {
                if (_0xcc6ex4b['exitFullscreen']) {
                    _0xcc6ex4b['exitFullscreen']()
                }
                else {
                    if (_0xcc6ex4b['mozCancelFullScreen']) {
                        _0xcc6ex4b['mozCancelFullScreen']()
                    }
                    else {
                        if (_0xcc6ex4b['webkitCancelFullScreen']) {
                            _0xcc6ex4b['webkitCancelFullScreen']()
                        }
                        else {
                            if (_0xcc6ex4b['msExitFullscreen']) {
                                _0xcc6ex4b['msExitFullscreen']()
                            }
                        }
                    }
                }
            }
            else {
                if (_0xcc6ex4b['requestFullscreen']) {
                    _0xcc6ex4b['requestFullscreen']()
                }
                else {
                    if (_0xcc6ex4b['mozRequestFullScreen']) {
                        _0xcc6ex4b['mozRequestFullScreen']()
                    }
                    else {
                        if (_0xcc6ex4b['webkitRequestFullScreen']) {
                            _0xcc6ex4b['webkitRequestFullScreen']()
                        }
                        else {
                            if (_0xcc6ex4b['msRequestFullscreen']) {
                                _0xcc6ex4b['msRequestFullscreen']()
                            }
                        }
                    }
                }
            }
        };
        var _0xcc6ex6d = function () {
            if (_0xcc6ex4b['paused']) {
                _0xcc6ex4f['setAttribute']('data-state', 'play')
            }
            else {
                _0xcc6ex4f['setAttribute']('data-state', 'pause')
            }
        };
        if (!_0xcc6exb) {
            _0xcc6ex4c['style']['display'] = 'none'
        }
        else {
            var _0xcc6ex6e;
            _0xcc6ex4b['addEventListener']('mouseover', function () {
                _0xcc6ex4c['style']['display'] = 'block'
            });
            _0xcc6ex4b['addEventListener']('mouseout', function () {
                _0xcc6ex4c['style']['display'] = 'none'
            });
            _0xcc6ex4c['addEventListener']('mouseover', function () {
                clearTimeout(_0xcc6ex6e);
                _0xcc6ex4c['style']['display'] = 'block'
            });
            _0xcc6ex4c['addEventListener']('mouseout', function () {
                _0xcc6ex4c['style']['display'] = 'none'
            });
            _0xcc6ex4b['addEventListener']('mousemove', function () {
                _0xcc6ex4c['style']['display'] = 'block';
                clearTimeout(_0xcc6ex6e);
                _0xcc6ex6e = setTimeout(function () {
                    _0xcc6ex4c['style']['display'] = 'none';
                    _0xcc6ex4d['style']['display'] = 'none'
                }, 3000)
            })
        };
        _0xcc6ex4b['addEventListener']('play', function () {
            _0xcc6ex25 = true;
            if (_0xcc6ex55['style']['display'] != 'none' && !_0xcc6ex22) {
                _0xcc6ex4b['pause']();
                _0xcc6ex75('Buffering...', false)
            };
            _0xcc6ex6d()
        });
        _0xcc6ex4b['addEventListener']('pause', function () {
            _0xcc6ex6d()
        });
        _0xcc6ex4f['addEventListener']('click', function (_0xcc6ex6a) {
            if (!_0xcc6ex13) {
                _0xcc6ex78()
            }
            else {
                if (_0xcc6ex4b['paused']) {
                    if (!_0xcc6ex2e) {
                        if (_0xcc6ex21 < _0xcc6ex15 / 1000) {
                            _0xcc6ex4b['currentTime'] = _0xcc6ex15 / 1000 + 1
                        };
                        _0xcc6ex4b['play']()
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
                        _0xcc6ex4b['play']();
                        _0xcc6ex62()
                    }
                }
                else {
                    if (!_0xcc6ex2e) {
                        if (_0xcc6ex17 > 0) {
                            _0xcc6ex21 = _0xcc6ex4b['currentTime'];
                            _0xcc6ex4b['pause']()
                        }
                    }
                    else {
                        _0xcc6ex4b['pause']();
                        _0xcc6ex11['send']('pause');
                        _0xcc6ex39 = true
                    }
                }
            }
        });
        _0xcc6ex50['addEventListener']('click', function (_0xcc6ex6a) {
            _0xcc6ex19 = true;
            _0xcc6ex55['style']['display'] = 'none';
            _0xcc6ex61()
        });
        _0xcc6ex51['addEventListener']('click', function (_0xcc6ex6a) {
            if (_0xcc6ex4d['style']['display'] == 'none') {
                if (_0xcc6exe) {
                    _0xcc6ex4d['style']['left'] = this['offsetLeft'] - 50 + 'px';
                    _0xcc6ex4d['style']['top'] = this['offsetTop'] - 150 + 'px'
                }
                else {
                    _0xcc6ex4d['style']['left'] = this['offsetLeft'] - 60 + 'px';
                    _0xcc6ex4d['style']['top'] = this['offsetTop'] - 120 + 'px'
                };
                _0xcc6ex4d['style']['display'] = 'block'
            }
            else {
                _0xcc6ex4d['style']['display'] = 'none'
            }
        });
        _0xcc6ex53['addEventListener']('click', function (_0xcc6ex6a) {
            _0xcc6ex6c()
        });
        _0xcc6ex52['addEventListener']('mouseup', function (_0xcc6ex6a) {
            _0xcc6ex18 = false;
            var _0xcc6ex6f = (_0xcc6ex6a['layerX'] - (this['offsetLeft'] + this['offsetParent']['offsetLeft'])) / this['offsetWidth'];
            if (_0xcc6ex6f < 0) {
                _0xcc6ex6f = 0
            };
            var _0xcc6ex70 = (_0xcc6ex23) ? 0.1 : 1;
            _0xcc6ex70 += _0xcc6ex1e / 1000;
            if (!_0xcc6ex2e) {
                if (_0xcc6ex17 > 0) {
                    if (_0xcc6ex6f > _0xcc6ex3d) {
                        _0xcc6ex4b['currentTime'] = _0xcc6ex4b['duration'] - _0xcc6ex70
                    }
                    else {
                        _0xcc6ex4b['currentTime'] = _0xcc6ex15 / 1000 + _0xcc6ex6f * (_0xcc6ex4b['duration'] - _0xcc6ex15 / 1000)
                    };
                    _0xcc6ex65()
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
                        _0xcc6ex4b['currentTime'] = _0xcc6ex4b['duration'] - _0xcc6ex70
                    }
                    else {
                        _0xcc6ex63(_0xcc6ex64)
                    }
                }
            };
            if (_0xcc6ex4b['paused']) {
                _0xcc6ex4b['play']();
                _0xcc6ex62()
            }
        });
        _0xcc6ex52['addEventListener']('mousedown', function (_0xcc6ex6a) {
            _0xcc6ex18 = true
        });
        var _0xcc6ex71;
        _0xcc6ex52['addEventListener']('mousemove', function (_0xcc6ex6a) {
            if (!isNaN(_0xcc6ex4b['duration']) && !_0xcc6ex52['disabled'] && this['offsetParent'] != null) {
                _0xcc6ex54['style']['left'] = _0xcc6ex6a['layerX'] - 15 + 'px';
                _0xcc6ex54['style']['top'] = this['offsetTop'] + this['offsetParent']['offsetTop'] - 25 + 'px';
                _0xcc6ex54['style']['display'] = 'block';
                var _0xcc6ex6f = (_0xcc6ex6a['layerX'] - (this['offsetLeft'] + this['offsetParent']['offsetLeft'])) / this['offsetWidth'];
                if (_0xcc6ex6f < 0) {
                    _0xcc6ex6f = 0
                };
                var _0xcc6ex72;
                if (!_0xcc6ex2e) {
                    _0xcc6ex72 = _0xcc6ex15 / 1000 + _0xcc6ex6f * (_0xcc6ex4b['duration'] - _0xcc6ex15 / 1000)
                }
                else {
                    _0xcc6ex72 = _0xcc6ex3c + _0xcc6ex6f * (_0xcc6ex3b - _0xcc6ex3c)
                };
                if (_0xcc6ex6f <= _0xcc6ex3d) {
                    _0xcc6ex54['innerHTML'] = _0xcc6ex5c(Math['floor'](_0xcc6ex72));
                    _0xcc6ex54['style']['color'] = 'white'
                }
                else {
                    if (_0xcc6ex2e && !_0xcc6ex35) {
                        _0xcc6ex54['innerHTML'] = 'Broadcast ended'
                    }
                    else {
                        _0xcc6ex54['innerHTML'] = 'LIVE'
                    };
                    _0xcc6ex54['style']['color'] = 'red'
                };
                clearTimeout(_0xcc6ex71);
                _0xcc6ex71 = setTimeout(function () {
                    _0xcc6ex54['style']['display'] = 'none'
                }, 1000)
            }
        });
        _0xcc6ex52['addEventListener']('mouseout', function () {
            _0xcc6ex54['style']['display'] = 'none'
        });
        _0xcc6ex4d['addEventListener']('change', function (_0xcc6ex6a) {
            _0xcc6ex4b['volume'] = this['value']
        });
        _0xcc6ex4d['addEventListener']('mouseout', function () {
            _0xcc6ex4d['style']['display'] = 'none'
        })
    }

    function _0xcc6ex73() {
        _0xcc6ex4c['style']['height'] = '70px';
        _0xcc6ex52['style']['width'] = _0xcc6ex4b['width'] - 410 + 'px';
        _0xcc6ex4f['style']['width'] = '64px';
        _0xcc6ex4f['style']['backgroundSize'] = '64px 64px';
        _0xcc6ex50['style']['width'] = '64px';
        _0xcc6ex50['style']['backgroundSize'] = '64px 64px';
        _0xcc6ex51['style']['width'] = '64px';
        _0xcc6ex51['style']['backgroundSize'] = '64px 64px';
        _0xcc6ex53['style']['width'] = '64px';
        _0xcc6ex53['style']['backgroundSize'] = '64px 64px';
        _0xcc6ex52['style']['marginTop'] = '30px';
        _0xcc6ex4e['style']['marginTop'] = '27px'
    }

    function _0xcc6ex74(_0xcc6ex6a) {
        _0xcc6ex10['duration'] = 0;
        _0xcc6ex50['disabled'] = false;
        _0xcc6ex81()
    }

    function _0xcc6ex75(_0xcc6ex76, _0xcc6ex77) {
        if (_0xcc6ex77) {
            _0xcc6ex55['style']['top'] = -1 * _0xcc6ex4b['height'] + 20 + 'px'
        }
        else {
            if (_0xcc6exe) {
                _0xcc6ex55['style']['top'] = '-80px'
            }
            else {
                _0xcc6ex55['style']['top'] = '-50px'
            }
        };
        _0xcc6ex55['style']['left'] = _0xcc6ex4b['offsetWidth'] - _0xcc6ex4b['width'] + 5 + 'px';
        _0xcc6ex55['innerHTML'] = _0xcc6ex76;
        _0xcc6ex55['style']['display'] = 'block'
    }

    function _0xcc6ex78() {
        _0xcc6ex16['length'] = 0;
        _0xcc6ex19 = false;
        _0xcc6ex4f['disabled'] = true;
        _0xcc6ex50['disabled'] = true;
        if (_0xcc6ex17 > 0) {
            _0xcc6ex52['disabled'] = false
        };
        _0xcc6ex10 = new window.MediaSource();
        _0xcc6ex4b['src'] = window['URL']['createObjectURL'](_0xcc6ex10);
        _0xcc6ex10['addEventListener']('sourceopen', _0xcc6ex74, false);
        if (_0xcc6ex1c) {
            _0xcc6ex4b['play']()
        };
        _0xcc6ex75('Connecting...', false)
    }

    function _0xcc6ex79(_0xcc6ex6a) {
        if ((_0xcc6ex12 != null) && !_0xcc6ex12['updating']) {
            if (_0xcc6ex16['length'] > 0) {
                _0xcc6ex12['appendBuffer'](_0xcc6ex16['shift']())
            }
            else {
                if (!_0xcc6ex2e) {
                    var _0xcc6ex7a = (_0xcc6ex14 - _0xcc6ex15) - _0xcc6ex17 * 1000;
                    if (_0xcc6ex7a >= 1000) {
                        _0xcc6ex15 = _0xcc6ex15 + _0xcc6ex7a
                    };
                    var _0xcc6ex7b = (_0xcc6ex14 - _0xcc6ex20) - _0xcc6ex17 * 1000;
                    if ((_0xcc6ex7b >= 10000) && (_0xcc6ex15 / 1000 >= 30)) {
                        _0xcc6ex12['remove'](Math['max'](0, _0xcc6ex15 / 1000 - 35), _0xcc6ex15 / 1000 - 20);
                        _0xcc6ex20 = _0xcc6ex20 + _0xcc6ex7b
                    }
                }
                else {
                    if (_0xcc6ex36 && _0xcc6ex20 < _0xcc6ex4b['duration']) {
                        _0xcc6ex12['remove'](_0xcc6ex20, _0xcc6ex4b['duration']);
                        _0xcc6ex20 = _0xcc6ex4b['duration']
                    }
                    else {
                        if ((!_0xcc6ex36) && (_0xcc6ex4b['currentTime'] >= 30)) {
                            var _0xcc6ex7b = (_0xcc6ex4b['currentTime'] - _0xcc6ex20 - 20);
                            if (_0xcc6ex7b >= 10) {
                                _0xcc6ex12['remove'](_0xcc6ex20, _0xcc6ex4b['currentTime'] - 20);
                                _0xcc6ex20 = _0xcc6ex4b['currentTime'] - 20
                            }
                        }
                    }
                }
            }
        }
    }

    function _0xcc6ex7c() {
        if (_0xcc6ex8['constructor'] === Array) {
            var _0xcc6ex7d = _0xcc6ex28 / _0xcc6ex29;
            var _0xcc6ex7e = false;
            if (_0xcc6ex7d > 0.05) {
                if (_0xcc6ex2a + 1 < _0xcc6ex8['length']) {
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
                _0xcc6ex11['send']('switch:' + _0xcc6ex8[_0xcc6ex2a])
            };
            _0xcc6ex28 = 0;
            _0xcc6ex29 = 1
        }
    }

    function _0xcc6ex7f() {
        if (_0xcc6ex13 && !isNaN(_0xcc6ex4b['duration'])) {
            if (_0xcc6ex2e && _0xcc6ex34 != 0 && !_0xcc6ex36 && !_0xcc6ex37) {
                if ((_0xcc6ex4b['duration'] - _0xcc6ex4b['currentTime'] > 20) && (!_0xcc6ex39)) {
                    _0xcc6ex11['send']('pause');
                    _0xcc6ex39 = true
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
            _0xcc6ex38 = _0xcc6ex4b['duration']
        }
    }

    function _0xcc6ex81() {
        _0xcc6ex11 = new WebSocket(_0xcc6ex3e);
        _0xcc6ex11['binaryType'] = 'arraybuffer';
        _0xcc6ex11['onmessage'] = function (_0xcc6ex82) {
            var _0xcc6ex83 = new Uint8Array(_0xcc6ex82['data']);
            var _0xcc6ex84;
            if (_0xcc6ex83[0] == 0) {
                var _0xcc6ex77 = new Uint16Array(_0xcc6ex82['data'], 2, (_0xcc6ex82['data']['byteLength'] - 2) / 2);
                var _0xcc6ex85 = String['fromCharCode']['apply'](null, _0xcc6ex77);
                _0xcc6ex75('Error: ' + _0xcc6ex85, true);
                _0xcc6ex61();
                return
            };
            if (_0xcc6ex83[0] == 1) {
                if (!_0xcc6ex1d) {
                    _0xcc6ex1e = 1000
                };
                _0xcc6ex23 = (_0xcc6ex83[1] == 4) || (_0xcc6ex83[1] == 8) || (_0xcc6ex83[1] == 12);
                var _0xcc6ex86 = new Uint16Array(_0xcc6ex82['data'], 2, 8);
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
                var _0xcc6ex87 = new Uint16Array(_0xcc6ex82['data'], 18, 1);
                var _0xcc6ex88 = _0xcc6ex87[0];
                if (!_0xcc6ex13) {
                    _0xcc6ex13 = true;
                    var _0xcc6ex89 = new Uint16Array(_0xcc6ex82['data'], 20, _0xcc6ex88 / 2);
                    var _0xcc6ex8a = String['fromCharCode']['apply'](null, _0xcc6ex89);
                    var _0xcc6ex8b = new DOMParser();
                    var _0xcc6ex8c = _0xcc6ex8b['parseFromString'](_0xcc6ex8a, 'text/xml');
                    _0xcc6exf = _0xcc6ex8c['getElementsByTagName']('mimetypecodec')[0]['childNodes'][0]['nodeValue'];
                    _0xcc6ex12 = _0xcc6ex10['addSourceBuffer'](_0xcc6exf);
                    _0xcc6ex12['addEventListener']('updateend', _0xcc6ex79, false)
                };
                _0xcc6ex84 = new Uint8Array(_0xcc6ex82['data'], 20 + _0xcc6ex88, _0xcc6ex82['data']['byteLength'] - 20 - _0xcc6ex88)
            }
            else {
                if (_0xcc6ex83[0] == 2) {
                    if (_0xcc6ex83[1] == 1) {
                        _0xcc6ex28++
                    }
                    else {
                        _0xcc6ex29++
                    };
                    _0xcc6ex14 = new DataView(_0xcc6ex82['data'])['getInt32'](6, true);
                    _0xcc6ex84 = new Uint8Array(_0xcc6ex82['data'], 10, _0xcc6ex82['data']['byteLength'] - 10);
                    if (_0xcc6ex2e) {
                        var _0xcc6ex8d = new Uint16Array(_0xcc6ex82['data'], 2, 2);
                        _0xcc6ex35 = (_0xcc6ex8d[0] == 0);
                        if (_0xcc6ex8d[1] != 0) {
                            if (_0xcc6ex36 || (_0xcc6ex30 == -1)) {
                                _0xcc6ex30 = _0xcc6ex8d[1]
                            };
                            _0xcc6ex80()
                        }
                    }
                }
            };
            if (_0xcc6ex4b['error'] != null) {
                _0xcc6ex75('Error during playback', true);
                _0xcc6ex61();
                return
            };
            if (_0xcc6ex25 && _0xcc6ex22 && _0xcc6ex1f && !_0xcc6ex23 && !_0xcc6ex36 && !_0xcc6ex37) {
                if ((_0xcc6ex4b['duration'] - _0xcc6ex4b['currentTime'] < 0.5) && !_0xcc6ex24) {
                    _0xcc6ex4f['disabled'] = true;
                    _0xcc6ex24 = true;
                    _0xcc6ex75('Buffering...', false);
                    _0xcc6ex4b['pause']()
                }
                else {
                    if ((_0xcc6ex4b['duration'] - _0xcc6ex4b['currentTime'] >= 5) && _0xcc6ex24) {
                        _0xcc6ex4f['disabled'] = false;
                        _0xcc6ex24 = false;
                        _0xcc6ex55['style']['display'] = 'none';
                        _0xcc6ex4b['play']()
                    }
                }
            };
            if ((_0xcc6ex12 != null) && ((!_0xcc6ex36) || (_0xcc6ex83[0] == 1))) {
                if (_0xcc6ex12['updating'] || _0xcc6ex16['length'] > 0) {
                    _0xcc6ex16['push'](_0xcc6ex84)
                }
                else {
                    _0xcc6ex12['appendBuffer'](_0xcc6ex84)
                }
            };
            if (_0xcc6ex37) {
                var _0xcc6ex8e = (_0xcc6ex34 == 0) ? 1 : 4;
                var _0xcc6ex8f = (_0xcc6ex23) ? 0 : 0.5;
                _0xcc6ex8e += _0xcc6ex8f;
                if (_0xcc6ex4b['duration'] - _0xcc6ex38 >= _0xcc6ex8e) {
                    _0xcc6ex37 = false;
                    _0xcc6ex4b['currentTime'] = _0xcc6ex4b['duration'] - _0xcc6ex8f;
                    _0xcc6ex31 = _0xcc6ex4b['currentTime'];
                    if ((!_0xcc6ex1d || !_0xcc6ex23) && (_0xcc6ex34 == 0)) {
                        var _0xcc6ex90 = (_0xcc6ex23) ? 1500 : 1000;
                        _0xcc6ex4b['pause']();
                        setTimeout(function () {
                            if (!_0xcc6ex24) {
                                _0xcc6ex4b['play']()
                            }
                        }, _0xcc6ex90)
                    };
                    _0xcc6ex65()
                }
            };
            _0xcc6ex7f();
            var _0xcc6ex91 = (_0xcc6ex23) ? 0 : 2000;
            if ((_0xcc6ex14 > _0xcc6ex1e) && (_0xcc6ex14 > _0xcc6ex91) && _0xcc6ex13 && (_0xcc6ex55['style']['display'] != 'none') && !_0xcc6ex22) {
                _0xcc6ex55['style']['display'] = 'none';
                _0xcc6ex4f['disabled'] = false;
                _0xcc6ex22 = true;
                _0xcc6ex4b['play']();
                if ((_0xcc6ex8['constructor'] === Array) && (_0xcc6ex27 == null)) {
                    _0xcc6ex27 = setInterval(_0xcc6ex7c, 10000)
                };
                if (_0xcc6ex26 == null) {
                    _0xcc6ex26 = setInterval(_0xcc6ex65, 1000)
                }
            }
        };
        _0xcc6ex11['onclose'] = function () {
            _0xcc6ex61()
        };
        _0xcc6ex11['onerror'] = function () {
            if (!_0xcc6ex19) {
                _0xcc6ex75('Error: Websocket connection is closed or could not be established.', true);
                _0xcc6ex61()
            }
        }
    }
}
