function verifyPass(){
    let pass =document.getElementById('pass').value.length
    if(pass>=8){
        msg='Good Strength'
    }else{
        msg='Poor Strength'
    }
    document.getElementById('strength').innerHTML=msg
}
