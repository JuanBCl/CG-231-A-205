function Arreglo(x,y,z) {
    var a=[x,y,z];
    a.sort();

    return a[0];

}
function vector3D(x,y,z) {

    if(x==0 || y==0 || z==0){
     print('Paralelo a alguno de los ejes');
   }
       const a = new THREE.Vector3( x, y, z );
       return a;
   }

var f2 = vector3D(0,1,2);
var f1 = Arreglo(3,2,1);