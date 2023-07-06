#!/usr/bin/env node                                  //node main.js organise "Path"
let inputArr = process.argv.slice(2);                //node main.js tree "Path"
let fs=require("fs");
let path=require("path");
let helpObj=require("./commands/help");
let organizeObj=require("./commands/organize");
let treeObj=require("./commands/tree");
//console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js Organised "directoryPath"
// node main.js help
let command = inputArr[0];
let types = {
     media: ["mp4", "mkv"], 
     archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"], 
     documents: ['docx', 'doc','docx', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex','pptx'], 
     javascript:["js",'PHP'],
     app: ['exe', 'dmg', 'pkg', "deb" ]
            }
switch(command){
            case "tree":
                   treeObj.treeKey(inputArr[1]);
                    break;
            case "organise":
                  organizeObj.organizeKey (inputArr[1]);
                    break;
            case "help":
                    helpObj.helpkey();
                    break;
            default:
                    console.log("Plese input Right Command");
                    break;
}

