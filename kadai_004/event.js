$(function(){
  $(window).on('load',(e)=> {
    if (e.type === 'load') {
      console.log('loadイベントが発生しました');
    }
  });
  $(document).on('scroll',(e)=> {
    if(e.type === 'scroll'){
      console.log('scrollイベントが発生しました');
    }
  });
});