let orderService = require("../controller/orderController");
let _ = require('underscore');

const data = [
    {
        orderId: 1,
        orderItem: [
            {
                "name": "Iphone",
                "price": "$500",
                "createdDate": new Date()
            },
            {
                "name": "mask n95",
                "price": "$5",
                "createdDate": new Date()
            }
        ],
        createdDate: new Date(),
    },
    {
        orderId: 2,
        orderItem: [
            {
                "name": "Mackbook",
                "price": "$5000",
                "createdDate": new Date()
            },
            {
                "name": "Senitizer",
                "price": "$5",
                "createdDate": new Date()
            }
        ],
        createdDate: new Date(),
    }
];
module.exports = {
    getOrders: (req, res) => {
        console.log("in order services ---")
        res.send(data);
    },

    getOrderById: (req, res) => {
        let id = req.params.id ? req.params.id : null;
        console.log(id);
        if (id) {
            let orderData = _.filter(data, d =>{
                console.log(d.orderId);
                if(d.orderId == id){
                    console.log(d);
                    return d;
                }
            });
            console.log(orderData);
            res.send(orderData);

        }

    }

}