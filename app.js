const fs = require('fs');

fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Successfully Created a Directory.');
    }
});

// fs.mkdir('tutorial',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully Created a Directory.')
//         fs.rmdir('tutorial',(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('Successfully Removed a Directory.')
//             }
//         })
//     }
// });

// fs.writeFile('./tutorial/example.txt','Added Content',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully Created a File.');
//     }
// });

// fs.rmdir('tutorial',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully Removed a Directory.')
//     }
// });

// fs.unlink('./tutorial/example.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully Removed a File.');
//         fs.rmdir('tutorial',(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('Successfully Removed a Directory.')
//             }
//         });
//     }
// });

// fs.mkdir('tutorial',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully Created a Directory.');
//         fs.writeFile('./tutorial/example.txt','Added Content',(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('Successfully Created a File.');
//             }
//         });
//         fs.writeFile('./tutorial/example2.txt','Added Content',(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('Successfully Created a File.');
//             }
//         });                
//     }
// });

// fs.readdir('tutorial',(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(files);
//     }
// });

// fs.readdir('tutorial',(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         for(let file of files){
//             fs.unlink('./tutorial/' + file,(err)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log('Successfully Removed a File.');
                    
//                 }
//             });
//             fs.rmdir('tutorial',(err)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log('Successfully Removed a Directory.')
//                 }
//             });
//         }
//     }
// });