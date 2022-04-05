(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var a=i(7),n=i.n(a),r=(i(15),i(9)),c=i(2),s=i(1),l=(i(16),i(10)),o=(i(17),i(18),i(0)),d=function(e){var t=e.title,i=e.description,a=e.imgUrl,n=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:a,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[i,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:n,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,Object(l.a)({},e),e.imdbId)}))})},j=i(6),u=i.n(j),b=function(e){var t=e.onAdd,i=Object(s.useState)(""),a=Object(c.a)(i,2),n=a[0],r=a[1],l=Object(s.useState)(""),d=Object(c.a)(l,2),m=d[0],j=d[1],b=Object(s.useState)(""),h=Object(c.a)(b,2),g=h[0],p=h[1],O=Object(s.useState)(""),v=Object(c.a)(O,2),f=v[0],w=v[1],M=Object(s.useState)(""),x=Object(c.a)(M,2),N=x[0],B=x[1],U=Object(s.useState)(!1),T=Object(c.a)(U,2),I=T[0],_=T[1],k=Object(s.useState)(!1),y=Object(c.a)(k,2),z=y[0],A=y[1],S=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/;return Object(o.jsxs)("form",{className:"Form",onSubmit:function(e){e.preventDefault(),t({title:n,description:m,imgUrl:g,imdbUrl:f,imdbId:N}),r(""),j(""),p(""),w(""),B("")},children:[Object(o.jsx)("input",{placeholder:"Title",value:n,required:!0,onChange:function(e){return r(e.target.value)},onBlur:function(e){r(e.target.value)}}),Object(o.jsx)("input",{placeholder:"Description",value:m,onChange:function(e){return j(e.target.value)},onBlur:function(e){return j(e.target.value)}}),Object(o.jsx)("input",{placeholder:I?"Error! Wrong Url format":"ImgUrl",value:g,required:!0,className:u()("",{error:I}),onChange:function(e){return p(e.target.value)},onBlur:function(e){S.test(g)||_(!0),p(e.target.value)}}),I&&Object(o.jsx)("p",{children:"Mistake! Wrong imgUrl"}),Object(o.jsx)("input",{placeholder:z?"Error! Wrong Url format":"ImdbUrl",value:f,required:!0,className:u()("",{error:z}),onChange:function(e){return p(e.target.value)},onBlur:function(e){S.test(f)||A(!0),p(e.target.value)}}),z&&Object(o.jsx)("p",{children:"Mistake! Wrong imdbUrl"}),Object(o.jsx)("input",{placeholder:"ImdbId",value:N,required:!0,onChange:function(e){return B(e.target.value)},onBlur:function(e){return B(e.target.value)}}),Object(o.jsx)("button",{type:"submit",disabled:I||z,children:"Add a Movie"})]})},h=i(8),g=function(){var e=Object(s.useState)(h),t=Object(c.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(m,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(b,{onAdd:function(e){a((function(t){return[].concat(Object(r.a)(t),[e])}))}})})]})};n.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.cbb69003.chunk.js.map