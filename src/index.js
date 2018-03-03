module.exports = function longestConsecutiveLength(array) {
    const length = array.length;
    if(length < 2)
        return length;

    // Algorithm with sort more fast and universal solution
    /*
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
    return  s = s < f? f: s;*/
     //If next algorithm such as you need,
    // i want to notice, it more slow then previous with sort
    let result = 1;
    const hash = {};
    for(x of array){
        let key1 = Math.floor((x/length));
        let key2 = x%length;
        if(!hash[key1])
            hash[key1] = {};
        hash[key1][key2] = true;
        let [i,j] = [key1, key2];
        let count = 1;
        while(true){
            if(j){
                j--;
                if(!hash[i][j])
                    break;
                else{
                    count++
                }
            }else{
                if(!i)
                    break;
                else{
                    i--;
                    j = length-1;
                    if(!hash[i][j])
                        break;
                    else{
                        count++
                    }
                }
            }
        }
        [i,j] = [key1,key2];
        while(true){
            if(j < length){
                j++;
                if(!hash[i][j])
                    break;
                else{
                    count++
                }
            }else{
                if(i < length)
                    break;
                else{
                    i++;
                    j = 0;
                    if(!hash[i][j])
                        break;
                    else{
                        count++
                    }
                }
            }
        }
        result = result> count? result: count

    }
    //This algorithm guarantee fast resolving
    // if there are long consecutive sequence in array,
    // but in your cases it more slow then previous
    /*
    const hash = {};
    const length = array.length;
    let result = 1;
    if(length < 2)
        return length;
    for(x of array) {
        let key1 = Math.floor((x / length));
        let key2 = x % length;
        if (!hash[key1])
            hash[key1] = {};
        hash[key1][key2] = true;
    }
    for( let x of Object.keys(hash)){
        const keys = Object.keys(hash[x]);
        //console.log(keys)
        if(keys.length > result){
            for( let y of keys) {
                let count = 1;
                hash[x][y] = false;
                let [i,j] = [x, y];
                while(true){
                    if(j){
                        j--;
                        if(!hash[i][j])
                            break;
                        else {
                            hash[i][j] = false;
                            count++
                        }
                    }else{
                        if(!i)
                            break;
                        else{
                            i--;
                            j = length-1;
                            if(!hash[i][j])
                                break;
                            else{
                                hash[i][j] = false;
                                count++
                            }
                        }
                    }
                }
                [i,j] = [x, y];
                while(true){
                    if(j < length){
                        j++;
                        if(!hash[i][j])
                            break;
                        else{
                            hash[i][j] = false;
                            count++
                        }
                    }else{
                        if(i < length)
                            break;
                        else{
                            i++;
                            j = 0;
                            if(!hash[i][j])
                                break;
                            else{
                                hash[i][j] = false;
                                count++
                            }
                        }
                    }
                }
                result = result > count? result: count;
            }
        }
    }*/
    return result
};
