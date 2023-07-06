let fs=require("fs");
let path=require("path");
function organizeFn(dirPath){
    //    console.log("Organize command implemented",dirPath);
    let destPath;
     if (dirPath==undefined){
         destPath = process.cwd();
         return;
     }else{
         let doesExist = fs.existsSync(dirPath);
         if (doesExist){
              destPath = path.join(dirPath,"organised_files");
             if(fs.existsSync(destPath)==false){
             fs.mkdirSync(destPath);
             }
     }else{
            console.log("kindly enter correct path");
            return;
         }
    }
organizeHelper(dirPath, destPath);
}
function organizeHelper(src, dest){
   let childNames = fs.readdirSync(src);
  // console.log(childNames);
  for (let i=0;i<childNames.length;i++){
    let childAddress = path.join(src, childNames[i]);
    let isFile = fs.lstatSync(childAddress).isFile();
    if (isFile){
       // console.log(childNames[i]);
     let catagory = getCategory(childNames[i]);
     console.log(childNames[i],"belongs to-->",catagory);
     sendFiles(childAddress, dest, catagory);
    }
  }

}
function sendFiles(srcFilePath, dest,category){
    let categoryPath = path.join(dest,category);
    if (fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName,"copied to",category);

}
function getCategory(name){
    let ext =path.extname(name);
    console.log(ext);
    ext=ext.slice(1);
    for (let type in types){
       let cTypeArray = types[type];
       for (let i=0;i<cTypeArray.length;i++){
        if (ext==cTypeArray[i]){
            return type;
        }
       }
    }
    return "others";
}
module.exports={
    organizekey:organizeFn
}