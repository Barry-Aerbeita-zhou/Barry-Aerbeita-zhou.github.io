var posts=["2024/03/06/Docker-入门学习/","2024/03/12/Debian能干嘛？/","2024/04/01/Hexo的常用指令/","2024/04/01/PHP自学手册/","2024/04/02/使用Hexo写作的正确姿势/","2024/01/23/建站第一天/","2024/03/06/自建Nas的小笔记/","2024/03/01/Markdown-基础学习/","2024/05/07/Java的Process-避坑小记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };