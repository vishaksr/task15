const container = document.createElement("div");
container.className = 'container my-5';
const row = document.createElement("div");
row.className = 'row justify-content-center';
const column = document.createElement("div");
column.className = 'col-lg-4 col-md-6 col-sm-8';
const head = document.createElement("h1");
head.id = 'title';
head.className = 'text-center';
head.innerText = 'Calculator';
const para1 = document.createElement("p");
para1.id = 'description';
para1.className = 'text-center';
para1.innerText = "It's a basic calculator";
const box = document.createElement("div");
box.className = 'box p-4';
const resultInput = document.createElement("input");
resultInput.id = 'result';
resultInput.className = 'form-control mb-3';
resultInput.setAttribute("readonly", true);
resultInput.setAttribute("placeholder", "0");
const row1 = document.createElement("div");
row1.className = 'row row-cols-4 g-2';
const col1 = document.createElement("div");
col1.className = 'col';
const btn1 = document.createElement("button");
btn1.id = 'clear';
btn1.className = 'btn btn-secondary w-100';
btn1.innerText = 'AC';   
const col2 = document.createElement("div");
col2.className = 'col';
const btn2 = document.createElement("button");
btn2.id = 'backspace';
btn2.className = 'btn btn-secondary w-100';
btn2.innerText = '&larr;';
const col3 = document.createElement("div");
col3.className = 'col';
const btn3 = document.createElement("button");
btn3.className = 'btn btn-secondary w-100 up';
btn3.innerText = '/';
const col4 = document.createElement("div");
col4.className = 'col';
const btn4 = document.createElement("button");
btn4.className = 'btn btn-primary w-100 up';
btn4.innerText = '/';
const col5 = document.createElement("div");
col5.className = 'col';
const btn5 = document.createElement("button");
btn5.className = 'btn btn-light w-100 up';
btn5.innerText = '7';
const col6 = document.createElement("div");
col6.className = 'col';
const btn6 = document.createElement("button");
btn6.className = 'btn btn-light w-100 up';
btn6.innerText = '8'
const col7 = document.createElement("div");
col7.className = 'col';
const btn7 = document.createElement("button");
btn7.className = 'btn btn-light w-100 up';
btn7.innerText = '9';
const col8 = document.createElement("div");
col8.className = 'col';
const btn8 = document.createElement("button");
btn8.className = 'btn btn-primary w-100 up';
btn8.innerText = '*';
const col9 = document.createElement("div");
col9.className = 'col';
const btn9 = document.createElement("button");
btn9.className = 'btn btn-light w-100 up';
btn9.innerText = '4';
const col10 = document.createElement("div");
col10.className = 'col';
const btn10 = document.createElement("button");
btn10.className = 'btn btn-light w-100 up';
btn10.innerText = '5';
const col11 = document.createElement("div");
col11.className = 'col';
const btn11 = document.createElement("button");
btn11.className = 'btn btn-light w-100 up';
btn11.innerText = '6';
const col12 = document.createElement("div");
col12.className = 'col';
const btn12 = document.createElement("button");
btn12.id = 'subtract';
btn12.className = 'btn btn-primary w-100 up';
btn12.innerText = '-';
const col13 = document.createElement("div");
col13.className = 'col';
const btn13 = document.createElement("button");
btn13.id = '1';
btn13.className = 'btn btn-light w-100 up';
btn13.innerText = '1';
const col14 = document.createElement("div");
col14.className = 'col';
const btn14 = document.createElement("button");
btn14.id = '2';
btn14.className = 'btn btn-light w-100 up';
btn14.innerText = '2';
const col15 = document.createElement("div");
col15.className = 'col';
const btn15 = document.createElement("button");
btn15.id = '3';
btn15.className = 'btn btn-light w-100 up';
btn15.innerText = '3';
const col16 = document.createElement("div");
col16.className = 'col';
const btn16 = document.createElement("button");
btn16.id = 'add';
btn16.className = 'btn btn-primary w-100 up';
btn16.innerText = '+';
const col17 = document.createElement("div");
col17.className = 'col';
const btn17 = document.createElement("button");
btn17.id = 'clear';
btn17.className = 'btn btn-light w-100 up';
btn17.innerText = '0';
const col18 = document.createElement("div");
col18.className = 'col';
const btn18 = document.createElement("button");
btn18.className = 'btn btn-light w-100 up';
btn18.innerText = '.';
const col19 = document.createElement("div");
col19.className = 'col-6';
const btn19 = document.createElement("button");
btn19.id = 'equal';
btn19.className = 'btn btn-dark w-100';
btn19.innerText = '=';

col1.appendChild(btn1);
col2.appendChild(btn2);
col3.appendChild(btn3);
col4.appendChild(btn4);
col5.appendChild(btn5);
col6.appendChild(btn6);
col7.appendChild(btn7);
col8.appendChild(btn8);
col9.appendChild(btn9);
col10.appendChild(btn10);
col11.appendChild(btn11);
col12.appendChild(btn12);
col13.appendChild(btn13);
col14.appendChild(btn14);
col15.appendChild(btn15);
col16.appendChild(btn16);
col17.appendChild(btn17);
col18.appendChild(btn18);
col19.appendChild(btn19);

row1.append(col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11, col12, col13, col14, col15, col16, col17, col18, col19);

container.appendChild(row);
row.appendChild(column);
column.appendChild(head);
column.appendChild(para1);
column.appendChild(box);
box.appendChild(resultInput);
box.appendChild(row1);

document.body.appendChild(container);



const result = document.getElementById("result");
const buttons = document.querySelectorAll(".up");
const clear = document.getElementById("clear");
const back = document.getElementById("backspace");
const calc = document.getElementById("equal");

buttons.forEach( function (button) {
    button.addEventListener("click", function(){
        result.value += button.innerText;
    });
});

clear.addEventListener("click", () => {
    result.value = "";
});

back.addEventListener("click", () => {
    result.value = result.value.slice(0, -1);
});

calc.addEventListener("click", () => {
    result.value = eval(result.value);
});
