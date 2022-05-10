function C6q1() {
    var a = 10;
    document.write(`<h1>Result<h1>
                    The value of a is : ${a}<br>
                    <br>The value of ++a is ${++a}<br>
                    The value of a is : ${a}<br>
                    The value of a++  is : ${a++}<br>
                    Now the value of a is : ${a}<br><br>
                    The value of --a is: ${--a}<br>
                    Now the value a is: ${a}<br><br>
                    The value of a-- is: ${a--}<br>
                    Now the value of a is: ${a--}`)
}
function C6Q2 () {
  var a = 2;
  var b = 1;
  document.write( `<h1>result<h1>
                 output of --a is {a}<br>
                 ouyput of --a - --b is ${}<br>
                 output of --a - --b + ++b ${}<br>
                 result of --a - --b + --b + ++b ${}<br>`)



  )
}
function C6q3() {
    var name = prompt("Enter your name please");
    alert("Hello " + name);
}
function C6q4() {
    var input = prompt("Enter a number");
    if (input == "") {


        for (let i = 1; i <= 10; i++) {
            input = 5;


            var result = i * input;

            document.write(`${input} x ${i} = ${result} <br>`);
        }
    }
    else {

        for (let i = 1; i <= 10; i++) {

            var result = i * input;

            document.write(`${input} x ${i} = ${result} <br>`);
        }


    }
}
function C6q5() {
    var sub1 = prompt("Enter first subject name:");
    var sub2 = prompt("Enter second subject name:");
    var sub3 = prompt("Enter third subject name:");
    var total = 100;
    var s1 = parseInt(prompt(`Enter obtained marks of ${sub1}`));
    var s2 = parseInt(prompt(`Enter obtained marks of ${sub2}`));
    var s3 = parseInt(prompt(`Enter obtained marks of ${sub3}`))
    var res = (sub1 + sub2 + sub3) / total;
    var per = res * 100;
    // console.log(per)
    document.write(`<table >
    <tr>
      <th>Subject</th>
      <th>Obtaied Marks</th>
      <th>Total Marks</th>
      <th>Percentage</th>
    </tr>
    <tr>
      <td>${sub1}</td>
      <td>${sub1}</td>
      <td>${total}</td>
      <td>${(sub1 / total * 100)}%</td>
    </tr>
    <tr>
    <td>${sub2}</td>
    <td>${sub2}</td>
    <td>${total}</td>
    <td>${(sub2 / total * 100)}%</td>
  </tr>
  <tr>
      <td>${sub3}</td>
      <td>${sub3}</td>
      <td>${total}</td>
      <td>${(sub3 / total * 100)}%</td>
    </tr>

  </table>)
}

