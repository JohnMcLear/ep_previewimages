exports.aceGetFilterStack = function (name, context) {
  return [
    context.linestylefilter.getRegexpFilter(
        new RegExp('\\bhttps?://\\S+\\.([pP][nN][gG]|[jJ][pP][eE]?[gG]|[gG][iI][fF]|[bB][mM][pP]|[sS][vV][gG])([?&;]\\S*|(?=\\s|$))', 'g'), 'image'),
  ];
};


exports.aceCreateDomLine = function (name, args) {
  if (args.cls.indexOf('image') > -1) { // If it's an image
    let src;
    cls = args.cls.replace(/(^| )image:(\S+)/g, (x0, space, image) => {
      src = image;
      return `${space}image image_${image}`;
    });


    // Note the additional span wrapper here is required to stop errors if someone types text after an image url
    return [{
      cls,
      extraOpenTags: `<span style="display:block;"><img src="${src}" style="max-width:100%" /></span>`,
      extraCloseTags: '',
    }];
  }
};
