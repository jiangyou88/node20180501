onmessage=function(e){
    console.log(e);
    let sum=0;
    for(let i=0;i<e.data;i++){
        sum+=i
    }
    this.postMessage(sum);
}