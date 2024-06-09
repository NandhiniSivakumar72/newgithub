function verifyPass(){
    let pass =document.getElementById('pass').value.length
    if(pass>=8){
        msg='Strong Strength'
    }else{
        msg='Week Strength'
    }
    document.getElementById('strength').innerHTML=msg
}
