const isEmpty = (value,type='STRING') => {
    try{
        switch(type){
            case 'STRING':
                const emptyArray = [null,undefined,"","NaN"];
                if(emptyArray.includes(value)) return true;
                
            case 'OBJECT':
                if(value.length===0|| value===undefined|| value===null || value==="") return true;
            case 'ARRAY':
                if(value.length===0) return true;
            default:
                return false;
        }
    }catch(error){
        console.log('error',error)
        return true;
    }
}

module.exports = {isEmpty}