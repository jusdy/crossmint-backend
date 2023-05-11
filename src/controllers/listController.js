const { ItemListModel, SaleListModel } = require("../models");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

const getItemList = catchAsync(async (req, res) => {
    const data = await ItemListModel.find().select().exec();
    res.status(httpStatus.OK).send({data});
});

const getSaleList = catchAsync(async (req, res) => {
    const data = await SaleListModel.find().select().exec();
    res.status(httpStatus.OK).send({data});
});

const deleteItem = catchAsync(async (req, res) => {
    console.log(req.body.item.tokenId)
    // await ItemListModel.deleteOne({tokenId: req.body.item.tokenId});
    const saleListModel = new SaleListModel(req.body.item);
    await saleListModel.save();
    res.status(httpStatus.OK).send({});

});

module.exports = {
    getItemList,
    deleteItem,
    getSaleList
}