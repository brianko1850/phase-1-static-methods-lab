class Formatter {
  static capitalize(string) {
return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^-' A-Za-z0-9]/g, "")
  
  }
  static titleize(string) {
    if(!string) {
      return '';
    }
    let arr = [];
    let exludeWords = ['the','a','an','but','of','and','for','at','by','from']
    arr = string.split(' ');
    return arr.map((word, index) =>
    {
       return exludeWords.includes(word) && index !=0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1);
  
    }).join(' ');
  
  }
  //add static methods here
}