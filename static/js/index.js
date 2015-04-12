exports.aceGetFilterStack = function(name, context){
  return [
    context.linestylefilter.getRegexpFilter(
      new RegExp("http.+((\.[pP][nN][gG])|(\.[jJ][pP][gG])|(\.[gG][iI][fF])|(\.[jJ][pP][eE][gG])|(\.[bB][mM][pP])|(\.[sS][vV][gG]))", "g"), 'image')
  ];
}


exports.aceCreateDomLine = function(name, args){
  if (args.cls.indexOf('image') > -1) { // If it's an image
    var src;
    cls = args.cls.replace(/(^| )image:(\S+)/g, function(x0, space, image) {
      src = image;
      return space + "image image_" + image;
    });


    // Note the additional span wrapper here is required to stop errors if someone types text after an image url
    return [{
      cls: cls,
      extraOpenTags: '<span style="display:block;"><img src="' + src + '" style="max-width:100%" /></span>',
      extraCloseTags:''
    }];
  }
}


