//Code snippets from websites with "If" loop in action

if (!document.links) {
    document.links = document.getElementsByTagName('a');
  }
  var change_link = false;
  var force = '';
  var ignore = '';

  for (var t=0; t<document.links.length; t++) {
    var all_links = document.links[t];
    change_link = false;
    
    if(document.links[t].hasAttribute('onClick') == false) {
      // forced if the address starts with http (or also https), but does not link to the current domain
      if(all_links.href.search(/^http/) != -1 && all_links.href.search('kursors.lv') == -1 && all_links.href.search(/^#/) == -1) {
        // console.log('Changed ' + all_links.href);
        change_link = true;
      }
        
      if(force != '' && all_links.href.search(force) != -1) {
        // forced
        // console.log('force ' + all_links.href);
        change_link = true;
      }
      
      if(ignore != '' && all_links.href.search(ignore) != -1) {
        // console.log('ignore ' + all_links.href);
        // ignored
        change_link = false;
      }

      if(change_link == true) {
        // console.log('Changed ' + all_links.href);
        document.links[t].setAttribute('onClick', 'javascript:window.open(\'' + all_links.href.replace(/'/g, '') + '\', \'_blank\', \'noopener\'); return false;');
        document.links[t].removeAttribute('target');
      }
    }
  }
//TVnet.lv - receptes

  var host = window.location.hostname;
    if(host.includes("apollo.lv")) {
      host = 'apollo.lv'
    } else if (host.includes("rus.tvnet.lv") || host.includes("rusklik.tvnet.lv")) {
      host = 'rus.tvnet.lv'
    } else {
      host = 'tvnet.lv'
    }