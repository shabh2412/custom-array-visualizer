let MyArray = function () {
    Object.defineProperty(this, 'length', {
        value:0,
        writable:true,
        enumerable:false
    })
    this.length = arguments.length;
    for(let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
}

let arr = new MyArray();
MyArray.prototype.push = function (x) {
    this.length++;
    this[this.length-1] = x;
    // console.log(this.length);
    // console.log(this);
}

MyArray.prototype.pop = function () {
    let popped = this[this.length-1];
    delete this[this.length-1];
    this.length = this.length - 1;
    // console.log(this);
    return popped;
}

MyArray.prototype.top = function () {
    // console.log(this[this.length-1]);
    return this[this.length-1];
}

MyArray.prototype.print = function () {
    let str = '';
    for(let i = 0; i < this.length; i++) {
        if(i == this.length - 1) {
            str += this[i];
        }
        else {
            str += this[i] + ', ';
        }
    }
    console.log(str);
    return str;
}

MyArray.prototype.printReverse = function () {
    let str = '';
    for(let i = this.length-1; i >= 0; i--) {
        if(i==0) {
            str += this[i];
        }
        else {
            str += this[i] + ', ';
        }
    }
    console.log(str);
    return str;
}

MyArray.prototype.size = function () {
    return this.length;
}

MyArray.prototype.isEmpty = function () {
    return this.length == 0;
}


let createBtn = document.getElementById('createBtn');
let form = document.querySelector('#form');

let outputContainer = document.getElementById('outputContainer');

createBtn.addEventListener('click', function() {
    // console.log('Hi!');
    // console.log(form);
    event.preventDefault();
    let input = form.arrayInput.value;
    if(input == '') return alert('Input cannot be empty');
    input = input.trim().split(',');
    // console.log(input);
    arr = new MyArray(...input);
    // console.log(arr);
    let row = document.createElement('div');
    row.classList = 'row';
    let message = document.createElement('h5');
    message.classList = 'text-center';
    let str = '[ ';
    for(let i = 0; i < arr.length; i++) {
        if(i == arr.length-1) {
            str += arr[i] + ' ]';
        }
        else {
            str += arr[i]+ ', '
        }
    }
    message.innerText = `Array Created -> ${str}`;
    row.append(message);
    outputContainer.append(row);
    form.arrayInput.value = '';
    // form.reset();
})

let pushBtn = document.getElementById('pushBtn');
pushBtn.addEventListener('click', function() {
    event.preventDefault();
    let value = form.arrayInput.value;
    let row = document.createElement('div');
    row.classList = 'row';
    let message = document.createElement('h5');
    message.classList = 'text-center';
    if(value !== '') {
        arr.push(value);
        message.innerText = `Pushed --> ${value}`;
        row.append(message);
        outputContainer.append(row);
    }
    else alert('Cannot push empty element in array');
    form.arrayInput.value = '';
    // console.log(arr);
});

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', function() {
    event.preventDefault();
    let row = document.createElement('div');
    row.classList = 'row';
    let message = document.createElement('h5');
    message.classList = 'text-center';
    if(arr.length == 0) {
        alert('Nothing to pop!');
    }
    else {
        let popped = arr.pop();
        message.innerText = `Popped --> ${popped}`;
        row.append(message);
        outputContainer.append(row);
    }
    form.arrayInput.value = '';
});

let topBtn = document.getElementById('topBtn');
topBtn.addEventListener('click', function() {
    event.preventDefault();
    let row = document.createElement('div');
    row.classList = 'row';
    let message = document.createElement('h5');
    message.classList = 'text-center';
    if(arr.isEmpty()) {
        alert('Array is Empty');
    }
    else {
        let top = arr.top();
        message.innerText = `Top --> ${top}`;
        row.append(message);
        outputContainer.append(row);
    }
    form.arrayInput.value = '';
});

let printArrBtn = document.getElementById('printArrBtn');
printArrBtn.addEventListener('click', function() {
    event.preventDefault();
    let row = document.createElement('div');
    row.classList = 'row';
    let message = document.createElement('h5');
    if(arr.isEmpty()) {
        message.classList = 'text-warning text-center';
        message.innerText = 'Array is Empty';
        outputContainer.innerHTML = null;
        outputContainer.append(message);
    }
    else {
        let print = arr.print();
        // message.classList = 'text-success';
        message.classList = 'text-center';
        message.innerText = `Print()--> [${print}]`;
        row.append(message);
        // outputContainer.innerHTML = null;
        outputContainer.append(row);
    }
    form.arrayInput.value = '';
});

let printReverseBtn = document.getElementById('printReverseBtn');
printReverseBtn.addEventListener('click', function() {
    event.preventDefault();
    let message = document.createElement('h5');
    if(arr.isEmpty()) {
        message.classList = 'text-warning text-center';
        message.innerText = 'Array is Empty';
        outputContainer.innerHTML = null;
        outputContainer.append(message);
    }
    else {
        let print = arr.printReverse();
        // message.classList = 'text-success';
        message.classList = 'text-center';
        message.innerText = `PrintReverse()--> [${print}]`;
        // outputContainer.innerHTML = null;
        outputContainer.append(message);
    }
    form.arrayInput.value = '';
});

let clearOutputBtn = document.getElementById('clearOutputBtn');
clearOutputBtn.addEventListener('click', function() {
    event.preventDefault();
    outputContainer.innerHTML = null;
    form.arrayInput.value = '';
});

let checkSizetBtn = document.getElementById('checkSizetBtn');
checkSizetBtn.addEventListener('click', function() {
    event.preventDefault();
    let size = arr.size();
    let row = document.createElement('div');
    row.classList = 'row';
    let message = document.createElement('h5');
    message.classList = 'text-center';
    message.innerText = `Size --> ${size}`;
    row.append(message);
    outputContainer.append(row);
});

// let arr1 = new MyArray(1,2,55,12);
// arr1.push(23);
// arr1.push(39);
// console.log(arr1.pop());
// console.log(arr1);
// console.log(arr1.top());
// arr1.print();
// arr1.printReverse();
// arr1.push(69);
// console.log(arr1);
// console.log(arr1.size());