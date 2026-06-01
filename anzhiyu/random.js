var posts=["2026/06/01/xx文档批量高清导出PDF使用方法/","2026/06/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };