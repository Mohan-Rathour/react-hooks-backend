let orderController = require('../controller/orderController');
let employeeController = require('../controller/employeeController');

module.exports = (app) => {
    app.route('/getOrders').get(orderController.getOrders);
    app.route('/getOrderById/:id').get(orderController.getOrderById);
    app.route('/api/employees').get(employeeController.getEmployees);
    app.route('/api/employees/:id').get(employeeController.getEmployeeById);
    app.route('/api/employees').post(employeeController.createEmployee);
    // app.route('/api/employees').put(employeeController.updateEmployee);
    // app.route('/api/employees').delete(employeeController.deleteEmployees);

}
