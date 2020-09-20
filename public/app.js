function myFunc(){
    var val ="You've searched for "+ document.getElementById('iname').value
    document.getElementById('answer').innerHTML= val
    document.getElementById('try').style.display='block';
}
function myClose(){
    document.getElementById('try').style.display='none';
}