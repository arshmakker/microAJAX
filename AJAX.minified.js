function loadAjax(c,b,d){var a=new XMLHttpRequest;b&&(a.callback=b);a.arguments=[];a.onload=_xhrSuccess;a.onerror=_xhrError;a.open("get",c,d);a.send(null)}function _xhrSuccess(){if(void 0!==this.response)return this.response}function _xhrError(){console.error(this.statusText)};