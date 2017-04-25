/**
 * Created by Jack on 4/25/2017.
 */

module.exports = async(model,args)=>{
    for(let key in args){
        model.set(key,args[key]);
    }
};