
class AClass{
    
    constructor(limit) {
        this.limit = limit;
        this.Numbers = [];
        this.fill();
    }
    fill(){
        for(let i = 0; i < this.limit;i++)
            this.Numbers[i] = Math.floor(Math.random()*(10-1)+1);   
        return this.Numbers;
    }
    factorial(){
        const fact = (n) => {
            return (n != 1) ? n * fact(n - 1) : 1;
        }
        for(let i = 0; i < this.limit;i++)
            this.Numbers[i] = fact(this.Numbers[i]);
        return this.Numbers;
    }
    sort(){
        throw new Error("function sort must be implemented");
    }
}

class Class1 extends AClass{
    fill(){
        super.fill();
        return this.Numbers;
    }
    sort(){
        //simple bubble_sort
        let arrTemp = this.factorial();
        for(let i = 0; i < arrTemp.length;i++){
            for(let j = 0; j < arrTemp.length;j++){
                if(arrTemp[i] < arrTemp[j]){
                    let temp = arrTemp[i];
                    arrTemp[i] = arrTemp[j];
                    arrTemp[j] = temp;
                }
            }
        }
        this.Numbers = arrTemp;
        return this.Numbers;
    }
}

class Class2 extends AClass{
    fill(){
        super.fill();
        return this.Numbers;
    }
    sort(){
        //simple quicksort
        let arrTemp = this.factorial();
        const quickSort = (arr) =>{
            if (arr.length < 2) return arr;
            let pivot = arr[0];
            const left = [];
            const right = [];
    
            for (let i = 1; i < arr.length; i++) {
                if (pivot > arr[i]) {
                    left.push(arr[i]);
                } else {
                    right.push(arr[i]);
                }
            }
            return quickSort(left).concat(pivot, quickSort(right));
        } 
        this.Numbers = quickSort(arrTemp);
        return this.Numbers;

    }
}
let temp1 = new Class1(5);
let temp2 = new Class2(5);
temp1.sort();
temp2.sort();
console.log(temp1.Numbers);
console.log(temp2.Numbers);

