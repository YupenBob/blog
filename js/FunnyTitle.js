 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = 'o((>ω< ))o别走啊！';
         clearTimeout(titleTime);
     }
     else {
         document.title = 'ヾ(Ő∀Ő3)ノ欢迎回来！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });