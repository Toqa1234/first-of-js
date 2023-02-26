x ="2 3 1 1"
x= x.split(" ")
console.log(x)




function question1() {
  let q1_input = inputQ1.value;
  let q1_output;

  if(q1_input < 10 && q1_input>=0){
    q1_output ="Digit";
  }
  else if(typeof q1_input == 'string'){
    if(q1_input == q1_input.toUpperCase() ){
      q1_output="Capital Letter";
    }
    else if(q1_input == q1_input.toLowerCase() ){
      q1_output="Small Letter";
    }
  }

  //write your code here, don't change any thing
  //make q1_output = your answer

  outputQ1.innerHTML = q1_output;
}

function question2() {
  let q2_input = inputQ2.value;
  let q2_output;
  q2_input=q2_input.split(" ");
  A = parseInt(q2_input[0])
  S = q2_input[1]
  B = parseInt(q2_input[2])
  Q = q2_input[3]
  ans = q2_input[4]
   switch(S){
    case '+':
      if(q2_input[4] == A+B)
        q2_output = 'yes';
      else
        q2_output = A+B ;
        break;
    case '-':
      if(q2_input[4]== A-B)
        q2_output = 'yes';
      else
        q2_output = A-B ;
        break;
    case '*':
      if(q2_input[4] == A*B)
        q2_output = 'yes';
      else
        q2_output = A*B ;
        break;  
    default:
      q2_output = 'not valid' ;
   }


  //write your code here, don't change any thing
  //make q2_output = your answer

  outputQ2.innerHTML = q2_output;
}

function question3() {
  let A = input1Q3.value;
  let B = input2Q3.value;
  let q3_output;

  //write your code here, don't change any thing
  //make q3_output = your answer
  if(A % B==0 || B % A==0 ){
    q3_output="multiple";
  }
  else {
    q3_output="No multiple";
  }
 
  outputQ3.innerHTML = q3_output;
}

function question4() {
  let q4_input = inputQ4.value;
  let q4_output;

  q4_input=q4_input.split(" ")
  q4_output=Math.sqrt(Math.pow((q4_input[2]- q4_input[0]),2)+ Math.pow((q4_input[3]- q4_input[1]), 2));

  //write your code here, don't change any thing
  //make q4_output = your answer

  outputQ4.innerHTML = q4_output;
}

function question5() {
  let q5_input = inputQ5.value;
  let q5_output;
  if(q5_input.length > 10){
    q5_output=q5_input.trim().charAt(0) + ((q5_input.trim().length)-2) + q5_input.trim().charAt(q5_input.length-1) ;
  }
  else{
    q5_output =q5_input;
  }
  //write your code here, don't change any thing
  //make q5_output = your answer

  outputQ5.innerHTML = q5_output;
}
