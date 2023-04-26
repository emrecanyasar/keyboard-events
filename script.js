let count = 0;
let altKeyCount = false;
let ctrlKeyCount = false;
shiftKey = false;

function onKeyDown(event) {
  var colorDiv = document.getElementById("keydown-up");
  colorDiv.style.backgroundColor = "#ffedad";

  setTimeout(function () {
    colorDiv.style.backgroundColor = "white";
  }, 100);

  count++;
  document.getElementById("keydowncount").innerHTML = count;

  //   altKey

  if (event.altKey) {
    var colorAltKey = document.getElementById("altKey");
    colorAltKey.style.backgroundColor = "#ffedad";
    altKeyCount = true
    setTimeout(function () {
      colorAltKey.style.backgroundColor = "white";
    }, 100);
    document.getElementById("altKeyCount").innerHTML = altKeyCount;
  }else{
    altKeyCount = false
    document.getElementById("altKeyCount").innerHTML = altKeyCount;
  }

  // Code

  var code = document.getElementById("code");
  code.style.backgroundColor = "#ffedad";
  setTimeout(function () {
    code.style.backgroundColor = "white";
  }, 100);

  let codeIndex = event.code;
  document.getElementById("codeIndex").innerHTML = codeIndex;

  // ctrlKey

  if (event.ctrlKey) {
    var colorCtrlKey = document.getElementById("ctrlKey");
    colorCtrlKey.style.backgroundColor = "#ffedad";
    ctrlKeyCount = true;
    setTimeout(function () {
      colorCtrlKey.style.backgroundColor = "white";
    }, 100);
    document.getElementById("ctrlKeyCount").innerHTML = ctrlKeyCount;
  }else{
    ctrlKeyCount = false;
    document.getElementById("ctrlKeyCount").innerHTML = ctrlKeyCount;
  }

  // key
  var key = document.getElementById("key");
  key.style.backgroundColor = "#ffedad";
  setTimeout(function () {
    key.style.backgroundColor = "white";
  }, 100);

  let keyIndex = event.key;
  document.getElementById("keyIndex").innerHTML = keyIndex;

  // location

  var location = document.getElementById("location");
  location.style.backgroundColor = "#ffedad";
  setTimeout(function () {
    location.style.backgroundColor = "white";
  }, 100);

  let locationIndex = event.location;
  document.getElementById("locationIndex").innerHTML = locationIndex;
  
  // shiftKey

  if (event.shiftKey) {
    var colorShiftKey = document.getElementById("shiftKey");
    colorShiftKey.style.backgroundColor = "#ffedad";
    ShiftKey = true;
    setTimeout(function () {
        colorShiftKey.style.backgroundColor = "white";
    }, 100);
    document.getElementById("shiftKeyCount").innerHTML = ShiftKey;
  }else{
    ShiftKey = false;
    document.getElementById("shiftKeyCount").innerHTML = ShiftKey;
  }

}

function onKeyUp(event) {
    var colorDiv = document.getElementById("onkeyup-up");
    colorDiv.style.backgroundColor = "#ffedad";
  
    setTimeout(function () {
      colorDiv.style.backgroundColor = "white";
    }, 100);
  
    count++;
    document.getElementById("onkeyupcount").innerHTML = count;
  
    //   altKey
  
    if (event.altKey) {
      var colorAltKey = document.getElementById("altKey");
      colorAltKey.style.backgroundColor = "#ffedad";
      altKeyCount = true
      setTimeout(function () {
        colorAltKey.style.backgroundColor = "white";
      }, 100);
      document.getElementById("altKeyCount").innerHTML = altKeyCount;
    }else{
      altKeyCount = false
      document.getElementById("altKeyCount").innerHTML = altKeyCount;
    }
  
    // Code
  
    var code = document.getElementById("code");
    code.style.backgroundColor = "#ffedad";
    setTimeout(function () {
      code.style.backgroundColor = "white";
    }, 100);
  
    let codeIndex = event.code;
    document.getElementById("codeIndex").innerHTML = codeIndex;
  
    // ctrlKey
  
    if (event.ctrlKey) {
      var colorCtrlKey = document.getElementById("ctrlKey");
      colorCtrlKey.style.backgroundColor = "#ffedad";
      ctrlKeyCount = true;
      setTimeout(function () {
        colorCtrlKey.style.backgroundColor = "white";
      }, 100);
      document.getElementById("ctrlKeyCount").innerHTML = ctrlKeyCount;
    }else{
      ctrlKeyCount = false;
      document.getElementById("ctrlKeyCount").innerHTML = ctrlKeyCount;
    }
  
    // key
    var key = document.getElementById("key");
    key.style.backgroundColor = "#ffedad";
    setTimeout(function () {
      key.style.backgroundColor = "white";
    }, 100);
  
    let keyIndex = event.key;
    document.getElementById("keyIndex").innerHTML = keyIndex;
  
    // location
  
    var location = document.getElementById("location");
    location.style.backgroundColor = "#ffedad";
    setTimeout(function () {
      location.style.backgroundColor = "white";
    }, 100);
  
    let locationIndex = event.location;
    document.getElementById("locationIndex").innerHTML = locationIndex;
    
    // shiftKey
  
    if (event.shiftKey) {
      var colorShiftKey = document.getElementById("shiftKey");
      colorShiftKey.style.backgroundColor = "#ffedad";
      ShiftKey = true;
      setTimeout(function () {
          colorShiftKey.style.backgroundColor = "white";
      }, 100);
      document.getElementById("shiftKeyCount").innerHTML = ShiftKey;
    }else{
      ShiftKey = false;
      document.getElementById("shiftKeyCount").innerHTML = ShiftKey;
    }
  
}

function onKeyPress(event) {
    var colorDiv = document.getElementById("onkeypress-up");
    colorDiv.style.backgroundColor = "#ffedad";
  
    setTimeout(function () {
      colorDiv.style.backgroundColor = "white";
    }, 100);
  
    count++;
    document.getElementById("onkeypresscount").innerHTML = count;
  
    //   altKey
  
    if (event.altKey) {
      var colorAltKey = document.getElementById("altKey");
      colorAltKey.style.backgroundColor = "#ffedad";
      altKeyCount = true
      setTimeout(function () {
        colorAltKey.style.backgroundColor = "white";
      }, 100);
      document.getElementById("altKeyCount").innerHTML = altKeyCount;
    }else{
      altKeyCount = false
      document.getElementById("altKeyCount").innerHTML = altKeyCount;
    }
  
    // Code
  
    var code = document.getElementById("code");
    code.style.backgroundColor = "#ffedad";
    setTimeout(function () {
      code.style.backgroundColor = "white";
    }, 100);
  
    let codeIndex = event.code;
    document.getElementById("codeIndex").innerHTML = codeIndex;
  
    // ctrlKey
  
    if (event.ctrlKey) {
      var colorCtrlKey = document.getElementById("ctrlKey");
      colorCtrlKey.style.backgroundColor = "#ffedad";
      ctrlKeyCount = true;
      setTimeout(function () {
        colorCtrlKey.style.backgroundColor = "white";
      }, 100);
      document.getElementById("ctrlKeyCount").innerHTML = ctrlKeyCount;
    }else{
      ctrlKeyCount = false;
      document.getElementById("ctrlKeyCount").innerHTML = ctrlKeyCount;
    }
  
    // key
    var key = document.getElementById("key");
    key.style.backgroundColor = "#ffedad";
    setTimeout(function () {
      key.style.backgroundColor = "white";
    }, 100);
  
    let keyIndex = event.key;
    document.getElementById("keyIndex").innerHTML = keyIndex;
  
    // location
  
    var location = document.getElementById("location");
    location.style.backgroundColor = "#ffedad";
    setTimeout(function () {
      location.style.backgroundColor = "white";
    }, 100);
  
    let locationIndex = event.location;
    document.getElementById("locationIndex").innerHTML = locationIndex;
    
    // shiftKey
  
    if (event.shiftKey) {
      var colorShiftKey = document.getElementById("shiftKey");
      colorShiftKey.style.backgroundColor = "#ffedad";
      ShiftKey = true;
      setTimeout(function () {
          colorShiftKey.style.backgroundColor = "white";
      }, 100);
      document.getElementById("shiftKeyCount").innerHTML = ShiftKey;
    }else{
      ShiftKey = false;
      document.getElementById("shiftKeyCount").innerHTML = ShiftKey;
    }
  
  }