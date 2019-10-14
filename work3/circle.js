var r =prompt('请输入圆的半径')
r=parseFloat(r)&&Number(r)
if(!isNaN(r)){
    var cir = 2* Math.PI*r
    var area = Math.PI * r* r
    document.getElementById('r').Value =r
    document.getElementById('cir').Value =cir.toFixed(2)
    document.getElementById('area').Value =area.toFixed(2)
}else{
    alert('请输入正确的数字')
}