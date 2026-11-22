import{mkdirSync as M,readdirSync as R,readFileSync as F,writeFileSync as W}from'node:fs';
const T="#4d')-.2        ,,,,,,,(,,,(,,, ,,,             CGGC#           (+              ''$'",X={16:(a,b)=>a+b|0,17:(a,b)=>a-b|0,18:Math.imul,19:(a,b)=>a==1<<31&&b==-1?a:a/b|0,20:(a,b)=>b==-1?0:a%b|0,21:(a,b)=>(a>>>0)/(b>>>0)|0,22:(a,b)=>(a>>>0)%(b>>>0)|0,24:(a,b)=>a&b,25:(a,b)=>a|b,26:(a,b)=>a^b,28:(a,b)=>a<<b,29:(a,b)=>a>>b,30:(a,b)=>a>>>b|0,32:(a,b)=>+(a==b),33:(a,b)=>+(a<b),34:(a,b)=>+(a>>>0<b>>>0)};
function run(p,I){
const n=p.length,D=new Int32Array(256),C=[],m=new Int32Array(256),o=new Uint8Array(65536);
let s=0,l=0,i=0,c=0,t=0;
const E=(x)=>[o.slice(0,l),x];
for(;;){
if(t++>=1e6)return E(10);
if(!(c>=0&&c<n))return E(9);
const q=p[c],v=T.charCodeAt(q)-35;
if(!(v>=0))return E(5);
const k=v>>4,u=v>>2&3,w=v&3,z=c+1+k;
if(c+k>=n)return E(9);
if(s<u)return E(2);
if(s-u+w>256)return E(3);
c=z;
const b=D[s-1],a=D[s-2],y=p[z-2]|p[z-1]<<8;
if(X[q]){
if(q>18&&q<23&&!b)return E(4);
s-=2;D[s++]=X[q](a,b)}
else if(q==1)D[s++]=p[z-1]<<24>>24;
else if(q==2)D[s++]=p[z-4]|p[z-3]<<8|y<<16;
else if(q==3)s--;
else if(q==4)D[s++]=b;
else if(q==5){D[s-1]=a;D[s-2]=b}
else if(q==6)D[s++]=a;
else if(q==7){const e=D[s-3];D[s-3]=a;D[s-2]=b;D[s-1]=e}
else if(q==23)D[s-1]=-b|0;
else if(q==27)D[s-1]=~b;
else if(q>47&&q<51){if(q>48)s--;if(q==48||(q==49)==!b)c=z+(y<<16>>16)}
else if(q==51){if(C.length>63)return E(7);C.push(z);c=y}
else if(q==52){if(!C.length)return E(8);c=C.pop()}
else if(q==64||q==65){if(b>>>0>255)return E(6);if(q==64)D[s-1]=m[b];else{m[b]=a;s-=2}}
else if(q==80){const e=""+b;if(l+e.length>65536)return E(11);s--;for(const h of e)o[l++]=h.charCodeAt(0)}
else if(q==81){if(l>65535)return E(11);o[l++]=D[--s]&255}
else if(q==82)D[s++]=i<I.length?I[i++]:-1;
else if(q==83)return E(b&255);
else return E(0)}}
for(const d of R(process.env.MAKEFUN_INPUT_DIR??'/input').sort()){
const e=process.env.MAKEFUN_INPUT_DIR??'/input',[x,y]=run(F(e+'/'+d+'/program.bin'),F(e+'/'+d+'/input.bin')),f=(process.env.MAKEFUN_OUTPUT_DIR??'/output')+'/'+d;
M(f,{recursive:true});W(f+'/stdout.bin',x);W(f+'/exit.txt',y+'\n')}
