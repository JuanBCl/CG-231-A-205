function Arreglo(x,y,z) {
    var a=[x,y,z];
    a.sort();

    return a[0];

}

function vector3D(arr) {
  if (arr[1] == 0 && arr[2] == 0) {
    return true;
  } else if (arr[0] == 0 && arr[2] == 0) {
    return true;
  } else if (arr[0] == 0 && arr[1] == 0) {
    return true;
  } else {
    return false;
  }
}

const v1 = vector3D([0, 2, 0]); //True
console.log(v1);
const v2 = vector3D([3, 5, 0]); //False
console.log(v2);

var f1 = Arreglo(3,2,1);
console.log(f1);