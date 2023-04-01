
// Bài 1

// function allLongestStrings(inputArray) {
//     let minhduc = [];
//     for (let i = 0; i < inputArray.length; i++) {
//         if (minhduc[0] == undefined) {
//             minhduc.push(inputArray[i]);
//         } else if (inputArray[i].length > minhduc[0].length) {
//             minhduc = [];
//             minhduc.push(inputArray[i]);
//         } else if (inputArray[i].length == minhduc[0].length) {
//             minhduc.push(inputArray[i]);
//         }
//     }
//     return(minhduc); 
// }
// allLongestStrings(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]);

// Bài 2

// let team1 = 0
// let team2 = 0
// function alternatingSums(a) {
//     for (let i = 1; i <= a.length; i++) {
//         if (i % 2 == 0) {
//             team2  += a[i-1]
//         } else {
//             team1 += a[i-1]
//         }
//     }
//     return([team1,team2]);
// }
// alternatingSums([60, 40, 55, 75, 64])

// Phần 2
// document.getElementById("myBtn").addEventListener("click", doimau);
// document.getElementById("myBtn1").addEventListener("click", doimaugradient);

// function doimau() {
//     let color ="#"+ Math.floor(Math.random()*16777215).toString(16);
//     document.getElementById("colorid").innerHTML = color
//     document.body.style.background = color

// }
// function doimaugradient() {
//     var deg = Math.floor(Math.random() *360)
//     let color1 ="#"+ Math.floor(Math.random()*16777215).toString(16);
//     let color2 ="#"+ Math.floor(Math.random()*16777215).toString(16);
//     var gradient = "linear-gradient(" + deg + "deg"+ ", " + color1 + ", " + color2 +")";
//     console.log(gradient);
//     document.getElementById("colorid").innerHTML = gradient;
//     document.body.style.background = gradient;
// }
// function copyToClipboard() {
//     var copyText = document.getElementById("colorid").textContent;
//     navigator.clipboard.writeText(copyText);
//     alert("Copied!")
//   }