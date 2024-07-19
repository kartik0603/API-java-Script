const createTag=(name,value)=>{
    let tag=document.createElement(name);
    tag=="img"?tag.src=value:tag.innerHTML=value;

    return tag;
}

export default createTag;