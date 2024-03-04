var posts=["2024/02/26/Study/","2024/01/23/建站第一天/","2024/02/23/hello-world/","2024/03/01/Markdown-基础学习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };