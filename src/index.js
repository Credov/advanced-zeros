module.exports = function getZerosCount(number, base) {
  let i,j,q,w,e,res;
  	res=number;
      j=base;
        for (i=2;i<=base;i++){
            if (j%i===0){
                q=0;
                while (j%i===0){
                      q++;
                      j=Math.floor(j/i);
                }
                w=0;
                e=number;
                while (e/i>0){
                      w+=Math.floor(e/i);
                      e=Math.floor(e/i);
                }
                res=Math.min(res,Math.floor(w/q));
            }
        }
  return res;
}
