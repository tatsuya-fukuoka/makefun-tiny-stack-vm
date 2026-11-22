import{mkdirSync as M,readdirSync as R,readFileSync as F,writeFileSync as W}from'node:fs';
const V=process.env,e=V.MAKEFUN_INPUT_DIR??'/input',T="#'3$$%%&        %%%%%%%$%%%$%%% %%%             +,,+#           $%              $$#$";
for(const d of R(e).sort()){
const p=F(e+'/'+d+'/program.bin'),I=F(e+'/'+d+'/input.bin'),D=[],C=[],m=[],o=Buffer.alloc(65536),f=(V.MAKEFUN_OUTPUT_DIR??'/output')+'/'+d;
let s=0,l=0,i=0,c=0,t=0,x;
try{for(;t++<1e6;){
const q=p[c],v=T.charCodeAt(q)-35,k=v>>2,u=v&3,z=c+1+k;
if(q==null)throw 9;
if(!(v>=0))throw 5;
if(c+k>=p.length)throw 9;
if(s<u)throw 2;
if(!q)throw 0;
const b=D[s-1],a=D[s-2],g=D[s-3],y=p[z-2]|p[z-1]<<8;
s-=u;c=z;
let L=[];
if(q<8)L=[0,[p[z-1]<<24>>24],[p[z-4]|p[z-3]<<8|y<<16],[],[b,b],[b,a],[a,b,a],[a,b,g]][q];
if(q>15&&q<35){if(q>18&&q<23&&!b)throw 4;L=[[a+b|0,a-b|0,Math.imul(a,b),a/b|0,a%b|0,(a>>>0)/(b>>>0)|0,(a>>>0)%(b>>>0)|0,-b|0,a&b,a|b,a^b,~b,a<<b,a>>b,a>>>b|0,0,+(a==b),+(a<b),+(a>>>0<b>>>0)][q-16]]}
if(q>47&&q<51&&(q==48||(q==49)==!b))c=z+(y<<16>>16);
if(q==51){if(C.length>63)throw 7;C.push(z);c=y}
if(q==52){if(!C.length)throw 8;c=C.pop()}
if(q==64||q==65){if(b>>>0>255)throw 6;if(q==64)L=[m[b]|0];else m[b]=a}
if(q==80||q==81){const h=q<81?Buffer.from(""+b):[b&255];if(l+h.length>65536)throw 11;o.set(h,l);l+=h.length}
if(q==82)L=[I[i++]??-1];
if(q==83)throw b&255;
for(const w of L)D[s++]=w;
if(s>256)throw 3}
throw 10}catch(r){x=r}
M(f,{recursive:true});W(f+'/stdout.bin',o.slice(0,l));W(f+'/exit.txt',x+'\n')}
