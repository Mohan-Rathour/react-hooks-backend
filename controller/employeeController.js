let employeeService = require("../services/employeeService");

module.exports =  {
    getEmployees: (req, res) => {
        return employeeService.getEmployees(req, res, (err, data)=> {
            if (err) return res.send(err);
            res.send(data);
        });
    },
    
    getEmployeeById: (req, res) =>{
        return employeeService.getEmployeeById(req, res, (err, data)=> {
            if (err) return res.send(err);
            res.send(data);
        });
    },

    createEmployee: (req, res) =>{
        return employeeService.createEmployee(req, res, (err, data)=> {
            if (err) return res.send(err);
            res.send(data);
        });
    },

    // updateEmployee: (req, res) =>{
    //     return employeeService.updateEmployee(req, res, (err, data)=> {
    //         if (err) return res.send(err);
    //         res.send(data);
    //     });
    // },
    
    // deleteEmployee: (req, res) =>{
    //     return employeeService.deleteEmployee(req, res, (err, data)=> {
    //         if (err) return res.send(err);
    //         res.send(data);
    //     });
    // }
    
}