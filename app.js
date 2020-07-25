const fs = require('fs');
let str1 = "This is the example file content.";
// fs.writeFile('example.txt',str1,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File Successfully created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         })
//     }
// });

// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully changed file name!')
//     }
// });
// str1 = 'Little addition';
// fs.appendFile('example2.txt',str1,(err=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully Appended!');
//     }
// }));

// fs.unlink('example2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully Deleted!');
//     }
// });