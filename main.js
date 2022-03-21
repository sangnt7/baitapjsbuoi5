// ==================================================Bài tập Tiền Điện======================================================
//giá
const gia50kw1 = 500; // 50kw
const gia50kw2 = 650; // 100kw
const gia100kw = 850; // 200kw
const gia150kw1 = 1100;// 350kw
const giaCuoi = 1300;//

//Biến
var tien50kw1 =0;
var tien50kw2 =0;
var tien100kw =0;
var tien150kw =0;
var tienCuoi =0;
var tongTien = 0;
//Onclick
document.getElementById("btn-TinhTien").onclick = function (){
    var sokw = document.getElementById("sokw").value;
    tongTien = tinhkwChitiet(sokw);
    tongTien = tongTien.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    document.getElementById("kq").innerHTML = tongTien;
} 
//Hàm
function tinhkw1 (sokw){
    var tien1 = 0;
    tien1 = sokw*gia50kw1;
    return tien1;
}
function tinhkw2(sokw){
    var tien2 = 0;
    tien2 = (sokw-50)*gia50kw2;
    return tien2
}
function tinhkw3(sokw){
    var tien3 = 0;
    tien3 = (sokw-100)*gia100kw;
    return tien3;
}
function tinhkw4(sokw){
    var tien4 = 0;
    tien4 = (sokw-200)*gia150kw1;
    return tien4;
}
function tinhkw5(sokw){
    var tien5 = 0;
    tien5 = (sokw-50)*giaCuoi;
    return tien5;
}
function tinhkwChitiet (sokw){
    if (sokw <= 50) {
        tien50kw1 = tinhkw1(sokw);
        tongTien = tien50kw1;
    } else if (sokw <= 100) {
        tien50kw1 = tinhkw1(50);
        tien50kw2 = tinhkw2(sokw);
        tongTien = tien50kw1 + tien50kw2;
    } else if ( sokw <= 200) {
        tien50kw1 = tinhkw1(50);
        tien50kw2 = tinhkw2(100);
        tien100kw = tinhkw3(sokw);
        tongTien = tien50kw1 + tien50kw2 +tien100kw;
    } else if(sokw <= 350){
        tien50kw1 = tinhkw1(50);
        tien50kw2 = tinhkw2(100);
        tien100kw = tinhkw3(200);
        tien150kw = tinhkw4(sokw);
        tongTien = tien50kw1 + tien50kw2 +tien100kw + tien150kw;
    } else if ( 350 < sokw){
        tien50kw1 = tinhkw1(50);
        tien50kw2 = tinhkw2(100);
        tien100kw = tinhkw3(200);
        tien150kw = tinhkw4(350);
        tienCuoi = tinhkw5(sokw);
        tongTien = tien50kw1 + tien50kw2 +tien100kw + tien150kw + tienCuoi;
    }
    return tongTien;
}
//==================================Bài Tập Tính Điểm Thi=============================================================================
var kq = ""
var diemTong = 0;
document.getElementById("btn-TinhDiem").onclick = function(){
    var diemChuan = document.getElementById("diemChuan").value*1;
    var diemToan = document.getElementById("diemToan").value*1;
    var diemVan = document.getElementById("diemVan").value*1;
    var diemAnh = document.getElementById("diemAnh").value*1;
    var khuVuc = document.getElementById("khuVuc").value*1;
    var doiTuong = document.getElementById("doiTuong").value*1;
    //tính điểm tổng
    tinhDiemTong(diemToan, diemVan, diemAnh, khuVuc, doiTuong);
    // Kiểm tra điều kiện đậu
    kiemTraDiem(diemToan, diemVan, diemAnh, diemTong, diemChuan);
    document.getElementById("tongDiem").innerHTML = diemTong;
    document.getElementById("kq2").innerHTML = kq;
}
function tinhDiemTong (diemToan, diemVan, diemAnh, khuVuc, doiTuong){
    diemTong = diemToan + diemVan + diemAnh + khuVuc + doiTuong;
}
function kiemTraDiem(diemToan, diemAnh, diemVan, diemTong, diemChuan){
    if(diemToan === 0 || diemAnh === 0 || diemVan === 0){
        kq = "Bạn Đã Rớt";
    } else if (diemTong < diemChuan){
        kq = "Bạn Đã Rớt";
    } else {
        kq = "Bạn Đã Đậu";
    }
}

