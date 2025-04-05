import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
},{
    timestamps: true // timestamps provide createdAt and updatedAt
});

const Product=mongoose.model('Product',productSchema);
// mongoose will automatically make Product into products in db
export default Product;