const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const itemListSchema = mongoose.Schema(
  {
    name: String,
    imageUri: String,
    collectionAddress: String,
    tokenId: Number,
  },
);

// add plugin that converts mongoose to json
itemListSchema.plugin(toJSON);
itemListSchema.plugin(paginate);

/**
 * @typedef Metadata
 */
const ItemListModel = mongoose.model("item_list", itemListSchema);

module.exports = ItemListModel;
