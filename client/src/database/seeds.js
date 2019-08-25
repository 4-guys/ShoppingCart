var db = require("../../../models");

var users = [
    {
        firstName: "Chris",
        lastName: "Cudiamat",
        email: "ccudiamat93@gmail.com",
        address: '123 waterside, windowsill, ca 92806',
        phone: 9492311025,
        password: 12345
    },
    {
        firstName: "Michael",
        lastName: "Eguina",
        email: "adriverforlife@gmail.com",
        address: '321 alter, aliso viejo, ca 92656',
        phone: 9496324555,
        password: 12491
    },
    {
        firstName: "Calvin",
        lastName: "Vo",
        email: "calvinVo@gmail.com",
        address: '111 middledesk dr, room 3000, ca 92310',
        phone: 7141141205,
        password: 26491
    },
    {
        firstName: "Test",
        lastName: "Test",
        email: "Test@gmail.com",
        address: '111 middledesk dr, room 3000, ca 92310',
        phone: 7141141205,
        password: 123
    },
];

var products = [
    {
        brandName: "Alienware",
        itemName: "Laptop",
        itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        itemImg: "https://cdn11.bigcommerce.com/s-r4tr0/images/stencil/1280x1280/products/256144/412223/1466184019000_1258957__30024.1561576917.jpg?c=2",
        itemCategory: "Laptop",
        quantity: 100,
        MSRP: 2000,
        ourPrice: 1500,
        itemID: 1
    },
    {
        brandName: "Predator",
        itemName: "Laptop",
        itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        itemImg: "https://thegadgetflow.com/wp-content/uploads/2017/01/Acer-Predator-21X-Gaming-Laptop-04.jpg",
        itemCategory: "Laptop",
        quantity: 100,
        MSRP: 2000,
        ourPrice: 1500,
        itemID: 2
    },
    {
        brandName: "Razer",
        itemName: "Gaming Mat",
        itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        itemImg: "https://d4kkpd69xt9l7.cloudfront.net/sys-master/images/h68/hf1/8807855751198",
        itemCategory: "Mats",
        quantity: 200,
        MSRP: 50,
        ourPrice: 25,
        itemID: 3
    },
    {
        brandName: "Amazon",
        itemName: "Gaming Mat",
        itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        itemImg: "https://images-na.ssl-images-amazon.com/images/I/71sRKTy37GL._SL1000_.jpg",
        itemCategory: "Mats",
        quantity: 250,
        MSRP: 40,
        ourPrice: 20,
        itemID: 4
    },
    {
        brandName: "Demon Hunter",
        itemName: "Gaming Mouse",
        itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        itemImg: "https://cdn.shopify.com/s/files/1/1693/6515/products/fanduco-mice-demon-hunter-gaming-mouse-with-9-programmable-buttons-27424611219_2000x.jpg?v=1509179865",
        itemCategory: "Gaming Mouse",
        quantity: 500,
        MSRP: 2000,
        ourPrice: 1500,
        itemID: 5
    },
    {
        brandName: "Logitech",
        itemName: "Gaming Mouse",
        itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        itemImg: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1537996771-logitech-g502-gaming-mouse-1537996751.jpg",
        itemCategory: "Gaming Mouse",
        quantity: 500,
        MSRP: 2000,
        ourPrice: 1500,
        itemID: 6
    },
    {
        brandName: "Logitech",
        itemName: "Headphones",
        itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        itemImg: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6320/6320789_rd.jpg",
        itemCategory: "Audio",
        quantity: 500,
        MSRP: 2000,
        ourPrice: 1500,
        itemID: 7
    },
    {
        brandName: "Redragon",
        itemName: "Headphones",
        itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        itemImg: "http://redragonusa.com/storage/AORQZnOO5AFtvL6uRqlWvDOPg00HYaK9UW2yp2kH.png",
        itemCategory: "Audio",
        quantity: 500,
        MSRP: 2000,
        ourPrice: 1500,
        itemID: 8
    },
    {
        brandName: "Amazon",
        itemName: "HDMI Cable",
        itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        itemImg: "https://cdn.shopify.com/s/files/1/0176/3274/products/hdmi-5m_1024x1024.jpg?v=1561293417",
        itemCategory: "Accessories",
        quantity: 500,
        MSRP: 2000,
        ourPrice: 1500,
        itemID: 9
    },
    {
        brandName: "NETGEAR",
        itemName: "Gaming Router",
        itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        itemImg: "https://images-na.ssl-images-amazon.com/images/I/81K4IHoxEHL._SL1500_.jpg",
        itemCategory: "Accessories",
        quantity: 500,
        MSRP: 2000,
        ourPrice: 1500,
        itemID: 10
    },
    {
        brandName: "Redragon",
        itemName: "Gaming Keyboard",
        itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        itemImg: "https://redragonusa.com/storage/3Oh4BwY88NHuPzUleloobMKLik589mZqryr4oTMO.png",
        itemCategory: "Keyboards",
        quantity: 500,
        MSRP: 2000,
        ourPrice: 1500,
        itemID: 11
    },
    {
        brandName: "Logitech",
        itemName: "Gaming Keyboard",
        itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        itemImg: "https://images-na.ssl-images-amazon.com/images/I/81X2lcJiwqL._SL1500_.jpg",
        itemCategory: "Keyboards",
        quantity: 500,
        MSRP: 2000,
        ourPrice: 1500,
        itemID: 12
    },];

async function makeData(Model, data) {
    var promises = [];
    for (var i = 0; i < data.length; i++) {
        promises.push(Model.create(data[i]));
    }
    var items = await Promise.all(promises);
    return items;
}
db.sequelize.sync().then(async function () {
    await makeData(db.Item, products);
    await makeData(db.User, users);
    // await makeData(db.UserSignup, userSignups);
    db.sequelize.close();
})