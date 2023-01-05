const body = document.getElementsByTagName("body");

const messengerBox = document.createElement("div");
body[0].append(messengerBox);

const inputBox = document.createElement("div"); //---------------> input div
inputBox.innerHTML = `<input type="text" id="input" name="fname" placeholder="message">`;
body[0].appendChild(inputBox);
const input = document.getElementById("input"); //--------------> input box

const msgbtn = document.createElement("div"); //--------------message button
msgbtn.innerHTML = `<button type="button">Send</button>`;
body[0].appendChild(msgbtn);

const msgbox = document.createElement("div");
msgbox.style.minHeight = "70%";
// msgbox.innerText = "Ye hamara message hai";
body[0].prepend(msgbox);

// for displaying message
let displaymsg = function () {
  const msg = document.createElement("div");
  var msgContent = localStorage.getItem(msgCount);
  msg.innerText = msgContent;
  msgbox.append(msg);
};

var KeyLength = localStorage.length;
console.log("local storage length is" + KeyLength);
// var lastKey = localStorage.key(`${KeyLength}`);
// console.log("Key is " + lastKey);

msgCount = 0;
console.log(msgCount);
msgbtn.addEventListener("click", () => {
  console.log("Event fired");

  var message = this.input.value;
  localStorage.setItem(msgCount, message);

  displaymsg();

  this.input.value = "";
  msgCount++;
});

// var KeyLength = localStorage.length - 1;
// var lastKey = localStorage.key(KeyLength);
// console.log(parseInt(lastKey));
// var lastKeyMsg = localStorage.getItem(lastKey);
// console.log(lastKeyMsg);
