#MERN Assignment 1(Backend)

<kbd>
  <img src="./assets/web-postman.png"  alt="web-postman-collection"/>
</kbd>

##API documentation with a list of routes and request and response formats.

###Customer
POST -> http://localhost:3000/api/v1/customers/create
{
"name": "Amal",
"email": "Amal@gmail.com",
"phone": "072325607"
}

GET -> http://localhost:3000/api/v1/customers/find-all?searchText=&page =1&size=2
{
"message": "customer list..",
"dataList": [
{
"_id": "6755520ad9d3c280da3ec372",
"name": "Nimal",
"email": "nimal@gmail.com",
"phone": "1234",
"createdAt": "2024-12-07T00:00:00.000Z",
"v": 0
},
{
"_id": "675993512ab618f473c3c566",
"name": "Amal",
"email": "Amal@gmail.com",
"phone": "072325607",
"createdAt": "2024-12-10T00:00:00.000Z",
"v": 0
}
],
"dataCount": 4
}

GET -> http://localhost:3000/api/v1/customers/customer-count
{   
"message": "Customers Count...",   
"data": 4
}

GET -> http://localhost:3000/api/v1/customers/find-by-id/675993512ab618f473c3c566
{
"message": "customer by id",
"data": {
"_id": "675993512ab618f473c3c566",
"name": "Amal",
"email": "Amal@gmail.com",
"phone": "072325607",
"createdAt": "2024-12-10T00:00:00.000Z",
"__v": 0
}
}

PUT -> http://localhost:3000/api/v1/customers/update/675993512ab618f473c3c566
{
"name": "Amal",
"address": "kandy",
"salary": 30000
}

DELETE -> http://localhost:3000/api/v1/orders/delete-by-id/67558d5233a56364bfebd44b

###Order
POST -> http://localhost:3000/api/v1/orders/create
{
"products":[{
"quantity": 4,
"_id":  "675564b07181ec87bae8fba2"
}],
"customerId":"6755520ad9d3c280da3ec372"
}
GET -> http://localhost:3000/api/v1/orders/getLeastFiveOrders
{
"message": "Most frequently ordered product found",
"data": [
{
"_id": "67558eea6c608b75c0fd561d",
"products": [
{
"_id": "675564b07181ec87bae8fba2",
"quantity": 5
}
],
"customerId": "6755520ad9d3c280da3ec372",
"totalAmount": 1250,
"orderDate": "2024-12-07T00:00:00.000Z",
"v": 0
},
{
"_id": "6755918a7b8059e14546c4c9",
"products": [
{
"_id": "675564b07181ec87bae8fba2",
"quantity": 3
}
],
"customerId": "6755520ad9d3c280da3ec372",
"totalAmount": 750,
"orderDate": "2024-12-07T00:00:00.000Z",
"v": 0
},
{
"_id": "67558ccb5f1a8f52e00798a1",
"products": [
{
"_id": "675564b07181ec87bae8fba2",
"quantity": 10
},
{
"_id": "675564c97181ec87bae8fba4",
"quantity": 10
}
],
"customerId": "6755520ad9d3c280da3ec372",
"totalAmount": 3750,
"orderDate": "2024-12-07T00:00:00.000Z",
"v": 0
},
{
"_id": "67558cb55f1a8f52e007989b",
"products": [
{
"_id": "675564b07181ec87bae8fba2",
"quantity": 2
},
{
"_id": "675564c97181ec87bae8fba4",
"quantity": 2
}
],
"customerId": "675993512ab618f473c3c566",
"totalAmount": 750,
"orderDate": "2024-12-07T00:00:00.000Z",
"v": 0
},
{
"_id": "67558d5233a56364bfebd44b",
"products": [
{
"_id": "675564b07181ec87bae8fba2",
"quantity": 10
},
{
"_id": "675564c97181ec87bae8fba4",
"quantity": 10
}
],
"customerId": "6755520ad9d3c280da3ec372",
"totalAmount": 3750,
"orderDate": "2024-12-07T00:00:00.000Z",
"__v": 0
}
]
}

GET -> http://localhost:3000/api/v1/orders/orders-FindBy-CustomerId/6755520ad9d3c280da3ec372
[
{
"_id": "67558ccb5f1a8f52e00798a1",
"products": [
{
"_id": "675564b07181ec87bae8fba2",
"quantity": 10
},
{
"_id": "675564c97181ec87bae8fba4",
"quantity": 10
}
],
"customerId": "6755520ad9d3c280da3ec372",
"totalAmount": 3750,
"orderDate": "2024-12-07T00:00:00.000Z",
"__v": 0
},
{
"_id": "67558eea6c608b75c0fd561d",
"products": [
{
"_id": "675564b07181ec87bae8fba2",
"quantity": 5
}
],
"customerId": "6755520ad9d3c280da3ec372",
"totalAmount": 1250,
"orderDate": "2024-12-07T00:00:00.000Z",
"__v": 0
},
{
"_id": "6755918a7b8059e14546c4c9",
"products": [
{
"_id": "675564b07181ec87bae8fba2",
"quantity": 3
}
],
"customerId": "6755520ad9d3c280da3ec372",
"totalAmount": 750,
"orderDate": "2024-12-07T00:00:00.000Z",
"__v": 0
},
{
"_id": "6759923c2ab618f473c3c561",
"products": [
{
"_id": "675564b07181ec87bae8fba2",
"quantity": 4
}
],
"customerId": "6755520ad9d3c280da3ec372",
"totalAmount": 1000,
"orderDate": "2024-12-10T00:00:00.000Z",
"__v": 0
}
]
GET -> http://localhost:3000/api/v1/orders/getMostOrderedProduct
{
"message": "Most frequently ordered product found",
"data": { "_id": "675564b07181ec87bae8fba2", "totalOrders": 6, "totalQuantity": 34 }
}

GET -> http://localhost:3000/api/v1/orders/customers_have_not_any_orders
[{
"_id": "6759c46f60e27b9f365987f8",
"name": "Kamal",
"email": "Kamal@gmail.com"
},
{
"_id": "6759c61460e27b9f365987f9",
"name": "Sunimal",
"email": "Sunimal@gmail.com"
}]

GET -> http://localhost:3000/api/v1/orders/revenue-0f-day/2024-12-07
[{
"_id": {
"orderDate": "2024-12-07T00:00:00.000Z"
},
"totalAmount": 10250
}]

GET -> http://localhost:3000/api/v1/orders/ordersFindByDate/2024-12-07
[
{
"_id": "67558cb55f1a8f52e007989b",
"products": [
{
"_id": "675564b07181ec87bae8fba2",
"quantity": 2
},
{
"_id": "675564c97181ec87bae8fba4",
"quantity": 2
}
],
"customerId": "675993512ab618f473c3c566",
"totalAmount": 750,
"orderDate": "2024-12-07T00:00:00.000Z",
"v": 0**},{"_id": "67558ccb5f1a8f52e00798a1","products": [{"_id": "675564b07181ec87bae8fba2","quantity": 10},{"_id": "675564c97181ec87bae8fba4","quantity": 10}],"customerId": "6755520ad9d3c280da3ec372","totalAmount": 3750,"orderDate": "2024-12-07T00:00:00.000Z","v": 0
},
{
"_id": "67558d5233a56364bfebd44b",
"products": [
{
"_id": "675564b07181ec87bae8fba2",
"quantity": 10
},
{
"_id": "675564c97181ec87bae8fba4",
"quantity": 10
}
],
"customerId": "6755520ad9d3c280da3ec372",
"totalAmount": 3750,
"orderDate": "2024-12-07T00:00:00.000Z",
"v": 0},{"_id": "67558eea6c608b75c0fd561d","products": [{"_id": "675564b07181ec87bae8fba2","quantity": 5}],"customerId": "6755520ad9d3c280da3ec372","totalAmount": 1250,"orderDate": "2024-12-07T00:00:00.000Z",**"v": 0
},
{
"_id": "6755918a7b8059e14546c4c9",
"products": [
{
"_id": "675564b07181ec87bae8fba2",
"quantity": 3
}
],
"customerId": "6755520ad9d3c280da3ec372",
"totalAmount": 750,
"orderDate": "2024-12-07T00:00:00.000Z",
"__v": 0
}
]
DELETE -> http://localhost:3000/api/v1/orders/delete-by-id/67558d5233a56364bfebd44b

###Products
POST -> http://localhost:3000/api/v1/products/create
{
"name": "coconut",
"price": 320,
"stock": 500
}

GET -> http://localhost:3000/api/v1/products/outOfStockProduct
{
"message": "product list..",
"products": [{
"_id": "67599b2c60e27b9f365987f7",
"name": "rice",
"price": 300,
"stock": 0,
"createdAt": "2024-12-07T00:00:00.000Z"
}]
}

PUT -> http://localhost:3000/api/v1/products/update-product/67599b2c60e27b9f365987f7
{
"name": "rice",
"price": 300,
"stock": 20
}

GET -> http://localhost:3000/api/v1/products/find-all-product?searchText=&page =1&size=4
{   
"message": "Product find All..",   
"dataList": [{           
"_id": "675564b07181ec87bae8fba2",           
"name": "suger",           
"price": 250,           
"stock": 166,           
"createdAt": "2024-12-07T00:00:00.000Z",           
"__v": 0       
},       
{           
"_id": "675564c97181ec87bae8fba4",           
"name": "sope",           
"price": 125,           
"stock": 78,           
"createdAt": "2024-12-07T00:00:00.000Z",           
"__v": 0       
},       
{           
"_id": "67599b2c60e27b9f365987f7",           
"name": "rice",           
"price": 300,           
"stock": 20,           
"createdAt": "2024-12-07T00:00:00.000Z"       
},       
{           
"_id": "675aeb8da8f495759b5a730e",           
"name": "coconut",           
"price": 320,           
"stock": 500,           
"createdAt": "2024-12-11T00:00:00.000Z",           
"__v": 0       
}   
],   
"dataCount": 4
}

GET -> http://localhost:3000/api/v1/products/find-product-by-id/675564b07181ec87bae8fba2
{
"message": "Product find..",
"product": {
"_id": "675564b07181ec87bae8fba2",
"name": "suger",
"price": 250,
"stock": 166,
"createdAt": "2024-12-07T00:00:00.000Z",
"__v": 0
}
}

DELETE -> http://localhost:3000/api/v1/products/delete-product/675564b07181ec87bae8fba2
