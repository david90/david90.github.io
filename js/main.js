/* Requires JQuery Library */

$(".ping-me").on("click", function(e){
  displayTerminal();
  e.preventDefault();
});

function displayTerminal(){
  var terminalView = $(".terminal");
  terminalView.slideDown(200);
}

function closeTerminal(){
  var terminalView = $(".terminal");
  terminalView.slideUp(200);
}

function minTerminal(){
  var terminalView = $(".terminal");
  terminalView.addClass("maximized");
}

function maxTerminal(){
  var terminalView = $(".terminal");
  terminalView.addClass("minimized");
}


/*Terminal events */

$(".terminal").on("click", ".terminal-close", function(e){
  closeTerminal();
})

$(".terminal").on("click", ".terminal-min", function(e){
  minTerminal();
})

$(".terminal").on("click", ".terminal-max", function(e){
  maxTerminal();
})

