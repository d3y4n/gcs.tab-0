/*!
 * Remove #gcs.tab=0 from URL
 * http://webarto.com/
 * 
 * Copyright 2013 Webarto
 * Released under the MIT license
 *
 * Date: 2013-2-4
 */

window.onload = function()
{
  if (window.location.hash == 'gcs.tab=0')
  {
    if (typeof window.history.replaceState == 'function')
    {
    window.location.hash = '#';
    history.replaceState({}, '', window.location.href.split('#')[0]);
    }
  }
    else if (window.location.hash) 
  {
    window.location.hash = window.location.hash.replace(/&?gsc.tab=0/g, '');
  }
}