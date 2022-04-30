//tạo hàm chaoHoi
function chaoHoi() {
  // B1 Nạp biến kyTu 
  var kyTu = document.getElementById("kyTu").value;
  var loiChao;
// B2: Sử dụng hàm switch case để xét ký tự đầu vào của kyTu
  switch (kyTu) {
    // KyTu = B
    case "B":
      loiChao = "Hello Daddy";
      break;
    // KyTu = M
    case "M":
      loiChao = "Hello Mommy";
      break;
    // KyTu = A
    case "A":
      loiChao = "Hello Bro";
      break;
    // KyTu = E
    case "E":
      loiChao = "Hello Sis";
      break;
      // mặc định khi nạp biến kyTu không đúng với các trường hợp trên
      default:
      loiChao = "Chắc không phải người nhà rồi :D";
  }

  // B3 xuất kết quả ra màn hình
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("showResult").innerHTML = loiChao;
}
