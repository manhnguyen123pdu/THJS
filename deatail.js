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
let urlParam = new URLSearchParams(window.location.search);
let id = urlParam.get("id");

let itemProduct = allProduct.find((item) => {
    return item.id == id;
});

function renderDetail() {
    let detailContent = document.querySelector(".content");
    
    // Tính giá sau khuyến mãi (nếu có)
    let price = Number(itemProduct.price);
    let discount = Number(itemProduct.discount);
    let discountedPrice = price - (price * discount / 100);
    
    let contentHTML = `
        <div class="detail-container">
            <div class="detail-img">
                <img src="${itemProduct.img}" alt="${itemProduct.name}">
            </div>
            <div class="detail-info">
                <h1>${itemProduct.name}</h1>
                
                <div class="price-box">
                    <div class="original-price">${price.toLocaleString()}₫</div>
                    <div class="discount-price">${discountedPrice.toLocaleString()}₫</div>
                    <span class="discount-badge">-${itemProduct.discount}%</span>
                </div>
                
                <div class="specs">
                    <h3>Thông số kỹ thuật:</h3>
                    <ul>
                        <li><i class="fas fa-microchip"></i> <strong>Chip:</strong> ${itemProduct.chip}</li>
                        <li><i class="fas fa-mobile-alt"></i> <strong>Màn hình:</strong> ${itemProduct.sizeScreen} inch</li>
                        <li><i class="fas fa-memory"></i> <strong>RAM:</strong> ${itemProduct.ram} GB</li>
                        <li><i class="fas fa-database"></i> <strong>ROM:</strong> ${itemProduct.rom} GB</li>
                        <li><i class="fas fa-tag"></i> <strong>Khuyến mãi:</strong> Giảm ${itemProduct.discount}%</li>
                    </ul>
                </div>
                
                <div class="action-buttons">
                 
                    <button onclick="goBack()" class="btn-back">
                        <i class="fas fa-arrow-left"></i> Quay lại
                    </button>
                </div>
            </div>
        </div>
    `;
    
    detailContent.innerHTML = contentHTML;
}

function goBack() {
    window.history.back();
}


renderDetail();