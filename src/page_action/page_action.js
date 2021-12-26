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
$(document).ready(function(){
   $("select[title='types']").change(function(){
     $("img[id=types]").attr("src","/../../src/img/" + $(this).val() + ".PNG");
   });
});
