new Vue({
  el: "#app",
  data: {
    newColor : '',
    validColor : /^([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
  },
  computed: {
    rgbValue: function(){
      const hexValue = this.newColor.split('');
      let r, g, b;
      if(this.newColor.length === 3){
        r = parseInt(hexValue[0].toString() + hexValue[0].toString(),16);
        g = parseInt(hexValue[1].toString() + hexValue[1].toString(),16);
        b = parseInt(hexValue[2].toString() + hexValue[2].toString(),16);
      }else if(this.newColor.length === 6){
        r = parseInt(hexValue[0].toString() + hexValue[1].toString(),16);
        g = parseInt(hexValue[2].toString() + hexValue[3].toString(),16);
        b = parseInt(hexValue[4].toString() + hexValue[5].toString(),16);
      }
      if(this.validColor.test(this.newColor) !== true){
        r = g = b = '---';
      }
      return r + ',' + g + ',' + b;
    }
  }
});
