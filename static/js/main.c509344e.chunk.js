(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{33:function(e,t,a){e.exports=a(65)},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),s=a.n(o),c=a(7),l=a(6);var i=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"Freedom is the freedom to say that two plus two make four. If that is... all else follows"'),r.a.createElement("span",null,"-George Orwell, 1984"))},m=a(15),u=a.n(m),p=a(29),v=a(10),d=a(11),f=a(12),E=a(13),h=a(30),y=a.n(h);a(56);var g=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,s=e.poster,l=e.genres;return r.a.createElement(c.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:a,title:n,summary:o,poster:s,genres:l}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},l.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},o.slice(0,140),"..."))))},_=(a(62),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getmovies=Object(p.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getmovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading..")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(63);var b=function(){return r.a.createElement("div",null,r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:{pathname:"/about",state:{fromNavigation:!0}}},"About"))},N=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",null,r.a.createElement("span",null,e.state.title),r.a.createElement("p",null,e.state.summary)):null}}]),a}(r.a.Component);a(64);var j=function(){return r.a.createElement(c.a,null,r.a.createElement(b,null),r.a.createElement(l.a,{path:"/",exact:!0,component:_}),r.a.createElement(l.a,{path:"/about",component:i}),r.a.createElement(l.a,{path:"/movie/:id",component:N}))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c509344e.chunk.js.map