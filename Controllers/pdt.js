const productModel = require('../model/pdt')

exports.addPdt = async (req, res) => {
    try {
        const { name, price } = req.body
        const product = new productModel({ name, price })

        await product.save()
        return res.status(201).send({
            msg: 'New Product Added',
            success: true,
            product
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            msg: "Error in Creating Product",
            success: false,
            error
        })
    }
}

exports.getAllPdt = async (req, res) => {
    try {
        const Pdt = await productModel.find({})
        return res.status(200).send({
            success: true,
            msg: "All Product List",
            Pdt
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            msg: "Error While Get All Pdt",
            error
        })
    }
}

exports.updatePdt = async (req, res) => {
    try {
        const { id } = req.params
        const Pdt = await productModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
        return res.status(201).send({
            success: true,
            msg: "Product Updated",
            Pdt
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            msg: 'Error While Updating Product Detail'
        })
    }
}

exports.deletePdt = async (req, res) => {
    try {
        const { id } = req.params
        const Pdt = await productModel.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            msg: "Product Deleted"
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success: false,
            msg: 'Error While Delete Product'
        })
    }
}