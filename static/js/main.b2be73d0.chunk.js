(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},103:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),s=a.n(l),o=(a(101),a(16)),c=a(17),m=a(18),i=a(19),u=(a(102),a(103),a(2)),d=a(6),E=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},h="http://localhost:3001/";function f(e){var t=e.dish;e.onClick;return r.a.createElement(u.d,null,r.a.createElement(d.b,{to:"/menu/".concat(t.id)},r.a.createElement(u.g,{width:"100%",src:h+t.image,alt:t.name}),r.a.createElement(u.h,null,r.a.createElement(u.k,null,t.name))))}var p=function(e){var t=e.dishes.dishes.map((function(t){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:t.id},r.a.createElement(f,{dish:t,onClick:e.onClick}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},g=a(91),b=a.n(g),N=[{id:0,name:"Uthappizza",image:"/assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"/assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"/assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"/assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],v=function(e){return{type:"ADD_COMMENT",payload:e}},y=function(){return{type:"DISHES_LOADING"}},w=function(e){return{type:"DISHES_FAILED",payload:e}},M=function(e){return{type:"ADD_DISHES",payload:e}},O=function(e){return{type:"COMMENTS_FAILED",payload:e}},k=function(e){return{type:"ADD_COMMENTS",payload:e}},L=function(){return{type:"PROMOS_LOADING"}},C=function(e){return{type:"PROMOS_FAILED",payload:e}},S=function(e){return{type:"ADD_PROMOS",payload:e}},A=function(){return{type:"LEADERS_LOADING"}},j=function(e){return{type:"LEADERS_FAILED",payload:e}},D=function(e){return{type:"ADD_LEADER",payload:e}},F=a(20),x=a(8),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(F.a)(n)),n}return Object(c.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",null,r.a.createElement(u.s,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(u.u,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(u.t,null,r.a.createElement(x.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"rating",className:"font-weight-bold",md:12},"Rating"),r.a.createElement(u.l,{md:{size:3}},r.a.createElement(x.Control.select,{model:".ratingvalue",name:"ratingvalue",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"author",className:"font-weight-bold",md:12},"Your Name"),r.a.createElement(u.l,{md:10},r.a.createElement(x.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:function(e){return e&&e.length},minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:function(e){return function(t){return!t||t.length<=e}}(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"comment",className:"font-weight-bold",md:12},"Comment"),r.a.createElement(u.l,{md:10},r.a.createElement(x.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.l,{md:{size:10}},r.a.createElement(u.c,{type:"submit",color:"primary"},"Submit")))))),r.a.createElement(u.c,{color:"primary",outline:!0,onClick:this.toggleModal}," Submit Comment"))}}]),a}(n.Component),q=a(33);function T(e){var t=e.dishprops;return t.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null))):t.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,t.errMess))):null!=t.dish?r.a.createElement(q.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{top:!0,src:h+t.dish.image,alt:t.dish.name}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,t.dish.name),r.a.createElement(u.j,null,t.dish.description)))):r.a.createElement("div",null)}function R(e){var t=e.comments;return r.a.createElement(q.Stagger,{in:!0},t.map((function(e){return r.a.createElement(q.Fade,{in:!0},r.a.createElement("div",{key:e.id},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,e.comment),r.a.createElement("li",null,"--"+e.author+" "+b()(e.date).format("MMM Do YYYY")))))})))}var _=function(e){return null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(d.b,{to:"/menu"},"Menu")),r.a.createElement(u.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(T,{dishprops:e})),r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(R,{comments:e.comments}),r.a.createElement(I,{postComment:e.postComment,dishId:e.dish.id})))):r.a.createElement("div",null)},P=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggleNav=n.toggleNav.bind(Object(F.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(F.a)(n)),n.handleLogin=n.handleLogin.bind(Object(F.a)(n)),n}return Object(c.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u.s,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(u.u,{toggle:this.toggleModal},"Login"),r.a.createElement(u.t,null,r.a.createElement(u.n,{onSubmit:this.handleLogin},r.a.createElement(u.o,null,r.a.createElement(u.q,{htmlFor:"username"},"Username"),r.a.createElement(u.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(u.o,null,r.a.createElement(u.q,{htmlFor:"password"},"Password"),r.a.createElement(u.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(u.o,{check:!0},r.a.createElement(u.q,{check:!0},r.a.createElement(u.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(u.c,{type:"submit",value:"submit",color:"primary"},"Login")))),r.a.createElement(u.x,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(u.z,{onClick:this.toggleNav}),r.a.createElement(u.y,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:h+"/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(u.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(u.v,{navbar:!0},r.a.createElement(u.w,null,r.a.createElement(d.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(u.w,null,r.a.createElement(d.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(u.w,null,r.a.createElement(d.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(u.w,null,r.a.createElement(d.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us")))),r.a.createElement(u.w,null,r.a.createElement(u.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))),r.a.createElement("div",{className:"Jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))))}}]),a}(n.Component);var H=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))};function z(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(E,null):n?r.a.createElement("h4",null,n):r.a.createElement(q.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{src:h+t.image,alt:t.name}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,t.name),t.designation?r.a.createElement(u.i,null,t.designation):null,r.a.createElement(u.j,null,t.description))))}var Y=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(z,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(z,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(z,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))},G=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:"",touched:{firstname:!1,lastname:!1,telnum:!1,email:!1}},n.handleSubmit=n.handleSubmit.bind(Object(F.a)(n)),n}return Object(c.a)(a,[{key:"validate",value:function(e,t,a,n){var r={firstname:"",lastname:"",telnum:"",email:""};this.state.touched.firstname&&e.length<3?r.firstname="First Name should be >= 3 characters":this.state.touched.firstname&&e.length>10&&(r.firstname="First Name should be <= 10 characters"),this.state.touched.lastname&&t.length<3?r.lastname="Last Name should be >= 3 characters":this.state.touched.lastname&&t.length>10&&(r.lastname="Last Name should be <= 10 characters");return this.state.touched.telnum&&!/^\d+$/.test(a)&&(r.telnum="Tel. Number should contain only numbers"),this.state.touched.email&&1!==n.split("").filter((function(e){return"@"===e})).length&&(r.email="Email should contain a @"),r}},{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this,t=function(e){return e&&e.length},a=function(e){return function(t){return!t||t.length<=e}},n=function(e){return function(t){return t&&t.length>=e}};this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(x.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(u.l,{md:10},r.a.createElement(x.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:t,minLength:n(3),maxLength:a(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(u.l,{md:10},r.a.createElement(x.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:t,minLength:n(3),maxLength:a(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(u.l,{md:10},r.a.createElement(x.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:t,minLength:n(3),maxLength:a(15),isNumber:function(e){return!isNaN(Number(e))}}}),r.a.createElement(x.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"email",md:2},"Email"),r.a.createElement(u.l,{md:10},r.a.createElement(x.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:t,validEmail:function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)}}}),r.a.createElement(x.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(u.q,{check:!0},r.a.createElement(x.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(u.l,{md:{size:3,offset:1}},r.a.createElement(x.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(u.l,{md:10},r.a.createElement(x.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.l,{md:{size:10,offset:2}},r.a.createElement(u.c,{type:"submit",color:"primary"},"Send Feedback")))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))))}}]),a}(n.Component);var W=function(e){var t=e.leaders.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 mt-5"},r.a.createElement(u.r,{tag:"li"},r.a.createElement(u.r,{left:!0,middle:!0},r.a.createElement(u.r,{object:!0,src:h+e.image,alt:e.name})),r.a.createElement(u.r,{body:!0,className:"ml-5"},r.a.createElement(u.r,{heading:!0},e.name),r.a.createElement("p",null,e.description))))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(d.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.d,null,r.a.createElement(u.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(u.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.d,null,r.a.createElement(u.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.r,{list:!0},t))))},B=a(22),U=a(53),K=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(U.TransitionGroup,null,r.a.createElement(U.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(d.f,{location:this.props.location},r.a.createElement(d.e,{path:"/home",component:function(){return r.a.createElement(Y,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(d.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(p,{dishes:e.props.dishes})}}),r.a.createElement(d.e,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(G,{resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(d.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(_,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(a.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(a.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,addComment:e.props.addComment,postComment:e.props.postComment})}}),r.a.createElement(d.e,{path:"/Aboutus",component:function(){return r.a.createElement(W,{leaders:e.props.leaders.leaders})}}),r.a.createElement(d.d,{to:"/home"})))),r.a.createElement(H,null))}}]),a}(n.Component),J=Object(d.g)(Object(B.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{addComment:function(t,a,n,r){return e(v(t))},fetchDishes:function(){e((function(e){return e(y(!0)),fetch(h+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(M(t))})).catch((function(t){return e(w(t.message))}))}))},resetFeedbackForm:function(){e(x.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(h+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(k(t))})).catch((function(t){return e(O(t.message))}))}))},fetchPromos:function(){return e((function(e){return e(L()),fetch(h+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(S(t))})).catch((function(t){return e(C(t.message))}))}))},fetchLeaders:function(){return e((function(e){return e(A()),fetch(h+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(D(t))})).catch((function(t){return e(j(t.message))}))}))},postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(h+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(v(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(t,a,n,r))}}}))(K)),Z=a(10),$=a(23),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(Z.a)({},e,{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object(Z.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(Z.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(Z.a)({},e,{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(Z.a)({},e,{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return Object(Z.a)({},e,{comments:e.comments.concat(a)});default:return e}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return Object(Z.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return Object(Z.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(Z.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADER":return Object(Z.a)({},e,{isLoading:!1,errMess:null,leaders:t.payload});case"LEADERS_LOADING":return Object(Z.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(Z.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},te=a(94),ae=a.n(te),ne=a(95),re=a.n(ne),le={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},se=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={dishes:N},n}return Object(c.a)(a,[{key:"render",value:function(){var e=Object($.createStore)(Object($.combineReducers)(Object(Z.a)({dishes:V,comments:Q,promotions:X,leaders:ee},Object(x.createForms)({feedback:le}))),Object($.applyMiddleware)(ae.a,re.a));return r.a.createElement(B.Provider,{store:e},r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(J,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(172),a(173),a(174);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){e.exports=a(175)}},[[96,1,2]]]);
//# sourceMappingURL=main.b2be73d0.chunk.js.map