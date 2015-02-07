/** 
 * This file makes AJAX calls easier by defining an interface for the calls.
 * The value returns is as is returned from the call to the URL/file
 * hence has to be sanitized and parsed as needed by the caller
 */
 "use strict";
/**
 * create and send the XMLHttpRequest object
 * @param  {string} sUrl - URL to load
 * @param  {function} fCallback - function to be used as callback
 * @param  {boolean}  async - should the request be run in sync mode or async  
 */
 function loadAjax (sURL, fCallback, async) {
  //
  var oReq = new XMLHttpRequest();
  if (fCallback){
    oReq.callback = fCallback;  
  }  
  oReq.arguments =[];  
  oReq.onload = _xhrSuccess;
  oReq.onerror = _xhrError;
  oReq.open("get", sURL, async);
  oReq.send(null);
}

/**
 * Returns back the result of successfull AJAX call to the callbak function
 * @return {string|number|object|function}
 */
 function _xhrSuccess () { 
  if (this.response!==undefined){      
    return this.response;
  }
}


/**
 * Output the error in the console thrown by the ajax call 
 */
 function _xhrError () { 
  console.error(this.statusText); 
}
