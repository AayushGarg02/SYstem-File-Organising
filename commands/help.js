let fs=require("fs");
let path=require("path");
function helpFn(dirPath){
    console.log( `
                node main.js tree "directoryPath"
                node main.js Organised "directoryPath"
                node main.js help `)
}
module.exports={
    helpkey:helpFn
}