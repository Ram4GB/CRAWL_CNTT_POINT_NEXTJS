import FastSort from "fast-sort";
function convertSVToObject(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    let hk3 = data[i].HK3 ? data[i].HK3 : null; // lay hoc 3 ra co the thay doi neu hoc ki 4 va 5
    let diemhe4 = 0;
    if (hk3) {
      let data = Object.entries(hk3);
      diemhe4 = data[3][1];
    }
    let obj = {
      mssv: data[i].mssv,
      ten: data[i].ten,
      diem: parseFloat(diemhe4)
    };
    arr.push(obj);
  }
  return arr;
}
function removeAccent(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
}

function tongKetLopCuaKhoa(arr) {
  let lop = [];
  for (let i = 0; i < arr.length; i++) {
    if (lop.findIndex(u => u.lop == arr[i].lop) == -1) {
      let dem = 1;
      let sinhVien = arr[i];
      let max = parseFloat(arr[i].diemHe4TichLuy);
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].lop.indexOf(arr[j].lop) != -1) {
          dem++;
          if (parseFloat(max) < parseFloat(arr[j].diemHe4TichLuy)) {
            max = parseFloat(arr[j].diemHe4TichLuy);
            sinhVien = arr[j];
          }
        }
      }
      let obj = {
        lop: arr[i].lop,
        sl: dem,
        sinhVien,
        max
      };
      lop.push(obj);
    }
    FastSort(lop).asc(u => u.lop);
  }
  // console.log(lop);
  return lop;
}

function timSinhVienCaoNhatTheoLop(arr) {
  let temp = tongKetLopCuaKhoa(arr);
  return temp;
}

function findNameStudent(name, arr) {
  let convertName = removeAccent(name);
  let ar = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = removeAccent(arr[i].ten);
    if (temp.toLowerCase().indexOf(convertName.toLowerCase()) !== -1)
      ar.push(arr[i]);
  }
  return ar;
}

export {
  convertSVToObject,
  removeAccent,
  tongKetLopCuaKhoa,
  timSinhVienCaoNhatTheoLop,
  findNameStudent
};
