
exports.aceGetFilterStack = function(name, context){
  args = context;
  return [
    args.linestylefilter.getRegexpFilter(
      new RegExp("http.+((\.png)|(\.jpg))", "g"), 'image')
  ];
}


exports.aceCreateDomLine = function(name, context){
  args = context;
  if (args.cls.indexOf('image') > -1) {
    var src;
    cls = args.cls.replace(/(^| )image:(\S+)/g, function(x0, space, image) {
      src = image;
      return space + "image image_" + image;
    });

   return [{
     cls: cls,
     extraOpenTags: '<img src="' + src + '" width="500px"/>',
     extraCloseTags:''
   }];
  }
}


