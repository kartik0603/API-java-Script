import createTag from "./Components/helper.js";

const getdata = async () => {
    let req = await fetch("https://fakestoreapi.com/products");
    let res = await req.json();
    mapper(res);

    document.getElementById("all").addEventListener("click",()=>{
        mapper(res);
    });

    document.getElementById("lth").addEventListener("click",()=>{
        let temp=res.sort((a,b)=>a.price-b.price);
        mapper(temp);
    });

    document.getElementById("htl").addEventListener("click",()=>{
        let temp=res.sort((a,b)=>b.price-a.price);
        mapper(temp);
    });

    document.getElementById("Llike").addEventListener("click",()=>{
        let temp=res.sort((a,b)=>a.rating.count-b.rating.count);
        mapper(temp);
    });

    document.getElementById("Mlike").addEventListener("click",()=>{
        let temp=res.sort((a,b)=>b.rating.count-a.rating.count);
        mapper(temp);
    });

    document.getElementById("rate").addEventListener("click",()=>{
        let temp=res.sort((a,b)=>b.rating.rate-a.rating.rate);
        mapper(temp);
    });

    document.getElementById("search").addEventListener("submit",(e)=>{
        e.preventDefault();
        let value=document.getElementById("find").value;
        let temp=res.filter((ele)=>ele.category.includes(value));
        mapper(temp);
    })
}
getdata();

const mapper = (data) => {
    document.getElementById("show_api_data").innerHTML = "";

    data.map((item) => {
        let product_img =document.createElement("img");
        product_img.src=item.image;
        product_img.setAttribute("id", "product_img");
        let img_div = document.createElement("div");
        img_div.append(product_img);
        img_div.setAttribute("id","img_div");

        let title = createTag("h6", item.title);
        let title_div=document.createElement("div");
        title_div.append(title);
        title_div.setAttribute("id","title_div");
        let price = createTag("h6", `Rs. ${item.price}`);
        let category = createTag("h6", item.category);
        let rate = createTag("h6", `Ratings : <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> ${item.rating.rate}`);
        let like = createTag("div", `<i class="fa-solid me-2 fa-thumbs-up"></i>`);
        let span = createTag("span", item.rating.count);
        let btnn=createTag("button","Buy Now");
        btnn.setAttribute("class",`btn btn-primary`);
        let btn_div=document.createElement("div");
        btn_div.append(btnn);

        btnn.addEventListener("click",()=>{
            alert("You Ordered Successfully...");
        })
        btn_div.setAttribute("class",`ms-5`)
        let like_div = document.createElement("div");
        like_div.append(like, span,btn_div);
        like_div.setAttribute("id","like_div")

        let box = document.createElement("div");
        box.append(img_div, title_div, price, category, rate, like_div);
        box.setAttribute("id", "box");

        document.getElementById("show_api_data").append(box);
    })
}

