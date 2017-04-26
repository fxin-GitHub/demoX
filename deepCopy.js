
Object.prototype.DeepCopy = function () {  
  var obj, i;  
  obj = {};  
  
  for (attr in this) {  
    if (this.hasOwnProperty(attr)) {  
      if (typeof(this[attr]) === "object") {  
        if (this[attr] === null) {  
          obj[attr] = null;  
        }  
        else if (Object.prototype.toString.call(this[attr]) === '[object Array]') {  
          obj[attr] = [];  
          for (i=0; i<this[attr].length; i++) {  
            obj[attr].push(this[attr][i].DeepCopy());  
          }  
        } else {  
          obj[attr] = this[attr].DeepCopy();  
        }  
      } else {  
        obj[attr] = this[attr];  
      }  
    }  
  }  
  return obj;  
};  

var cloneObj = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        console.log("clone failed")
        return;
    } 
    
    else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } 
    
    else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
};

function deepCopy1(o,c){
  var c = c || {}
  for(var i in o){
    if(typeof o[i] === 'object'){
      if(o[i].constructor === Array){
        c[i] =[]
      }else{
        c[i] = {}
      }
      deepCopy1(o[i],c[i])
    }else{
      c[i] = o[i]
    }
  }       
  return c;
}
