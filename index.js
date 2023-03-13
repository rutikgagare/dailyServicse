let displayElectric = fetch('data.json').then((Response)=>{
    return Response.json();
}).then((data)=>{
    console.log(data);

    let x = document.querySelector('.display');

    data.map((item)=>{
        x.innerHTML+=`<div class="item">
            <h3>${item.title}</h3>
            <h4>Rating : ${item.rating} ✰</h4>
            <h4>Price : ${item.price}</h4>
        </div>`
    });
});