var posts=["2024/03/12/Debian能干嘛？/","2024/03/06/Docker-入门学习/","2024/01/23/建站第一天/","2024/03/06/自建Nas的小笔记/","2024/03/01/Markdown-基础学习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };