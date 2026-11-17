import{a as e,c as t,d as n,l as r,n as i,s as a,t as o}from"./app-CmpnZ5Zj.js";import{t as s}from"./SeoHead-D-EYKz_L.js";import{t as c}from"./LocalizedLink-CA12B5X8.js";import{i as l,t as u}from"./MainLayout-C5-B4DEU.js";var d=n(t(),1),f=n(r()),p=Object.defineProperty,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,_=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||={})h.call(t,n)&&_(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&_(e,n,t[n]);return e},y=(e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n},b;(e=>{let t=class t{constructor(e,n,r,a){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError(`Version value out of range`);if(a<-1||a>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let o=[];for(let e=0;e<this.size;e++)o.push(!1);for(let e=0;e<this.size;e++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();let s=this.addEccAndInterleave(r);if(this.drawCodewords(s),a==-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(a=t,e=n),this.applyMask(t)}}i(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}static encodeText(n,r){let i=e.QrSegment.makeSegments(n);return t.encodeSegments(i,r)}static encodeBinary(n,r){let i=e.QrSegment.makeBytes(n);return t.encodeSegments([i],r)}static encodeSegments(e,r,a=1,s=40,c=-1,l=!0){if(!(t.MIN_VERSION<=a&&a<=s&&s<=t.MAX_VERSION)||c<-1||c>7)throw RangeError(`Invalid value`);let u,d;for(u=a;;u++){let n=t.getNumDataCodewords(u,r)*8,i=o.getTotalBits(e,u);if(i<=n){d=i;break}if(u>=s)throw RangeError(`Data too long`)}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])l&&d<=t.getNumDataCodewords(u,e)*8&&(r=e);let f=[];for(let t of e){n(t.mode.modeBits,4,f),n(t.numChars,t.mode.numCharCountBits(u),f);for(let e of t.getData())f.push(e)}i(f.length==d);let p=t.getNumDataCodewords(u,r)*8;i(f.length<=p),n(0,Math.min(4,p-f.length),f),n(0,(8-f.length%8)%8,f),i(f.length%8==0);for(let e=236;f.length<p;e^=253)n(e,8,f);let m=[];for(;m.length*8<f.length;)m.push(0);return f.forEach((e,t)=>m[t>>>3]|=e<<7-(t&7)),new t(u,r,m,c)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n==0&&r==0||n==0&&r==t-1||n==t-1&&r==0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let a=(t<<10|n)^21522;i(a>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,r(a,e));this.setFunctionModule(8,7,r(a,6)),this.setFunctionModule(8,8,r(a,7)),this.setFunctionModule(7,8,r(a,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,r(a,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,r(a,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,r(a,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;i(t>>>18==0);for(let e=0;e<18;e++){let n=r(t,e),i=this.size-11+e%3,a=Math.floor(e/3);this.setFunctionModule(i,a,n),this.setFunctionModule(a,i,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;0<=a&&a<this.size&&0<=o&&o<this.size&&this.setFunctionModule(a,o,i!=2&&i!=4)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!=1)}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){let n=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,r))throw RangeError(`Invalid argument`);let a=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],o=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],s=Math.floor(t.getNumRawDataModules(n)/8),c=a-s%a,l=Math.floor(s/a),u=[],d=t.reedSolomonComputeDivisor(o);for(let n=0,r=0;n<a;n++){let i=e.slice(r,r+l-o+(n<c?0:1));r+=i.length;let a=t.reedSolomonComputeRemainder(i,d);n<c&&i.push(0),u.push(i.concat(a))}let f=[];for(let e=0;e<u[0].length;e++)u.forEach((t,n)=>{(e!=l-o||n>=c)&&f.push(t[e])});return i(f.length==s),f}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError(`Invalid argument`);let n=0;for(let t=this.size-1;t>=1;t-=2){t==6&&(t=5);for(let i=0;i<this.size;i++)for(let a=0;a<2;a++){let o=t-a,s=t+1&2?i:this.size-1-i;!this.isFunction[s][o]&&n<e.length*8&&(this.modules[s][o]=r(e[n>>>3],7-(n&7)),n++)}}i(n==e.length*8)}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let n=0;n<this.size;n++){let r=!1,i=0,a=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[n][o]==r?(i++,i==5?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),r||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),r=this.modules[n][o],i=1);e+=this.finderPenaltyTerminateAndCount(r,i,a)*t.PENALTY_N3}for(let n=0;n<this.size;n++){let r=!1,i=0,a=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[o][n]==r?(i++,i==5?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),r||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),r=this.modules[o][n],i=1);e+=this.finderPenaltyTerminateAndCount(r,i,a)*t.PENALTY_N3}for(let n=0;n<this.size-1;n++)for(let r=0;r<this.size-1;r++){let i=this.modules[n][r];i==this.modules[n][r+1]&&i==this.modules[n+1][r]&&i==this.modules[n+1][r+1]&&(e+=t.PENALTY_N2)}let n=0;for(let e of this.modules)n=e.reduce((e,t)=>e+ +!!t,n);let r=this.size*this.size,a=Math.ceil(Math.abs(n*20-r*10)/r)-1;return i(0<=a&&a<=9),e+=a*t.PENALTY_N4,i(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{let e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError(`Version number out of range`);let n=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return i(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let n=[];for(let t=0;t<e-1;t++)n.push(0);n.push(1);let r=1;for(let i=0;i<e;i++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],r),e+1<n.length&&(n[e]^=n[e+1]);r=t.reedSolomonMultiply(r,2)}return n}static reedSolomonComputeRemainder(e,n){let r=n.map(e=>0);for(let i of e){let e=i^r.shift();r.push(0),n.forEach((n,i)=>r[i]^=t.reedSolomonMultiply(n,e))}return r}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return i(n>>>8==0),n}finderPenaltyCountPatterns(e){let t=e[1];i(t<=this.size*3);let n=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;function n(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function r(e,t){return(e>>>t&1)!=0}function i(e){if(!e)throw Error(`Assertion error`)}let a=class e{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}static makeBytes(t){let r=[];for(let e of t)n(e,8,r);return new e(e.Mode.BYTE,t.length,r)}static makeNumeric(t){if(!e.isNumeric(t))throw RangeError(`String contains non-numeric characters`);let r=[];for(let e=0;e<t.length;){let i=Math.min(t.length-e,3);n(parseInt(t.substring(e,e+i),10),i*3+1,r),e+=i}return new e(e.Mode.NUMERIC,t.length,r)}static makeAlphanumeric(t){if(!e.isAlphanumeric(t))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let r=[],i;for(i=0;i+2<=t.length;i+=2){let a=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i))*45;a+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i+1)),n(a,11,r)}return i<t.length&&n(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i)),6,r),new e(e.Mode.ALPHANUMERIC,t.length,r)}static makeSegments(t){return t==``?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let r=[];if(t<0)throw RangeError(`ECI assignment value out of range`);if(t<128)n(t,8,r);else if(t<16384)n(2,2,r),n(t,14,r);else if(t<1e6)n(6,3,r),n(t,21,r);else throw RangeError(`ECI assignment value out of range`);return new e(e.Mode.ECI,0,r)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(let r of e){let e=r.mode.numCharCountBits(t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)==`%`?(t.push(parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}};a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`;let o=a;e.QrSegment=a})(b||={}),(e=>{(e=>{let t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})(e.QrCode||={})})(b||={}),(e=>{(e=>{let t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})(e.QrSegment||={})})(b||={});var x=b,S={L:x.QrCode.Ecc.LOW,M:x.QrCode.Ecc.MEDIUM,Q:x.QrCode.Ecc.QUARTILE,H:x.QrCode.Ecc.HIGH},C=128,w=`L`,T=`#FFFFFF`,E=`#000000`,D=!1,O=1,k=4,A=0,j=.1;function M(e,t=0){let n=[];return e.forEach(function(e,r){let i=null;e.forEach(function(a,o){if(!a&&i!==null){n.push(`M${i+t} ${r+t}h${o-i}v1H${i+t}z`),i=null;return}if(o===e.length-1){if(!a)return;i===null?n.push(`M${o+t},${r+t} h1v1H${o+t}z`):n.push(`M${i+t},${r+t} h${o+1-i}v1H${i+t}z`);return}a&&i===null&&(i=o)})}),n.join(``)}function N(e,t){return e.slice().map((e,n)=>n<t.y||n>=t.y+t.h?e:e.map((e,n)=>n<t.x||n>=t.x+t.w?e:!1))}function P(e,t,n,r){if(r==null)return null;let i=e.length+n*2,a=Math.floor(t*j),o=i/t,s=(r.width||a)*o,c=(r.height||a)*o,l=r.x==null?e.length/2-s/2:r.x*o,u=r.y==null?e.length/2-c/2:r.y*o,d=r.opacity==null?1:r.opacity,f=null;if(r.excavate){let e=Math.floor(l),t=Math.floor(u);f={x:e,y:t,w:Math.ceil(s+l-e),h:Math.ceil(c+u-t)}}let p=r.crossOrigin;return{x:l,y:u,h:c,w:s,excavation:f,opacity:d,crossOrigin:p}}function F(e,t){return t==null?e?k:A:Math.max(Math.floor(t),0)}function I({value:e,level:t,minVersion:n,includeMargin:r,marginSize:i,imageSettings:a,size:o,boostLevel:s}){let c=f.useMemo(()=>{let r=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...x.QrSegment.makeSegments(t)),e),[]);return x.QrCode.encodeSegments(r,S[t],n,void 0,void 0,s)},[e,t,n,s]),{cells:l,margin:u,numCells:d,calculatedImageSettings:p}=f.useMemo(()=>{let e=c.getModules(),t=F(r,i);return{cells:e,margin:t,numCells:e.length+t*2,calculatedImageSettings:P(e,o,t,a)}},[c,o,a,r,i]);return{qrcode:c,margin:u,cells:l,numCells:d,calculatedImageSettings:p}}var L=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),R=f.forwardRef(function(e,t){let n=e,{value:r,size:i=C,level:a=w,bgColor:o=T,fgColor:s=E,includeMargin:c=D,minVersion:l=O,boostLevel:u,marginSize:d,imageSettings:p}=n,m=y(n,[`value`,`size`,`level`,`bgColor`,`fgColor`,`includeMargin`,`minVersion`,`boostLevel`,`marginSize`,`imageSettings`]),{style:h}=m,g=y(m,[`style`]),_=p?.src,b=f.useRef(null),x=f.useRef(null),S=f.useCallback(e=>{b.current=e,typeof t==`function`?t(e):t&&(t.current=e)},[t]),[k,A]=f.useState(!1),{margin:j,cells:P,numCells:F,calculatedImageSettings:R}=I({value:r,level:a,minVersion:l,boostLevel:u,includeMargin:c,marginSize:d,imageSettings:p,size:i});f.useEffect(()=>{if(b.current!=null){let e=b.current,t=e.getContext(`2d`);if(!t)return;let n=P,r=x.current,a=R!=null&&r!==null&&r.complete&&r.naturalHeight!==0&&r.naturalWidth!==0;a&&R.excavation!=null&&(n=N(P,R.excavation));let c=window.devicePixelRatio||1;e.height=e.width=i*c;let l=i/F*c;t.scale(l,l),t.fillStyle=o,t.fillRect(0,0,F,F),t.fillStyle=s,L?t.fill(new Path2D(M(n,j))):P.forEach(function(e,n){e.forEach(function(e,r){e&&t.fillRect(r+j,n+j,1,1)})}),R&&(t.globalAlpha=R.opacity),a&&t.drawImage(r,R.x+j,R.y+j,R.w,R.h)}}),f.useEffect(()=>{A(!1)},[_]);let z=v({height:i,width:i},h),B=null;return _!=null&&(B=f.createElement(`img`,{src:_,key:_,style:{display:`none`},onLoad:()=>{A(!0)},ref:x,crossOrigin:R?.crossOrigin})),f.createElement(f.Fragment,null,f.createElement(`canvas`,v({style:z,height:i,width:i,ref:S,role:`img`},g)),B)});R.displayName=`QRCodeCanvas`;var z=f.forwardRef(function(e,t){let n=e,{value:r,size:i=C,level:a=w,bgColor:o=T,fgColor:s=E,includeMargin:c=D,minVersion:l=O,boostLevel:u,title:d,marginSize:p,imageSettings:m}=n,h=y(n,[`value`,`size`,`level`,`bgColor`,`fgColor`,`includeMargin`,`minVersion`,`boostLevel`,`title`,`marginSize`,`imageSettings`]),{margin:g,cells:_,numCells:b,calculatedImageSettings:x}=I({value:r,level:a,minVersion:l,boostLevel:u,includeMargin:c,marginSize:p,imageSettings:m,size:i}),S=_,k=null;m!=null&&x!=null&&(x.excavation!=null&&(S=N(_,x.excavation)),k=f.createElement(`image`,{href:m.src,height:x.h,width:x.w,x:x.x+g,y:x.y+g,preserveAspectRatio:`none`,opacity:x.opacity,crossOrigin:x.crossOrigin}));let A=M(S,g);return f.createElement(`svg`,v({height:i,width:i,viewBox:`0 0 ${b} ${b}`,ref:t,role:`img`},h),!!d&&f.createElement(`title`,null,d),f.createElement(`path`,{fill:o,d:`M0,0 h${b}v${b}H0z`,shapeRendering:`crispEdges`}),f.createElement(`path`,{fill:s,d:A,shapeRendering:`crispEdges`}),k)});z.displayName=`QRCodeSVG`;var B=i();function V({variant:e=`default`}){return(0,B.jsxs)(`div`,{className:`cnt-city-bg cnt-city-bg--${e}`,"aria-hidden":`true`,children:[(0,B.jsx)(`div`,{className:`cnt-city-grid`}),(0,B.jsx)(`div`,{className:`cnt-red-glow cnt-red-glow--1`}),(0,B.jsx)(`div`,{className:`cnt-red-glow cnt-red-glow--2`}),(0,B.jsxs)(`svg`,{className:`cnt-city-svg`,viewBox:`0 0 1440 360`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,preserveAspectRatio:`xMidYMax slice`,children:[(0,B.jsxs)(`defs`,{children:[(0,B.jsxs)(`linearGradient`,{id:`cntSkylineFade-${e}`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,B.jsx)(`stop`,{offset:`0%`,stopColor:`#E63946`,stopOpacity:`0.32`}),(0,B.jsx)(`stop`,{offset:`55%`,stopColor:`#E63946`,stopOpacity:`0.08`}),(0,B.jsx)(`stop`,{offset:`100%`,stopColor:`#08090C`,stopOpacity:`0`})]}),(0,B.jsxs)(`linearGradient`,{id:`cntLineGrad-${e}`,x1:`0`,y1:`0`,x2:`1`,y2:`0`,children:[(0,B.jsx)(`stop`,{offset:`0%`,stopColor:`#E63946`,stopOpacity:`0`}),(0,B.jsx)(`stop`,{offset:`30%`,stopColor:`#E63946`,stopOpacity:`0.55`}),(0,B.jsx)(`stop`,{offset:`70%`,stopColor:`#ff6b78`,stopOpacity:`0.55`}),(0,B.jsx)(`stop`,{offset:`100%`,stopColor:`#E63946`,stopOpacity:`0`})]})]}),(0,B.jsxs)(`g`,{stroke:`rgba(255,255,255,0.05)`,strokeWidth:`1`,fill:`url(#cntSkylineFade-${e})`,opacity:`0.55`,children:[(0,B.jsx)(`rect`,{x:`40`,y:`180`,width:`55`,height:`180`}),(0,B.jsx)(`rect`,{x:`110`,y:`130`,width:`70`,height:`230`}),(0,B.jsx)(`rect`,{x:`200`,y:`160`,width:`50`,height:`200`}),(0,B.jsx)(`rect`,{x:`275`,y:`95`,width:`80`,height:`265`}),(0,B.jsx)(`polygon`,{points:`315,45 275,95 355,95`}),(0,B.jsx)(`rect`,{x:`380`,y:`145`,width:`65`,height:`215`}),(0,B.jsx)(`rect`,{x:`470`,y:`110`,width:`90`,height:`250`}),(0,B.jsx)(`rect`,{x:`590`,y:`150`,width:`60`,height:`210`}),(0,B.jsx)(`rect`,{x:`680`,y:`80`,width:`85`,height:`280`}),(0,B.jsx)(`line`,{x1:`722`,y1:`25`,x2:`722`,y2:`80`,stroke:`#E63946`,strokeWidth:`1.5`,opacity:`0.6`}),(0,B.jsx)(`rect`,{x:`795`,y:`135`,width:`70`,height:`225`}),(0,B.jsx)(`rect`,{x:`890`,y:`105`,width:`95`,height:`255`}),(0,B.jsx)(`rect`,{x:`1010`,y:`155`,width:`60`,height:`205`}),(0,B.jsx)(`rect`,{x:`1100`,y:`90`,width:`80`,height:`270`}),(0,B.jsx)(`polygon`,{points:`1140,40 1100,90 1180,90`}),(0,B.jsx)(`rect`,{x:`1205`,y:`140`,width:`75`,height:`220`}),(0,B.jsx)(`rect`,{x:`1305`,y:`165`,width:`65`,height:`195`})]}),(0,B.jsx)(`path`,{d:`M 145 130 Q 430 10 722 80 T 1140 90`,stroke:`url(#cntLineGrad-${e})`,strokeWidth:`1.5`,strokeDasharray:`6 6`,className:`cnt-arc-anim`}),(0,B.jsx)(`path`,{d:`M 315 95 Q 620 35 935 105 T 1335 165`,stroke:`url(#cntLineGrad-${e})`,strokeWidth:`1`,strokeDasharray:`4 8`,className:`cnt-arc-anim cnt-arc-anim--slow`}),(0,B.jsx)(`line`,{x1:`0`,y1:`260`,x2:`1440`,y2:`260`,stroke:`url(#cntLineGrad-${e})`,strokeWidth:`1`,opacity:`0.4`}),(0,B.jsx)(`line`,{x1:`0`,y1:`310`,x2:`1440`,y2:`310`,stroke:`url(#cntLineGrad-${e})`,strokeWidth:`1`,opacity:`0.65`}),(0,B.jsx)(`circle`,{cx:`315`,cy:`45`,r:`3.5`,fill:`#E63946`,className:`cnt-beacon-pulse`}),(0,B.jsx)(`circle`,{cx:`722`,cy:`25`,r:`4`,fill:`#E63946`,className:`cnt-beacon-pulse cnt-beacon-pulse--delay`}),(0,B.jsx)(`circle`,{cx:`1140`,cy:`40`,r:`3.5`,fill:`#E63946`,className:`cnt-beacon-pulse`})]})]})}function H(){let{lang:t}=o(),n=t===`id`,r=t===`cn`,{siteSettings:i}=a().props,p=(i?.email||`hello@8vice.com`).replace(/^mailto:/i,``).trim(),m=`mailto:${p}`,h=i?.whatsapp_url||`https://wa.me/628118005110`,[g,_]=(0,f.useState)(!1),[v,y]=(0,f.useState)(!1),[b,x]=(0,f.useState)({}),[S,C]=(0,f.useState)(!1),[w,T]=(0,f.useState)(!1);(0,f.useEffect)(()=>{if(!S)return;let e=document.body.style.overflow;document.body.style.overflow=`hidden`;let t=e=>{e.key===`Escape`&&C(!1)};return window.addEventListener(`keydown`,t),()=>{document.body.style.overflow=e,window.removeEventListener(`keydown`,t)}},[S]);let E=()=>{navigator.clipboard&&navigator.clipboard.writeText&&(navigator.clipboard.writeText(`eightvice`),T(!0),setTimeout(()=>T(!1),2e3))};(0,f.useEffect)(()=>{let e=document.querySelectorAll(`.m3-reveal`);if(!(`IntersectionObserver`in window)){e.forEach(e=>e.classList.add(`is-visible`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{threshold:.1,rootMargin:`0px 0px -40px 0px`});return e.forEach(e=>t.observe(e)),()=>t.disconnect()},[t,g]);let D=(e,t)=>{U(n=>({...n,[e]:t}))},O=r?[{value:`China to Indonesia`,tag:`CN → ID`,label:`中国至印度尼西亚`,sub:`进入与拓展印尼市场`},{value:`Indonesia to China`,tag:`ID → CN`,label:`印度尼西亚至中国`,sub:`中国市场准入与合作伙伴对接`},{value:`Bilateral Partnership`,tag:`ID ⇄ CN`,label:`双边战略合作`,sub:`联合倡议与产业生态协同`}]:n?[{value:`China to Indonesia`,tag:`CN → ID`,label:`Tiongkok ke Indonesia`,sub:`Ekspansi & Masuk Pasar Indonesia`},{value:`Indonesia to China`,tag:`ID → CN`,label:`Indonesia ke Tiongkok`,sub:`Akses Pasar & Mitra di Tiongkok`},{value:`Bilateral Partnership`,tag:`ID ⇄ CN`,label:`Kemitraan Bilateral`,sub:`Inisiatif Bersama & Kolaborasi Ekosistem`}]:[{value:`China to Indonesia`,tag:`CN → ID`,label:`China to Indonesia`,sub:`Entering & Scaling in Indonesia`},{value:`Indonesia to China`,tag:`ID → CN`,label:`Indonesia to China`,sub:`Market Access & Partners in China`},{value:`Bilateral Partnership`,tag:`ID ⇄ CN`,label:`Bilateral Partnership`,sub:`Joint Initiative & Ecosystem Collaboration`}],k=r?[`基础设施与城市发展`,`科技与数字生态`,`文旅出行与酒店商业`,`创意经济与生活方式`,`国际贸易与消费品`,`其他行业领域`]:n?[`Infrastruktur & Pembangunan Perkotaan`,`Teknologi & Ekosistem Digital`,`Pariwisata, Perjalanan & Perhotelan`,`Ekonomi Kreatif & Gaya Hidup`,`Perdagangan & Barang Konsumen`,`Sektor Lainnya`]:[`Infrastructure & Urban Development`,`Technology & Digital Ecosystems`,`Tourism, Travel & Hospitality`,`Creative Economy & Lifestyle`,`Trade & Consumer Goods`,`Other Sector`],A=typeof window<`u`?new URLSearchParams(window.location.search):null,j=A?A.get(`service`):null,M=A?A.get(`paper`):null,N=A?A.get(`tier`):null,P=j===`research-paper`,F=r?`中国跨境研究报告授权许可`:n?`Lisensi Akses Research Paper China`:`China Research Paper Access License`,I=[...l(t).map(e=>e.title),F],L=P?F:l(t).find(e=>e.id===j)?.title,R=P?r?`申请研究报告发票及访问许可: "${M||`中国跨境出海蓝皮书 2026`}" (许可方案: ${N===`corp`?`企业版 - $499 USD`:`高管版 - $99 USD`})。请提供官方发票与付款详情。`:n?`Permohonan Faktur & Lisensi Dokumen Riset: "${M||`China Cross-Border Blueprint 2026`}" (Paket Lisensi: ${N===`corp`?`Korporat - Rp 7.490.000`:`Eksekutif - Rp 1.490.000`}). Mohon kirimkan instruksi pembayaran dan faktur pajak perusahaan.`:`Request for Invoice & Paper License Access: "${M||`China Cross-Border Blueprint 2026`}" (License Tier: ${N===`corp`?`Corporate - $499 USD`:`Executive - $99 USD`}). Please provide official invoice and payment details.`:``,[H,U]=(0,f.useState)({name:``,company:``,position:``,email:``,phone:``,country:``,direction:O[0].value,industry:k[0],service:L||I[0],description:R,website_url:``});return(0,B.jsxs)(u,{children:[(0,B.jsx)(s,{pageCode:`contact`,title:r?`联系我们`:n?`Hubungi Kami`:`Contact Us`}),(0,B.jsxs)(`div`,{className:`cnt-page`,children:[(0,B.jsxs)(`section`,{className:`cnt-hero`,children:[(0,B.jsx)(V,{variant:`hero`}),(0,B.jsxs)(`div`,{className:`container cnt-hero__container`,children:[(0,B.jsxs)(`div`,{className:`cnt-hero__header m3-reveal`,children:[(0,B.jsxs)(`nav`,{className:`cnt-breadcrumb`,"aria-label":`Breadcrumb`,children:[(0,B.jsx)(c,{href:`/`,children:r?`首页`:n?`Beranda`:`Home`}),(0,B.jsx)(`span`,{className:`cnt-breadcrumb__sep`,children:`/`}),(0,B.jsx)(`span`,{className:`cnt-breadcrumb__current`,children:r?`联系我们`:n?`Hubungi Kami`:`Contact Us`})]}),(0,B.jsxs)(`div`,{className:`cnt-eyebrow-pill`,children:[(0,B.jsx)(`span`,{className:`cnt-eyebrow-dot`}),r?`开启战略征程 · 跨境商业咨询`:n?`MULAI PERJALANAN ANDA · KONSULTASI STRATEGIS`:`BEGIN YOUR JOURNEY · STRATEGIC ADVISORY`]}),(0,B.jsx)(`h1`,{className:`cnt-hero__title`,children:r?(0,B.jsxs)(B.Fragment,{children:[`携手开启您的下一段 `,(0,B.jsx)(`span`,{className:`cnt-text-red`,children:`跨境征程。`})]}):n?(0,B.jsxs)(B.Fragment,{children:[`Mari Mulai Perjalanan `,(0,B.jsx)(`span`,{className:`cnt-text-red`,children:`Strategis Anda.`})]}):(0,B.jsxs)(B.Fragment,{children:[`Let's Chart Your Next `,(0,B.jsx)(`span`,{className:`cnt-text-red`,children:`Journey.`})]})}),(0,B.jsx)(`p`,{className:`cnt-hero__subtitle`,children:r?`每一次卓有成效的跨境开拓，都始于清晰的战略航向与值得信赖的同行伙伴。`:n?`Setiap langkah ekspansi lintas negara yang berdampak dimulai dari arah yang jelas dan mitra yang tepat.`:`Every enduring cross-border venture begins with clear direction and the right partner beside you.`}),(0,B.jsxs)(`div`,{className:`cnt-channel-pills`,children:[(0,B.jsxs)(`a`,{href:h,target:`_blank`,rel:`noopener noreferrer`,className:`cnt-channel-pill cnt-channel-pill--wa`,children:[(0,B.jsx)(`span`,{className:`cnt-channel-pill__dot cnt-channel-pill__dot--green`}),(0,B.jsx)(`span`,{children:r?`WhatsApp 咨询`:n?`Konsultasi WhatsApp`:`WhatsApp Consultation`})]}),(0,B.jsxs)(`button`,{type:`button`,onClick:()=>C(!0),className:`cnt-channel-pill cnt-channel-pill--wc`,children:[(0,B.jsx)(`span`,{className:`cnt-channel-pill__dot cnt-channel-pill__dot--wechat`}),(0,B.jsx)(`span`,{children:r?`微信公众号 / 企业微信`:n?`WeChat Official QR Code`:`WeChat Official QR`})]}),(0,B.jsxs)(`a`,{href:m,className:`cnt-channel-pill`,children:[(0,B.jsx)(`span`,{className:`cnt-channel-pill__dot cnt-channel-pill__dot--red`}),(0,B.jsx)(`span`,{children:p})]})]}),(0,B.jsxs)(`div`,{className:`cnt-channel-qr-grid`,children:[(0,B.jsxs)(`a`,{href:h,target:`_blank`,rel:`noopener noreferrer`,className:`cnt-channel-qr-card`,children:[(0,B.jsx)(`div`,{className:`cnt-channel-qr-frame`,children:(0,B.jsx)(z,{value:h,size:128,level:`M`,bgColor:`#FFFFFF`,fgColor:`#0B0E14`})}),(0,B.jsxs)(`div`,{className:`cnt-channel-qr-label`,children:[(0,B.jsx)(`span`,{className:`cnt-channel-pill__dot cnt-channel-pill__dot--green`}),(0,B.jsx)(`span`,{children:r?`WhatsApp 扫码咨询`:n?`QR WhatsApp`:`WhatsApp QR`})]}),(0,B.jsx)(`span`,{className:`cnt-channel-qr-hint`,children:r?`扫码直连客服`:n?`Pindai untuk chat langsung`:`Scan to start WhatsApp chat`})]}),(0,B.jsxs)(`button`,{type:`button`,onClick:()=>C(!0),className:`cnt-channel-qr-card`,children:[(0,B.jsx)(`div`,{className:`cnt-channel-qr-frame`,children:(0,B.jsx)(`img`,{src:`/images/wechat.webp`,alt:`8 Vice WeChat QR Code`,loading:`eager`,decoding:`sync`,onError:e=>{e.currentTarget.dataset.fallback||(e.currentTarget.dataset.fallback=`true`,e.currentTarget.src=`/images/wechat.jpeg`)}})}),(0,B.jsxs)(`div`,{className:`cnt-channel-qr-label`,children:[(0,B.jsx)(`span`,{className:`cnt-channel-pill__dot cnt-channel-pill__dot--wechat`}),(0,B.jsx)(`span`,{children:r?`微信二维码`:n?`QR WeChat Resmi`:`WeChat QR`})]}),(0,B.jsx)(`span`,{className:`cnt-channel-qr-hint`,children:r?`微信号: eightvice`:`ID: eightvice`})]}),(0,B.jsxs)(`a`,{href:m,className:`cnt-channel-qr-card`,children:[(0,B.jsx)(`div`,{className:`cnt-channel-qr-frame`,children:(0,B.jsx)(z,{value:m,size:128,level:`M`,bgColor:`#FFFFFF`,fgColor:`#0B0E14`})}),(0,B.jsxs)(`div`,{className:`cnt-channel-qr-label`,children:[(0,B.jsx)(`span`,{className:`cnt-channel-pill__dot cnt-channel-pill__dot--red`}),(0,B.jsx)(`span`,{children:r?`邮件直达二维码`:n?`QR Email`:`Email QR`})]}),(0,B.jsx)(`span`,{className:`cnt-channel-qr-hint`,children:p})]})]})]}),!1]})]}),(0,B.jsxs)(`section`,{className:`cnt-main-section`,children:[(0,B.jsx)(`div`,{className:`cnt-arch-lines`,"aria-hidden":`true`}),(0,B.jsx)(`div`,{className:`container cnt-main-container`,children:(0,B.jsxs)(`div`,{className:`cnt-grid`,children:[(0,B.jsxs)(`div`,{className:`cnt-left-col`,children:[(0,B.jsxs)(`div`,{className:`cnt-office-card m3-reveal m3-reveal--left`,children:[(0,B.jsxs)(`div`,{className:`cnt-office-card__banner`,children:[(0,B.jsx)(`img`,{src:`/images/city_orbiting_cards.webp`,alt:`8 Vice Jakarta Office`,className:`cnt-office-card__banner-img`,loading:`lazy`,decoding:`async`}),(0,B.jsx)(`div`,{className:`cnt-office-card__banner-shade`}),(0,B.jsxs)(`div`,{className:`cnt-office-card__banner-body`,children:[(0,B.jsxs)(`span`,{className:`cnt-eyebrow-pill`,style:{marginBottom:`6px`},children:[(0,B.jsx)(`span`,{className:`cnt-eyebrow-dot`}),r?`办事处与直通联络`:n?`KANTOR & SALURAN KOMUNIKASI`:`OFFICE & DIRECT CHANNELS`]}),(0,B.jsx)(`h2`,{children:`8 Vice Strategic Advisory`})]})]}),(0,B.jsxs)(`div`,{className:`cnt-office-card__body`,children:[(0,B.jsx)(`p`,{className:`cnt-office-card__intro`,children:r?`我们的咨询团队将评估您的具体需求，并确定最切实的后续策略，全力支持您的跨境战略与海外落地。`:n?`Tim kami akan meninjau kebutuhan Anda dan menentukan langkah tindak lanjut yang paling tepat untuk mendukung ekspansi lintas batas Anda.`:`Our team will review your inquiry and determine the most appropriate next steps to support your cross-border objectives.`}),(0,B.jsxs)(`div`,{className:`cnt-info-list`,children:[(0,B.jsxs)(`div`,{className:`cnt-info-item`,children:[(0,B.jsx)(`div`,{className:`cnt-info-item__icon`,children:(0,B.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#E63946`,strokeWidth:`2`,children:[(0,B.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`}),(0,B.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]})}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{className:`cnt-info-item__lbl`,children:r?`雅加达总部`:n?`Kantor Pusat Jakarta`:`Jakarta Headquarters`}),(0,B.jsx)(`div`,{className:`cnt-info-item__val`,children:i?.address||`SOHO Building, Jl. Letjen M.T. Haryono Kav. 2, Jakarta Selatan 12810, Indonesia`})]})]}),(0,B.jsxs)(`div`,{className:`cnt-info-item`,children:[(0,B.jsx)(`div`,{className:`cnt-info-item__icon`,children:(0,B.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#E63946`,strokeWidth:`2`,children:[(0,B.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,B.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]})}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{className:`cnt-info-item__lbl`,children:r?`官方邮箱`:n?`Email Resmi`:`Official Email`}),(0,B.jsx)(`a`,{href:m,className:`cnt-info-item__link`,children:p})]})]}),(0,B.jsxs)(`div`,{className:`cnt-info-item`,children:[(0,B.jsx)(`div`,{className:`cnt-info-item__icon`,children:(0,B.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#E63946`,strokeWidth:`2`,children:[(0,B.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,B.jsx)(`polyline`,{points:`12 6 12 12 16 14`})]})}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{className:`cnt-info-item__lbl`,children:r?`服务时间与响应`:n?`Jam Layanan & Respons`:`Service Hours & Response`}),(0,B.jsx)(`div`,{className:`cnt-info-item__val`,children:r?`工作日 (09:00 - 17:00) · 1–2 个工作日内回复`:n?`Hari Kerja (09.00 - 17.00) · Respons 1–2 Hari Kerja`:`Weekdays (9 am-5 pm) · Response within 1–2 Business Days`})]})]})]}),(0,B.jsxs)(`div`,{className:`cnt-direct-box`,children:[(0,B.jsx)(`div`,{className:`cnt-direct-box__lbl`,children:r?`即时沟通通道 (WHATSAPP & 微信)`:n?`HUBUNGI LANGSUNG VIA WHATSAPP ATAU WECHAT`:`INSTANT MESSAGING DESK (WHATSAPP & WECHAT)`}),(0,B.jsxs)(`div`,{className:`cnt-direct-box__btns`,children:[(0,B.jsxs)(`a`,{href:h,target:`_blank`,rel:`noopener noreferrer`,className:`cnt-direct-btn cnt-direct-btn--wa`,children:[(0,B.jsx)(`svg`,{width:`17`,height:`17`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:(0,B.jsx)(`path`,{d:`M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z`})}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`strong`,{children:`WhatsApp`}),(0,B.jsx)(`span`,{children:r?`官方直接咨询通道`:n?`Saluran Konsultasi Langsung`:`Direct Consultation Channel`})]})]}),(0,B.jsxs)(`button`,{type:`button`,onClick:()=>C(!0),className:`cnt-direct-btn cnt-direct-btn--wc`,children:[(0,B.jsxs)(`svg`,{width:`17`,height:`17`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:[(0,B.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`}),(0,B.jsx)(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`}),(0,B.jsx)(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`}),(0,B.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`strong`,{children:`WeChat Official`}),(0,B.jsx)(`span`,{children:r?`扫码查看官方二维码`:n?`Lihat QR Code`:`View QR Code`})]})]})]})]})]})]}),!1,(0,B.jsxs)(`div`,{className:`cnt-map-card m3-reveal m3-reveal--left`,style:{transitionDelay:`150ms`},children:[(0,B.jsxs)(`div`,{className:`cnt-map-card__head`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`span`,{className:`cnt-map-card__dot`}),(0,B.jsx)(`strong`,{children:`SOHO Pancoran · South Jakarta`})]}),(0,B.jsx)(`a`,{href:`https://maps.google.com/?q=SOHO+Pancoran+Jakarta`,target:`_blank`,rel:`noopener noreferrer`,className:`cnt-map-card__ext`,children:r?`在谷歌地图中打开 ↗`:n?`Buka Google Maps ↗`:`Open in Maps ↗`})]}),(0,B.jsx)(`div`,{className:`cnt-map-card__frame`,children:(0,B.jsx)(`iframe`,{src:i?.maps_link&&(i.maps_link.includes(`embed`)||i.maps_link.includes(`output=embed`))?i.maps_link:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2023023055375!2d106.84074217499052!3d-6.237039593751147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b9259615c5%3A0x1fa5a36bd5f609ec!2sSOHO%20Pancoran!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid`,width:`100%`,height:`100%`,style:{border:0,filter:`grayscale(0.3) contrast(1.08)`},allowFullScreen:``,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,title:`SOHO Building Location Map`})})]})]}),(0,B.jsx)(`div`,{className:`cnt-right-col m3-reveal m3-reveal--right`,style:{transitionDelay:`100ms`},children:(0,B.jsxs)(`div`,{className:`cnt-form-card`,children:[(0,B.jsx)(`div`,{className:`cnt-form-card__top-bar`}),g?(0,B.jsxs)(`div`,{className:`cnt-success-state`,children:[(0,B.jsx)(`div`,{className:`cnt-success-state__icon`,children:(0,B.jsx)(`svg`,{width:`32`,height:`32`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,B.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}),(0,B.jsx)(`h3`,{children:r?`战略咨询需求已提交`:n?`Permintaan Konsultasi Terkirim`:`Strategic Inquiry Received`}),(0,B.jsx)(`p`,{children:r?`感谢您联络 8 Vice。我们的咨询团队将评估您的项目概况与业务需求，并在 2 个工作日内与您取得联系。`:n?`Terima kasih telah menghubungi 8 Vice. Tim penasihat kami akan meninjau profil dan kebutuhan bisnis Anda serta menghubungi Anda dalam waktu maksimal 2 hari kerja.`:`Thank you for reaching out to 8 Vice. Our advisory team will review your project profile and respond within two business days.`}),(0,B.jsx)(`button`,{type:`button`,onClick:()=>_(!1),className:`cnt-btn cnt-btn--secondary`,children:r?`提交其他需求`:n?`Kirim Pesan Lainnya`:`Submit Another Inquiry`})]}):(0,B.jsxs)(`div`,{className:`cnt-form-card__inner`,children:[(0,B.jsx)(`div`,{className:`cnt-kicker`,children:r?`项目与合作咨询表格`:n?`FORMULIR EKSPLORASI BISNIS`:`PROJECT & PARTNERSHIP INQUIRY`}),(0,B.jsx)(`h2`,{className:`cnt-form-card__title`,children:r?`介绍您的业务需求`:n?`Ceritakan Tentang Bisnis Anda`:`Tell Us About Your Business`}),(0,B.jsx)(`p`,{className:`cnt-form-card__lead`,children:r?`请分享关于贵公司、目标市场及业务目标的简要信息。这将帮助我们更好地了解您的需求并做好针对性的沟通准备。`:n?`Silakan bagikan beberapa detail mengenai perusahaan, target pasar, dan sasaran bisnis Anda. Informasi ini membantu kami memahami kebutuhan Anda dan mempersiapkan diskusi awal yang terarah.`:`Please share a few details about your company, target market, and business objectives. This will help us understand your requirements and prepare for an initial discussion.`}),(0,B.jsx)(`p`,{className:`cnt-form-card__sub`,children:r?`我们热忱欢迎开拓印尼市场的中国企业、寻求在华合作机遇的印尼企业，以及致力于双边合作的机构咨询洽谈。`:n?`Kami menyambut pertanyaan dari perusahaan Tiongkok yang menjajaki Indonesia, bisnis Indonesia yang mencari peluang di Tiongkok, serta organisasi yang ingin mengembangkan kemitraan bilateral.`:`We welcome inquiries from Chinese companies exploring Indonesia, Indonesian businesses seeking opportunities in China, and organizations interested in developing bilateral partnerships.`}),Object.keys(b).length>0&&(0,B.jsxs)(`div`,{className:`cnt-error-box`,children:[(0,B.jsx)(`strong`,{children:r?`请检查以下表单填写项：`:n?`Harap periksa kembali isian formulir:`:`Please check the form inputs:`}),(0,B.jsx)(`ul`,{children:Object.values(b).map((e,t)=>(0,B.jsx)(`li`,{children:e},t))})]}),(0,B.jsxs)(`form`,{onSubmit:t=>{t.preventDefault(),y(!0),x({});let i=`${H.service} (${H.direction})`,a=[`[Position]: ${H.position||`-`}`,`[Country]: ${H.country||`-`}`,`[Business Direction]: ${H.direction}`,`[Industry]: ${H.industry}`,`[Service Required]: ${H.service}`,``,`[Project Brief]:`,H.description].join(`
`),o=r?`/cn/contact-submit`:n?`/id/contact-submit`:`/contact-submit`;e.post(o,{name:H.name,company:H.company,email:H.email,phone:H.phone,subject:i,message:a,website_url:H.website_url},{preserveScroll:!0,onSuccess:()=>{y(!1),_(!0),U({name:``,company:``,position:``,email:``,phone:``,country:``,direction:O[0].value,industry:k[0],service:I[0],description:``,website_url:``})},onError:e=>{y(!1),x(e||{})}})},className:`cnt-form`,children:[(0,B.jsx)(`div`,{style:{display:`none`},"aria-hidden":`true`,children:(0,B.jsx)(`input`,{type:`text`,name:`website_url`,value:H.website_url,onChange:e=>D(`website_url`,e.target.value),tabIndex:`-1`,autoComplete:`off`})}),(0,B.jsxs)(`div`,{className:`cnt-form-row`,children:[(0,B.jsxs)(`label`,{className:`cnt-field`,children:[(0,B.jsx)(`span`,{children:r?`姓名 *`:n?`Nama Lengkap *`:`Name *`}),(0,B.jsx)(`input`,{type:`text`,required:!0,placeholder:r?`您的全名`:n?`Nama lengkap Anda`:`Your full name`,value:H.name,onChange:e=>D(`name`,e.target.value)})]}),(0,B.jsxs)(`label`,{className:`cnt-field`,children:[(0,B.jsx)(`span`,{children:r?`公司 / 机构名称 *`:n?`Perusahaan / Institusi *`:`Company / Institution *`}),(0,B.jsx)(`input`,{type:`text`,required:!0,placeholder:r?`贵机构或企业名称`:n?`Nama organisasi Anda`:`Your company or organization`,value:H.company,onChange:e=>D(`company`,e.target.value)})]})]}),(0,B.jsxs)(`div`,{className:`cnt-form-row`,children:[(0,B.jsxs)(`label`,{className:`cnt-field`,children:[(0,B.jsx)(`span`,{children:r?`职务 / 头衔`:n?`Jabatan / Posisi`:`Position / Title`}),(0,B.jsx)(`input`,{type:`text`,placeholder:r?`例如：总监、战略拓展副总裁`:n?`Contoh: Direktur, VP Ekspansi`:`e.g. Director, VP of Strategy`,value:H.position,onChange:e=>D(`position`,e.target.value)})]}),(0,B.jsxs)(`label`,{className:`cnt-field`,children:[(0,B.jsx)(`span`,{children:r?`所在国家 / 地区`:n?`Negara Asal`:`Country`}),(0,B.jsx)(`input`,{type:`text`,placeholder:r?`例如：中国、印尼、新加坡`:n?`Contoh: Indonesia, Tiongkok, Singapura`:`e.g. China, Indonesia, Singapore`,value:H.country,onChange:e=>D(`country`,e.target.value)})]})]}),(0,B.jsxs)(`div`,{className:`cnt-form-row`,children:[(0,B.jsxs)(`label`,{className:`cnt-field`,children:[(0,B.jsx)(`span`,{children:r?`工作邮箱 *`:n?`Email Bisnis *`:`Work Email *`}),(0,B.jsx)(`input`,{type:`email`,required:!0,placeholder:`name@company.com`,value:H.email,onChange:e=>D(`email`,e.target.value)})]}),(0,B.jsxs)(`label`,{className:`cnt-field`,children:[(0,B.jsx)(`span`,{children:r?`电话 / WhatsApp / 微信号`:n?`WhatsApp / WeChat / Telepon`:`Phone / WhatsApp / WeChat ID`}),(0,B.jsx)(`input`,{type:`text`,placeholder:`+86 / +62 / WeChat ID`,value:H.phone,onChange:e=>D(`phone`,e.target.value)})]})]}),(0,B.jsxs)(`div`,{className:`cnt-field`,children:[(0,B.jsx)(`span`,{children:r?`出海与合作方向 *`:n?`Arah Ekspansi / Kolaborasi Bisnis *`:`Business Direction *`}),(0,B.jsx)(`div`,{className:`cnt-dir-grid`,children:O.map(e=>(0,B.jsxs)(`button`,{type:`button`,onClick:()=>D(`direction`,e.value),className:`cnt-dir-card ${H.direction===e.value?`is-active`:``}`,children:[(0,B.jsx)(`span`,{className:`cnt-dir-card__tag`,children:e.tag}),(0,B.jsx)(`strong`,{children:e.label}),(0,B.jsx)(`small`,{children:e.sub})]},e.value))})]}),(0,B.jsxs)(`div`,{className:`cnt-form-row`,children:[(0,B.jsxs)(`label`,{className:`cnt-field`,children:[(0,B.jsx)(`span`,{children:r?`所属行业 *`:n?`Sektor Industri *`:`Industry *`}),(0,B.jsx)(`select`,{value:H.industry,onChange:e=>D(`industry`,e.target.value),children:k.map(e=>(0,B.jsx)(`option`,{value:e,children:e},e))})]}),(0,B.jsxs)(`label`,{className:`cnt-field`,children:[(0,B.jsx)(`span`,{children:r?`所需咨询服务 *`:n?`Layanan yang Dibutuhkan *`:`Service Required *`}),(0,B.jsx)(`select`,{value:H.service,onChange:e=>D(`service`,e.target.value),children:I.map(e=>(0,B.jsx)(`option`,{value:e,children:e},e))})]})]}),(0,B.jsxs)(`label`,{className:`cnt-field`,children:[(0,B.jsx)(`span`,{children:r?`项目或需求简要描述 *`:n?`Deskripsi Singkat Proyek atau Kebutuhan Anda *`:`Brief Description of Your Project *`}),(0,B.jsx)(`textarea`,{rows:`4`,required:!0,placeholder:r?`请简述您的目标市场、合作目标或具体战略咨询需求...`:n?`Ceritakan tujuan pasar, rencana kemitraan, atau dukungan strategis yang Anda perlukan...`:`Tell us about your target market, partnership goals, or specific strategic advisory needs...`,value:H.description,onChange:e=>D(`description`,e.target.value)})]}),(0,B.jsxs)(`button`,{type:`submit`,disabled:v,className:`cnt-btn cnt-btn--primary cnt-btn--submit`,children:[(0,B.jsx)(`span`,{children:v?r?`正在提交...`:n?`Mengirim...`:`Submitting...`:r?`提交战略咨询需求`:n?`Kirim Permintaan Konsultasi Strategis`:`Submit Strategic Inquiry`}),!v&&(0,B.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,children:[(0,B.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,B.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})]})]})]})]})})]})})]}),S&&typeof document<`u`&&(0,d.createPortal)((0,B.jsx)(`div`,{className:`cnt-modal-backdrop`,onClick:()=>C(!1),role:`dialog`,"aria-modal":`true`,"aria-label":`WeChat QR Code Modal`,children:(0,B.jsxs)(`div`,{className:`cnt-modal-card`,onClick:e=>e.stopPropagation(),children:[(0,B.jsx)(`button`,{type:`button`,className:`cnt-modal-close-btn`,onClick:()=>C(!1),"aria-label":r?`关闭`:n?`Tutup`:`Close`,children:`✕`}),(0,B.jsxs)(`div`,{className:`cnt-eyebrow-pill`,style:{justifyContent:`center`,marginBottom:`10px`},children:[(0,B.jsx)(`span`,{className:`cnt-eyebrow-dot`}),(0,B.jsx)(`span`,{children:`WECHAT OFFICIAL`})]}),(0,B.jsx)(`h3`,{children:r?`通过微信与我们联系`:n?`Hubungi Kami via WeChat`:`Connect on WeChat`}),(0,B.jsx)(`p`,{children:r?`请使用微信扫描下方官方二维码，或直接添加微信号与我们取得联系。`:n?`Pindai QR Code resmi di bawah ini menggunakan aplikasi WeChat, atau salin WeChat ID kami.`:`Scan the official QR code below using your WeChat app, or add our WeChat ID directly.`}),(0,B.jsx)(`div`,{className:`cnt-modal-qr-frame`,children:(0,B.jsx)(`img`,{src:`/images/wechat.webp`,alt:`8 Vice WeChat QR Code`,loading:`eager`,decoding:`sync`,fetchPriority:`high`,onError:e=>{e.currentTarget.dataset.fallback||(e.currentTarget.dataset.fallback=`true`,e.currentTarget.src=`/images/wechat.jpeg`)}})}),(0,B.jsxs)(`div`,{className:`cnt-modal-id-box`,children:[(0,B.jsx)(`span`,{className:`cnt-modal-id-label`,children:`WeChat ID:`}),(0,B.jsx)(`span`,{className:`cnt-modal-id-val`,children:`eightvice`}),(0,B.jsx)(`button`,{type:`button`,className:`cnt-modal-id-copy`,onClick:E,title:r?`复制微信号`:n?`Salin ID`:`Copy ID`,children:w?r?`已复制 ✓`:n?`Tersalin ✓`:`Copied ✓`:r?`复制`:n?`Salin`:`Copy`})]}),(0,B.jsx)(`button`,{type:`button`,onClick:()=>C(!1),className:`cnt-btn cnt-btn--secondary`,style:{width:`100%`,marginTop:`14px`},children:r?`关闭`:n?`Tutup`:`Close`})]})}),document.body)]}),(0,B.jsx)(`style`,{children:`
        .cnt-page {
          background: #08090C;
          color: #ffffff;
          overflow: hidden;
          position: relative;
        }
        .cnt-text-red {
          color: #E63946;
        }

        /* Google M3 Emphasized Decelerate Transitions */
        .m3-reveal {
          opacity: 0;
          transform: translateY(34px) scale(0.985);
          filter: blur(4px);
          transition:
            opacity 0.72s cubic-bezier(0.05, 0.7, 0.1, 1),
            transform 0.72s cubic-bezier(0.05, 0.7, 0.1, 1),
            filter 0.65s cubic-bezier(0.05, 0.7, 0.1, 1);
          will-change: opacity, transform, filter;
        }
        .m3-reveal--left {
          transform: translateX(-38px) translateY(16px) scale(0.985);
        }
        .m3-reveal--right {
          transform: translateX(38px) translateY(16px) scale(0.985);
        }
        .m3-reveal--scale {
          transform: translateY(24px) scale(0.96);
        }
        .m3-reveal.is-visible {
          opacity: 1;
          transform: translateX(0) translateY(0) scale(1);
          filter: blur(0);
        }

        /* Animated Modern City Background */
        .cnt-city-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .cnt-city-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 85% 70% at 50% 35%, #000 35%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 85% 70% at 50% 35%, #000 35%, transparent 100%);
        }
        .cnt-red-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(115px);
          pointer-events: none;
        }
        .cnt-red-glow--1 {
          width: 600px;
          height: 360px;
          top: -90px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(230,57,70,0.22) 0%, rgba(230,57,70,0) 70%);
        }
        .cnt-red-glow--2 {
          width: 480px;
          height: 320px;
          bottom: 0;
          right: -100px;
          background: radial-gradient(circle, rgba(230,57,70,0.14) 0%, rgba(230,57,70,0) 70%);
        }
        .cnt-city-svg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 320px;
          opacity: 0.72;
        }
        .cnt-arc-anim {
          stroke-dashoffset: 0;
          animation: cntArcFlow 18s linear infinite;
        }
        .cnt-arc-anim--slow {
          animation-duration: 26s;
          animation-direction: reverse;
        }
        @keyframes cntArcFlow {
          0% { stroke-dashoffset: 180; }
          100% { stroke-dashoffset: 0; }
        }
        .cnt-beacon-pulse {
          animation: cntBeacon 2.8s ease-in-out infinite;
        }
        .cnt-beacon-pulse--delay {
          animation-delay: 1.4s;
        }
        @keyframes cntBeacon {
          0%, 100% { opacity: 0.35; r: 3px; }
          50% { opacity: 1; r: 5.5px; }
        }
        .cnt-arch-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(600px 280px at 85% 15%, rgba(230,57,70,0.09), transparent 70%),
            linear-gradient(90deg, transparent 0%, rgba(230,57,70,0.05) 50%, transparent 100%);
          z-index: 0;
        }

        /* Shared Typography */
        .cnt-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #E63946;
          margin-bottom: 12px;
        }
        .cnt-kicker::before {
          content: '';
          width: 22px;
          height: 2px;
          background: linear-gradient(90deg, #E63946, rgba(230,57,70,0.2));
          display: inline-block;
        }
        .cnt-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ff8a93;
        }
        .cnt-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 10px #E63946;
          display: inline-block;
        }

        /* ====================================================================
           00 · HERO BANNER
           ==================================================================== */
        .cnt-hero {
          position: relative;
          padding: 136px 0 68px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .cnt-hero__container {
          position: relative;
          z-index: 2;
        }
        .cnt-hero__header {
          text-align: center;
          max-width: 920px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cnt-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          margin-bottom: 20px;
        }
        .cnt-breadcrumb a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
        }
        .cnt-breadcrumb a:hover {
          color: #E63946;
        }
        .cnt-breadcrumb__sep {
          color: rgba(255,255,255,0.3);
        }
        .cnt-breadcrumb__current {
          color: #ffffff;
          font-weight: 600;
        }
        .cnt-hero__title {
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 14px 0 14px;
          color: #ffffff;
        }
        .cnt-hero__subtitle {
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 500;
          color: rgba(255,255,255,0.78);
          margin: 0 0 26px;
        }
        .cnt-channel-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }
        .cnt-channel-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(15,18,26,0.85);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.9);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .cnt-channel-pill:hover {
          transform: translateY(-2px);
          border-color: rgba(230,57,70,0.5);
          color: #ffffff;
        }
        .cnt-channel-pill__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .cnt-channel-pill__dot--green {
          background: #25D366;
          box-shadow: 0 0 8px #25D366;
        }
        .cnt-channel-pill__dot--wechat {
          background: #07C160;
          box-shadow: 0 0 8px #07C160;
        }
        .cnt-channel-pill__dot--red {
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
        }
        .cnt-channel-qr-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(175px, 210px));
          justify-content: center;
          gap: 18px;
          margin-top: 24px;
          width: 100%;
        }
        .cnt-channel-qr-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 14px 14px;
          border-radius: 18px;
          background: rgba(15, 18, 26, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.11);
          color: #ffffff;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          font-family: inherit;
        }
        .cnt-channel-qr-card:hover {
          transform: translateY(-3px);
          border-color: rgba(230, 57, 70, 0.5);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.45);
        }
        .cnt-channel-qr-frame {
          background: #ffffff;
          padding: 10px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
        }
        .cnt-channel-qr-frame img,
        .cnt-channel-qr-frame svg {
          width: 128px;
          height: 128px;
          display: block;
          object-fit: contain;
        }
        .cnt-channel-qr-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 3px;
        }
        .cnt-channel-qr-hint {
          font-size: 11.5px;
          color: rgba(255, 255, 255, 0.62);
          word-break: break-all;
        }

        /* Panoramic Showcase */
        .cnt-hero__showcase {
          max-width: 1180px;
          margin: 0 auto;
        }
        .cnt-hero__image-frame {
          position: relative;
          border-radius: 26px;
          overflow: hidden;
          min-height: 390px;
          display: flex;
          align-items: flex-end;
          padding: clamp(24px, 4vw, 44px);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow:
            0 32px 80px rgba(0,0,0,0.65),
            0 0 60px rgba(230,57,70,0.12);
        }
        .cnt-hero__image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.68) contrast(1.08);
          transition: transform 8s ease;
        }
        .cnt-hero__image-frame:hover .cnt-hero__image {
          transform: scale(1.05);
        }
        .cnt-hero__image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(8,9,12,0.2) 0%, rgba(8,9,12,0.55) 45%, rgba(8,9,12,0.94) 100%),
            radial-gradient(circle at 20% 85%, rgba(230,57,70,0.32), transparent 55%);
        }
        .cnt-hero__corner {
          position: absolute;
          width: 32px;
          height: 32px;
          pointer-events: none;
          z-index: 2;
        }
        .cnt-hero__corner--tl {
          top: 20px;
          left: 20px;
          border-top: 2px solid #E63946;
          border-left: 2px solid #E63946;
          border-top-left-radius: 8px;
        }
        .cnt-hero__corner--br {
          bottom: 20px;
          right: 20px;
          border-bottom: 2px solid #E63946;
          border-right: 2px solid #E63946;
          border-bottom-right-radius: 8px;
        }
        .cnt-hero__status-tag {
          position: absolute;
          top: 22px;
          right: 26px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 15px;
          border-radius: 999px;
          background: rgba(8,9,12,0.8);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(10px);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: #ffffff;
        }
        .cnt-hero__quote-box {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(22px, 3vw, 32px) clamp(24px, 3.5vw, 38px);
          border-radius: 20px;
          background: rgba(12,14,20,0.8);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(18px);
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .cnt-hero__quote-bar {
          width: 5px;
          align-self: stretch;
          border-radius: 999px;
          background: linear-gradient(180deg, #E63946 0%, #ff8a93 100%);
          flex-shrink: 0;
        }
        .cnt-hero__quote-text {
          margin: 0;
          font-size: clamp(15.5px, 1.8vw, 19.5px);
          font-weight: 500;
          line-height: 1.62;
          color: rgba(255,255,255,0.95);
        }

        /* ====================================================================
           01 · MAIN CONTACT SPLIT SECTION
           ==================================================================== */
        .cnt-main-section {
          position: relative;
          padding: clamp(68px, 7vw, 108px) 0 116px;
        }
        .cnt-main-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
        }
        .cnt-grid {
          display: grid;
          grid-template-columns: 0.92fr 1.28fr;
          gap: clamp(32px, 4vw, 48px);
          align-items: start;
        }
        .cnt-left-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Office Card */
        .cnt-office-card {
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(165deg, rgba(18,21,30,0.94) 0%, rgba(10,12,18,0.98) 100%);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 24px 56px rgba(0,0,0,0.45);
        }
        .cnt-office-card__banner {
          position: relative;
          padding: 28px 30px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cnt-office-card__banner-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.45);
        }
        .cnt-office-card__banner-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(8,9,12,0.82) 0%, rgba(230,57,70,0.28) 100%);
        }
        .cnt-office-card__banner-body {
          position: relative;
          z-index: 2;
        }
        .cnt-office-card__banner-body h2 {
          font-size: 24px;
          font-weight: 800;
          margin: 4px 0 0;
          color: #ffffff;
        }
        .cnt-office-card__body {
          padding: 26px 30px 30px;
        }
        .cnt-office-card__intro {
          font-size: 14.5px;
          line-height: 1.68;
          color: rgba(255,255,255,0.72);
          margin: 0 0 22px;
        }
        .cnt-info-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 24px;
        }
        .cnt-info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .cnt-info-item__icon {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          background: rgba(230,57,70,0.12);
          border: 1px solid rgba(230,57,70,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cnt-info-item__lbl {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.48);
          margin-bottom: 3px;
        }
        .cnt-info-item__val {
          font-size: 14.5px;
          line-height: 1.55;
          color: rgba(255,255,255,0.9);
        }
        .cnt-info-item__link {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
        }
        .cnt-info-item__link:hover {
          color: #E63946;
        }

        /* Direct Instant Channels Box */
        .cnt-direct-box {
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .cnt-direct-box__lbl {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.5);
          margin-bottom: 12px;
        }
        .cnt-direct-box__btns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .cnt-direct-btn {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 12px 14px;
          border-radius: 14px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
        }
        .cnt-direct-btn div {
          display: flex;
          flex-direction: column;
        }
        .cnt-direct-btn strong {
          font-size: 13px;
          font-weight: 700;
        }
        .cnt-direct-btn span {
          font-size: 11.5px;
          opacity: 0.85;
        }
        .cnt-direct-btn--wa {
          background: rgba(37,211,102,0.12);
          border: 1px solid rgba(37,211,102,0.34);
          color: #4ADE80;
        }
        .cnt-direct-btn--wa:hover {
          background: rgba(37,211,102,0.2);
          transform: translateY(-2px);
        }
        .cnt-direct-btn--wc {
          background: rgba(7,193,96,0.12);
          border: 1px solid rgba(7,193,96,0.34);
          color: #34D399;
        }
        .cnt-direct-btn--wc:hover {
          background: rgba(7,193,96,0.2);
          transform: translateY(-2px);
        }

        /* 3-Step Process Card */
        .cnt-steps-card {
          padding: 26px 28px;
          border-radius: 22px;
          background: rgba(15,18,26,0.9);
          border: 1px solid rgba(255,255,255,0.09);
        }
        .cnt-steps-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 6px;
        }
        .cnt-step-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }
        .cnt-step-item__num {
          font-size: 11.5px;
          font-weight: 800;
          color: #E63946;
          background: rgba(230,57,70,0.14);
          border: 1px solid rgba(230,57,70,0.3);
          padding: 4px 8px;
          border-radius: 7px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .cnt-step-item h4 {
          font-size: 14.5px;
          font-weight: 700;
          margin: 0 0 3px;
          color: #ffffff;
        }
        .cnt-step-item p {
          font-size: 13px;
          line-height: 1.55;
          color: rgba(255,255,255,0.65);
          margin: 0;
        }

        /* Map Card */
        .cnt-map-card {
          border-radius: 22px;
          overflow: hidden;
          background: rgba(15,18,26,0.92);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .cnt-map-card__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          font-size: 13px;
        }
        .cnt-map-card__head > div {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cnt-map-card__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #E63946;
          box-shadow: 0 0 8px #E63946;
        }
        .cnt-map-card__ext {
          font-size: 12px;
          font-weight: 700;
          color: #ff8a93;
          text-decoration: none;
        }
        .cnt-map-card__frame {
          aspect-ratio: 16 / 9.5;
        }

        /* ====================================================================
           RIGHT COLUMN: FORM CARD
           ==================================================================== */
        .cnt-form-card {
          border-radius: 26px;
          overflow: hidden;
          background: linear-gradient(165deg, rgba(19,22,32,0.95) 0%, rgba(10,12,18,0.98) 100%);
          border: 1px solid rgba(255,255,255,0.11);
          box-shadow:
            0 30px 72px rgba(0,0,0,0.55),
            0 0 50px rgba(230,57,70,0.08);
        }
        .cnt-form-card__top-bar {
          height: 4px;
          background: linear-gradient(90deg, #E63946 0%, #ff8a93 50%, transparent 100%);
        }
        .cnt-form-card__inner {
          padding: clamp(28px, 4vw, 44px);
        }
        .cnt-form-card__title {
          font-size: clamp(24px, 2.8vw, 34px);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
          color: #ffffff;
        }
        .cnt-form-card__lead {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.78);
          margin: 0 0 10px;
        }
        .cnt-form-card__sub {
          font-size: 13.5px;
          line-height: 1.65;
          color: rgba(255,255,255,0.54);
          margin: 0 0 28px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cnt-error-box {
          padding: 16px 20px;
          border-radius: 14px;
          background: rgba(230,57,70,0.12);
          border: 1px solid rgba(230,57,70,0.4);
          color: #ff8a93;
          font-size: 13.5px;
          margin-bottom: 22px;
        }
        .cnt-error-box ul {
          margin: 8px 0 0 18px;
          padding: 0;
        }

        .cnt-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .cnt-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .cnt-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cnt-field > span {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.03em;
          color: rgba(255,255,255,0.85);
        }
        .cnt-field input,
        .cnt-field select,
        .cnt-field textarea {
          width: 100%;
          padding: 13px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.13);
          color: #ffffff;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: all 0.22s ease;
        }
        .cnt-field select option {
          background: #0F1219;
          color: #ffffff;
        }
        .cnt-field input:focus,
        .cnt-field select:focus,
        .cnt-field textarea:focus {
          border-color: #E63946;
          background: rgba(255,255,255,0.06);
          box-shadow: 0 0 0 3px rgba(230,57,70,0.18);
        }

        /* Direction Selector Cards */
        .cnt-dir-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .cnt-dir-card {
          padding: 14px;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.75);
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: all 0.22s ease;
        }
        .cnt-dir-card__tag {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #E63946;
        }
        .cnt-dir-card strong {
          font-size: 13.5px;
          color: #ffffff;
        }
        .cnt-dir-card small {
          font-size: 11.5px;
          line-height: 1.4;
          color: rgba(255,255,255,0.55);
        }
        .cnt-dir-card.is-active {
          background: rgba(230,57,70,0.16);
          border-color: #E63946;
          box-shadow: 0 10px 24px rgba(230,57,70,0.2);
        }

        .cnt-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: all 0.28s cubic-bezier(0.05, 0.7, 0.1, 1);
        }
        .cnt-btn--primary {
          background: linear-gradient(135deg, #E63946 0%, #b91c28 100%);
          color: #ffffff;
          box-shadow: 0 14px 32px rgba(230,57,70,0.35);
        }
        .cnt-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(230,57,70,0.5);
        }
        .cnt-btn--secondary {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.16);
          color: #ffffff;
        }
        .cnt-btn--submit {
          width: 100%;
          padding: 16px 28px;
          font-size: 15px;
          margin-top: 6px;
        }

        /* Success State */
        .cnt-success-state {
          padding: 64px 28px;
          text-align: center;
        }
        .cnt-success-state__icon {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(37,211,102,0.15);
          border: 1px solid rgba(37,211,102,0.4);
          color: #4ADE80;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 22px;
        }
        .cnt-success-state h3 {
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 12px;
        }
        .cnt-success-state p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.72);
          max-width: 460px;
          margin: 0 auto 26px;
        }

        /* WeChat Modal */
        .cnt-modal-backdrop {
          position: fixed !important;
          inset: 0 !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          height: 100dvh !important;
          z-index: 999999 !important;
          background: rgba(6, 8, 12, 0.86) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 20px !important;
          overflow-y: auto !important;
          animation: cntFadeIn 0.2s ease-out;
        }
        .cnt-modal-card {
          position: relative;
          background: #10131C;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 24px;
          padding: 34px 28px 28px;
          max-width: 400px;
          width: 100%;
          text-align: center;
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(7, 193, 96, 0.14);
          animation: cntScaleUp 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          margin: auto;
        }
        .cnt-modal-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }
        .cnt-modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .cnt-modal-card h3 {
          font-size: 20px;
          font-weight: 800;
          margin: 0 0 6px;
          color: #FFFFFF;
        }
        .cnt-modal-card p {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 16px;
          line-height: 1.5;
        }
        .cnt-modal-qr-frame {
          background: #ffffff;
          padding: 12px;
          border-radius: 16px;
          display: inline-block;
          margin-bottom: 14px;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
        }
        .cnt-modal-qr-frame img {
          width: 220px;
          height: 220px;
          object-fit: contain;
          display: block;
          border-radius: 6px;
        }
        .cnt-modal-id-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 8px 14px;
          font-size: 13px;
        }
        .cnt-modal-id-label {
          color: rgba(255, 255, 255, 0.6);
        }
        .cnt-modal-id-val {
          font-weight: 700;
          color: #07C160;
          letter-spacing: 0.5px;
        }
        .cnt-modal-id-copy {
          background: rgba(7, 193, 96, 0.18);
          border: 1px solid rgba(7, 193, 96, 0.4);
          color: #07C160;
          font-size: 11.5px;
          font-weight: 600;
          border-radius: 6px;
          padding: 3px 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cnt-modal-id-copy:hover {
          background: #07C160;
          color: #ffffff;
        }
        @keyframes cntFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cntScaleUp {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Responsive */
        @media (max-width: 1040px) {
          .cnt-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 680px) {
          .cnt-hero {
            padding: 114px 0 54px;
          }
          .cnt-hero__quote-box {
            flex-direction: column;
            align-items: flex-start;
          }
          .cnt-hero__quote-bar {
            width: 56px;
            height: 4px;
          }
          .cnt-form-row,
          .cnt-dir-grid,
          .cnt-direct-box__btns,
          .cnt-channel-qr-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}export{H as default};