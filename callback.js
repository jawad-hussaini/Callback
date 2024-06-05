function pro(callback){
    setTimeout(()=>{
        console.log("I")
        console.log("First");
        callback()
    },6000)
}

function prop(callback){
    setTimeout(()=>{
        console.log("Second");
        callback()
    },5000)
}

function prope(callback){
    setTimeout(()=>{
        console.log("Third");
        callback()
    },4000)
}

function proper(callback){
    setTimeout(()=>{
        console.log("Fourth");
        callback()
    },3000)
}
function propert(callback){
    setTimeout(()=>{
        console.log("Fourth");
        callback()
    },2000)
}
function proper(callback){
    setTimeout(()=>{
        console.log("Fourth");
        callback()
    },3000)
}

// pro((callback)=>{
//     prop((callback)=>{
//         prope((callback)=>{
//             proper((callback)=>{
//                 setTimeout(()=>{
//                     console.log("all done")
//                 },3000);
//             });
//         });
//     });
// });


pro((callback)=>{
    prop((callback)=>{
        prope((callback)=>{
            proper((callback)=>{
                propert((callback)=>{
                    console.log("All Done")
                })
            })
        })
    })
})
