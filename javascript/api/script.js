fetch("https://dummyjson.com/products").then(Response => Response.json()).then(data=>{
    // console.log(data.products);
    data.products.forEach(element => {
        const row = document.querySelector(".row")
        const col = document.createElement("div")
        col.classList.add("col-lg-3")
        col.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img src="${element.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.description}</p>
                <a href="#" class="btn btn-primary">see product</a>
            </div>
        </div>
        
        `

        row.appendChild(col)
        
    });
    
})