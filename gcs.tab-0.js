/*!
 * Remove #gcs.tab=0 from URL
 * http://webarto.com/
 * 
 * Copyright 2013 Webarto
 * Released under the MIT license
 *
 * Date: 2013-2-4
 */

window.__gcse = {
  callback: function()
  {
    if (window.location.hash)
    {
      window.location.hash = window.location.hash.replace(/&?gsc.tab=0/g, '');
      if (window.location.hash == '' && typeof window.history.replaceState == 'function')
      {
          history.replaceState(null, '', window.location.href.split('#')[0]);
      }
    }    
  }
};