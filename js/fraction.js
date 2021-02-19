/* Из swiper */
pagination: {
  el: '.swiper-pagination',
    clickable: true,
      dynamicBullets: false,
        currentClass: 'swiper-pagination-current',
          totalClass: 'swiper-pagination-total',
      renderBullet: function (index, num_curr) {
        //   console.log('bullet-'+index)
        return '<span class="' + num_curr + '">' + (index + 1) + '</span>';
        //return '<span class="' + num_curr + '"></span>';
      },/**/
    },
/* Еще */

if (params.type === 'fraction') {
  $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
  $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
}
//
if (params.type === 'fraction') {
  if (params.renderFraction) {
    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
  } else {
    paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
  }

  $el.html(paginationHTML);
}
//


/* */
// Это может быть объект, за которым я хочу наблюдать:

const store = {
  anArray =[
    'Hi',
    'my',
    'name',
    'is'
  ]
}
//  ..и это функция, которая изменяет storeобъект:

    function addAName() {
      store.anArray.push('Bob')
    }
// Моя цель в этом примере - запускать следующую функцию каждый раз, когда store-объект изменяется.

function storeChanged() {
  console.log('The store object has changed!')
}
/* */
let validator = {
  set: function (target, key, value) {
    console.log(`The property ${key} has been updated with ${value}`);
    return true;
  }
};
let store = new Proxy({}, validator);
store.a = 'hello';
// console => The property a has been updated with hello
/* */
// Сегодня вы можете использовать объект Proxy для отслеживания(и перехвата) изменений, внесенных в объект.
// Он специально создан для того, что пытается сделать OP.Вот простой пример:

var targetObj = {};
var targetProxy = new Proxy(targetObj, {
  set: function (target, key, value) {
    console.log(`${key} set to ${value}`);
    target[key] = value;
    return true;
  }
});

targetProxy.hello_world = "test"; // console: 'hello_world set to test'

//Если вам нужно наблюдать за изменениями, внесенными во вложенный объект, вам необходимо использовать 
//специализированную библиотеку, такую ​​как Observable Slim(которую я опубликовал), которая работает 
//следующим образом:

var test = { testing: {} };
var p = ObservableSlim.create(test, true, function (changes) {
  console.log(JSON.stringify(changes));
});

p.testing.blah = 42; 
// console:  [{"type":"add","target":{"blah":42},"property":"blah","newValue":42,"currentPath":"testing.blah",jsonPointer:"/testing/blah","proxy":{"blah":42}}]

/* */
// Во - первых, используйте сеттеры и геттеры, например:

var myobj = { a: 1 };

function create_gets_sets(obj) { // make this a framework/global function
  var proxy = {}
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      var k = i;
      proxy["set_" + i] = function (val) { this[k] = val; };
      proxy["get_" + i] = function () { return this[k]; };
    }
  }
  for (var i in proxy) {
    if (proxy.hasOwnProperty(i)) {
      obj[i] = proxy[i];
    }
  }
}

create_gets_sets(myobj);
// тогда вы можете сделать что - то вроде:

function listen_to(obj, prop, handler) {
  var current_setter = obj["set_" + prop];
  var old_val = obj["get_" + prop]();
  obj["set_" + prop] = function (val) {
    current_setter.apply(obj, [old_val, val]); handler(val));
  }
// затем установите слушателя как:

listen_to(myobj, "a", function (oldval, newval) {
  alert("old : " + oldval + " new : " + newval);
}
/* */
// Использование Prototype: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

  // Console
  function print(t) {
    var c = document.getElementById('console');
    c.innerHTML = c.innerHTML + '<br />' + t;
  }

// Demo
var myVar = 123;

  Object.defineProperty(this, 'varWatch', {
    get: function () { return myVar; },
    set: function (v) {
      myVar = v;
      print('Value changed! New value: ' + v);
    }
  });

  print(varWatch);
  varWatch = 456;
  print(varWatch);
  <pre id="console">
  </pre>