(function(){var n,t;t=function(){var n,t,e,o,i,r,a;return t='[data-role="popup"]',o=$(t),r=$('[data-role="popup_open"]'),i=$('[data-role="popup_close"]'),a='[data-role="popup_window"]',$(document).keyup(function(e){return 27===e.keyCode&&$(".open"+t).length>0?n(".open"+t):void 0}),e=function(e){return $(".open"+t).length>0&&n($(".open"+t)),window.location.hash=e.replace("#",""),$(e).css("display","block"),$(e).addClass("open"),$("body").css("overflow","hidden")},n=function(n){return history.pushState("",document.title,window.location.pathname),$(n).css("display","none"),$(n).removeClass("open"),$("body").css("overflow","auto")},$("body").click(function(){return $(".open"+t).length>0?n(".open"+t):void 0}),$(o).each(function(){var n,t;return t=$(this).attr("id"),n=window.location.hash.replace("#",""),""!==n&&n===t&&e("#"+t),$(this).find(a).click(function(n){return n.stopPropagation()})}),$(r).each(function(){return $(this).click(function(){var n;return n=$(this).attr("data-target"),$(n).length>0&&e(n),!1})}),$(i).each(function(){return $(this).click(function(){var e;return e=$(this).parents(t),$(e).length>0&&n(e),!1})})},n=function(n,t,e,o,i,r,a,c,u){var l,s,d,f,p;return f=0,d=$(n).find("ul li").length-t,s=!1,l=function(){return s||p(f+1),setTimeout(function(){return l()},a)},p=function(t){return 0>t&&(t=d),t>d&&(t=0),"top"===u&&$(n).find(r).animate({"margin-top":-1*t*e},500,function(){return f=t}),"left"===u&&$(n).find(r).animate({"margin-left":-1*t*e},500,function(){return f=t}),c?($(n).find(""+c+" a").removeClass("active").addClass("passive"),$(n).find(""+c+" a:eq("+t+")").removeClass("passive").addClass("active")):void 0},setTimeout(function(){return l()},a),$(n).hover(function(){return s=!0},function(){return s=!1}),$(n).find(o).click(function(){return p(f-1),!1}),$(n).find(i).click(function(){return p(f+1),!1}),c?$(n).find(""+c+" a").click(function(){var n;return n=$(this).prevAll().length,p(n),!1}):void 0},t(),n(".achievement",8,103,"a.left","a.right","ul",3e5,"","left"),$('input[type="checkbox"]').iCheck()}).call(this);