var posts=["2024/02/23/hello-world/","2024/02/23/建站第一天/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };