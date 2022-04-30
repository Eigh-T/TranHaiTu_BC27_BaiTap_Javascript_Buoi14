//Hàm gắn onclick
function tamGiac() {
  // B1: DOM tới các input và lấy giá trị
  // Giá trị lấy được từ input trên HTML có kiểu dữ là number
  var canhA = +document.getElementById("canha").value;
  var canhB = +document.getElementById("canhb").value;
  var canhC = +document.getElementById("canhc").value;

  // B2: Kiểm tra các trường hơp như đề bài giao, xử dụng hàm if else để xuẩt ra

  var ketQua;
  // điều kiển đầu vào : tổng 2 cạnh phải lớn hơn cạnh còn lại và các cạnh phải là số dương. 
  if (
    canhA + canhB <= canhC ||
    canhA + canhC <= canhB ||
    canhB + canhC <= canhA ||
    canhA == 0 ||
    canhB == 0 ||
    canhC == 0
  ) {
    ketQua = "3 cạnh này không tạo thành 1 tam giác";
  }
  // điều kiên của tam giác đều là 3 cạnh bằng nhau, tương ứng điều kiện với toán tử && (và)
  else if (canhA == canhB && canhA == canhC) {
    ketQua = "Tam giác đều";
    // điều kiện tam giác cân là 2 cạnh ngẫu nhiên bằng nhau, tương ứng điều kiện với toán tử ||(hoặc)
  } else if (canhA == canhB || canhA == canhC || canhB == canhC) {
    ketQua = "Tam giác này cân";
    // điều kiện tam giác cân là tổng bình phương cạnh huyền bằng bình phương hai cạnh góc vuông.
    // Do nhập cạnh ngẫu nhiên nên phải sử dụng toán tử || (hoặc) để xét được đủ các trường hợp
  } else if (
    canhA * canhA + canhB * canhB == canhC * canhC ||
    canhC * canhC + canhB * canhB == canhA * canhA ||
    canhA * canhA + canhC * canhC == canhB * canhB
  ) {
    // trường hợp 2 cạnh góc vuông bằng nhau, xét trường hợp tam giác vuông cân :
    if (canhA == canhB || canhA == canhC || canhB == canhC) {
      ketQua = "Tam giác vuông cân";
    } else {
      ketQua = "Tam giác vuông";
    }
  }
  // sau khi tất cả các trường hợp trên đều không thoả mãn, suy ra tam giác này là tam giác thường
   else {
    ketQua = "Tam giác thường";
  }
  // B3: hiển thị giá trị
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("showResult").innerHTML = ketQua;
}
