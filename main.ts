import{mkdirSync as M,readdirSync as R,readFileSync as F,writeFileSync as W}from'node:fs'
const{MAKEFUN_INPUT_DIR:e='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env,T="#'3$$%%&        %%%%%%%$%%%$%%% %%%             +,,+#           $%              $$#$"
for(const d of R(e)){
const p=F(e+'/'+d+'/program.bin'),I=F(e+'/'+d+'/input.bin'),D=[],C=[],m=[],f=O+'/'+d
let s=0,i=0,c=0,t,A,B,L,h,o=''
try{for(t=1e6;t--;){
const q=p[c]??256,v=T.charCodeAt(q)-35,u=v&3,z=c+1+(v>>2)
const b=D[s-1],a=D[s-2],y=p[z-2]|p[z-1]<<8
if(!(v>=0)|z>p.length)throw v>=0|q>>8?9:5
if(s<u)throw 2
c=z
if(q%83<1)throw q&&b&255
L=[,[p[z-1]<<24>>24],[p[z-4]|p[z-3]<<8|y<<16],[],[b,b],[b,a],[a,b,a],[a,b,D[s-3]]][q]||[]
if(q>15&q<35){
if(q>18&q<23&!b)throw 4
L=[[a+b|0,a-b|0,Math.imul(a,b),a/b|0,a%b|0,(A=a>>>0)/(B=b>>>0)|0,A%B|0,-b|0,a&b,a|b,a^b,~b,a<<b,a>>b,a>>>b|0,,a==b|0,a<b|0,A<B|0][q-16]]}
if(q>47&q<51&&(!u||(q>49?b:!b)))c=z+(y<<16>>16)
if(q==51){if(C.push(z)>64)throw 7
c=y}
if(q==52&&(c=C.pop())==null)throw 8
if(q>>1==32){if(b>>>0>255)throw 6
q&1?m[b]=a:L=[m[b]|0]}
if(q>>1==40){h=q<81?""+b:String.fromCharCode(b&255)
if(o.length+h.length>65536)throw 11
o+=h}
if(q==82)L=[I[i++]??-1]
s-=u
L.map(w=>D[s++]=w)
if(s>256)throw 3}
throw 10}catch(r){
M(f,{recursive:true})
W(f+'/stdout.bin',o,'latin1')
W(f+'/exit.txt',r+'\n')}}
