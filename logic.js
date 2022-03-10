var App = function() {

    var $ = function(sel) { return document.querySelector(sel); }
  
    var messages = [];
    var messagesEl = $('.js-messages');
    var log = function(str, color) {
      if(color) {
        str = '<span style="color: ' + color + ';">' + str + '</span>';
      }
      messages = ['> ' + str].concat(messages);
      messagesEl.innerHTML = messages.join('<br />');
    }
  
  
    var sendNamespace = $('#namespace-sending');
    var sendMessage = $('#message');
    var onSendClicked = function() {
      lsbridge.send(
        sendNamespace.value,
        { message: sendMessage.value }
      );
      $('#message').value = '';
    }
    $('.js-send').addEventListener('click', onSendClicked);
    $('body').addEventListener('keypress', function(e) {
      e.keyCode === 13 && onSendClicked();
    });
  
    
  
  };
  
  window.onload = App;