
function onYouTubeIframeAPIReady() {
  
    player1 = new YT.Player('player1', {
      height: '390',
      width: '640',
      videoId: 'https://www.youtube.com/iframe_api/UrZtRpwf6pQ'
    });
  
    player2 = new YT.Player('player2', {
      height: '390',
      width: '640',
      videoId: 'https://www.youtube.com/iframe_api/UrZtRpwf6pQ'
    });
  
    player3 = new YT.Player('player3', {
      height: '390',
      width: '640',
      videoId: 'https://www.youtube.com/iframe_api/UrZtRpwf6pQ'
    });
  
  }

  function stopVideo() {
  
    player1.stopVideo();
    player2.stopVideo();
    player3.stopVideo();
  
  }
  


function abremodal() {

    
    $("body").append('<div id="modal"> <video> <source src="video.ogg" type="video/ogg"\><source src="video.mp4" type="video/mp4">Tu navegador no implementa el elemento</video><div id="close"> Cerrar </div></div>')

    $("#close").click(function () {
        $("#modal").remove();
    });
}
