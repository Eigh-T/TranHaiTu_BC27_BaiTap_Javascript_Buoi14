//tạo hàm chức năng chanLe
function chanLe() {
  // B1: DOM tới các input và lấy giá trị
  // Giá trị lấy được từ input trên HTML có kiểu dữ là number
  var soN1 = +document.getElementById("Songuyen1").value;
  var soN2 = +document.getElementById("Songuyen2").value;
  var soN3 = +document.getElementById("Songuyen3").value;
  // khai báo  ketQua : biến trung gian hiểu thị kết quả ra màn hình
  var ketQua;
  // B2: xét các trường hợp, vì là chẵn lẻ nên phải là số nguyên dương
  // tương đương với từng số phải lớn hơn 0
  // số chẵn được biểu thị dưới dạng a=2n, số lẻ được biểu thị dưới dạng b=2n+1
  if (soN1 > 0 && soN2 > 0 && soN3 > 0) {
    // xét trường hợp tất cả các số đều là chẵn
    if (soN1 % 2 == 0 && soN2 % 2 == 0 && soN3 % 2 == 0) {
      ketQua = "Có 3 số chẵn";
    }
    // xét trường hợp tất cả các số đều là lẻ
    else if (soN1 % 2 == 1 && soN2 % 2 == 1 && soN3 % 2 == 1) {
      ketQua = "Có 3 số lẻ";
    }
    // các trường hợp có 2 số chẵn và 1 số lẻ, tương đương với có 2 số ngẫu nhiên chia không dư và một số chia dư 1
    else if (
      (soN1 % 2 == 1 && soN2 % 2 == 0 && soN3 % 2 == 0) ||
      (soN1 % 2 == 0 && soN2 % 2 == 1 && soN3 % 2 == 0) ||
      (soN1 % 2 == 0 && soN2 % 2 == 0 && soN3 % 2 == 1)
    ) {
      ketQua = "Có 2 số chẵn 1 số lẻ";
    }
    // các trường hợp có 1 số chẵn và 2 số lẻ, tương đương với có 2 số ngẫu nhiên chia dư 1 và một số chia không dư.
    else if (
      (soN1 % 2 == 0 && soN2 % 1 == 1 && soN3 % 2 == 1) ||
      (soN1 % 2 == 1 && soN2 % 2 == 0 && soN3 % 2 == 1) ||
      (soN1 % 2 == 1 && soN2 % 2 == 1 && soN3 % 2 == 0)
    ) {
      ketQua = "Có 2 số lẻ và 1 số chẵn";
    }
  }
  //Hiển thị kết quả khi nhập sai giá trị đầu vào
  else {
    ketQua = "Vui lòng nhập đúng số nguyên dương để ra kết quả đúng";
  }
  //  Xuẩt kết quả ra màn hình
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("showResult").innerHTML = ketQua;
}
