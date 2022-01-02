window.addEventListener('click',function(e){

  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
})
chrome.storage.sync.get('varMenuSwitch', function (result) {
    $("input:checkbox[name=onoffswitch]").prop('checked', result.varMenuSwitch === '1');
});
$("input:checkbox[name=onoffswitch]").change(function() {
if ($(this).is(':checked')) {
  chrome.storage.sync.set({'varMenuSwitch': '1'}, function(toggleOn){
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
});
  });
} else {
  chrome.storage.sync.set({'varMenuSwitch': '0'}, function(toggleOff){
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
});
  });
  }
});
// CURSOR
chrome.storage.sync.get('PokeCursor', function (result) {
    $("input:radio[id=pikachuCursor]").prop('checked', result.PokeCursor === 'pikachu');
    $("input:radio[id=minusCursor]").prop('checked', result.PokeCursor === 'minus');
    $("input:radio[id=chimcharCursor]").prop('checked', result.PokeCursor === 'chimchar');
    $("input:radio[id=default]").prop('checked', result.PokeCursor === 'default');
});
$("input:radio[id=pikachuCursor]").change(function() {
if ($(this).is(':checked')) {
  chrome.storage.sync.set({'PokeCursor': 'pikachu'}, function(toggleOn){
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
    document.body.classList.add("pikachu");
    document.body.classList.remove("minus");
    document.body.classList.remove("chimchar");
    console.log("pikachu");
});
  });
} else {
  chrome.storage.sync.set({'PokeCursor': 'default'}, function(toggleOff){
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
    console.log("default");
});
  });
  }
});
$("input:radio[id=minusCursor]").change(function() {
if ($(this).is(':checked')) {
  chrome.storage.sync.set({'PokeCursor': 'minus'}, function(toggleOn){
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
    document.body.classList.add("minus");
    document.body.classList.remove("pikachu");
      document.body.classList.remove("chimchar");

    console.log("minus");
});
  });
} else {
  chrome.storage.sync.set({'PokeCursor': 'default'}, function(toggleOff){
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);

    console.log("default");
});
  });
  }
});
$("input:radio[id=chimcharCursor]").change(function() {
if ($(this).is(':checked')) {
  chrome.storage.sync.set({'PokeCursor': 'chimchar'}, function(toggleOn){
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
    document.body.classList.add("chimchar");
    document.body.classList.remove("pikachu");
    document.body.classList.remove("minus");

    console.log("Chimchar");
});
  });
} else {
  chrome.storage.sync.set({'PokeCursor': 'default'}, function(toggleOff){
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);

    console.log("default");
});
  });
  }
});
$("input:radio[id=default]").change(function() {
if ($(this).is(':checked')) {
  chrome.storage.sync.set({'PokeCursor': 'default'}, function(toggleOn){
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
    document.body.classList.remove("pikachu");
    document.body.classList.remove("minus");
    document.body.classList.remove("chimchar");

    console.log("Chimchar");
});
  });
} else {
  chrome.storage.sync.set({'PokeCursor': 'none'}, function(toggleOff){
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);

    console.log("default");
});
  });
  }
});
$( function() {
    $( document ).tooltip({
      track: true,

    });
  } );
$(document).ready(function(){
   $("select[title='types']").change(function(){
     $("img[id=types]").attr("src","/../../src/img/" + $(this).val() + ".PNG");
   });
});
