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
     extraOpenTags: '<img src="' + src + '" />',
     extraCloseTags:''
   }];
  }
}


