let allProduct=[

    {
        id:1,
        img:"https://cdn.nguyenkimmall.com/images/thumbnails/180/180/detailed/834/10053681-dien-thoai-samsung-galaxy-a04-3gb-32gb-den-1.jpg",
        name:"Samsung Galaxy A04 3GB/32GB Đen",
        price:"2090000",
        discount:"20",
        chip:"MediaTek Helio P35 8 nhân",
        sizeScreen:"6.5",
        ram:"2",
        rom:"12"
    },
    {
        id:2, 
        img:"https://cdn2.cellphones.com.vn/x/media/catalog/product/t/_/t_m_18_1_3_2_1.png?_gl=1*1hel7ur*_gcl_aw*R0NMLjE3NzcxMzAxNjUuQ2p3S0NBand6TEhQQmhCVEVpd0FCYUxzU2lSVjhYaFdiQThLdl85M3N2N2xWcHRBT2FBNWVUd0U3RTlYNFFZd19oTWNxdERUcjA5cW9Cb0NESWtRQXZEX0J3RQ..*_gcl_au*ODUyNjI0NTUzLjE3Njk4MzA2MzE.*_ga*NTM0MTUwNDA1LjE3Njk4MzA2MzI.*_ga_QLK8WFHNK9*czE3NzcxMzAxNjUkbzMkZzAkdDE3NzcxMzAxNjUkajYwJGwwJGgxNDQ0ODM0MTc.",
        name:"iPhone 14 Pro Max 128GB Tím",
        price:"26790000",
        discount:"19",
        chip:"Apple A16 Bionic 6 nhân",
        sizeScreen:"6.7",
        ram:"6",
        rom:"12"
    },
    {
        id:3,
        img:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/v/_/v_ng_20_2_1_2.png",
        name:"iPhone 14 Pro Max 128GB Vàng",
        price:"26790000",
        discount:"19",
        chip:"Apple A16 Bionic",
        sizeScreen:"6.7",
        ram:"6",
        rom:"128"
    },
    {
        id:4,
        img:"https://cdn2.fptshop.com.vn/unsafe/384x0/filters:format(webp):quality(75)/samsung_galaxy_s25_fe_trang_1_74f48150f8.png",
        name:"Samsung Galaxy A14 5G 4GB/128GB Bạc",
        price:"3990000",
        discount:"23",
        chip:"Mediatek MT6833 Dimensity 700 (7 nm)",
        sizeScreen:"6.6",
        ram:"4",
        rom:"64"
    },
   
    {
        id:5,
        img:"https://images.samsung.com/is/image/samsung/p6pim/vn/sm-a576blbsxxv/gallery/vn-galaxy-a57-5g-sm-a576-sm-a576blbsxxv-551559676?$1164_776_PNG$",
        name:"Samsung Galaxy A04s 4GB/64GB Xanh",
        price:"2990000",
        discount:"25",
        chip:"Exynos 850 (8nm)",
        sizeScreen:"6.5",
        ram:"6",
        rom:"64"
    },
    {
        id:6,
        img:"https://images.samsung.com/is/image/samsung/p6pim/vn/sm-a576bdbqxxv/gallery/vn-galaxy-a57-5g-sm-a576-sm-a576bdbqxxv-551559581?$1164_776_PNG$",
        name:"Samsung Galaxy A04s 4GB/64GB Đen",
        price:"2.990.000",
        discount:"12",
        chip:"Snapdragon ",
        sizeScreen:"6.7",
        ram:"6",
        rom:"12"
    },
    {
        id:7,
        img:"https://samsung.ngocnguyen.vn/cdn/images/202403/goods_img/samsung-galaxy-s22-ultra-5g-my--like-new-99-G15599-1711780442982.png",
        name:"Điện thoại OPPO A77s 8GB/128GB Xanh",
        price:"5490000",
        discount:"13",
        chip:"Qualcomm Snapdragon 680 ",
        sizeScreen:"6.58",
        ram:"6",
        rom:"128"
    },
  
    {
        id:8,
        img:"https://samsung.ngocnguyen.vn/cdn/images/202404/goods_img/samsung-galaxy-note-20-ultra-5g-my--like-new-99-G15665-1711964951060.png",
        name:"Samsung Galaxy A14 5G 4GB/128GB Đỏ",
        price:"3990000",
        discount:"23",
        chip:"Mediatek MT6833 Dimensity 700 (7 nm)",
        sizeScreen:"6",
        ram:"4",
        rom:"16"
    }
]

let cart = [ 
{id: 1, sl: 2}, 
{id: 2, sl: 1}
];
// {id, sl}

function renderProduct(listProduct){
    let content = document.querySelector(".content");
    let contentHTML ="";
    for( let i =0; i<listProduct.length; i++){
        contentHTML += `
        
        <div class="item">
            <img src="${listProduct[i].img}" alt="">
            <h3>${listProduct[i].name}</h3>
            <h2>Giá: ${Number(listProduct[i].price).toLocaleString()}</h2>
            <p>Khuyến mãi: ${listProduct[i].discount}</p>
            <p>Chip: ${listProduct[i].chip}</p>
            <p>Ram:"${listProduct[i].ram}</p>
            <p>Rom: ${listProduct[i].rom}</p>
            <button onclick ="addToCart(${listProduct[i].id})">Thêm vào giỏ hàng </button>
            <a href="./detail.html?id=${listProduct[i].id}">Xem chi tiết</a>

        </div>
        `
    }
    content.innerHTML=contentHTML;
}

function addToCart(id){
    //  kiểm tra xem giỏ hàng có sản phầm là id chưa dừa vào tìm index 
    let index = cart.findIndex((item)=> {
        return item.id == id;
    })
    //  nếu tìm thấy 
   if(index ==-1){
     cart.push(
        {
            id:id,
            sl:1
        }
    )
    // nếu ko tìm thấy
   }else{
    cart[index].sl++; 
   }
    alert("Thêm thành công");
    // cập nhập lại giỏ hàng giao diện 
    renderCart();
}

//  xử lý giỏ hàng 
function renderCart(){
    let contentTableCart = document.querySelector(".contentTable")
    let contentCartHTML =""
    for( let i =0; i <cart.length; i++){
        //  tìm thông tin sản phẩm 
        let itemProduct = allProduct.find((item)=>{
            return item.id == cart[i].id;
        })
        contentCartHTML+=`
        <tr>
            <td>${i+1}</td>
            <td>${itemProduct.name}</td>
            <td> <img src="${itemProduct.img}" alt=""></td>
            <td>${Number(itemProduct.price).toLocaleString()}</td>
            <td>${cart[i].sl}</td>
            <td>${Number(itemProduct.price * cart[i].sl).toLocaleString()}</td>
            
            <td><button onclick = "changeQuantity(${cart[i].id}, '-')">-</button><button  onclick = "changeQuantity(${cart[i].id}, '+')">+</button> </td>
            <td><button onclick = "deleteItem(${cart[i].id})">X</button></td>
        </tr>
        `
    }
    contentTableCart.innerHTML=contentCartHTML
}

function changeQuantity(id, dau){
    //  tìm index của sản phẩm id trong cart
    let index = cart.findIndex((item)=>{
         return item.id== id
    })

    if(index!=-1){
       if( cart[index].sl ==1 && dau == "-"){
        cart.splice(index,1);
       }else{
        dau =="+" ?  cart[index].sl++ :  cart[index].sl--;
       }
    }
   
    renderCart();

}
function deleteItem(id){
    let findIndex = cart.findIndex((item)=>{
        return item.id == id;
    })
    if(findIndex !=-1){
        cart.splice(findIndex,1);
    }
    renderCart();
}
renderProduct(allProduct);
renderCart();