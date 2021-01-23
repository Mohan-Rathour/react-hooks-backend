let orderService = require("../controller/orderController");
let _ = require('underscore');

let Employess = {
    employees: [
        {
            "id": 1,
            "firstName": "AdityaNarayan",
            "lastName": "Tiwari",
            "email": "adityanarayan@gmail.com",
            "mobile": 9971394556
        },
        {
            "id": 2,
            "firstName": "Ram",
            "lastName": "Banshkar",
            "email": "banshkar@gmail.com",
            "mobile": 8218878778
        },
        {
            "id": 3,
            "firstName": "Mragang",
            "lastName": "Jain",
            "email": "mragangjain@gmail.com",
            "mobile": 991889920
        }
    ]
}
module.exports = {
    getEmployees: (req, res) => {
        res.send(Employess);
    },

    getEmployeeById: (req, res) => {
        let id = req.params.id ? req.params.id : null;
        console.log(id);
        if (id) {
            let employeeData = _.filter(Employess, d =>{
                if(d.id == id){
                    return d;
                }
            });
            res.send(employeeData);
        }

    },
    createEmployee: (req, res) => {
        Employess.push(req.body);
        res.send(Employess);
    },

    createEmployee: (req, res) => {
        Employess.push(req.body);
        res.send(Employess);
    }

}