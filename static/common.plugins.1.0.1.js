/**
 * Created by WUZLC on 2017/4/25.
 */

if (!Object.assign) {
  Object.assign = function (base, source) {
    if (arguments.length <= 1) {
      return {};
    }

    var base = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        base[key] = source[key];
      }
    }
    return base;
  }
}

window.YuTong = window.YuTong || {};

window.YuTong.Nav = function (options) {
  options = options || {};
  options.ele = options.ele || '#Nav';
  this.ele = document.querySelector(options.ele);
  this.hasIcon = options.hasIcon === undefined ? true : options.hasIcon;

  this.createLeftIcon = function () {
    var leftIcon = document.createElement('span');
    if (!this.hasIcon) {
      return leftIcon;
    }
    Object.assign(leftIcon.style, {
      marginRight: '5px',
      background: 'url(' + YuTong.Icons.leftIcon + ') center no-repeat',
      backgroundSize: '100%',
      width: '18px',
      height: '18px',
      display: 'inline-block',
      verticalAlign: 'middle',
      marginBottom: '4px'
    })
    return leftIcon;
  }

  this.createElementA = function (url) {
    var aUrl = document.createElement('a');
    Object.assign(aUrl.style, {
      color: '#fff',
      textDecoration: 'none'
    });
    aUrl.setAttribute('href', url);
    aUrl.appendChild(this.createLeftIcon());
    aUrl.innerHTML += this.returnBack;
    return aUrl;
  }

  this.createLeftBtn = function () {
    var leftLabel = document.createElement('label');

    Object.assign(leftLabel.style, {
      position: 'absolute',
      left: '15px'
    });
    leftLabel.classList.add('left-btn');
    var backBtn = this.ele.querySelector("back");


    var url = backBtn && backBtn.getAttribute('data-url');
    this.returnBack = (backBtn && backBtn.innerHTML) || '';


    if (url) {
      var aLink = this.createElementA(url);
      for (var i = 0; i < backBtn.classList.length; i++) {
        aLink.classList.add(backBtn.classList[i]);
      }
      Object.assign(aLink.style, backBtn.style, {});
      var btnID = backBtn.getAttribute('id');
      if (btnID !== null) {
        aLink.setAttribute('id', btnID);
      }
      leftLabel.appendChild(aLink);
    } else {
      for (var i = 0; i < backBtn.classList.length; i++) {
        leftLabel.classList.add(backBtn.classList[i]);
      }
      Object.assign(leftLabel.style, backBtn.style, {
        position: 'absolute',
        left: '15px'
      });
      var btnID = backBtn.getAttribute('id');
      if (btnID !== null) {
        leftLabel.setAttribute('id', btnID);
      }
      leftLabel.appendChild(this.createLeftIcon());
      leftLabel.innerHTML += this.returnBack;
      leftLabel.classList.add('js-back');
    }
    return leftLabel;
  }

  this.createTitle = function () {
    var titleSpan = document.createElement('span');
    this.title = options.title || (document.head.querySelector("title") && document.head.querySelector("title").innerHTML) || '';
    titleSpan.innerHTML = this.title;
    titleSpan.classList.add('js-title');
    return titleSpan;
  }

  this.createRightBtn = function () {

    var rightLabel = document.createElement('label');
    Object.assign(rightLabel.style, {
      position: 'absolute',
      right: '15px'
    });
    rightLabel.classList.add('right-btn');
    this.rightButtons = (this.ele.querySelector("right-buttons") && this.ele.querySelector("right-buttons").innerHTML) || '';
    rightLabel.innerHTML = this.rightButtons;
    return rightLabel;
  }

  this.setHTML = function () {
    //创建容器
    var headNav = document.createElement('div');
    var innerPosition = this.ele.getAttribute('data-position') || 'relative';
    Object.assign(headNav.style, {
      height: '50px',
      width: '100%',
      lineHeight: '50px',
      background: '#243651',
      color: '#fff',
      textAlign: 'center',
      position: innerPosition,
      fontSize: '16px'
    });
    //添加左边那妞
    headNav.appendChild(this.createLeftBtn());
    //添加标题
    headNav.appendChild(this.createTitle());
    //添加右边按钮
    headNav.appendChild(this.createRightBtn());

    this.ele.innerHTML = '';
    this.ele.appendChild(headNav);
  }

  this.addEvents = function () {

    var btnExit = document.querySelector(options.ele + " .js-exit");

    btnExit && btnExit.addEventListener("click", function () {

      cordova.exec(function (success) {
      }, function (error) {
      }, "MideaCommon", "exit", []);
    });
    var btnBack = document.querySelector(options.ele + " .js-back");
    btnBack && btnBack.addEventListener('click', function () {
      if (this.classList.contains('js-exit')) {
        return;
      }
      history.back();
    })
  }

  this.init = function () {
    this.setHTML();
    this.addEvents();
  }
}

window.YuTong.Icons = {
  leftIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REJEMUMxN0IxQjVEMTFFNzkzQTNDOUU1MUNGODI2M0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REJEMUMxN0MxQjVEMTFFNzkzQTNDOUU1MUNGODI2M0IiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQUQwNDU0NDFCNUQxMUU3OTNBM0M5RTUxQ0Y4MjYzQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQkQxQzE3QTFCNUQxMUU3OTNBM0M5RTUxQ0Y4MjYzQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg4NPd8AAAIfSURBVHjazJhLKEVBGMfv9cojyTOUpJCkkIQoiWJhwQKxsLCQKIpipSgKW1tlayVFsiQWFqLcSOkmJeQZkdfl+E/NzfgW7jn3nBkz9Vuc03xfvzOdmflm3IZhuBS3cDAMUsAYuP+zNxNUSAxYNX7aZKCYMIUjlwBWQIXwzhswStHIZYAD43cbNxOrQi4PnApin6DXbLxsuTJwI8i9gTYrOWTK1YMnQe4R1FrNI0uug4+Wv12B0mByyZAbAF+C3AnIDTafk2JuMEFmqgek28nrlFwomCNymyDebm4n5CLBIpFbBlFOfLzdBHFgncjNgzCnfh07walgj8jN8H/R9d+C2cAriLFZOyRjyQomqAhcCHIfoFPWgm81oAY8CHLPoFHmdmmlczN4FeTuQIXsYsNsx27gE+TOQIGKUs1touSvBFvCsw+UgH0lZa7JLxkhy8kOSFQxglY695EiwMPXQm0EGV3kXzzi5bw2gox2vvaJ5VSWToKMJlKQnvGzhzaCjAa+UPvbJSjUSZBRzc8a/nYbbGkvsx4sB/eCJNsKq3QSZBSDa7JH1+kkyMgH54LkixOFhNOzLofcIrCZ3qqTICMTHAuSPjv1oqwdIA0ckoq7RydBRjLYJZKDOgm6+Ll4m1RCozoJMmLBBpGc0kmQEQ3WiOSsmSOqyvvpCLBEJANeZIYovKN+By1gQXiXGijIzJnE6RYK+kESmAaPf3X+FmAA5u8EUB4KmYoAAAAASUVORK5CYII='
}
