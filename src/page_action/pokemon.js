window.onload = function(){
  function addMoveLink () {
    $("#allmovesbox a").each(
      function(alink){
          var href = $(this).attr('href');
          $(this).attr("href", "https://pokemondb.net"+href);
      });
      $("#find a").each(
        function(alink){
            var href = $(this).attr('href');
            $(this).attr("href", "https://pokemondb.net"+href);
        });
  }
  function addAbilityLink () {
    $("#allabilitiesbox a").each(
      function(alink){
          var href = $(this).attr('href');
          $(this).attr("href", "https://pokemondb.net"+href);
      });
      $("#find a").each(
        function(alink){
            var href = $(this).attr('href');
            $(this).attr("href", "https://pokemondb.net"+href);
        });
  }
  const stats = document.getElementById('stats');
  const summary = document.getElementById('summary');
  const training = document.getElementById('training');
  const breeding = document.getElementById('breeding');
  const allmovesbox = document.getElementById('allmovesbox');
  const allabilitiesbox = document.getElementById('allabilitiesbox');
  const itemsbox = document.getElementById('itemsbox');

  $(".tooltip").lyltip({
    theme:"dark", // Principal theme
    themes: {    // Custom elements themes
      "tooltip-info":"info",
      "tooltip-success":"success",
      "tooltip-warning":"warning",
      "tooltip-danger":"danger",
      "tooltip-light":"light",
    }
});
var error = document.getElementById('error');
function appendValueToAnchor () {
  var link = document.getElementById('pokesearch'),
      protocol = link.protocol,
      newValue = encodeURIComponent( this.value );
      link.href = 'https://pokemondb.net/pokedex/' + newValue.toLowerCase() + '#dex-basics';


 var stats = document.getElementById('stats');
 var summary = document.getElementById('summary');
  var normalbox = document.getElementById('normalbox'),
      protocol = normalbox.protocol,
      newValue = encodeURIComponent( this.value );
  normalbox.src = 'https://projectpokemon.org/images/normal-sprite/' + newValue.toLowerCase() + '.gif';
  normalbox.onerror = function() {
    normalbox.src = "../../src/img/IMAGE_NOT_FOUND.png";
  }
  var shinybox = document.getElementById('shinybox'),
      protocol = shinybox.protocol,
      newValue = encodeURIComponent( this.value );
  shinybox.src = 'https://projectpokemon.org/images/shiny-sprite/' + newValue.toLowerCase() + '.gif';
  shinybox.onerror = function() {
    shinybox.src = "../../src/img/IMAGE_NOT_FOUND.png";
  }
var sprite = document.getElementById('sprite'),
    protocol = sprite.protocol,
    newValue = encodeURIComponent( this.value );
sprite.src = 'https://img.pokemondb.net/artwork/' + newValue.toLowerCase() + '.jpg';
allmovesbox.classList.remove("show");
allmovesbox.classList.add("hide");
itemsbox.classList.remove("show");
itemsbox.classList.add("hide");
allabilitiesbox.classList.remove("show");
allabilitiesbox.classList.add("hide");
  stats.classList.add("show");
  stats.classList.remove("hide");
  summary.classList.add("show");
  summary.classList.remove("hide");
  training.classList.add("show");
  training.classList.remove("hide");
  breeding.classList.add("show");
  breeding.classList.remove("hide");
  error.classList.remove("show");
  error.classList.add("hide");
sprite.onerror = function() {
  allmovesbox.classList.remove("show");
  allmovesbox.classList.add("hide");
  itemsbox.classList.remove("show");
  itemsbox.classList.add("hide");
  error.classList.remove("hide");
  error.classList.add("show");
  training.classList.add("hide");
  training.classList.remove("show");
  breeding.classList.add("hide");
  breeding.classList.remove("show");
  stats.classList.add("hide");
  stats.classList.remove("show");
  summary.classList.add("hide");
  summary.classList.remove("show");
  moves.classList.add("hide");
  moves.classList.remove("show");
  allabilitiesbox.classList.remove("show");
  allabilitiesbox.classList.add("hide");
  sprite.src = "../../src/img/IMAGE_NOT_FOUND.png";
}
// GET STATS DATA
$.ajax({
    url: link.href + newValue.toLowerCase(),
    type: 'GET',
    success: function(res) {
      var data = $.parseHTML(res);  //<----try with $.parseHTML().
      $(data).find('div.grid-col.span-md-6.span-lg-4').each(function(){
          $('#summary').html($(this).html());
}
)
$(data).find('.sv-tabs-panel div.grid-col.span-md-12.span-lg-8:first-child').each(function(){
    $('#stats').html($(this).html());
}
)
$(data).find('.grid-col.span-md-6.span-lg-12:first-child').each(function(){
    $('#training').html($(this).html());
}
)
$(data).find('.grid-col.span-md-6.span-lg-12').each(function(){
    $('#breeding').html($(this).html());
}
)
addMoveLink()
},
   error: function() {
     allmovesbox.classList.remove("show");
     allmovesbox.classList.add("hide");
     allabilitiesbox.classList.remove("show");
     allabilitiesbox.classList.add("hide");
     itemsbox.classList.remove("show");
     itemsbox.classList.add("hide");
       stats.classList.add("hide");
       stats.classList.remove("show");
       summary.classList.add("hide");
       summary.classList.remove("show");
       training.classList.add("hide");
       training.classList.remove("show");
       breeding.classList.add("hide");
       breeding.classList.remove("show");
       moves.classList.add("hide");
       moves.classList.remove("show");
       error.classList.remove("hide");
       error.classList.add("show");
   }
});
// END OF STATS data
// GET MOVES DATA
$.ajax({
    url: link.href + newValue.toLowerCase(),
    type: 'GET',
    success: function(res) {
      var data = $.parseHTML(res);  //<----try with $.parseHTML().
      $(data).find('div#tab-moves-19').each(function(){
          $('#moves').html($(this).html());
}
)},
   error: function() {
     allmovesbox.classList.remove("show");
     allmovesbox.classList.add("hide");
     allabilitiesbox.classList.remove("show");
     allabilitiesbox.classList.add("hide");
     itemsbox.classList.remove("show");
     itemsbox.classList.add("hide");
       stats.classList.add("hide");
       stats.classList.remove("show");
       summary.classList.add("hide");
       summary.classList.remove("show");
       training.classList.add("hide");
       training.classList.remove("show");
       breeding.classList.add("hide");
       breeding.classList.remove("show");
       moves.classList.add("hide");
       moves.classList.remove("show");
       error.classList.remove("hide");
       error.classList.add("show");
   }
});
// END OF MOVES data

// GET location DATA
$.ajax({
    url: link.href + newValue.toLowerCase(),
    type: 'GET',
    success: function(res) {
      var data = $.parseHTML(res);  //<----try with $.parseHTML().
      $(data).find('.grid-col.span-md-12.span-lg-8').each(function(){
          $('#location').html($(this).html());
}
)},
   error: function() {
     allmovesbox.classList.remove("show");
     allmovesbox.classList.add("hide");
     allabilitiesbox.classList.remove("show");
     allabilitiesbox.classList.add("hide");
     itemsbox.classList.remove("show");
     itemsbox.classList.add("hide");
       stats.classList.add("hide");
       stats.classList.remove("show");
       summary.classList.add("hide");
       summary.classList.remove("show");
       training.classList.add("hide");
       training.classList.remove("show");
       breeding.classList.add("hide");
       breeding.classList.remove("show");
       location.classList.add("hide");
       location.classList.remove("show");
       moves.classList.add("hide");
       moves.classList.remove("show");
       error.classList.remove("hide");
       error.classList.add("show");
   }
});
// END OF location data

}

// PRINT POKEMON TYPE DATA
function appendTypeElectric () {
  $.ajax({
      url: 'https://pokemondb.net/type/electric',
      type: 'GET',
      success: function(electricRes) {
        var dataElectric = $.parseHTML(electricRes);  //<----try with $.parseHTML().
        $(dataElectric).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesElectric').html($(this).html());
  }
  )
  }

})
}
function appendTypeGrass () {
  $.ajax({
      url: 'https://pokemondb.net/type/grass',
      type: 'GET',
      success: function(grassRes) {
        var dataGrass = $.parseHTML(grassRes);  //<----try with $.parseHTML().
        $(dataGrass).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesGrass').html($(this).html());
  }
  )
  }

})
}
function appendTypeFire () {
  $.ajax({
      url: 'https://pokemondb.net/type/fire',
      type: 'GET',
      success: function(fireRes) {
        var dataFire = $.parseHTML(fireRes);  //<----try with $.parseHTML().
        $(dataFire).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesFire').html($(this).html());
  }
  )
  }

})
}
function appendTypeNormal () {
  $.ajax({
      url: 'https://pokemondb.net/type/normal',
      type: 'GET',
      success: function(normalRes) {
        var dataNormal = $.parseHTML(normalRes);  //<----try with $.parseHTML().
        $(dataNormal).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesNormal').html($(this).html());
  }
  )
  }

})
}
function appendTypeWater () {
  $.ajax({
      url: 'https://pokemondb.net/type/water',
      type: 'GET',
      success: function(waterRes) {
        var dataWater = $.parseHTML(waterRes);  //<----try with $.parseHTML().
        $(dataWater).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesWater').html($(this).html());
  }
  )
  }

})
}
function appendTypeIce () {
  $.ajax({
      url: 'https://pokemondb.net/type/ice',
      type: 'GET',
      success: function(iceRes) {
        var dataIce = $.parseHTML(iceRes);  //<----try with $.parseHTML().
        $(dataIce).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesIce').html($(this).html());
  }
  )
  }

})
}
function appendTypeFight () {
  $.ajax({
      url: 'https://pokemondb.net/type/fighting',
      type: 'GET',
      success: function(fightRes) {
        var dataFight = $.parseHTML(fightRes);  //<----try with $.parseHTML().
        $(dataFight).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesFight').html($(this).html());
  }
  )
  }

})
}
function appendTypePoison () {
  $.ajax({
      url: 'https://pokemondb.net/type/poison',
      type: 'GET',
      success: function(poisonRes) {
        var dataPoison = $.parseHTML(poisonRes);  //<----try with $.parseHTML().
        $(dataPoison).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesPoison').html($(this).html());
  }
  )
  }

})
}
function appendTypeGround () {
  $.ajax({
      url: 'https://pokemondb.net/type/ground',
      type: 'GET',
      success: function(groundRes) {
        var dataGround = $.parseHTML(groundRes);  //<----try with $.parseHTML().
        $(dataGround).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesGround').html($(this).html());
  }
  )
  }

})
}
function appendTypeFlying () {
  $.ajax({
      url: 'https://pokemondb.net/type/flying',
      type: 'GET',
      success: function(flyingRes) {
        var dataFlying = $.parseHTML(flyingRes);  //<----try with $.parseHTML().
        $(dataFlying).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesFlying').html($(this).html());
  }
  )
  }

})
}
function appendTypePsychic () {
  $.ajax({
      url: 'https://pokemondb.net/type/psychic',
      type: 'GET',
      success: function(psychicRes) {
        var dataPsychic = $.parseHTML(psychicRes);  //<----try with $.parseHTML().
        $(dataPsychic).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesPsychic').html($(this).html());
  }
  )
  }

})
}
function appendTypeBug () {
  $.ajax({
      url: 'https://pokemondb.net/type/bug',
      type: 'GET',
      success: function(bugRes) {
        var dataBug = $.parseHTML(bugRes);  //<----try with $.parseHTML().
        $(dataBug).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesBug').html($(this).html());
  }
  )
  }

})
}
function appendTypeRock () {
  $.ajax({
      url: 'https://pokemondb.net/type/rock',
      type: 'GET',
      success: function(rockRes) {
        var dataRock = $.parseHTML(rockRes);  //<----try with $.parseHTML().
        $(dataRock).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesRock').html($(this).html());
  }
  )
  }

})
}
function appendTypeGhost () {
  $.ajax({
      url: 'https://pokemondb.net/type/ghost',
      type: 'GET',
      success: function(ghostRes) {
        var dataGhost = $.parseHTML(ghostRes);  //<----try with $.parseHTML().
        $(dataGhost).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesGhost').html($(this).html());
  }
  )
  }

})
}
function appendTypeDragon () {
  $.ajax({
      url: 'https://pokemondb.net/type/dragon',
      type: 'GET',
      success: function(dragonRes) {
        var dataDragon = $.parseHTML(dragonRes);  //<----try with $.parseHTML().
        $(dataDragon).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesDragon').html($(this).html());
  }
  )
  }

})
}
function appendTypeDark () {
  $.ajax({
      url: 'https://pokemondb.net/type/dark',
      type: 'GET',
      success: function(darkRes) {
        var dataDark = $.parseHTML(darkRes);  //<----try with $.parseHTML().
        $(dataDark).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesDark').html($(this).html());
  }
  )
  }

})
}
function appendTypeSteel () {
  $.ajax({
      url: 'https://pokemondb.net/type/steel',
      type: 'GET',
      success: function(steelRes) {
        var dataSteel = $.parseHTML(steelRes);  //<----try with $.parseHTML().
        $(dataSteel).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesSteel').html($(this).html());
  }
  )
  }

})
}
function appendTypeFairy () {
  $.ajax({
      url: 'https://pokemondb.net/type/fairy',
      type: 'GET',
      success: function(fairyRes) {
        var dataFairy = $.parseHTML(fairyRes);  //<----try with $.parseHTML().
        $(dataFairy).find('.grid-col.span-md-12.span-lg-6:first-child').each(function(){
            $('#typesFairy').html($(this).html());
  }
  )
  }

})
}
// FUNCTION TO APPEND TO ITEMS
function appendValueToItems () {
  var link = document.getElementById('moves-input'),
      protocol = link.protocol,
      newValue = this.value;
      var moveValue = newValue.replace(/ /g,"-");
      var allMoveValue = moveValue.replace(/,/g,"").replace(/'/g,"");

  $.ajax({
      url: 'https://pokemondb.net/item/'+allMoveValue.toLowerCase(),
      type: 'GET',
      asycn:false,
      success: function(fairyRes) {
        var dataFairy = $.parseHTML(fairyRes);  //<----try with $.parseHTML().
        $(dataFairy).find(".grid-col.span-md-8").each(function(){
            $('#items').html($(this).html());
  }
  )
  $(dataFairy).find(".vitals-table").each(function(){
      $('#items-description').html($(this).html());
}
)
  itemsbox.classList.remove("hide");
  itemsbox.classList.add("show");
  allmovesbox.classList.remove("show");
  allmovesbox.classList.add("hide");
  allabilitiesbox.classList.remove("show");
  allabilitiesbox.classList.add("hide");
  stats.classList.remove("show");
  stats.classList.add("hide");
  summary.classList.remove("show");
  summary.classList.add("hide");
  location.classList.remove("show");
  location.classList.add("hide");
  training.classList.add("hide");
  training.classList.remove("show");
  breeding.classList.add("hide");
  breeding.classList.remove("show");
  addMoveLink()
},
error: function() {
  allabilitiesbox.classList.remove("show");
  allabilitiesbox.classList.add("hide");
    stats.classList.add("hide");
    stats.classList.remove("show");
    summary.classList.add("hide");
    summary.classList.remove("show");
    training.classList.add("hide");
    training.classList.remove("show");
    breeding.classList.add("hide");
    breeding.classList.remove("show");
    location.classList.remove("show");
    location.classList.add("hide");
    moves.classList.add("hide");
    moves.classList.remove("show");
    error.classList.remove("hide");
    error.classList.add("show");
    allmovesbox.classList.remove("show");
    allmovesbox.classList.add("hide");
    itemsbox.classList.remove("show");
itemsbox.classList.add("hide");
}
 })
}
// FUNCTION TO APPEND TO MOVES
function appendValueToMoves () {
  var link = document.getElementById('moves-input'),
      protocol = link.protocol,
      newValue = this.value;
      var moveValue = newValue.replace(/ /g,"-");
      var allMoveValue = moveValue.replace(/,/g,"").replace(/'/g,"");

  $.ajax({
      url: 'https://pokemondb.net/move/'+allMoveValue.toLowerCase(),
      type: 'GET',
      asycn:false,
      success: function(fairyRes) {
        var dataFairy = $.parseHTML(fairyRes);  //<----try with $.parseHTML().
        $(dataFairy).find(".grid-col.span-md-8.span-lg-9").each(function(){
            $('#allmoves').html($(this).html());
  }
  )
  itemsbox.classList.remove("show");
  itemsbox.classList.add("hide");
  allmovesbox.classList.remove("hide");
  allmovesbox.classList.add("show");
  allabilitiesbox.classList.remove("show");
  allabilitiesbox.classList.add("hide");
  stats.classList.remove("show");
  stats.classList.add("hide");
  summary.classList.remove("show");
  summary.classList.add("hide");
  location.classList.remove("show");
  location.classList.add("hide");
  training.classList.add("hide");
  training.classList.remove("show");
  breeding.classList.add("hide");
  breeding.classList.remove("show");
  addMoveLink()
},
error: function() {
  allabilitiesbox.classList.remove("show");
  allabilitiesbox.classList.add("hide");
    stats.classList.add("hide");
    stats.classList.remove("show");
    summary.classList.add("hide");
    summary.classList.remove("show");
    training.classList.add("hide");
    training.classList.remove("show");
    breeding.classList.add("hide");
    breeding.classList.remove("show");
    location.classList.remove("show");
    location.classList.add("hide");
    moves.classList.add("hide");
    moves.classList.remove("show");
    error.classList.remove("hide");
    error.classList.add("show");
    allmovesbox.classList.remove("show");
    allmovesbox.classList.add("hide");
    itemsbox.classList.remove("show");
    itemsbox.classList.add("hide");
}
 })
}
// FUNCTION TO APPEND abilities
function appendValueToAbilities () {
  var link = document.getElementById('abilities-input'),
      protocol = link.protocol,
      newValue = this.value;
      var abilityValue = newValue.replace(/ /g,"-");
      var allAbilityValue = abilityValue.replace(/,/g,"").replace(/'/g,"");

  $.ajax({
      url: 'https://pokemondb.net/ability/'+allAbilityValue.toLowerCase(),
      type: 'GET',
      asycn:false,
      success: function(fairyRes) {
        var dataFairy = $.parseHTML(fairyRes);  //<----try with $.parseHTML().
        $(dataFairy).find(".grid-col.span-md-12.span-lg-6:first-child").each(function(){
            $('#allabilities-stats').html($(this).html());
  }),
  $(dataFairy).find(".grid-col.span-md-12.span-lg-6").each(function(){
      $('#allabilities-pokemon').html($(this).html());
}
),
  allabilitiesbox.classList.remove("hide");
  allabilitiesbox.classList.add("show");
  allmovesbox.classList.remove("show");
  allmovesbox.classList.add("hide");
  stats.classList.remove("show");
  stats.classList.add("hide");
  summary.classList.remove("show");
  summary.classList.add("hide");
  location.classList.remove("show");
  location.classList.add("hide");
  training.classList.add("hide");
  training.classList.remove("show");
  breeding.classList.add("hide");
  breeding.classList.remove("show");
  itemsbox.classList.remove("show");
  itemsbox.classList.add("hide");
  addAbilityLink()
},
error: function() {
    stats.classList.add("hide");
    stats.classList.remove("show");
    summary.classList.add("hide");
    summary.classList.remove("show");
    moves.classList.add("hide");
    moves.classList.remove("show");
    training.classList.add("hide");
    training.classList.remove("show");
    breeding.classList.add("hide");
    breeding.classList.remove("show");
    location.classList.remove("show");
    location.classList.add("hide");
    error.classList.remove("hide");
    error.classList.add("show");
    allabilitiesbox.classList.remove("show");
    allabilitiesbox.classList.add("hide");
    allmovesbox.classList.remove("show");
    allmovesbox.classList.add("hide");
    itemsbox.classList.remove("show");
    itemsbox.classList.add("hide");
}
 })
}

// GET INPUT VALUE FOR POKEMON NAME
var input = document.querySelector('input[name="pokemon"]');
input.addEventListener('change', appendValueToAnchor);

// GET INPUT FOR MOVE Search
var inputmoves = document.querySelector('input[name="moves"]');
inputmoves.addEventListener('change', appendValueToMoves);

// GET INPUT FOR ITEM Search
var inputitems = document.querySelector('input[name="items"]');
inputitems.addEventListener('change', appendValueToItems);

// GET INPUT FOR ABILITIES Search
var inputabilities = document.querySelector('input[name="abilities"]');
inputabilities.addEventListener('change', appendValueToAbilities);


// GET ITEMS BUTTON CLICK AND SHOW SEARCH BOX
var itemsButton = document.getElementById('items-button');
itemsButton.addEventListener("click", function() {
  allabilitiesbox.classList.remove("show");
  allabilitiesbox.classList.add("hide");
itemsbox.classList.toggle("show");
itemsbox.classList.toggle("hide");
stats.classList.remove("show");
stats.classList.add("hide");
summary.classList.remove("show");
summary.classList.add("hide");
training.classList.add("hide");
training.classList.remove("show");
breeding.classList.add("hide");
breeding.classList.remove("show");
location.classList.remove("show");
location.classList.add("hide");
allmovesbox.classList.remove("show");
allmovesbox.classList.add("hide");
});

// GET MOVE BUTTON CLICK AND SHOW SEARCH BOX
var allmoves2 = document.getElementById('allmoves-button');
allmoves2.addEventListener("click", function() {
  allabilitiesbox.classList.remove("show");
  allabilitiesbox.classList.add("hide");
allmovesbox.classList.toggle("show");
allmovesbox.classList.toggle("hide");
stats.classList.remove("show");
stats.classList.add("hide");
summary.classList.remove("show");
summary.classList.add("hide");
training.classList.add("hide");
training.classList.remove("show");
breeding.classList.add("hide");
breeding.classList.remove("show");
location.classList.remove("show");
location.classList.add("hide");
itemsbox.classList.remove("show");
itemsbox.classList.add("hide");
});

// GET ABILITIES BUTTON CLICK AND SHOW SEARCH BOX
var allabilitiesButton = document.getElementById('allabilities-button');
allabilitiesButton.addEventListener("click", function() {
allabilitiesbox.classList.toggle("show");
allabilitiesbox.classList.toggle("hide");
stats.classList.remove("show");
stats.classList.add("hide");
summary.classList.remove("show");
summary.classList.add("hide");
training.classList.add("hide");
training.classList.remove("show");
breeding.classList.add("hide");
breeding.classList.remove("show");
location.classList.remove("show");
location.classList.add("hide");
allmovesbox.classList.remove("show");
allmovesbox.classList.add("hide");
moves.classList.remove("show");
moves.classList.add("hide");
itemsbox.classList.remove("show");
itemsbox.classList.add("hide");
});

// GET CLICK FOR POKEMON TYPE
var typeElectric = document.getElementById('electric');
typeElectric.addEventListener('click', appendTypeElectric);
var typeGrass = document.getElementById('grass');
typeGrass.addEventListener('click', appendTypeGrass);
var typeFire = document.getElementById('fire');
typeFire.addEventListener('click', appendTypeFire);
var typeNormal = document.getElementById('normal');
typeNormal.addEventListener('click', appendTypeNormal);
var typeWater = document.getElementById('water');
typeWater.addEventListener('click', appendTypeWater);
var typeIce = document.getElementById('ice');
typeIce.addEventListener('click', appendTypeIce);
var typeFight = document.getElementById('fighting');
typeFight.addEventListener('click', appendTypeFight);
var typePoison = document.getElementById('poison');
typePoison.addEventListener('click', appendTypePoison);
var typeGround = document.getElementById('ground');
typeGround.addEventListener('click', appendTypeGround);
var typeFlying = document.getElementById('flying');
typeFlying.addEventListener('click', appendTypeFlying);
var typesPsychic = document.getElementById('psychic');
typesPsychic.addEventListener('click', appendTypePsychic);
var typesBug = document.getElementById('bug');
typesBug.addEventListener('click', appendTypeBug);
var typesRock = document.getElementById('rock');
typesRock.addEventListener('click', appendTypeRock);
var typesGhost = document.getElementById('ghost');
typesGhost.addEventListener('click', appendTypeGhost);
var typesDragon = document.getElementById('dragon');
typesDragon.addEventListener('click', appendTypeDragon);
var typesDark = document.getElementById('dark');
typesDark.addEventListener('click', appendTypeDark);
var typesSteel = document.getElementById('steel');
typesSteel.addEventListener('click', appendTypeSteel);
var typesFairy = document.getElementById('fairy');
typesFairy.addEventListener('click', appendTypeFairy);


const cursorSelect = document.getElementById('cursorSelect');
const cursors = document.getElementById('cursors');
 cursorSelect.addEventListener("click", function () {
 cursors.classList.toggle("hide");
 cursors.classList.toggle("show");
});

const credits = document.getElementById('credits');
const creditsShow = document.getElementById('creditsShow');
 credits.addEventListener("click", function () {
 creditsShow.classList.toggle("hide");
 creditsShow.classList.toggle("show");
});

const statshow = document.getElementById('statshow');
const find = document.getElementById('find');
 statshow.addEventListener("click", function () {
 stats.classList.toggle("hide");
 stats.classList.toggle("show");
 summary.classList.toggle("hide");
 summary.classList.toggle("show");
 training.classList.toggle("hide");
 training.classList.toggle("show");
 breeding.classList.toggle("hide");
 breeding.classList.toggle("show");
 location.classList.remove("show");
 location.classList.add("hide");
 moves.classList.remove("show");
 moves.classList.add("hide");
 allmovesbox.classList.remove("show");
 allmovesbox.classList.add("hide");
 allabilitiesbox.classList.remove("show");
 allabilitiesbox.classList.add("hide");
});

const evoshow = document.getElementById('evoshow');
const location= document.getElementById('location');
 evoshow.addEventListener("click", function () {
 location.classList.toggle("hide");
 location.classList.toggle("show");
 moves.classList.remove("show");
 moves.classList.add("hide");
 stats.classList.remove("show");
 stats.classList.add("hide");
 summary.classList.remove("show");
 summary.classList.add("hide");
 training.classList.add("hide");
 training.classList.remove("show");
 breeding.classList.add("hide");
 breeding.classList.remove("show");
 allmovesbox.classList.remove("show");
 allmovesbox.classList.add("hide");
 allabilitiesbox.classList.remove("show");
 allabilitiesbox.classList.add("hide");
});


const moveshow = document.getElementById('moveshow');
const moves= document.getElementById('moves');
 moveshow.addEventListener("click", function () {
 moves.classList.toggle("hide");
 moves.classList.toggle("show");
 stats.classList.remove("show");
 stats.classList.add("hide");
 summary.classList.remove("show");
 summary.classList.add("hide");
 training.classList.add("hide");
 training.classList.remove("show");
 breeding.classList.add("hide");
 breeding.classList.remove("show");
 location.classList.remove("show");
 location.classList.add("hide");
 allmovesbox.classList.remove("show");
 allmovesbox.classList.add("hide");
 allabilitiesbox.classList.remove("show");
 allabilitiesbox.classList.add("hide");
});

const imgshow = document.querySelector('input[name="pokemon"]');
const pokeimg = document.getElementById('pokemon-images');
const statsButton = document.getElementById('stats-button');
const movesButton = document.getElementById('moves-button');
const locationButton = document.getElementById('location-button');
 imgshow.addEventListener("change", function () {
   statsButton.classList.remove("hide");
   statsButton.classList.add("show");
   movesButton.classList.remove("hide");
   movesButton.classList.add("show");
   locationButton.classList.remove("hide");
   locationButton.classList.add("show");
 pokeimg.classList.remove("hide");
 pokeimg.classList.add("show");
 allmovesbox.classList.remove("show");
 allmovesbox.classList.add("hide");
 allabilitiesbox.classList.remove("show");
 allabilitiesbox.classList.add("hide");


});

const typeshow = document.getElementById('typeshow');
const type = document.getElementById('types');
 typeshow.addEventListener("click", function () {
 type.classList.toggle("hide");
 type.classList.toggle("show");

});
const typeclose = document.getElementById('typeclose');
const type2 = document.getElementById('types');
 typeclose.addEventListener("click", function () {
 type2.classList.toggle("hide");
 type2.classList.toggle("show");
});
const cursorclose = document.getElementById('cursorclose');
const cursorsbox = document.getElementById('cursors');
 cursorclose.addEventListener("click", function () {
 cursorsbox.classList.toggle("hide");
 cursorsbox.classList.toggle("show");
});
const creditsclose = document.getElementById('creditsclose');
 creditsclose.addEventListener("click", function () {
 creditsShow.classList.toggle("hide");
 creditsShow.classList.toggle("show");
});
// SHOW POKEMON TYPES CALL
const electricButton = document.getElementById('electric');
   const showElectric = document.getElementById('typesElectric');
electricButton.addEventListener("click", function () {
  showFairy.classList.add("hide");
  showFairy.classList.remove("show");
  showSteel.classList.add("hide");
  showSteel.classList.remove("show");
  showDragon.classList.add("hide");
  showDragon.classList.remove("show");
  showGhost.classList.add("hide");
  showGhost.classList.remove("show");
  showRock.classList.add("hide");
  showRock.classList.remove("show");
  showBug.classList.add("hide");
  showBug.classList.remove("show");
  showPsychic.classList.add("hide");
  showPsychic.classList.remove("show");
  showFlying.classList.add("hide");
  showFlying.classList.remove("show");
  showGround.classList.add("hide");
  showGround.classList.remove("show");
  showPoison.classList.add("hide");
  showPoison.classList.remove("show");
  showFight.classList.add("hide");
  showFight.classList.remove("show");
  showIce.classList.add("hide");
  showIce.classList.remove("show");
  showWater.classList.add("hide");
  showWater.classList.remove("show");
  showNormal.classList.add("hide");
showNormal.classList.remove("show");
    showGrass.classList.add("hide");
  showGrass.classList.remove("show");
  showFire.classList.add("hide");
showFire.classList.remove("show");
//MAIN CLASS SHOW
showElectric.classList.toggle("hide");
showElectric.classList.toggle("show");
     });
const grassButton = document.getElementById('grass');
   const showGrass = document.getElementById('typesGrass');
   grassButton.addEventListener("click", function () {
     showFairy.classList.add("hide");
     showFairy.classList.remove("show");
     showSteel.classList.add("hide");
     showSteel.classList.remove("show");
     showDark.classList.add("hide");
     showDark.classList.remove("show");
     showDragon.classList.add("hide");
     showDragon.classList.remove("show");
     showGhost.classList.add("hide");
     showGhost.classList.remove("show");
     showRock.classList.add("hide");
     showRock.classList.remove("show");
     showBug.classList.add("hide");
     showBug.classList.remove("show");
     showPsychic.classList.add("hide");
     showPsychic.classList.remove("show");
     showFlying.classList.add("hide");
     showFlying.classList.remove("show");
     showGround.classList.add("hide");
     showGround.classList.remove("show");
     showPoison.classList.add("hide");
     showPoison.classList.remove("show");
     showFight.classList.add("hide");
     showFight.classList.remove("show");
     showIce.classList.add("hide");
     showIce.classList.remove("show");
     showWater.classList.add("hide");
     showWater.classList.remove("show");
     showNormal.classList.add("hide");
   showNormal.classList.remove("show");
     showElectric.classList.add("hide");
    showElectric.classList.remove("show");
    showFire.classList.add("hide");
  showFire.classList.remove("show");
  // MAIN CLASS SHOW
   showGrass.classList.toggle("hide");
   showGrass.classList.toggle("show");
        });
const fireButton = document.getElementById('fire');
  const showFire = document.getElementById('typesFire');
        fireButton.addEventListener("click", function () {
          showFairy.classList.add("hide");
          showFairy.classList.remove("show");
          showSteel.classList.add("hide");
          showSteel.classList.remove("show");
          showDark.classList.add("hide");
          showDark.classList.remove("show");
          showDragon.classList.add("hide");
          showDragon.classList.remove("show");
          showGhost.classList.add("hide");
          showGhost.classList.remove("show");
          showRock.classList.add("hide");
          showRock.classList.remove("show");
          showBug.classList.add("hide");
          showBug.classList.remove("show");
          showPsychic.classList.add("hide");
          showPsychic.classList.remove("show");
          showFlying.classList.add("hide");
          showFlying.classList.remove("show");
          showGround.classList.add("hide");
          showGround.classList.remove("show");
          showPoison.classList.add("hide");
          showPoison.classList.remove("show");
          showFight.classList.add("hide");
          showFight.classList.remove("show");
          showIce.classList.add("hide");
          showIce.classList.remove("show");
          showWater.classList.add("hide");
          showWater.classList.remove("show");
          showNormal.classList.add("hide");
        showNormal.classList.remove("show");
          showGrass.classList.add("hide");
        showGrass.classList.remove("show");
          showElectric.classList.add("hide");
         showElectric.classList.remove("show");
  // MAIN CLASS SHOW
        showFire.classList.toggle("hide");
        showFire.classList.toggle("show");
             });
const normalButton = document.getElementById('normal');
  const showNormal = document.getElementById('typesNormal');
     normalButton.addEventListener("click", function () {
       showFairy.classList.add("hide");
       showFairy.classList.remove("show");
       showSteel.classList.add("hide");
       showSteel.classList.remove("show");
       showDark.classList.add("hide");
       showDark.classList.remove("show");
       showDragon.classList.add("hide");
       showDragon.classList.remove("show");
       showGhost.classList.add("hide");
       showGhost.classList.remove("show");
       showRock.classList.add("hide");
       showRock.classList.remove("show");
       showBug.classList.add("hide");
       showBug.classList.remove("show");
       showPsychic.classList.add("hide");
       showPsychic.classList.remove("show");
       showFlying.classList.add("hide");
       showFlying.classList.remove("show");
       showGround.classList.add("hide");
       showGround.classList.remove("show");
       showPoison.classList.add("hide");
       showPoison.classList.remove("show");
       showFight.classList.add("hide");
       showFight.classList.remove("show");
       showIce.classList.add("hide");
       showIce.classList.remove("show");
       showWater.classList.add("hide");
       showWater.classList.remove("show");
       showFire.classList.add("hide");
     showFire.classList.remove("show");
     showGrass.classList.add("hide");
      showGrass.classList.remove("show");
      showElectric.classList.add("hide");
      showElectric.classList.remove("show");
               // MAIN CLASS SHOW
      showNormal.classList.toggle("hide");
      showNormal.classList.toggle("show");
    });
  const waterButton = document.getElementById('water');
    const showWater = document.getElementById('typesWater');
          waterButton.addEventListener("click", function () {
            showFairy.classList.add("hide");
            showFairy.classList.remove("show");
            showSteel.classList.add("hide");
            showSteel.classList.remove("show");
            showDark.classList.add("hide");
            showDark.classList.remove("show");
            showDragon.classList.add("hide");
            showDragon.classList.remove("show");
            showGhost.classList.add("hide");
            showGhost.classList.remove("show");
            showRock.classList.add("hide");
            showRock.classList.remove("show");
            showBug.classList.add("hide");
            showBug.classList.remove("show");
            showPsychic.classList.add("hide");
            showPsychic.classList.remove("show");
            showFlying.classList.add("hide");
            showFlying.classList.remove("show");
            showGround.classList.add("hide");
            showGround.classList.remove("show");
            showPoison.classList.add("hide");
            showPoison.classList.remove("show");
            showFight.classList.add("hide");
            showFight.classList.remove("show");
            showIce.classList.add("hide");
            showIce.classList.remove("show");
            showNormal.classList.add("hide");
            showNormal.classList.remove("show");
          showFire.classList.add("hide");
          showFire.classList.remove("show");
          showGrass.classList.add("hide");
          showGrass.classList.remove("show");
          showElectric.classList.add("hide");
          showElectric.classList.remove("show");
      // MAIN CLASS SHOW
          showWater.classList.toggle("hide");
          showWater.classList.toggle("show");
  });
  const iceButton = document.getElementById('ice');
      const showIce = document.getElementById('typesIce');
      iceButton.addEventListener("click", function () {
        showFairy.classList.add("hide");
        showFairy.classList.remove("show");
        showSteel.classList.add("hide");
        showSteel.classList.remove("show");
        showDark.classList.add("hide");
        showDark.classList.remove("show");
        showDragon.classList.add("hide");
        showDragon.classList.remove("show");
        showGhost.classList.add("hide");
        showGhost.classList.remove("show");
        showRock.classList.add("hide");
        showRock.classList.remove("show");
        showBug.classList.add("hide");
        showBug.classList.remove("show");
        showPsychic.classList.add("hide");
        showPsychic.classList.remove("show");
        showFlying.classList.add("hide");
        showFlying.classList.remove("show");
        showGround.classList.add("hide");
        showGround.classList.remove("show");
        showPoison.classList.add("hide");
        showPoison.classList.remove("show");
        showFight.classList.add("hide");
        showFight.classList.remove("show");
      showWater.classList.add("hide");
      showWater.classList.remove("show");
      showNormal.classList.add("hide");
      showNormal.classList.remove("show");
      showFire.classList.add("hide");
      showFire.classList.remove("show");
      showGrass.classList.add("hide");
      showGrass.classList.remove("show");
      showElectric.classList.add("hide");
      showElectric.classList.remove("show");
    // MAIN CLASS SHOW
      showIce.classList.toggle("hide");
      showIce.classList.toggle("show");
    });
    const fightingButton = document.getElementById('fighting');
        const showFight = document.getElementById('typesFight');
        fightingButton.addEventListener("click", function () {
          showFairy.classList.add("hide");
          showFairy.classList.remove("show");
          showSteel.classList.add("hide");
          showSteel.classList.remove("show");
          showDark.classList.add("hide");
          showDark.classList.remove("show");
          showDragon.classList.add("hide");
          showDragon.classList.remove("show");
          showGhost.classList.add("hide");
          showGhost.classList.remove("show");
          showRock.classList.add("hide");
          showRock.classList.remove("show");
          showBug.classList.add("hide");
          showBug.classList.remove("show");
          showPsychic.classList.add("hide");
          showPsychic.classList.remove("show");
          showFlying.classList.add("hide");
          showFlying.classList.remove("show");
          showGround.classList.add("hide");
          showGround.classList.remove("show");
          showPoison.classList.add("hide");
          showPoison.classList.remove("show");
          showIce.classList.add("hide");
          showIce.classList.remove("show");
        showWater.classList.add("hide");
        showWater.classList.remove("show");
        showNormal.classList.add("hide");
        showNormal.classList.remove("show");
        showFire.classList.add("hide");
        showFire.classList.remove("show");
        showGrass.classList.add("hide");
        showGrass.classList.remove("show");
        showElectric.classList.add("hide");
        showElectric.classList.remove("show");
      // MAIN CLASS SHOW
        showFight.classList.toggle("hide");
        showFight.classList.toggle("show");
      });
      const poisonButton = document.getElementById('poison');
          const showPoison = document.getElementById('typesPoison');
          poisonButton.addEventListener("click", function () {
            showFairy.classList.add("hide");
            showFairy.classList.remove("show");
            showSteel.classList.add("hide");
            showSteel.classList.remove("show");
            showDark.classList.add("hide");
            showDark.classList.remove("show");
            showDragon.classList.add("hide");
            showDragon.classList.remove("show");
            showGhost.classList.add("hide");
            showGhost.classList.remove("show");
            showRock.classList.add("hide");
            showRock.classList.remove("show");
            showBug.classList.add("hide");
            showBug.classList.remove("show");
            showPsychic.classList.add("hide");
            showPsychic.classList.remove("show");
            showFlying.classList.add("hide");
            showFlying.classList.remove("show");
            showGround.classList.add("hide");
            showGround.classList.remove("show");
            showFight.classList.add("hide");
            showFight.classList.remove("show");
            showIce.classList.add("hide");
            showIce.classList.remove("show");
          showWater.classList.add("hide");
          showWater.classList.remove("show");
          showNormal.classList.add("hide");
          showNormal.classList.remove("show");
          showFire.classList.add("hide");
          showFire.classList.remove("show");
          showGrass.classList.add("hide");
          showGrass.classList.remove("show");
          showElectric.classList.add("hide");
          showElectric.classList.remove("show");
        // MAIN CLASS SHOW
          showPoison.classList.toggle("hide");
          showPoison.classList.toggle("show");
        });
        const groundButton = document.getElementById('ground');
            const showGround = document.getElementById('typesGround');
            groundButton.addEventListener("click", function () {
              showFairy.classList.add("hide");
              showFairy.classList.remove("show");
              showSteel.classList.add("hide");
              showSteel.classList.remove("show");
              showDark.classList.add("hide");
              showDark.classList.remove("show");
              showDragon.classList.add("hide");
              showDragon.classList.remove("show");
              showGhost.classList.add("hide");
              showGhost.classList.remove("show");
              showRock.classList.add("hide");
              showRock.classList.remove("show");
              showBug.classList.add("hide");
              showBug.classList.remove("show");
              showPsychic.classList.add("hide");
              showPsychic.classList.remove("show");
              showFlying.classList.add("hide");
              showFlying.classList.remove("show");
              showPoison.classList.add("hide");
              showPoison.classList.remove("show");
              showFight.classList.add("hide");
              showFight.classList.remove("show");
              showIce.classList.add("hide");
              showIce.classList.remove("show");
            showWater.classList.add("hide");
            showWater.classList.remove("show");
            showNormal.classList.add("hide");
            showNormal.classList.remove("show");
            showFire.classList.add("hide");
            showFire.classList.remove("show");
            showGrass.classList.add("hide");
            showGrass.classList.remove("show");
            showElectric.classList.add("hide");
            showElectric.classList.remove("show");
          // MAIN CLASS SHOW
            showGround.classList.toggle("hide");
            showGround.classList.toggle("show");
          });
          const flyingButton = document.getElementById('flying');
              const showFlying = document.getElementById('typesFlying');
              flyingButton.addEventListener("click", function () {
                showFairy.classList.add("hide");
                showFairy.classList.remove("show");
                showSteel.classList.add("hide");
                showSteel.classList.remove("show");
                showDark.classList.add("hide");
                showDark.classList.remove("show");
                showDragon.classList.add("hide");
                showDragon.classList.remove("show");
                showGhost.classList.add("hide");
                showGhost.classList.remove("show");
                showRock.classList.add("hide");
                showRock.classList.remove("show");
                showBug.classList.add("hide");
                showBug.classList.remove("show");
                showPsychic.classList.add("hide");
                showPsychic.classList.remove("show");
                showGround.classList.add("hide");
                showGround.classList.remove("show");
                showPoison.classList.add("hide");
                showPoison.classList.remove("show");
                showFight.classList.add("hide");
                showFight.classList.remove("show");
                showIce.classList.add("hide");
                showIce.classList.remove("show");
              showWater.classList.add("hide");
              showWater.classList.remove("show");
              showNormal.classList.add("hide");
              showNormal.classList.remove("show");
              showFire.classList.add("hide");
              showFire.classList.remove("show");
              showGrass.classList.add("hide");
              showGrass.classList.remove("show");
              showElectric.classList.add("hide");
              showElectric.classList.remove("show");
            // MAIN CLASS SHOW
              showFlying.classList.toggle("hide");
              showFlying.classList.toggle("show");
            });
            const psychicButton = document.getElementById('psychic');
                const showPsychic = document.getElementById('typesPsychic');
                psychicButton.addEventListener("click", function () {
                  showFairy.classList.add("hide");
                  showFairy.classList.remove("show");
                  showSteel.classList.add("hide");
                  showSteel.classList.remove("show");
                  showDark.classList.add("hide");
                  showDark.classList.remove("show");
                  showDragon.classList.add("hide");
                  showDragon.classList.remove("show");
                  showGhost.classList.add("hide");
                  showGhost.classList.remove("show");
                  showRock.classList.add("hide");
                  showRock.classList.remove("show");
                  showBug.classList.add("hide");
                  showBug.classList.remove("show");
                  showFlying.classList.add("hide");
                  showFlying.classList.remove("show");
                  showGround.classList.add("hide");
                  showGround.classList.remove("show");
                  showPoison.classList.add("hide");
                  showPoison.classList.remove("show");
                  showFight.classList.add("hide");
                  showFight.classList.remove("show");
                  showIce.classList.add("hide");
                  showIce.classList.remove("show");
                showWater.classList.add("hide");
                showWater.classList.remove("show");
                showNormal.classList.add("hide");
                showNormal.classList.remove("show");
                showFire.classList.add("hide");
                showFire.classList.remove("show");
                showGrass.classList.add("hide");
                showGrass.classList.remove("show");
                showElectric.classList.add("hide");
                showElectric.classList.remove("show");
              // MAIN CLASS SHOW
                showPsychic.classList.toggle("hide");
                showPsychic.classList.toggle("show");
              });
              const bugButton = document.getElementById('bug');
                  const showBug = document.getElementById('typesBug');
                  bugButton.addEventListener("click", function () {
                    showFairy.classList.add("hide");
                    showFairy.classList.remove("show");
                    showSteel.classList.add("hide");
                    showSteel.classList.remove("show");
                    showDark.classList.add("hide");
                    showDark.classList.remove("show");
                    showDragon.classList.add("hide");
                    showDragon.classList.remove("show");
                    showGhost.classList.add("hide");
                    showGhost.classList.remove("show");
                    showRock.classList.add("hide");
                    showRock.classList.remove("show");
                    showPsychic.classList.add("hide");
                    showPsychic.classList.remove("show");
                    showFlying.classList.add("hide");
                    showFlying.classList.remove("show");
                    showGround.classList.add("hide");
                    showGround.classList.remove("show");
                    showPoison.classList.add("hide");
                    showPoison.classList.remove("show");
                    showFight.classList.add("hide");
                    showFight.classList.remove("show");
                    showIce.classList.add("hide");
                    showIce.classList.remove("show");
                  showWater.classList.add("hide");
                  showWater.classList.remove("show");
                  showNormal.classList.add("hide");
                  showNormal.classList.remove("show");
                  showFire.classList.add("hide");
                  showFire.classList.remove("show");
                  showGrass.classList.add("hide");
                  showGrass.classList.remove("show");
                  showElectric.classList.add("hide");
                  showElectric.classList.remove("show");
                // MAIN CLASS SHOW
                  showBug.classList.toggle("hide");
                  showBug.classList.toggle("show");
                });
                const rockButton = document.getElementById('rock');
                    const showRock = document.getElementById('typesRock');
                    rockButton.addEventListener("click", function () {
                      showFairy.classList.add("hide");
                      showFairy.classList.remove("show");
                      showSteel.classList.add("hide");
                      showSteel.classList.remove("show");
                      showDark.classList.add("hide");
                      showDark.classList.remove("show");
                      showDragon.classList.add("hide");
                      showDragon.classList.remove("show");
                      showGhost.classList.add("hide");
                      showGhost.classList.remove("show");
                      showBug.classList.add("hide");
                      showBug.classList.remove("show");
                      showPsychic.classList.add("hide");
                      showPsychic.classList.remove("show");
                      showFlying.classList.add("hide");
                      showFlying.classList.remove("show");
                      showGround.classList.add("hide");
                      showGround.classList.remove("show");
                      showPoison.classList.add("hide");
                      showPoison.classList.remove("show");
                      showFight.classList.add("hide");
                      showFight.classList.remove("show");
                      showIce.classList.add("hide");
                      showIce.classList.remove("show");
                    showWater.classList.add("hide");
                    showWater.classList.remove("show");
                    showNormal.classList.add("hide");
                    showNormal.classList.remove("show");
                    showFire.classList.add("hide");
                    showFire.classList.remove("show");
                    showGrass.classList.add("hide");
                    showGrass.classList.remove("show");
                    showElectric.classList.add("hide");
                    showElectric.classList.remove("show");
                  // MAIN CLASS SHOW
                    showRock.classList.toggle("hide");
                    showRock.classList.toggle("show");
                  });
                  const ghostButton = document.getElementById('ghost');
                      const showGhost = document.getElementById('typesGhost');
                      ghostButton.addEventListener("click", function () {
                        showFairy.classList.add("hide");
                        showFairy.classList.remove("show");
                        showSteel.classList.add("hide");
                        showSteel.classList.remove("show");
                        showDark.classList.add("hide");
                        showDark.classList.remove("show");
                        showDragon.classList.add("hide");
                        showDragon.classList.remove("show");
                        showRock.classList.add("hide");
                        showRock.classList.remove("show");
                        showBug.classList.add("hide");
                        showBug.classList.remove("show");
                        showPsychic.classList.add("hide");
                        showPsychic.classList.remove("show");
                        showFlying.classList.add("hide");
                        showFlying.classList.remove("show");
                        showGround.classList.add("hide");
                        showGround.classList.remove("show");
                        showPoison.classList.add("hide");
                        showPoison.classList.remove("show");
                        showFight.classList.add("hide");
                        showFight.classList.remove("show");
                        showIce.classList.add("hide");
                        showIce.classList.remove("show");
                      showWater.classList.add("hide");
                      showWater.classList.remove("show");
                      showNormal.classList.add("hide");
                      showNormal.classList.remove("show");
                      showFire.classList.add("hide");
                      showFire.classList.remove("show");
                      showGrass.classList.add("hide");
                      showGrass.classList.remove("show");
                      showElectric.classList.add("hide");
                      showElectric.classList.remove("show");
                    // MAIN CLASS SHOW
                      showGhost.classList.toggle("hide");
                      showGhost.classList.toggle("show");
                    });
                    const dragonButton = document.getElementById('dragon');
                        const showDragon = document.getElementById('typesDragon');
                        dragonButton.addEventListener("click", function () {
                          showFairy.classList.add("hide");
                          showFairy.classList.remove("show");
                          showSteel.classList.add("hide");
                          showSteel.classList.remove("show");
                          showDark.classList.add("hide");
                          showDark.classList.remove("show");
                          showGhost.classList.add("hide");
                          showGhost.classList.remove("show");
                          showRock.classList.add("hide");
                          showRock.classList.remove("show");
                          showBug.classList.add("hide");
                          showBug.classList.remove("show");
                          showPsychic.classList.add("hide");
                          showPsychic.classList.remove("show");
                          showFlying.classList.add("hide");
                          showFlying.classList.remove("show");
                          showGround.classList.add("hide");
                          showGround.classList.remove("show");
                          showPoison.classList.add("hide");
                          showPoison.classList.remove("show");
                          showFight.classList.add("hide");
                          showFight.classList.remove("show");
                          showIce.classList.add("hide");
                          showIce.classList.remove("show");
                        showWater.classList.add("hide");
                        showWater.classList.remove("show");
                        showNormal.classList.add("hide");
                        showNormal.classList.remove("show");
                        showFire.classList.add("hide");
                        showFire.classList.remove("show");
                        showGrass.classList.add("hide");
                        showGrass.classList.remove("show");
                        showElectric.classList.add("hide");
                        showElectric.classList.remove("show");
                      // MAIN CLASS SHOW
                        showDragon.classList.toggle("hide");
                        showDragon.classList.toggle("show");
                      });
                      const darkButton = document.getElementById('dark');
                          const showDark = document.getElementById('typesDark');
                          darkButton.addEventListener("click", function () {
                            showFairy.classList.add("hide");
                            showFairy.classList.remove("show");
                            showSteel.classList.add("hide");
                            showSteel.classList.remove("show");
                            showDragon.classList.add("hide");
                            showDragon.classList.remove("show");
                            showGhost.classList.add("hide");
                            showGhost.classList.remove("show");
                            showRock.classList.add("hide");
                            showRock.classList.remove("show");
                            showBug.classList.add("hide");
                            showBug.classList.remove("show");
                            showPsychic.classList.add("hide");
                            showPsychic.classList.remove("show");
                            showFlying.classList.add("hide");
                            showFlying.classList.remove("show");
                            showGround.classList.add("hide");
                            showGround.classList.remove("show");
                            showPoison.classList.add("hide");
                            showPoison.classList.remove("show");
                            showFight.classList.add("hide");
                            showFight.classList.remove("show");
                            showIce.classList.add("hide");
                            showIce.classList.remove("show");
                          showWater.classList.add("hide");
                          showWater.classList.remove("show");
                          showNormal.classList.add("hide");
                          showNormal.classList.remove("show");
                          showFire.classList.add("hide");
                          showFire.classList.remove("show");
                          showGrass.classList.add("hide");
                          showGrass.classList.remove("show");
                          showElectric.classList.add("hide");
                          showElectric.classList.remove("show");
                        // MAIN CLASS SHOW
                          showDark.classList.toggle("hide");
                          showDark.classList.toggle("show");
                        });
                        const steelButton = document.getElementById('steel');
                            const showSteel = document.getElementById('typesSteel');
                            steelButton.addEventListener("click", function () {
                              showFairy.classList.add("hide");
                              showFairy.classList.remove("show");
                              showDark.classList.add("hide");
                              showDark.classList.remove("show");
                              showDragon.classList.add("hide");
                              showDragon.classList.remove("show");
                              showGhost.classList.add("hide");
                              showGhost.classList.remove("show");
                              showRock.classList.add("hide");
                              showRock.classList.remove("show");
                              showBug.classList.add("hide");
                              showBug.classList.remove("show");
                              showPsychic.classList.add("hide");
                              showPsychic.classList.remove("show");
                              showFlying.classList.add("hide");
                              showFlying.classList.remove("show");
                              showGround.classList.add("hide");
                              showGround.classList.remove("show");
                              showPoison.classList.add("hide");
                              showPoison.classList.remove("show");
                              showFight.classList.add("hide");
                              showFight.classList.remove("show");
                              showIce.classList.add("hide");
                              showIce.classList.remove("show");
                            showWater.classList.add("hide");
                            showWater.classList.remove("show");
                            showNormal.classList.add("hide");
                            showNormal.classList.remove("show");
                            showFire.classList.add("hide");
                            showFire.classList.remove("show");
                            showGrass.classList.add("hide");
                            showGrass.classList.remove("show");
                            showElectric.classList.add("hide");
                            showElectric.classList.remove("show");
                          // MAIN CLASS SHOW
                            showSteel.classList.toggle("hide");
                            showSteel.classList.toggle("show");
                          });
                          const fairyButton = document.getElementById('fairy');
                              const showFairy = document.getElementById('typesFairy');
                              fairyButton.addEventListener("click", function () {
                                showSteel.classList.add("hide");
                                showSteel.classList.remove("show");
                                showDark.classList.add("hide");
                                showDark.classList.remove("show");
                                showDragon.classList.add("hide");
                                showDragon.classList.remove("show");
                                showGhost.classList.add("hide");
                                showGhost.classList.remove("show");
                                showRock.classList.add("hide");
                                showRock.classList.remove("show");
                                showBug.classList.add("hide");
                                showBug.classList.remove("show");
                                showPsychic.classList.add("hide");
                                showPsychic.classList.remove("show");
                                showFlying.classList.add("hide");
                                showFlying.classList.remove("show");
                                showGround.classList.add("hide");
                                showGround.classList.remove("show");
                                showPoison.classList.add("hide");
                                showPoison.classList.remove("show");
                                showFight.classList.add("hide");
                                showFight.classList.remove("show");
                                showIce.classList.add("hide");
                                showIce.classList.remove("show");
                              showWater.classList.add("hide");
                              showWater.classList.remove("show");
                              showNormal.classList.add("hide");
                              showNormal.classList.remove("show");
                              showFire.classList.add("hide");
                              showFire.classList.remove("show");
                              showGrass.classList.add("hide");
                              showGrass.classList.remove("show");
                              showElectric.classList.add("hide");
                              showElectric.classList.remove("show");
                            // MAIN CLASS SHOW
                              showFairy.classList.toggle("hide");
                              showFairy.classList.toggle("show");
                            });
//const pokesearch = document.getElementById('btn-search');
//const search = document.getElementById('search');
 //pokesearch.addEventListener("click", function () {
 //search.classList.toggle("hide");
 //search.classList.toggle("show");
  //  console.log("Clicked");
//});
const shinyshow = document.getElementById('shinyshow');
const shinybox = document.getElementById('shinybox');
 shinyshow.addEventListener("click", function () {
 shinybox.classList.toggle("hide");
 shinybox.classList.toggle("show");
 normalbox.classList.add("hide");
 normalbox.classList.remove("show");
 sprite.classList.add("hide");
 sprite.classList.remove("show");
 pokeart.classList.add("show");
 pokeart.classList.remove("hide");
    console.log("Clicked");
});
const normalshow = document.getElementById('normalshow');
const normalbox = document.getElementById('normalbox');
 normalshow.addEventListener("click", function () {
 normalbox.classList.toggle("hide");
 normalbox.classList.toggle("show");
 shinybox.classList.add("hide");
 shinybox.classList.remove("show");
 sprite.classList.add("hide");
 sprite.classList.remove("show");
 pokeart.classList.add("show");
 pokeart.classList.remove("hide");
    console.log("Clicked");
});
const spriteshow = document.getElementById('spriteshow');
const sprite = document.getElementById('sprite');
 spriteshow.addEventListener("click", function () {
 sprite.classList.toggle("hide");
 sprite.classList.toggle("show");
 shinybox.classList.add("hide");
 shinybox.classList.remove("show");
 normalbox.classList.add("hide");
 normalbox.classList.remove("show");
 pokeart.classList.add("show");
 pokeart.classList.remove("hide");
    console.log("Clicked");
});
$( function() {
var availableAbilities = ["Adaptability", "Aerilate", "Aftermath", "Air Lock", "Analytic", "Anger Point", "Anticipation", "Arena Trap", "Aroma Veil", "As One", "Aura Break", "Bad Dreams", "Ball Fetch", "Battery", "Battle Armor", "Battle Bond", "Beast Boost", "Berserk", "Big Pecks", "Blaze", "Bulletproof", "Cheek Pouch", "Chilling Neigh", "Chlorophyll", "Clear Body", "Cloud Nine", "Color Change", "Comatose", "Competitive", "Compound Eyes", "Contrary", "Corrosion", "Cotton Down", "Curious Medicine", "Cursed Body", "Cute Charm", "Damp", "Dancer", "Dark Aura", "Dauntless Shield", "Dazzling", "Defeatist", "Defiant", "Delta Stream", "Desolate Land", "Disguise", "Download", "Dragon's Maw", "Drizzle", "Drought", "Dry Skin", "Early Bird", "Effect Spore", "Electric Surge", "Emergency Exit", "Fairy Aura", "Filter", "Flame Body", "Flare Boost", "Flash Fire", "Flower Gift", "Flower Veil", "Fluffy", "Forecast", "Forewarn", "Friend Guard", "Frisk", "Full Metal Body", "Fur Coat", "Gale Wings", "Galvanize", "Gluttony", "Gooey", "Gorilla Tactics", "Grass Pelt", "Grassy Surge", "Grim Neigh", "Gulp Missile", "Guts", "Harvest", "Healer", "Heatproof", "Heavy Metal", "Honey Gather", "Huge Power", "Hunger Switch", "Hustle", "Hydration", "Hyper Cutter", "Ice Body", "Ice Face", "Ice Scales", "Illuminate", "Illusion", "Immunity", "Imposter", "Infiltrator", "Innards Out", "Inner Focus", "Insomnia", "Intimidate", "Intrepid Sword", "Iron Barbs", "Iron Fist", "Justified", "Keen Eye", "Klutz", "Leaf Guard", "Levitate", "Libero", "Light Metal", "Lightning Rod", "Limber", "Liquid Ooze", "Liquid Voice", "Long Reach", "Magic Bounce", "Magic Guard", "Magician", "Magma Armor", "Magnet Pull", "Marvel Scale", "Mega Launcher", "Merciless", "Mimicry", "Minus", "Mirror Armor", "Misty Surge", "Mold Breaker", "Moody", "Motor Drive", "Moxie", "Multiscale", "Multitype", "Mummy", "Natural Cure", "Neuroforce", "Neutralizing Gas", "No Guard", "Normalize", "Oblivious", "Overcoat", "Overgrow", "Own Tempo", "Parental Bond", "Pastel Veil", "Perish Body", "Pickpocket", "Pickup", "Pixilate", "Plus", "Poison Heal", "Poison Point", "Poison Touch", "Power Construct", "Power of Alchemy", "Power Spot", "Prankster", "Pressure", "Primordial Sea", "Prism Armor", "Propeller Tail", "Protean", "Psychic Surge", "Punk Rock", "Pure Power", "Queenly Majesty", "Quick Draw", "Quick Feet", "Rain Dish", "Rattled", "Receiver", "Reckless", "Refrigerate", "Regenerator", "Ripen", "Rivalry", "RKS System", "Rock Head", "Rough Skin", "Run Away", "Sand Force", "Sand Rush", "Sand Spit", "Sand Stream", "Sand Veil", "Sap Sipper", "Schooling", "Scrappy", "Screen Cleaner", "Serene Grace", "Shadow Shield", "Shadow Tag", "Shed Skin", "Sheer Force", "Shell Armor", "Shield Dust", "Shields Down", "Simple", "Skill Link", "Slow Start", "Slush Rush", "Sniper", "Snow Cloak", "Snow Warning", "Solar Power", "Solid Rock", "Soul-Heart", "Soundproof", "Speed Boost", "Stakeout", "Stall", "Stalwart", "Stamina", "Stance Change", "Static", "Steadfast", "Steam Engine", "Steelworker", "Steely Spirit", "Stench", "Sticky Hold", "Storm Drain", "Strong Jaw", "Sturdy", "Suction Cups", "Super Luck", "Surge Surfer", "Swarm", "Sweet Veil", "Swift Swim", "Symbiosis", "Synchronize", "Tangled Feet", "Tangling Hair", "Technician", "Telepathy", "Teravolt", "Thick Fat", "Tinted Lens", "Torrent", "Tough Claws", "Toxic Boost", "Trace", "Transistor", "Triage", "Truant", "Turboblaze", "Unaware", "Unburden", "Unnerve", "Unseen Fist", "Victory Star", "Vital Spirit", "Volt Absorb", "Wandering Spirit", "Water Absorb", "Water Bubble", "Water Compaction", "Water Veil", "Weak Armor", "White Smoke", "Wimp Out", "Wonder Guard", "Wonder Skin", "Zen Mode"];
$( "#abilities-input" ).autocomplete({
  source: availableAbilities,
  minLength:2,
  autoFocus: true
});
} );

$( function() {
    var availableItems = ["Ability Capsule", "Ability Patch", "Ability Urge", "Abomasite", "Absolite", "Absorb Bulb", "Adamant Mint", "Adamant Orb", "Adrenaline Orb", "Aerodactylite", "Aggronite", "Aguav Berry", "Air Balloon", "Alakazite", "Aloraichium Z", "Altarianite", "Ampharosite", "Amulet Coin", "Antidote", "Apicot Berry", "Armor Fossil", "Armorite Ore", "Aspear Berry", "Assault Vest", "Audinite", "Awakening", "Babiri Berry", "Bach's Food Tin", "Balm Mushroom", "Banettite", "Beach Glass", "Beast Ball", "Beedrillite", "Belue Berry", "Berry Juice", "Berry Sweet", "Big Malasada", "Big Mushroom", "Big Nugget", "Big Pearl", "Big Root", "Binding Band", "Black Apricorn", "Black Belt", "Black Flute", "Black Glasses", "Black Sludge", "Blastoisinite", "Blazikenite", "Blue Apricorn", "Blue Flute", "Blue Scarf", "Blue Shard", "Bluk Berry", "Blunder Policy", "Bob's Food Tin", "Boiled Egg", "Bold Mint", "Bottle Cap", "Brave Mint", "Bread", "Bright Powder", "Brittle Bones", "Bug Gem", "Bug Memory", "Buginium Z", "Burn Drive", "Burn Heal", "Calcium", "Calm Mint", "Cameruptite", "Carbos", "Careful Mint", "Carrot Seeds", "Casteliacone", "Cell Battery", "Chalky Stone", "Charcoal", "Charizardite X", "Charizardite Y", "Charti Berry", "Cheri Berry", "Cherish Ball", "Chesto Berry", "Chilan Berry", "Chill Drive", "Chipped Pot", "Choice Band", "Choice Scarf", "Choice Specs", "Chople Berry", "Claw Fossil", "Cleanse Tag", "Clever Wing", "Clover Sweet", "Coba Berry", "Coconut Milk", "Colbur Berry", "Comet Shard", "Cornn Berry", "Courage Candy", "Courage Candy L", "Courage Candy XL", "Cover Fossil", "Cracked Pot", "Custap Berry", "Damp Mulch", "Damp Rock", "Dark Gem", "Dark Memory", "Darkinium Z", "Dawn Stone", "Decidium Z", "Deep Sea Scale", "Deep Sea Tooth", "Destiny Knot", "Diancite", "Dire Hit", "Dire Hit 2", "Dire Hit 3", "Discount Coupon", "Dive Ball", "DNA Splicers", "Dome Fossil", "Douse Drive", "Draco Plate", "Dragon Fang", "Dragon Gem", "Dragon Memory", "Dragon Scale", "Dragonium Z", "Dread Plate", "Dream Ball", "Dropped Item", "Dubious Disc", "Durin Berry", "Dusk Ball", "Dusk Stone", "Dynamax Candy", "Dynite Ore", "Earth Plate", "Eevium Z", "Eject Button", "Eject Pack", "Electirizer", "Electric Gem", "Electric Memory", "Electric Seed", "Electrium Z", "Elevator Key", "Elixir", "Energy Powder", "Energy Root", "Enigma Berry", "Escape Rope", "Ether", "Everstone", "Eviolite", "Exp. Candy L", "Exp. Candy M", "Exp. Candy S", "Exp. Candy XL", "Exp. Candy XS", "Exp. Share", "Expert Belt", "Fairium Z", "Fairy Gem", "Fairy Memory", "Fancy Apple", "Fast Ball", "Festival Ticket", "Fighting Gem", "Fighting Memory", "Fightinium Z", "Figy Berry", "Fire Gem", "Fire Memory", "Fire Stone", "Firium Z", "Fist Plate", "Flame Orb", "Flame Plate", "Float Stone", "Flower Sweet", "Fluffy Tail", "Flying Gem", "Flying Memory", "Flyinium Z", "Focus Band", "Focus Sash", "Fossilized Bird", "Fossilized Dino", "Fossilized Drake", "Fossilized Fish", "Fresh Cream", "Fresh Water", "Fried Food", "Friend Ball", "Fruit Bunch", "Full Heal", "Full Incense", "Full Restore", "Galarica Cuff", "Galarica Twig", "Galarica Wreath", "Galladite", "Ganlon Berry", "Garchompite", "Gardevoirite", "Gengarite", "Genius Wing", "Gentle Mint", "Ghost Gem", "Ghost Memory", "Ghostium Z", "Gigantamix", "Glalitite", "Gold Bottle Cap", "Gold Leaf", "Golden Nanab Berry", "Golden Pinap Berry", "Golden Razz Berry", "Gooey Mulch", "Grass Gem", "Grass Memory", "Grassium Z", "Grassy Seed", "Great Ball", "Green Apricorn", "Green Scarf", "Green Shard", "Grepa Berry", "Grip Claw", "Griseous Orb", "Ground Gem", "Ground Memory", "Groundium Z", "Growth Mulch", "Grubby Hanky", "Guard Spec", "Gyaradosite", "Haban Berry", "Hard Stone", "Hasty Mint", "Heal Ball", "Heal Powder", "Health Candy", "Health Candy L", "Health Candy XL", "Health Wing", "Heart Scale", "Heat Rock", "Heavy Ball", "Heavy-Duty Boots", "Helix Fossil", "Heracronite", "Hi-tech Earbuds", "HM01", "HM02", "HM03", "HM04", "HM05", "HM06", "HM07", "HM08", "Hondew Berry", "Honey", "Honor Of Kalos", "Houndoominite", "HP Up", "Hyper Potion", "Iapapa Berry", "Ice Gem", "Ice Heal", "Ice Memory", "Ice Stone", "Iceroot Carrot", "Icicle Plate", "Icium Z", "Icy Rock", "Impish Mint", "Incinium Z", "Insect Plate", "Instant Noodles", "Intriguing Stone", "Iron", "Iron Ball", "Iron Plate", "Item Drop", "Item Urge", "Jaboca Berry", "Jolly Mint", "Kangaskhanite", "Kasib Berry", "Kebia Berry", "Kee Berry", "Kelpsy Berry", "King's Rock", "Kommonium Z", "Lagging Tail", "Lansat Berry", "Large Leek", "Latiasite", "Latiosite", "Lava Cookie", "Lax Incense", "Lax Mint", "Leaf Letter", "Leaf Stone", "Leek", "Leftovers", "Lemonade", "Leppa Berry", "Level Ball", "Liechi Berry", "Life Orb", "Light Ball", "Light Clay", "Lone Earring", "Lonely Mint", "Looker Ticket", "Lopunnite", "Love Ball", "Love Sweet", "Lucarionite", "Luck Incense", "Lucky Egg", "Lucky Punch", "Lum Berry", "Luminous Moss", "Lumiose Galette", "Lunalium Z", "Lure", "Lure Ball", "Lustrous Orb", "Luxury Ball", "Lycanium Z", "Macho Brace", "Magmarizer", "Magnet", "Mago Berry", "Magost Berry", "Manectite", "Maranga Berry", "Marble", "Marshadium Z", "Master Ball", "Mawilite", "Max Elixir", "Max Ether", "Max Honey", "Max Lure", "Max Mushrooms", "Max Potion", "Max Repel", "Max Revive", "Meadow Plate", "Medichamite", "Mental Herb", "Metagrossite", "Metal Coat", "Metal Powder", "Metronome", "Mewnium Z", "Mewtwonite X", "Mewtwonite Y", "Micle Berry", "Mighty Candy", "Mighty Candy L", "Mighty Candy XL", "Mild Mint", "Mimikium Z", "Mind Plate", "Miracle Seed", "Misty Seed", "Mixed Mushrooms", "Modest Mint", "Moomoo Cheese", "Moomoo Milk", "Moon Ball", "Moon Stone", "Muscle Band", "Muscle Wing", "Mystic Water", "Naive Mint", "Nanab Berry", "Naughty Mint", "Nest Ball", "Net Ball", "Never-Melt Ice", "Nomel Berry", "Normal Gem", "Normalium Z", "Nugget", "Occa Berry", "Odd Incense", "Odd Keystone", "Old Amber", "Old Gateau", "Oran Berry", "Oval Charm", "Oval Stone", "Pack of Potatoes", "Packaged Curry", "Pamtre Berry", "Paralyze Heal", "Park Ball", "Pass Orb", "Passho Berry", "Pasta", "Payapa Berry", "Pearl", "Pearl String", "Pecha Berry", "Permit", "Persim Berry", "Petaya Berry", "Pewter Crunchies", "Pidgeotite", "Pikanium Z", "Pikashunium Z", "Pinap Berry", "Pink Apricorn", "Pink Nectar", "Pink Scarf", "Pinsirite", "Pixie Plate", "Plasma Card", "Plume Fossil", "Poison Barb", "Poison Gem", "Poison Memory", "Poisonium Z", "Poké Ball", "Poké Doll", "Poké Toy", "Polished Mud Ball", "Pomeg Berry", "Potion", "Power Anklet", "Power Band", "Power Belt", "Power Bracer", "Power Herb", "X Attack 6", "X Defense", "X Defense 2", "X Defense 3", "X Defense 6", "X Sp. Atk", "X Sp. Atk 2", "X Sp. Atk 3", "X Sp. Atk 6", "X Sp. Def", "X Sp. Def 2", "X Sp. Def 3", "X Sp. Def 6", "X Speed", "X Speed 2", "X Speed 3", "X Speed 6", "Yache Berry", "Yellow Apricorn", "Yellow Flute", "Yellow Nectar", "Yellow Scarf", "Yellow Shard", "Zap Plate", "Zinc", "Zoom Lens"];


    $( "#items-input" ).autocomplete({
      source: availableItems,
      minLength:2,
      autoFocus: true
    });
      } );


$( function() {
    var availableMoves = ["10,000,000 Volt Thunderbolt", "Absorb", "Accelerock", "Acid", "Acid Armor", "Acid Downpour", "Acid Spray", "Acrobatics", "Acupressure", "Aerial Ace", "Aeroblast", "After You", "Agility", "Air Cutter", "Air Slash", "All-Out Pummeling", "Ally Switch", "Amnesia", "Anchor Shot", "Ancient Power", "Apple Acid", "Aqua Jet", "Aqua Ring", "Aqua Tail", "Arm Thrust", "Aromatherapy", "Aromatic Mist", "Assist", "Assurance", "Astonish", "Astral Barrage", "Attack Order", "Attract", "Aura Sphere", "Aura Wheel", "Aurora Beam", "Aurora Veil", "Autotomize", "Avalanche", "Baby-Doll Eyes", "Baddy Bad", "Baneful Bunker", "Barrage", "Barrier", "Baton Pass", "Beak Blast", "Beat Up", "Behemoth Bash", "Behemoth Blade", "Belch", "Belly Drum", "Bestow", "Bide", "Bind", "Bite", "Black Hole Eclipse", "Blast Burn", "Blaze Kick", "Blizzard", "Block", "Bloom Doom", "Blue Flare", "Body Press", "Body Slam", "Bolt Beak", "Bolt Strike", "Bone Club", "Bone Rush", "Bonemerang", "Boomburst", "Bounce", "Bouncy Bubble", "Branch Poke", "Brave Bird", "Breaking Swipe", "Breakneck Blitz", "Brick Break", "Brine", "Brutal Swing", "Bubble", "Bubble Beam", "Bug Bite", "Bug Buzz", "Bulk Up", "Bulldoze", "Bullet Punch", "Bullet Seed", "Burn Up", "Burning Jealousy", "Buzzy Buzz", "Calm Mind", "Camouflage", "Captivate", "Catastropika", "Celebrate", "Charge", "Charge Beam", "Charm", "Chatter", "Chip Away", "Circle Throw", "Clamp", "Clanging Scales", "Clangorous Soul", "Clangorous Soulblaze", "Clear Smog", "Close Combat", "Coaching", "Coil", "Comet Punch", "Confide", "Confuse Ray", "Confusion", "Constrict", "Continental Crush", "Conversion", "Conversion 2", "Copycat", "Core Enforcer", "Corkscrew Crash", "Corrosive Gas", "Cosmic Power", "Cotton Guard", "Cotton Spore", "Counter", "Court Change", "Covet", "Crabhammer", "Crafty Shield", "Cross Chop", "Cross Poison", "Crunch", "Crush Claw", "Crush Grip", "Curse", "Cut", "Dark Pulse", "Dark Void", "Darkest Lariat", "Dazzling Gleam", "Decorate", "Defend Order", "Defense Curl", "Defog", "Destiny Bond", "Detect", "Devastating Drake", "Diamond Storm", "Dig", "Disable", "Disarming Voice", "Discharge", "Dive", "Dizzy Punch", "Doom Desire", "Double Hit", "Double Iron Bash", "Double Kick", "Double Slap", "Double Team", "Double-Edge", "Draco Meteor", "Dragon Ascent", "Dragon Breath", "Dragon Claw", "Dragon Dance", "Dragon Darts", "Dragon Energy", "Dragon Hammer", "Dragon Pulse", "Dragon Rage", "Dragon Rush", "Dragon Tail", "Drain Punch", "Draining Kiss", "Dream Eater", "Drill Peck", "Drill Run", "Drum Beating", "Dual Chop", "Dual Wingbeat", "Dynamax Cannon", "Dynamic Punch", "Earth Power", "Earthquake", "Echoed Voice", "Eerie Impulse", "Eerie Spell", "Egg Bomb", "Electric Terrain", "Electrify", "Electro Ball", "Electroweb", "Embargo", "Ember", "Encore", "Endeavor", "Endure", "Energy Ball", "Entrainment", "Eruption", "Eternabeam", "Expanding Force", "Explosion", "Extrasensory", "Extreme Evoboost", "Extreme Speed", "Facade", "Fairy Lock", "Fairy Wind", "Fake Out", "Fake Tears", "False Surrender", "False Swipe", "Feather Dance", "Feint", "Feint Attack", "Fell Stinger", "Fiery Dance", "Fiery Wrath", "Final Gambit", "Fire Blast", "Fire Fang", "Fire Lash", "Fire Pledge", "Fire Punch", "Fire Spin", "First Impression", "Fishious Rend", "Fissure", "Flail", "Flame Burst", "Flame Charge", "Flame Wheel", "Flamethrower", "Flare Blitz", "Flash", "Flash Cannon", "Flatter", "Fleur Cannon", "Fling", "Flip Turn", "Floaty Fall", "Floral Healing", "Flower Shield", "Fly", "Flying Press", "Focus Blast", "Focus Energy", "Focus Punch", "Follow Me", "Force Palm", "Foresight", "Forest's Curse", "Foul Play", "Freeze Shock", "Freeze-Dry", "Freezing Glare", "Freezy Frost", "Frenzy Plant", "Frost Breath", "Frustration", "Fury Attack", "Fury Cutter", "Fury Swipes", "Fusion Bolt", "Fusion Flare", "Future Sight", "G-Max Befuddle", "G-Max Cannonade", "G-Max Centiferno", "G-Max Chi Strike", "G-Max Cuddle", "G-Max Depletion", "G-Max Drum Solo", "G-Max Finale", "G-Max Fireball", "G-Max Foam Burst", "G-Max Gold Rush", "G-Max Gravitas", "G-Max Hydrosnipe", "G-Max Malodor", "G-Max Meltdown", "G-Max One Blow", "G-Max Rapid Flow", "G-Max Replenish", "G-Max Resonance", "G-Max Sandblast", "G-Max Smite", "G-Max Snooze", "G-Max Steelsurge", "G-Max Stonesurge", "G-Max Stun Shock", "G-Max Sweetness", "G-Max Tartness", "G-Max Terror", "G-Max Vine Lash", "G-Max Volcalith", "G-Max Volt Crash", "G-Max Wildfire", "G-Max Wind Rage", "Gastro Acid", "Gear Grind", "Gear Up", "Genesis Supernova", "Geomancy", "Giga Drain", "Giga Impact", "Gigavolt Havoc", "Glacial Lance", "Glaciate", "Glare", "Glitzy Glow", "Grass Knot", "Grass Pledge", "Grass Whistle", "Grassy Glide", "Grassy Terrain", "Grav Apple", "Gravity", "Growl", "Growth", "Grudge", "Guard Split", "Guard Swap", "Guardian of Alola", "Guillotine", "Gunk Shot", "Gust", "Gyro Ball", "Hail", "Hammer Arm", "Happy Hour", "Harden", "Haze", "Head Charge", "Head Smash", "Headbutt", "Heal Bell", "Heal Block", "Heal Order", "Heal Pulse", "Healing Wish", "Heart Stamp", "Heart Swap", "Heat Crash", "Heat Wave", "Heavy Slam", "Helping Hand", "Hex", "Hidden Power", "High Horsepower", "High Jump Kick", "Hold Back", "Hold Hands", "Hone Claws", "Horn Attack", "Horn Drill", "Horn Leech", "Howl", "Hurricane", "Hydro Cannon", "Hydro Pump", "Hydro Vortex", "Hyper Beam", "Hyper Fang", "Hyper Voice", "Hyperspace Fury", "Hyperspace Hole", "Hypnosis", "Ice Ball", "Ice Beam", "Ice Burn", "Ice Fang", "Ice Hammer", "Ice Punch", "Ice Shard", "Icicle Crash", "Icicle Spear", "Icy Wind", "Imprison", "Incinerate", "Inferno", "Inferno Overdrive", "Infestation", "Ingrain", "Instruct", "Ion Deluge", "Iron Defense", "Iron Head", "Iron Tail", "Jaw Lock", "Judgment", "Jump Kick", "Jungle Healing", "Karate Chop", "Kinesis", "King's Shield", "Knock Off", "Land's Wrath", "Laser Focus", "Lash Out", "Last Resort", "Lava Plume", "Leaf Blade", "Leaf Storm", "Leaf Tornado", "Leafage", "Leech Life", "Leech Seed", "Leer", "Let's Snuggle Forever", "Lick", "Life Dew", "Light of Ruin", "Light Screen", "Light That Burns the Sky", "Liquidation", "Lock-On", "Lovely Kiss", "Low Kick", "Low Sweep", "Lucky Chant", "Lunar Dance", "Lunge", "Luster Purge", "Mach Punch", "Magic Coat", "Magic Powder", "Magic Room", "Magical Leaf", "Magma Storm", "Magnet Bomb", "Magnet Rise", "Magnetic Flux", "Magnitude", "Malicious Moonsault", "Mat Block", "Max Airstream", "Max Darkness", "Max Flare", "Max Flutterby", "Max Geyser", "Max Guard", "Max Hailstorm", "Max Knuckle", "Max Lightning", "Max Mindstorm", "Max Ooze", "Max Overgrowth", "Max Phantasm", "Max Quake", "Max Rockfall", "Max Starfall", "Max Steelspike", "Max Strike", "Max Wyrmwind", "Me First", "Mean Look", "Meditate", "Mega Drain", "Mega Kick", "Mega Punch", "Megahorn", "Memento", "Menacing Moonraze Maelstrom", "Metal Burst", "Metal Claw", "Metal Sound", "Meteor Assault", "Meteor Beam", "Meteor Mash", "Metronome", "Milk Drink", "Mimic", "Mind Blown", "Mind Reader", "Minimize", "Miracle Eye", "Mirror Coat", "Mirror Move", "Mirror Shot", "Mist", "Mist Ball", "Misty Explosion", "Misty Terrain", "Moonblast", "Moongeist Beam", "Moonlight", "Morning Sun", "Mud Bomb", "Mud Shot", "Mud Sport", "Mud-Slap", "Muddy Water", "Multi-Attack", "Mystical Fire", "Nasty Plot", "Natural Gift", "Nature Power", "Nature's Madness", "Needle Arm", "Never-Ending Nightmare", "Night Daze", "Night Shade", "Night Slash", "Nightmare", "No Retreat", "Noble Roar", "Nuzzle", "Oblivion Wing", "Obstruct", "Oceanic Operetta", "Octazooka", "Octolock", "Odor Sleuth", "Ominous Wind", "Origin Pulse", "Outrage", "Overdrive", "Overheat", "Pain Split", "Parabolic Charge", "Parting Shot", "Pay Day", "Payback", "Peck", "Perish Song", "Petal Blizzard", "Petal Dance", "Phantom Force", "Photon Geyser", "Pika Papow", "Pin Missile", "Plasma Fists", "Play Nice", "Play Rough", "Pluck", "Poison Fang", "Poison Gas", "Poison Jab", "Poison Powder", "Poison Sting", "Poison Tail", "Pollen Puff", "Poltergeist", "Pound", "Powder", "Powder Snow", "Power Gem", "Power Split", "Power Swap", "Power Trick", "Power Trip", "Power Whip", "Power-Up Punch", "Precipice Blades", "Present", "Prismatic Laser", "Protect", "Psybeam", "Psych Up", "Psychic", "Psychic Fangs", "Psychic Terrain", "Psycho Boost", "Psycho Cut", "Psycho Shift", "Psyshock", "Psystrike", "Psywave", "Pulverizing Pancake", "Punishment", "Purify", "Pursuit", "Pyro Ball", "Quash", "Quick Attack", "Quick Guard", "Quiver Dance", "Rage", "Rage Powder", "Rain Dance", "Rapid Spin", "Razor Leaf", "Razor Shell", "Razor Wind", "Recover", "Recycle", "Reflect", "Reflect Type", "Refresh", "Relic Song", "Rest", "Retaliate", "Return", "Revelation Dance", "Revenge", "Reversal", "Rising Voltage", "Roar", "Roar of Time", "Rock Blast", "Rock Climb", "Rock Polish", "Rock Slide", "Rock Smash", "Rock Throw", "Rock Tomb", "Rock Wrecker", "Role Play", "Rolling Kick", "Rollout", "Roost", "Rototiller", "Round", "Sacred Fire", "Sacred Sword", "Safeguard", "Sand Attack", "Sand Tomb", "Sandstorm", "Sappy Seed", "Savage Spin-Out", "Scald", "Scale Shot", "Scary Face", "Scorching Sands", "Scratch", "Screech", "Searing Shot", "Searing Sunraze Smash", "Secret Power", "Secret Sword", "Seed Bomb", "Seed Flare", "Seismic Toss", "Self-Destruct", "Shadow Ball", "Shadow Bone", "Shadow Claw", "Shadow Force", "Shadow Punch", "Shadow Sneak", "Sharpen", "Shattered Psyche", "Sheer Cold", "Shell Side Arm", "Shell Smash", "Shell Trap", "Shift Gear", "Shock Wave", "Shore Up", "Signal Beam", "Silver Wind", "Simple Beam", "Sing", "Sinister Arrow Raid", "Sizzly Slide", "Sketch", "Skill Swap", "Skitter Smack", "Skull Bash", "Sky Attack", "Sky Drop", "Sky Uppercut", "Slack Off", "Slam", "Slash", "Sleep Powder", "Sleep Talk", "Sludge", "Sludge Bomb", "Sludge Wave", "Smack Down", "Smart Strike", "Smelling Salts", "Smog", "Smokescreen", "Snap Trap", "Snarl", "Snatch", "Snipe Shot", "Snore", "Soak", "Soft-Boiled", "Solar Beam", "Solar Blade", "Sonic Boom", "Soul-Stealing 7-Star Strike", "Spacial Rend", "Spark", "Sparkling Aria", "Sparkly Swirl", "Spectral Thief", "Speed Swap", "Spider Web", "Spike Cannon", "Spikes", "Spiky Shield", "Spirit Break", "Spirit Shackle", "Spit Up", "Spite", "Splash", "Splintered Stormshards", "Splishy Splash", "Spore", "Spotlight", "Stealth Rock", "Steam Eruption", "Steamroller", "Steel Beam", "Steel Roller", "Steel Wing", "Sticky Web", "Stockpile", "Stoked Sparksurfer", "Stomp", "Stomping Tantrum", "Stone Edge", "Stored Power", "Storm Throw", "Strange Steam", "Strength", "Strength Sap", "String Shot", "Struggle", "Struggle Bug", "Stuff Cheeks", "Stun Spore", "Submission", "Substitute", "Subzero Slammer", "Sucker Punch", "Sunny Day", "Sunsteel Strike", "Super Fang", "Superpower", "Supersonic", "Supersonic Skystrike", "Surf", "Surging Strikes", "Swagger", "Swallow", "Sweet Kiss", "Sweet Scent", "Swift", "Switcheroo", "Swords Dance", "Synchronoise", "Synthesis", "Tackle", "Tail Glow", "Tail Slap", "Tail Whip", "Tailwind", "Take Down", "Tar Shot", "Taunt", "Tearful Look", "Teatime", "Techno Blast", "Tectonic Rage", "Teeter Dance", "Telekinesis", "Teleport", "Terrain Pulse", "Thief", "Thousand Arrows", "Thousand Waves", "Thrash", "Throat Chop", "Thunder", "Thunder Cage", "Thunder Fang", "Thunder Punch", "Thunder Shock", "Thunder Wave", "Thunderbolt", "Thunderous Kick", "Tickle", "Topsy-Turvy", "Torment", "Toxic", "Toxic Spikes", "Toxic Thread", "Transform", "Tri Attack", "Trick", "Trick Room", "Trick-or-Treat", "Triple Axel", "Triple Kick", "Trop Kick", "Trump Card", "Twineedle", "Twinkle Tackle", "Twister", "U-turn", "Uproar", "V-create", "Vacuum Wave", "Veevee Volley", "Venom Drench", "Venoshock", "Vine Whip", "Vise Grip", "Vital Throw", "Volt Switch", "Volt Tackle", "Wake-Up Slap", "Water Gun", "Water Pledge", "Water Pulse", "Water Shuriken", "Water Sport", "Water Spout", "Waterfall", "Weather Ball", "Whirlpool", "Whirlwind", "Wicked Blow", "Wide Guard", "Wild Charge", "Will-O-Wisp", "Wing Attack", "Wish", "Withdraw", "Wonder Room", "Wood Hammer", "Work Up", "Worry Seed", "Wrap", "Wring Out", "X-Scissor", "Yawn", "Zap Cannon", "Zen Headbutt", "Zing Zap", "Zippy Zap"];
    $( "#moves-input" ).autocomplete({
      source: availableMoves,
      minLength:2,
      autoFocus: true
    });
      } );

$( function() {
    var availableTags = [
      "Bulbasaur",
      "Ivysaur",
      "Venusaur",
      "Charmander",
      "Charmeleon",
      "Charizard",
      "Squirtle",
      "Wartortle",
      "Blastoise",
      "Caterpie",
      "Metapod",
      "Butterfree",
      "Weedle",
      "Kakuna",
      "Beedrill",
      "Pidgey",
      "Pidgeotto",
      "Pidgeot",
      "Rattata",
      "Raticate",
      "Spearow",
      "Fearow",
      "Ekans",
      "Arbok",
      "Pikachu",
      "Raichu",
      "Sandshrew",
      "Sandslash",
      "Nidoran♀",
      "Nidorina",
      "Nidoqueen",
      "Nidoran♂",
      "Nidorino",
      "Nidoking",
      "Clefairy",
      "Clefable",
      "Vulpix",
      "Ninetales",
      "Jigglypuff",
      "Wigglytuff",
      "Zubat",
      "Golbat",
      "Oddish",
      "Gloom",
      "Vileplume",
      "Paras",
      "Parasect",
      "Venonat",
      "Venomoth",
      "Diglett",
      "Dugtrio",
      "Meowth",
      "Persian",
      "Psyduck",
      "Golduck",
      "Mankey",
      "Primeape",
      "Growlithe",
      "Arcanine",
      "Poliwag",
      "Poliwhirl",
      "Poliwrath",
      "Abra",
      "Kadabra",
      "Alakazam",
      "Machop",
      "Machoke",
      "Machamp",
      "Bellsprout",
      "Weepinbell",
      "Victreebel",
      "Tentacool",
      "Tentacruel",
      "Geodude",
      "Graveler",
      "Golem",
      "Ponyta",
      "Rapidash",
      "Slowpoke",
      "Slowbro",
      "Magnemite",
      "Magneton",
      "Farfetch’d",
      "Doduo",
      "Dodrio",
      "Seel",
      "Dewgong",
      "Grimer",
      "Muk",
      "Shellder",
      "Cloyster",
      "Gastly",
      "Haunter",
      "Gengar",
      "Onix",
      "Drowzee",
      "Hypno",
      "Krabby",
      "Kingler",
      "Voltorb",
      "Electrode",
      "Exeggcute",
      "Exeggutor",
      "Cubone",
      "Marowak",
      "Hitmonlee",
      "Hitmonchan",
      "Lickitung",
      "Koffing",
      "Weezing",
      "Rhyhorn",
      "Rhydon",
      "Chansey",
      "Tangela",
      "Kangaskhan",
      "Horsea",
      "Seadra",
      "Goldeen",
      "Seaking",
      "Staryu",
      "Starmie",
      "Mr. Mime",
      "Scyther",
      "Jynx",
      "Electabuzz",
      "Magmar",
      "Pinsir",
      "Tauros",
      "Magikarp",
      "Gyarados",
      "Lapras",
      "Ditto",
      "Eevee",
      "Vaporeon",
      "Jolteon",
      "Flareon",
      "Porygon",
      "Omanyte",
      "Omastar",
      "Kabuto",
      "Kabutops",
      "Aerodactyl",
      "Snorlax",
      "Articuno",
      "Zapdos",
      "Moltres",
      "Dratini",
      "Dragonair",
      "Dragonite",
      "Mewtwo",
      "Mew",
      "Chikorita",
      "Bayleef",
      "Meganium",
      "Cyndaquil",
      "Quilava",
      "Typhlosion",
      "Totodile",
      "Croconaw",
      "Feraligatr",
      "Sentret",
      "Furret",
      "Hoothoot",
      "Noctowl",
      "Ledyba",
      "Ledian",
      "Spinarak",
      "Ariados",
      "Crobat",
      "Chinchou",
      "Lanturn",
      "Pichu",
      "Cleffa",
      "Igglybuff",
      "Togepi",
      "Togetic",
      "Natu",
      "Xatu",
      "Mareep",
      "Flaaffy",
      "Ampharos",
      "Bellossom",
      "Marill",
      "Azumarill",
      "Sudowoodo",
      "Politoed",
      "Hoppip",
      "Skiploom",
      "Jumpluff",
      "Aipom",
      "Sunkern",
      "Sunflora",
      "Yanma",
      "Wooper",
      "Quagsire",
      "Espeon",
      "Umbreon",
      "Murkrow",
      "Slowking",
      "Misdreavus",
      "Unown",
      "Wobbuffet",
      "Girafarig",
      "Pineco",
      "Forretress",
      "Dunsparce",
      "Gligar",
      "Steelix",
      "Snubbull",
      "Granbull",
      "Qwilfish",
      "Scizor",
      "Shuckle",
      "Heracross",
      "Sneasel",
      "Teddiursa",
      "Ursaring",
      "Slugma",
      "Magcargo",
      "Swinub",
      "Piloswine",
      "Corsola",
      "Remoraid",
      "Octillery",
      "Delibird",
      "Mantine",
      "Skarmory",
      "Houndour",
      "Houndoom",
      "Kingdra",
      "Phanpy",
      "Donphan",
      "Porygon2",
      "Stantler",
      "Smeargle",
      "Tyrogue",
      "Hitmontop",
      "Smoochum",
      "Elekid",
      "Magby",
      "Miltank",
      "Blissey",
      "Raikou",
      "Entei",
      "Suicune",
      "Larvitar",
      "Pupitar",
      "Tyranitar",
      "Lugia",
      "Ho-Oh",
      "Celebi",
      "Treecko",
      "Grovyle",
      "Sceptile",
      "Torchic",
      "Combusken",
      "Blaziken",
      "Mudkip",
      "Marshtomp",
      "Swampert",
      "Poochyena",
      "Mightyena",
      "Zigzagoon",
      "Linoone",
      "Wurmple",
      "Silcoon",
      "Beautifly",
      "Cascoon",
      "Dustox",
      "Lotad",
      "Lombre",
      "Ludicolo",
      "Seedot",
      "Nuzleaf",
      "Shiftry",
      "Taillow",
      "Swellow",
      "Wingull",
      "Pelipper",
      "Ralts",
      "Kirlia",
      "Gardevoir",
      "Surskit",
      "Masquerain",
      "Shroomish",
      "Breloom",
      "Slakoth",
      "Vigoroth",
      "Slaking",
      "Nincada",
      "Ninjask",
      "Shedinja",
      "Whismur",
      "Loudred",
      "Exploud",
      "Makuhita",
      "Hariyama",
      "Azurill",
      "Nosepass",
      "Skitty",
      "Delcatty",
      "Sableye",
      "Mawile",
      "Aron",
      "Lairon",
      "Aggron",
      "Meditite",
      "Medicham",
      "Electrike",
      "Manectric",
      "Plusle",
      "Minun",
      "Volbeat",
      "Illumise",
      "Roselia",
      "Gulpin",
      "Swalot",
      "Carvanha",
      "Sharpedo",
      "Wailmer",
      "Wailord",
      "Numel",
      "Camerupt",
      "Torkoal",
      "Spoink",
      "Grumpig",
      "Spinda",
      "Trapinch",
      "Vibrava",
      "Flygon",
      "Cacnea",
      "Cacturne",
      "Swablu",
      "Altaria",
      "Zangoose",
      "Seviper",
      "Lunatone",
      "Solrock",
      "Barboach",
      "Whiscash",
      "Corphish",
      "Crawdaunt",
      "Baltoy",
      "Claydol",
      "Lileep",
      "Cradily",
      "Anorith",
      "Armaldo",
      "Feebas",
      "Milotic",
      "Castform",
      "Kecleon",
      "Shuppet",
      "Banette",
      "Duskull",
      "Dusclops",
      "Tropius",
      "Chimecho",
      "Absol",
      "Wynaut",
      "Snorunt",
      "Glalie",
      "Spheal",
      "Sealeo",
      "Walrein",
      "Clamperl",
      "Huntail",
      "Gorebyss",
      "Relicanth",
      "Luvdisc",
      "Bagon",
      "Shelgon",
      "Salamence",
      "Beldum",
      "Metang",
      "Metagross",
      "Regirock",
      "Regice",
      "Registeel",
      "Latias",
      "Latios",
      "Kyogre",
      "Groudon",
      "Rayquaza",
      "Jirachi",
      "Deoxys",
      "Turtwig",
      "Grotle",
      "Torterra",
      "Chimchar",
      "Monferno",
      "Infernape",
      "Piplup",
      "Prinplup",
      "Empoleon",
      "Starly",
      "Staravia",
      "Staraptor",
      "Bidoof",
      "Bibarel",
      "Kricketot",
      "Kricketune",
      "Shinx",
      "Luxio",
      "Luxray",
      "Budew",
      "Roserade",
      "Cranidos",
      "Rampardos",
      "Shieldon",
      "Bastiodon",
      "Burmy",
      "Wormadam",
      "Mothim",
      "Combee",
      "Vespiquen",
      "Pachirisu",
      "Buizel",
      "Floatzel",
      "Cherubi",
      "Cherrim",
      "Shellos",
      "Gastrodon",
      "Ambipom",
      "Drifloon",
      "Drifblim",
      "Buneary",
      "Lopunny",
      "Mismagius",
      "Honchkrow",
      "Glameow",
      "Purugly",
      "Chingling",
      "Stunky",
      "Skuntank",
      "Bronzor",
      "Bronzong",
      "Bonsly",
      "Mime Jr.",
      "Happiny",
      "Chatot",
      "Spiritomb",
      "Gible",
      "Gabite",
      "Garchomp",
      "Munchlax",
      "Riolu",
      "Lucario",
      "Hippopotas",
      "Hippowdon",
      "Skorupi",
      "Drapion",
      "Croagunk",
      "Toxicroak",
      "Carnivine",
      "Finneon",
      "Lumineon",
      "Mantyke",
      "Snover",
      "Abomasnow",
      "Weavile",
      "Magnezone",
      "Lickilicky",
      "Rhyperior",
      "Tangrowth",
      "Electivire",
      "Magmortar",
      "Togekiss",
      "Yanmega",
      "Leafeon",
      "Glaceon",
      "Gliscor",
      "Mamoswine",
      "Porygon-Z",
      "Gallade",
      "Probopass",
      "Dusknoir",
      "Froslass",
      "Rotom",
      "Uxie",
      "Mesprit",
      "Azelf",
      "Dialga",
      "Palkia",
      "Heatran",
      "Regigigas",
      "Giratina",
      "Cresselia",
      "Phione",
      "Manaphy",
      "Darkrai",
      "Shaymin",
      "Arceus",
      "Victini",
      "Snivy",
      "Servine",
      "Serperior",
      "Tepig",
      "Pignite",
      "Emboar",
      "Oshawott",
      "Dewott",
      "Samurott",
      "Patrat",
      "Watchog",
      "Lillipup",
      "Herdier",
      "Stoutland",
      "Purrloin",
      "Liepard",
      "Pansage",
      "Simisage",
      "Pansear",
      "Simisear",
      "Panpour",
      "Simipour",
      "Munna",
      "Musharna",
      "Pidove",
      "Tranquill",
      "Unfezant",
      "Blitzle",
      "Zebstrika",
      "Roggenrola",
      "Boldore",
      "Gigalith",
      "Woobat",
      "Swoobat",
      "Drilbur",
      "Excadrill",
      "Audino",
      "Timburr",
      "Gurdurr",
      "Conkeldurr",
      "Tympole",
      "Palpitoad",
      "Seismitoad",
      "Throh",
      "Sawk",
      "Sewaddle",
      "Swadloon",
      "Leavanny",
      "Venipede",
      "Whirlipede",
      "Scolipede",
      "Cottonee",
      "Whimsicott",
      "Petilil",
      "Lilligant",
      "Basculin",
      "Sandile",
      "Krokorok",
      "Krookodile",
      "Darumaka",
      "Darmanitan",
      "Maractus",
      "Dwebble",
      "Crustle",
      "Scraggy",
      "Scrafty",
      "Sigilyph",
      "Yamask",
      "Cofagrigus",
      "Tirtouga",
      "Carracosta",
      "Archen",
      "Archeops",
      "Trubbish",
      "Garbodor",
      "Zorua",
      "Zoroark",
      "Minccino",
      "Cinccino",
      "Gothita",
      "Gothorita",
      "Gothitelle",
      "Solosis",
      "Duosion",
      "Reuniclus",
      "Ducklett",
      "Swanna",
      "Vanillite",
      "Vanillish",
      "Vanilluxe",
      "Deerling",
      "Sawsbuck",
      "Emolga",
      "Karrablast",
      "Escavalier",
      "Foongus",
      "Amoonguss",
      "Frillish",
      "Jellicent",
      "Alomomola",
      "Joltik",
      "Galvantula",
      "Ferroseed",
      "Ferrothorn",
      "Klink",
      "Klang",
      "Klinklang",
      "Tynamo",
      "Eelektrik",
      "Eelektross",
      "Elgyem",
      "Beheeyem",
      "Litwick",
      "Lampent",
      "Chandelure",
      "Axew",
      "Fraxure",
      "Haxorus",
      "Cubchoo",
      "Beartic",
      "Cryogonal",
      "Shelmet",
      "Accelgor",
      "Stunfisk",
      "Mienfoo",
      "Mienshao",
      "Druddigon",
      "Golett",
      "Golurk",
      "Pawniard",
      "Bisharp",
      "Bouffalant",
      "Rufflet",
      "Braviary",
      "Vullaby",
      "Mandibuzz",
      "Heatmor",
      "Durant",
      "Deino",
      "Zweilous",
      "Hydreigon",
      "Larvesta",
      "Volcarona",
      "Cobalion",
      "Terrakion",
      "Virizion",
      "Tornadus",
      "Thundurus",
      "Reshiram",
      "Zekrom",
      "Landorus",
      "Kyurem",
      "Keldeo",
      "Meloetta",
      "Genesect",
      "Chespin",
      "Quilladin",
      "Chesnaught",
      "Fennekin",
      "Braixen",
      "Delphox",
      "Froakie",
      "Frogadier",
      "Greninja",
      "Bunnelby",
      "Diggersby",
      "Fletchling",
      "Fletchinder",
      "Talonflame",
      "Scatterbug",
      "Spewpa",
      "Vivillon",
      "Litleo",
      "Pyroar",
      "Flabébé",
      "Floette",
      "Florges",
      "Skiddo",
      "Gogoat",
      "Pancham",
      "Pangoro",
      "Furfrou",
      "Espurr",
      "Meowstic",
      "Honedge",
      "Doublade",
      "Aegislash",
      "Spritzee",
      "Aromatisse",
      "Swirlix",
      "Slurpuff",
      "Inkay",
      "Malamar",
      "Binacle",
      "Barbaracle",
      "Skrelp",
      "Dragalge",
      "Clauncher",
      "Clawitzer",
      "Helioptile",
      "Heliolisk",
      "Tyrunt",
      "Tyrantrum",
      "Amaura",
      "Aurorus",
      "Sylveon",
      "Hawlucha",
      "Dedenne",
      "Carbink",
      "Goomy",
      "Sliggoo",
      "Goodra",
      "Klefki",
      "Phantump",
      "Trevenant",
      "Pumpkaboo",
      "Gourgeist",
      "Bergmite",
      "Avalugg",
      "Noibat",
      "Noivern",
      "Xerneas",
      "Yveltal",
      "Zygarde",
      "Diancie",
      "Hoopa",
      "Volcanion",
      "Rowlet",
      "Dartrix",
      "Decidueye",
      "Litten",
      "Torracat",
      "Incineroar",
      "Popplio",
      "Brionne",
      "Primarina",
      "Pikipek",
      "Trumbeak",
      "Toucannon",
      "Yungoos",
      "Gumshoos",
      "Grubbin",
      "Charjabug",
      "Vikavolt",
      "Crabrawler",
      "Crabominable",
      "Oricorio",
      "Cutiefly",
      "Ribombee",
      "Rockruff",
      "Lycanroc",
      "Wishiwashi",
      "Mareanie",
      "Toxapex",
      "Mudbray",
      "Mudsdale",
      "Dewpider",
      "Araquanid",
      "Fomantis",
      "Lurantis",
      "Morelull",
      "Shiinotic",
      "Salandit",
      "Salazzle",
      "Stufful",
      "Bewear",
      "Bounsweet",
      "Steenee",
      "Tsareena",
      "Comfey",
      "Oranguru",
      "Passimian",
      "Wimpod",
      "Golisopod",
      "Sandygast",
      "Palossand",
      "Pyukumuku",
      "Type: Null",
      "Silvally",
      "Minior",
      "Komala",
      "Turtonator",
      "Togedemaru",
      "Mimikyu",
      "Bruxish",
      "Drampa",
      "Dhelmise",
      "Jangmo-o",
      "Hakamo-o",
      "Kommo-o",
      "Tapu Koko",
      "Tapu Lele",
      "Tapu Bulu",
      "Tapu Fini",
      "Cosmog",
      "Cosmoem",
      "Solgaleo",
      "Lunala",
      "Nihilego",
      "Buzzwole",
      "Pheromosa",
      "Xurkitree",
      "Celesteela",
      "Kartana",
      "Guzzlord",
      "Necrozma",
      "Magearna",
      "Marshadow",
      "Poipole",
      "Naganadel",
      "Stakataka",
      "Blacephalon",
      "Zeraora",
      "Meltan",
      "Melmetal",
      "Grookey",
      "Thwackey",
      "Rillaboom",
      "Scorbunny",
      "Raboot",
      "Cinderace",
      "Sobble",
      "Drizzile",
      "Inteleon",
      "Skwovet",
      "Greedent",
      "Rookidee",
      "Corvisquire",
      "Corviknight",
      "Blipbug",
      "Dottler",
      "Orbeetle",
      "Nickit",
      "Thievul",
      "Gossifleur",
      "Eldegoss",
      "Wooloo",
      "Dubwool",
      "Chewtle",
      "Drednaw",
      "Yamper",
      "Boltund",
      "Rolycoly",
      "Carkol",
      "Coalossal",
      "Applin",
      "Flapple",
      "Appletun",
      "Silicobra",
      "Sandaconda",
      "Cramorant",
      "Arrokuda",
      "Barraskewda",
      "Toxel",
      "Toxtricity",
      "Sizzlipede",
      "Centiskorch",
      "Clobbopus",
      "Grapploct",
      "Sinistea",
      "Polteageist",
      "Hatenna",
      "Hattrem",
      "Hatterene",
      "Impidimp",
      "Morgrem",
      "Grimmsnarl",
      "Obstagoon",
      "Perrserker",
      "Cursola",
      "Sirfetch’d",
      "Mr. Rime",
      "Runerigus",
      "Milcery",
      "Alcremie",
      "Falinks",
      "Pincurchin",
      "Snom",
      "Frosmoth",
      "Stonjourner",
      "Eiscue",
      "Indeedee",
      "Morpeko",
      "Cufant",
      "Copperajah",
      "Dracozolt",
      "Arctozolt",
      "Dracovish",
      "Arctovish",
      "Duraludon",
      "Dreepy",
      "Drakloak",
      "Dragapult",
      "Zacian",
      "Zamazenta",
      "Eternatus",
      "Kubfu",
      "Urshifu",
      "Zarude",
      "Regieleki",
      "Regidrago",
      "Glastrier",
      "Spectrier",
      "Calyrex"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags,
      minLength:2,
      autoFocus: true
    });

  } );
  $(document).ready(function(){
      $("#poke").sticky({topSpacing:0});
    });
    var image = new Array ();
image[0] = "/../../src/img/img01.gif";
image[1] = "/../../src/img/img02.gif";
image[2] = "/../../src/img/img03.gif";
image[3] = "/../../src/img/img04.gif";
image[4] = "/../../src/img/img05.gif";
image[5] = "/../../src/img/img06.gif";
image[6] = "/../../src/img/img07.gif";
image[7] = "/../../src/img/img08.gif";
image[8] = "/../../src/img/img09.gif";
var size = image.length
var x = Math.floor(size*Math.random())

$('#randomImages').attr('src',image[x]);
}
