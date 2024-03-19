const orderModel = require('../model/order')

exports.addOrder = async (req, res) => {
    try {
        const { name, quantity } = req.body
        const order = new orderModel({ name, quantity })
        await order.save()
        return res.status(201).send({
            msg: 'New Order Placed',
            success: true,
            order
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            msg: "Error in Order Food",
            success: false,
            error
        })
    }
}

exports.getAllOrder = async (req, res) => {
    try {
        const Order = await orderModel.find({})
        return res.status(200).send({
            success: true,
            msg: "All Order List",
            Order
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            msg: "Error While Get All Order",
            error
        })
    }
}