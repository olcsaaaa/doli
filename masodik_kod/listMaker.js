function listMaker(n,k) {
    let list = "<ol>"
    for (let i = 1; i < k+1; i++) {
        console.log(`${n},${i}->${k}`);
        
        list+=`<li>${Math.pow(n,i)}</li>`
    }
    list+="</ol>"
    return list
}
module.exports = listMaker