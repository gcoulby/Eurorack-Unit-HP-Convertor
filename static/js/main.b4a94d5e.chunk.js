(this["webpackJsonpeurorack-convertor"]=this["webpackJsonpeurorack-convertor"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),s=(n(34),n.p,n(35),n(36),n(23)),i=n(24),h=n(28),o=n(27),u=n(46),m=n(49),d=n(47),j=n(48),b=n(1),x=5.08,p=44.45,O=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hp:0,hp_mm:0,hp_in:0,u:3,u_mm:133.35,u_in:5.25},e.handleOnHpChange=function(t){e.setState({hp:t.target.value});var n=(t.target.value*x).toFixed(2),a=(t.target.value*x/25.4).toFixed(2);e.setState({hp_mm:n}),e.setState({hp_in:a})},e.handleOnHpMmChange=function(t){e.setState({hp_mm:t.target.value});var n=Math.ceil(t.target.value/x),a=(t.target.value/25.4).toFixed(2);e.setState({hp:n}),e.setState({hp_in:a})},e.handleOnHpInChange=function(t){e.setState({hp_in:t.target.value});var n=Math.ceil(t.target.value/x),a=(25.4*t.target.value).toFixed(2);e.setState({hp:n}),e.setState({hp_mm:a})},e.handleOnUChange=function(t){e.setState({u:t.target.value});var n=(t.target.value*p).toFixed(2),a=(t.target.value*p/25.4).toFixed(2);e.setState({u_mm:n}),e.setState({u_in:a})},e.handleOnUMmChange=function(t){e.setState({u_mm:t.target.value});var n=Math.ceil(t.target.value/p),a=(t.target.value/25.4).toFixed(2);e.setState({u:n}),e.setState({u_in:a})},e.handleOnUInChange=function(t){e.setState({hp_in:t.target.value});var n=Math.ceil(t.target.value/p),a=(25.4*t.target.value).toFixed(2);e.setState({u:n}),e.setState({u_mm:a})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsx)("div",{className:"bg-dark text-light p-3 mb-4",children:Object(b.jsx)("h1",{children:"Eurorack Unit/HP Convertor"})}),Object(b.jsx)(u.a,{children:Object(b.jsxs)(m.a,{defaultActiveKey:"HP",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(b.jsx)(d.a,{eventKey:"HP",title:"HP",children:Object(b.jsxs)(j.a,{children:[Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formHp",children:[Object(b.jsx)(j.a.Label,{children:"Horizontal Pitch"}),Object(b.jsx)(j.a.Control,{type:"number",placeholder:"",min:"0",value:this.state.hp,onChange:function(t){return e.handleOnHpChange(t)}}),Object(b.jsx)(j.a.Text,{className:"text-muted",children:"The number of Horizontal Pitch Units"})]}),Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formHpMm",children:[Object(b.jsx)(j.a.Label,{children:"Millimeters"}),Object(b.jsx)(j.a.Control,{type:"number",min:"0",placeholder:"",value:this.state.hp_mm,onChange:function(t){return e.handleOnHpMmChange(t)}}),Object(b.jsx)(j.a.Text,{className:"text-muted",children:"Width in Millimeters"})]}),Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formHpIn",children:[Object(b.jsx)(j.a.Label,{children:"Inches"}),Object(b.jsx)(j.a.Control,{type:"number",min:"0",placeholder:"",value:this.state.hp_in,onChange:function(t){return e.handleOnHpInChange(t)}}),Object(b.jsx)(j.a.Text,{className:"text-muted",children:"Width in Inches"})]})]})}),Object(b.jsx)(d.a,{eventKey:"Units",title:"Units",children:Object(b.jsxs)(j.a,{children:[Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formU",children:[Object(b.jsx)(j.a.Label,{children:"Eurorack Units"}),Object(b.jsx)(j.a.Control,{type:"number",placeholder:"",min:"0",value:this.state.u,onChange:function(t){return e.handleOnUChange(t)}}),Object(b.jsx)(j.a.Text,{className:"text-muted",children:"The number of Horizontal Pitch Units"})]}),Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formUMm",children:[Object(b.jsx)(j.a.Label,{children:"Millimeters"}),Object(b.jsx)(j.a.Control,{type:"number",min:"0",placeholder:"",value:this.state.u_mm,onChange:function(t){return e.handleOnUMmChange(t)}}),Object(b.jsx)(j.a.Text,{className:"text-muted",children:"Width in Millimeters"})]}),Object(b.jsxs)(j.a.Group,{className:"mb-3",controlId:"formUIn",children:[Object(b.jsx)(j.a.Label,{children:"Inches"}),Object(b.jsx)(j.a.Control,{type:"number",min:"0",placeholder:"",value:this.state.u_in,onChange:function(t){return e.handleOnUInChange(t)}}),Object(b.jsx)(j.a.Text,{className:"text-muted",children:"Width in Inches"})]})]})})]})})]})}}]),n}(a.Component);var g=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(O,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)}))};l.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[43,1,2]]]);
//# sourceMappingURL=main.b4a94d5e.chunk.js.map