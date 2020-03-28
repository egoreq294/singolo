/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

//
//header
//
var menuHeader = document.querySelector('.navbar_content');
menuHeader.addEventListener('click', function (event) {
  if (event.target.tagName === 'li'.toUpperCase()) {
    menuHeader.querySelectorAll('.header-list_element').forEach(function (item) {
      return item.classList.remove('header-list_element--active');
    });
    event.target.classList.add('header-list_element--active');
  }
});
var burger = false;
var ul = document.querySelector('.header_burger');
document.querySelector('.header_menu_button').addEventListener('click', function () {
  console.log('test');

  if (burger === false) {
    burger = true;
    ul.querySelectorAll('li').forEach(function (item) {
      return item.classList.add('header_burger_ul_li');
    });
    ul.querySelectorAll('li').forEach(function (item) {
      return item.classList.remove('header-list_element');
    });
    ul.querySelector('ul').classList.remove('navbar_content');
    ul.querySelector('ul').classList.add('header_burger_ul');
    ul.classList.add('header_burger_list');
    ul.classList.add('header_burger_list_li');
  } else {
    burger = false;
    ul.querySelectorAll('li').forEach(function (item) {
      return item.classList.remove('header_burger_ul_li');
    });
    ul.querySelectorAll('li').forEach(function (item) {
      return item.classList.add('header-list_element');
    });
    ul.querySelector('ul').classList.add('navbar_content');
    ul.querySelector('ul').classList.remove('header_burger_ul');
    ul.classList.remove('header_burger_list');
    ul.classList.remove('header_burger_list_li');
  }
});
document.addEventListener('scroll', onscroll);

function onscroll() {
  var position = window.scrollY;
  var div = document.querySelectorAll('.main>div');
  var links = document.querySelectorAll('#header a');
  div.forEach(function (element) {
    if (element.offsetTop <= position && element.offsetTop + element.offsetHeight > position) {
      links.forEach(function (a) {
        a.querySelector('li').classList.remove('header-list_element--active');

        if (element.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.querySelector('li').classList.add('header-list_element--active');
        }
      });
    }
  });
} //
// slider
//


var slider = document.querySelector('#slider-show');
var slides = document.querySelectorAll('.slide');
var current = 0;
var sliderOffset = true;
var slideBackgroundFlag = true;

function createSlide() {
  var offset = 0;
  slider.innerHTML = '';
  var slide;

  if (current === 0) {
    slide = 1;
  } else {
    slide = 0;
  }

  var element = slides[slide].cloneNode(true);
  element.style.left = offset * 1020 - 1020 + 'px';
  slider.appendChild(element);
  slides[current].style.left = offset * 1020 + 'px';
  slider.appendChild(slides[current]);
  offset++;
  slides[slide].style.left = offset * 1020 + 'px';
  slider.appendChild(slides[slide]);
}

function leftShift() {
  if (sliderOffset) {
    if (slideBackgroundFlag === true) {
      slideBackgroundFlag = false;
      document.querySelector('#slider').classList.add('slide_second-background');
    } else {
      slideBackgroundFlag = true;
      document.querySelector('#slider').classList.remove('slide_second-background');
    }

    sliderOffset = false;
    var slides2 = document.querySelectorAll('.slide');
    var offset2 = -1;

    for (var i = 0; i < slides2.length; i += 1) {
      slides2[i].style.left = offset2 * 1020 - 1020 + 'px';
      offset2++;
    }

    current++;

    if (current >= slides.length) {
      current = 0;
    }
  }
}

document.getElementById('next-slide').addEventListener('click', leftShift);

function rightShift() {
  if (sliderOffset) {
    if (slideBackgroundFlag === true) {
      slideBackgroundFlag = false;
      document.querySelector('#slider').classList.add('slide_second-background');
    } else {
      slideBackgroundFlag = true;
      document.querySelector('#slider').classList.remove('slide_second-background');
    }

    sliderOffset = false;
    var slides2 = document.querySelectorAll('.slide');
    var offset2 = -1;

    for (var i = 0; i < slides2.length; i += 1) {
      slides2[i].style.left = offset2 * 1020 + 1020 + 'px';
      offset2++;
    }

    current++;

    if (current >= slides.length) {
      current = 0;
    }
  }
}

document.getElementById('prev-slide').addEventListener('click', rightShift);
createSlide();
slider.addEventListener('transitionend', function () {
  createSlide();
  sliderOffset = true;
});
var screenoff = false;

function screenblack() {
  if (screenoff == true) {
    screenoff = false;
    document.querySelectorAll(".phone_button").forEach(function (item) {
      return item.style.background = "transparent";
    });
  } else {
    screenoff = true;
    document.querySelectorAll(".phone_button").forEach(function (item) {
      return item.style.background = "black";
    });
  }
}

document.querySelectorAll('.phone_button').forEach(function (item) {
  return item.addEventListener('click', screenblack);
}); //
//portfolio
//

var tags = document.querySelectorAll('.tag');

for (var i = 0; i < tags.length; i++) {
  tags[i].addEventListener('click', mixPicture);
}

function mixPicture() {
  console.log(tags);
  var gallery = document.querySelector('.portfolio_pics');
  var pictures = Array.from(document.querySelectorAll('.portfolio_pics_imgs'));
  var newGallery = pictures.sort(function () {
    return Math.random() - 0.5;
  });
  gallery.innerHTML = "";
  newGallery.forEach(function (item) {
    return gallery.append(item);
  });
  tags.forEach(function (item) {
    return item.classList.remove('tag_active');
  });
  event.target.classList.add('tag_active');
}

pictures = document.querySelector('.portfolio_pics');
pictures.addEventListener('click', function (event) {
  if (event.target.tagName === 'img'.toUpperCase()) {
    pictures.querySelectorAll('img').forEach(function (item) {
      item.classList.remove('picture_active');
    });
    event.target.classList.add('picture_active');
  }
}); //
//get a qoute
//
//form

var form = document.querySelector('#get_a_qoute--form');
document.querySelector('#get_a_qoute--submit').addEventListener('click', function (event) {
  var subject = document.querySelector('#get_a_qoute--subject').value;
  var describe = document.querySelector('#get_a_qoute--description').value;
  var them = document.querySelector('#subject-message');
  var description = document.querySelector('#describe-message');
  event.preventDefault();

  if (form.checkValidity()) {
    if (subject) {
      them.innerHTML = '<i class="message-title">Тема:</i> ' + subject;
    } else {
      them.innerHTML = '<i class="message-title">Без темы</i>';
    }

    if (describe) {
      description.innerHTML = '<i class="message-title">Описание:</i> ' + describe;
    } else {
      description.innerHTML = '<i class="message-title">Без описания</i>';
    }

    document.getElementById('message-block').classList.remove('hidden');
  }
});
document.querySelector('#button-close').addEventListener('click', function (event) {
  document.querySelector('#message-block').classList.add('hidden');
  form.reset();
});

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map