let count =0; //เอาไว้นับคะแนนที่กดแล้วถูกต้อง

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง ลุงตู่มีอาชีพเป็นทหาร";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 }
function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if (answer === 'd') {
        result.textContent = "ถูกต้อง PIM ก่อตั้งขึ้นเมื่อปี 2550";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    result3.textContent = "คุณได้ทั้งหมด " + count + " คะแนน";
    count = 0;
}

