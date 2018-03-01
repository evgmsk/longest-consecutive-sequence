module.exports = function longestConsecutiveLength(array) {
    const length = array.length;
    if(length < 2)
        return length;
    const arr = [ ...array].sort((a,b) => a-b);
    let [f, s] = [1, 0];
    for(let i = 1; i < length; i++){
        if(arr[i] - 1 === arr[i - 1]){
            ++f
        }else if (arr[i] - arr[i - 1] > 1){
            s = s < f? f: s;
            f = 1
        }
    }
    return  s = s < f? f: s;
};
