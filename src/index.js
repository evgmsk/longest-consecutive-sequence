module.exports = function longestConsecutiveLength(array, sort = false) {
    const length = array.length;
    if(length < 2)
        return length;

    const hash = {};

    // The fastest solution to path all tests
    const theFastest = (array) => {
        const arr = array;
        if(array[0] > array[1] || sort)
            arr.sort((a,b) => a-b);
        let [f, s] = [1, 1];
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

    //If next algorithm such as you expect,
    // i want to notice, it more slow for your cases then previous one even when every array is sorted and has complexity more then O(n)
    const hashMap = (array) =>{
        let result = 1;
        for(x of array) {
            let key1 = Math.floor((x / length));
            let key2 = x % length;
            if (!hash[key1])
                hash[key1] = {};
            hash[key1][key2] = true;
            let count = countUp(key1, key2) + countDown(key1, key2);
            result = result > count ? result : count
        }
        return result
    };

    const countUp = (key1, key2, count = 1) => {
        key2++;
        if(hash[key1][key2]){
            count++;
            return countUp(key1, key2, count)
        }
        if(key2 === length -1 && hash[key1 + 1] && hash[key1][key2])
            return countDown(key1 + 1, -1, count);
        return count
    };

    const countDown = (key1, key2, count = 0) => {
        key2--;
        if(hash[key1][key2]){
            count++;
            return countDown(key1, key2, count)
        }
        if(!key2 && hash[key1 - 1] && hash[key1][key2])
            return countDown(key1 - 1, length, count);
        return count
    };

    return sort? theFastest(array): hashMap(array)
};
