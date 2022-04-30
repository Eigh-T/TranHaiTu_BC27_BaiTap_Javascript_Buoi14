//tạo hàm function
function baSonguyen() {
  //nạp biến soN1 soN2 soN3
  var soN1 = +document.getElementById("Songuyen1").value;
  var soN2 = +document.getElementById("Songuyen2").value;
  var soN3 = +document.getElementById("Songuyen3").value;
  // tạo biến trung gian để sắp xếp theo thứ tự số từ bé tới lớn.
  var minNumb; // số nhỏ nhất
  var maxNumb; // số lớn nhất
  var medNumb; // số còn lại
  //B2 xét các trường hợp riêng lẻ

  // soN1 = soN2 = soN3
  if (soN1 == soN2 && soN2 == soN3) {
    medNumb = soN2;
    minNumb = soN1;
    maxNumb = soN3;
  }
  // soN1 <= soN2 <= soN3
  else if (soN1 <= soN2 && soN2 <= soN3) {
    medNumb = soN2;
    minNumb = soN1;
    maxNumb = soN3;
  }
  // soN1 >= soN2 > soN3
  else if (soN1 >= soN2 && soN2 > soN3) {
    minNumb = soN3;
    medNumb = soN2;
    maxNumb = soN1;
  }
  // soN1 <= soN2 <= soN3
  else if (soN2 <= soN1 && soN1 <= soN3) {
    minNumb = soN2;
    medNumb = soN1;
    maxNumb = soN3;
  }
  // soN1 >= soN2 > soN3
  else if (soN2 >= soN1 && soN1 > soN3) {
    minNumb = soN3;
    medNumb = soN1;
    maxNumb = soN2;
  }
  // soN1 <= soN2 <= soN3
  else if (soN1 <= soN3 && soN3 <= soN2) {
    minNumb = soN1;
    medNumb = soN3;
    maxNumb = soN2;
  }
  // soN1 >= soN2 > soN3
  else if (soN1 >= soN3 && soN3 > soN2) {
    minNumb = soN2;
    medNumb = soN3;
    maxNumb = soN1;
  }
  // B3 hiển thị kết quả lên màn hình
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("showResult").innerHTML =
    "Thứ tự là " + minNumb + " " + medNumb + " " + maxNumb;
  document.getElementById("showResult").style.fontSize = "25px";
}
// document.getElementById("ketQua").innerHTML =
//   "Thứ tự là" + soN2 + " " + soN3 + " " + soN1;
