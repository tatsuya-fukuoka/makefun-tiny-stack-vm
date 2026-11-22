import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
const T:Record<number,number[]>={0:[0,0,0],1:[1,0,1],2:[4,0,1],3:[0,1,0],4:[0,1,2],5:[0,2,2],6:[0,2,3],7:[0,3,3],23:[0,1,1],27:[0,1,1],48:[2,0,0],49:[2,1,0],50:[2,1,0],51:[2,0,0],52:[0,0,0],64:[0,1,1],65:[0,2,0],80:[0,1,0],81:[0,1,0],82:[0,0,1],83:[0,1,0]};
for(const k of[16,17,18,19,20,21,22,24,25,26,28,29,30,32,33,34])T[k]=[0,2,1];
function run(p:Uint8Array,inp:Uint8Array){
const n=p.length,D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=new Uint8Array(65536);
let sp=0,cs=0,ol=0,ip=0,pc=0,st=0;
const E=(c:number,t?:number)=>({o:o.slice(0,ol),c:t??c});
for(;;){
if(st===1e6)return E(10);
if(pc<0||pc>=n)return E(9);
const op=p[pc],t=T[op];
if(!t)return E(5);
const[im,po,pu]=t;
if(pc+im>=n)return E(9);
st++;
const nx=pc+1+im;
if(sp<po)return E(2);
if(sp-po+pu>256)return E(3);
pc=nx;
switch(op){
case 0:return E(0);
case 1:D[sp++]=(p[nx-1]<<24)>>24;break;
case 2:D[sp++]=p[nx-4]|p[nx-3]<<8|p[nx-2]<<16|p[nx-1]<<24;break;
case 3:sp--;break;
case 4:D[sp]=D[sp-1];sp++;break;
case 5:{const x=D[sp-1];D[sp-1]=D[sp-2];D[sp-2]=x;break}
case 6:D[sp]=D[sp-2];sp++;break;
case 7:{const a=D[sp-3];D[sp-3]=D[sp-2];D[sp-2]=D[sp-1];D[sp-1]=a;break}
case 23:D[sp-1]=-D[sp-1]|0;break;
case 27:D[sp-1]=~D[sp-1];break;
case 48:case 49:case 50:{
const rel=((p[nx-2]|p[nx-1]<<8)<<16)>>16;let g=true;
if(op>48){const v=D[--sp];g=op===49?v===0:v!==0}
if(g)pc=nx+rel;break}
case 51:if(cs===64)return E(7);C[cs++]=nx;pc=p[nx-2]|p[nx-1]<<8;break;
case 52:if(cs===0)return E(8);pc=C[--cs];break;
case 64:{const a=D[sp-1];if(a<0||a>255)return E(6);D[sp-1]=M[a];break}
case 65:{const a=D[sp-1];if(a<0||a>255)return E(6);M[a]=D[sp-2];sp-=2;break}
case 80:{const s=String(D[sp-1]);if(ol+s.length>65536)return E(11);sp--;for(let i=0;i<s.length;i++)o[ol++]=s.charCodeAt(i);break}
case 81:if(ol>=65536)return E(11);o[ol++]=D[--sp]&255;break;
case 82:D[sp++]=ip<inp.length?inp[ip++]:-1;break;
case 83:return E(D[--sp]&255);
default:{
const b=D[sp-1],a=D[sp-2];let r=0;
switch(op){
case 16:r=a+b|0;break;
case 17:r=a-b|0;break;
case 18:r=Math.imul(a,b);break;
case 19:if(!b)return E(4);r=a===-2147483648&&b===-1?a:a/b|0;break;
case 20:if(!b)return E(4);r=b===-1?0:a%b|0;break;
case 21:if(!b)return E(4);r=Math.floor((a>>>0)/(b>>>0))|0;break;
case 22:if(!b)return E(4);r=(a>>>0)%(b>>>0)|0;break;
case 24:r=a&b;break;
case 25:r=a|b;break;
case 26:r=a^b;break;
case 28:r=a<<(b&31);break;
case 29:r=a>>(b&31);break;
case 30:r=a>>>(b&31)|0;break;
case 32:r=a===b?1:0;break;
case 33:r=a<b?1:0;break;
case 34:r=a>>>0<b>>>0?1:0;break;
}
sp-=2;D[sp++]=r}
}}}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const id of readdirSync(I).sort()){
const r=run(new Uint8Array(readFileSync(I+'/'+id+'/program.bin')),new Uint8Array(readFileSync(I+'/'+id+'/input.bin')));
mkdirSync(O+'/'+id,{recursive:true});
writeFileSync(O+'/'+id+'/stdout.bin',r.o);
writeFileSync(O+'/'+id+'/exit.txt',r.c+'\n')}
