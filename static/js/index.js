exports.aceGetFilterStack = function(name, context){
  return [
    context.linestylefilter.getRegexpFilter(
      new RegExp("http.+((\.png)|(\.jpg))", "g"), 'image')
  ];
}


exports.aceCreateDomLine = function(name, args){
  if (args.cls.indexOf('image') > -1) { // If it's an image
    var src;
    cls = args.cls.replace(/(^| )image:(\S+)/g, function(x0, space, image) {
      src = image;
      return space + "image image_" + image;
    });

   return [{
     cls: cls,
     extraOpenTags: '<img contenteditable=false unselectable=on src="' + src + '" style="max-width:100%" />',
     extraCloseTags:''
   }];
  }

}



exports.postAceInit = function(){
// left in for posterity but none of this will stop firefox from putting it's claws into object resizing.

// cleanish javascript approach
var iframe = getElementByIdInFrames("innerdocbody", window);
$(iframe).webkitimageresize().webkittableresize().webkittdresize();
// returns:  Cannot read property 'length' of null 

// kinda ugly jquery approach
$('iframe.[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").webkitimageresize().webkittableresize().webkittdresize();
// returns:  Cannot read property 'length' of null

/* 
  // Designed to change the listener on resize
  getElementByIdInFrames("innerdocbody", window).addEventListener('DOMAttrModified', 
    function(e){
      
      if(e.target.tagName=='IMG'
      && e.attrName=='style' 
      && e.newValue.match(/width|height/)){
        alert("Want image resize?  Contact john@mclear.co.uk to sponsor development!");
        // send a message to the server
      }
    }, 
    false
  );
*/

}
function getElementByIdInFrames(id, base) {
  var el;
  if(el = base.document.getElementById(id)) {
    return el;
  }
 
  for(var i = 0, len = base.frames.length; i < len; i++) {
    if(el = getElementByIdInFrames(id, base.frames[i])) {
      return el;
    }
  }
}
