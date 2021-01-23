let orderService = require("../services/orderService");

module.exports =  {
    getOrders: (req, res) => {
        return orderService.getOrders(req, res, (err, data)=> {
            if (err) return res.send(err);
            res.send(data);
        })
    },
    
    getOrderById: (req, res) =>{
        return orderService.getOrderById(req, res, (err, data)=> {
            if (err) return res.send(err);
            res.send(data);
        })
    }
}