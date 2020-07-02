let uuid = "d5ab7a96-794d-433e-9fc9-13fa71ebe3d6";
var apiPath = 'https://course-ec-api.hexschool.io/';


function getData() {
    const api = `${apiPath}api/${uuid}/ec/products`

    axios.get(api)
        .then(function (response) {
            // handle success
            let productData = response.data.data;
            render(productData);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

function render(data) {
    let productInform = document.getElementById('product__inform');
    let str = '';
    data.forEach(item => {
        console.log(item);
        str += `
        <div class="card">
            <img src="${item.imageUrl}" class="card-img-top mt-3" alt="${item.title}">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.content}</p>
                <small class="text-muted">
                    <del>原價: ${item.unit}$${item.origin_price} </del>
                </small>
                <p class="text-danger font-weight-bold">特價: ${item.unit}$${item.price}</p>
            </div>
            <div class="card-footer bg-white border-top-0">
                <button type="button" class="btn btn-outline-danger btn-lg btn-block">加入購物車</button>
            </div>
        </div>`;
    });
    productInform.innerHTML = str;
}

getData();