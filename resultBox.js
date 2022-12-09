const showVar = function (str) {
  const resultBox = document.querySelector("#result");
  if (resultBox.textContent !== "") {
    resultBox.textContent = resultBox.textContent + "\n\n" + str;
  } else {
    resultBox.textContent = str;
  }
}

const showArray = function (arr) {
  const resultBox = document.querySelector("#result");
  if (resultBox.textContent !== "") {
    resultBox.textContent = resultBox.textContent + '\n\n';
    arr.forEach(item => {
      resultBox.textContent = resultBox.textContent + item + ' ';
    })
  } else {
    arr.forEach(item => {
      resultBox.textContent = resultBox.textContent + item + ' ';
    })
   
  }
}