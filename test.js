let blogs=[{title:"posts 1"}];
let i=1;
function updateLastUserActivityTime (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },1000)
    });
}
function createPost(){
    i++;
    return new Promise((resolve,reject)=>{
        blogs.push({title:`posts ${i}`});
        console.log(`posts ${i}`);
        resolve();
    });
}
createPost().then(updateLastUserActivityTime).then(()=>{
    const now = new Date();
    console.log(now.toLocaleTimeString([], {hour12: false}));
});
createPost().then(updateLastUserActivityTime).then(()=>{
    const now = new Date();
    console.log(now.toLocaleTimeString([], {hour12: false}));
});