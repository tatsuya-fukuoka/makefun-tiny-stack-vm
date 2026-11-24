F=require("fs");I=process.env.MAKEFUN_INPUT_DIR||"/input";O=process.env.MAKEFUN_OUTPUT_DIR||"/output"
T=c=>{throw c}
P=()=>s.pop()??T(2)
U=v=>s.length>255?T(3):s.push(v|0)
for(d of F.readdirSync(I)){
g=`${I}/${d}/`;p=F.readFileSync(g+"program.bin");i=F.readFileSync(g+"input.bin")
s=[];c=[];m=[];w="";pc=j=n=0;e=10
try{for(;n++<1e6;){
o=p[pc]??T(9)
k=o<3?o*o:o>47&o<52?2:0
pc+k<p.length||T(9)
x=k&&p.readIntLE(pc+1,k)
pc+=k+1
;[b,a,f]=s.slice(-3).reverse()
o<3?o?U(x):T(0)
:o<8?(q=[,,,"1","100","201","2101","3102"][o],s.length<q[0]&&T(2),s.length-=q[0],[...q].slice(1).map(h=>U([b,a,f][h])))
:o>15&o<48?(r=[a+b,a-b,Math.imul(a,b),a/b,a%b,(a>>>0)/(b>>>0),(a>>>0)%(b>>>0),-b,a&b,a|b,a^b,~b,a<<b,a>>b,a>>>b,,a==b,a<b,a>>>0<b>>>0][o-16]??T(5),P(),o%4>2&o>20||P(),o>18&o<23&!b&&T(4),U(r))
:o>47&o<53?o<51?(o<49||(o<50)==!P())&&(pc+=x):o<52?(c.length>63&&T(7),c.push(pc),pc=x&65535):pc=c.pop()??T(8)
:o>63&o<66?(P(),o>64&&P(),b>>8&&T(6),o>64?m[b]=a:U(m[b]))
:o>79&o<84?o<82?(P(),z=o<81?""+b:String.fromCharCode(b&255),w=(y=w+z).length>65536?T(11):y):o<83?U(i[j++]??-1):(P(),T(b&255))
:T(5)
}}catch(x){e=x}
F.mkdirSync(g=`${O}/${d}/`,{recursive:true})
F.writeFileSync(g+"stdout.bin",w,"latin1")
F.writeFileSync(g+"exit.txt",e+"\n")
}
