(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(7),o=n.n(l),c=(n(14),n(1)),s=n(2),i=n(4),u=n(3),m=n(5),h=(n(15),n(16),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){n.setState({error:null,loading:!0,result:null}),fetch("https://entropysector.com/hwrng/api/v1/public/numbers/1").then(function(e){return e.json()}).then(function(e){return n.processNumber(e.data[0])}).catch(function(e){return n.processError(e)})},n.processNumber=function(e){var t=e%2==1?"heads":"tails";n.setState({error:null,loading:!1,result:t})},n.processError=function(e){n.setState({error:e.message,loading:!1})},n.state={loading:!1,result:null,error:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.result?"images/quarter-".concat(this.state.result,".png"):null,t=this.state.error;return a.a.createElement("div",{className:"CoinFlipDemo"},a.a.createElement("h2",null,"Coin Flip"),a.a.createElement("div",{className:"Result"},e?a.a.createElement("img",{src:e}):null),a.a.createElement("button",{onClick:this.handleClick,className:"FlipCoinButton"},this.state.loading?"Loading...":"Flip Coin"),t?a.a.createElement("p",{className:"Error"},t):null)}}]),t}(r.Component)),p=(n(17),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){n.setState({error:null,loading:!0,result:null}),fetch("https://entropysector.com/hwrng/api/v1/public/numbers/3").then(function(e){return e.json()}).then(function(e){return n.processNumbers(e.data)}).catch(function(e){return n.processError(e)})},n.processNumbers=function(e){var t=e.map(function(e){return e%6}).map(function(e){return Math.abs(e)}).map(function(e){return e+1});console.log(t),n.setState({error:null,loading:!1,result:t})},n.processError=function(e){n.setState({error:e.message,loading:!1})},n.state={loading:!1,result:null,error:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.result,t=this.state.error,n=null;if(e){var r=e.map(function(e){return"images/6die-".concat(e,".png")});console.log(r),n=a.a.createElement("div",{className:"Result"},a.a.createElement("img",{src:r[0]}),a.a.createElement("img",{src:r[1]}),a.a.createElement("img",{src:r[2]})),console.log(n)}return a.a.createElement("div",{className:"RollDiceDemo"},a.a.createElement("h2",null,"Dice Roll"),a.a.createElement("div",{className:"Result"},n),a.a.createElement("button",{onClick:this.handleClick,className:"FlipCoinButton"},this.state.loading?"Loading...":"Roll Dice"),t?a.a.createElement("p",{className:"Error"},t):null)}}]),t}(r.Component)),d=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={loading:!1,result:null,error:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Entropy Sector Demos"),a.a.createElement(h,null),a.a.createElement(p,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.57214eb7.chunk.js.map