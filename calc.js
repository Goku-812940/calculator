function display(num){
    result.value+=num
}

function allclear(){
    result.value=''
}

function evaluvateexp(){
    result.value=eval(result.value)
}

function del(){
    data=result.value
    d=data.slice(0,-1)
    result.value=d
}