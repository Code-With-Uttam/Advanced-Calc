document.addEventListener('keydown', (e)=>{
    if(e.key =="*"){
        const key = document.querySelector(`[value="x"]`)
        if(key){
            key.click()
        } 
    }
    if(e.key =="Backspace"){
        const key = document.querySelector(`[value="C"]`)
        if(key){
            key.click()
        } 
    }
    if(e.key =="p"){
        const key = document.querySelector(`[value="3.14"]`)
        if(key){
            key.click()
        } 
    }
    const key = document.querySelector(`[value="${e.key}"]`)
    console.log(e.key)
    if(key){
        key.click()
    }
    
});
