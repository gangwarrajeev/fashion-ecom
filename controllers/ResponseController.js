export const respondeWithInternalServerError = (req, res) =>{
    try{
        return res.status(500).json({
            status:'failed',
            status_code:500,
            erorrs:['Internal Sever Error'],
        });
    }catch(e){
        console.log('error',e)
    }
}