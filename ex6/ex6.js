let mssgObj,evenoddObj;
let bttnObj,resetObj;
let int_num,int_sum;
let chr_ptag;
let chr_capint="整数";
let chr_capsum="合計";

mssgObj=document.getElementById("mssg");
evenoddObj=document.getElementById("evenodd");
bttnObj=document.getElementById("bttn");
resetObj=document.getElementById("reset");
function rewrite_numsum(){
    let disp_numsum_txt;
    disp_numsum_txt+="&emsp;&emsp;&nbsp;"+chr_capsum+String(int_sum);
    console.log("int_num,int_sum(func numsum)): ",int_num,int_sum);

    return disp_numsum_txt;
}


function rewrite_evenodd(capintsum,number){
    let judge_text=capintsum;
        console.log("number(in evenodd): ",number);
        console.log("capint(in evenodd) :",capintsum);
    if(number%2===0){
        judge_text+= ": "+"偶数"+"&emsp";
            console.log("number(in_evenodd):even: ",number);
    }else{
        judge_text+=": "+"奇数"+"&emsp;";
            console.log("number(in evenodd):odd: ", number);
    }
    return judge_text;
}

function chk_perfectNum(int_chk_num){
    let i,int_perfectNum_count=0;
    for(i=1;i<int_chk_num;i=i+1){
        if(int_chk_num%i===0){
            int_perfectNum_count+=i;
            console.log("int_chk_num,i ",int_chk_num,i);
        }
    }
    if(int_perfectNum_count===int_chk_num){
        return true;
    }else{
        return false;
    }
}

int_num=0,int_sum=0;
function popup(int_sum){
    window.alert("合計"+String(int_sum)+"が完全数です!");
}

function bttn(){
    int_num=int_num+1;
    int_sum=int_num+int_sum;
    mssgObj.innerHTML=rewrite_numsum();
    chr_ptag=rewrite_evenodd(chr_capint,int_num);
    chr_ptag+=rewrite_evenodd(chr_capsum,int_sum);
    evenoddObj.innerHTML=chr_ptag;
    if(chk_perfectNum(int_sum)==true){
        //popup(int_sum);
        setTimeout(function(){popup(int_sum);},1);
    }
}

function reset(){
    int_num=0;
    int_sum=0;
    mssgObj.innerHTML=rewrite_numsum();
    chr_ptag=rewrite_evenodd(chr_capsum,int_sum);
    chr_ptag+=rewrite_evenodd(chr_capsum,int_sum);
    evenoddObj.innerHTML=chr_ptag;
}

bttnObj.addEventListener("click",function(){ bttn();},false);
resetObj.addEventListener("click",function(){ reset();},false);