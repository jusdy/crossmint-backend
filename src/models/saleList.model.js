const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const saleItemSchema = mongoose.Schema(
  {
    name: String,
    imageUri: String,
    collectionAddress: String,
    tokenId: Number,
  },
);

// add plugin that converts mongoose to json
saleItemSchema.plugin(toJSON);
saleItemSchema.plugin(paginate);

/**
 * @typedef Metadata
 */
const SaleListModel = mongoose.model("sale_list", saleItemSchema);

module.exports = SaleListModel;
