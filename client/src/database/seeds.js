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
        itemDescription: "Revolutionary 17-inch gaming laptop with upgradeable, overclockable desktop 9th Gen Intel® Core™ processors and NVIDIA Geforce RTX graphics , plus a magnesium alloy chassis.",
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
        itemDescription: "Designed for those with a need to speed, the Predator 17 gaming notebook combines powerful 6th Gen Intel Core processor with high-performance NVIDIA GeForce graphics.",
        itemImg: "https://thegadgetflow.com/wp-content/uploads/2017/01/Acer-Predator-21X-Gaming-Laptop-04.jpg",
        itemCategory: "Laptop",
        quantity: 100,
        MSRP: 2000,
        ourPrice: 1600,
        itemID: 2
    },
    {
        brandName: "Razer",
        itemName: "Gaming Mat",
        itemDescription: "Low sense, high sense, laser or optical sensor - whatever your sensitivity setting or preferred gaming mouse, the Razer Goliathus offers total tracking responsiveness for consistently reliable in-game control.",
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
        itemDescription: "The soft and dense non-skid nature rubber base keeps the pad firmly in place. It provides stable operation of the mouse. Just immerse into your work or games without worrying about the annoying mouse pad movement.",
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
        itemDescription: "The mouse comes with a driver which allows you to set its DPI from 250 to 4000 so that you can find the perfect sensitivity for your style of gameplay. ",
        itemImg: "https://cdn.shopify.com/s/files/1/1693/6515/products/fanduco-mice-demon-hunter-gaming-mouse-with-9-programmable-buttons-27424611219_2000x.jpg?v=1509179865",
        itemCategory: "Gaming Mouse",
        quantity: 500,
        MSRP: 100,
        ourPrice: 70,
        itemID: 5
    },
    {
        brandName: "Logitech",
        itemName: "Gaming Mouse",
        itemDescription: "Logitech G develops award-winning wireless and wired gaming mice. Constantly innovating from sensors to shape, find the right one for you.",
        itemImg: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1537996771-logitech-g502-gaming-mouse-1537996751.jpg",
        itemCategory: "Gaming Mouse",
        quantity: 500,
        MSRP: 150,
        ourPrice: 100,
        itemID: 6
    },
    {
        brandName: "Logitech",
        itemName: "Headphones",
        itemDescription: "Pro-G™ Audio Drivers and DTS Headphone:X 7.1 Surround Sound Audio",
        itemImg: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6320/6320789_rd.jpg",
        itemCategory: "Audio",
        quantity: 500,
        MSRP: 70,
        ourPrice: 55,
        itemID: 7
    },
    {
        brandName: "Redragon",
        itemName: "Headphones",
        itemDescription: "Enjoy superb, balanced sound and supreme comfort with the OneOdio Studio monitor headphones.",
        itemImg: "http://redragonusa.com/storage/AORQZnOO5AFtvL6uRqlWvDOPg00HYaK9UW2yp2kH.png",
        itemCategory: "Audio",
        quantity: 500,
        MSRP: 100,
        ourPrice: 70,
        itemID: 8
    },
    {
        brandName: "Amazon",
        itemName: "HDMI Cable",
        itemDescription: "Our thin HDMI cable is perfect for taking it on the road, using it for presentations.",
        itemImg: "https://cdn.shopify.com/s/files/1/0176/3274/products/hdmi-5m_1024x1024.jpg?v=1561293417",
        itemCategory: "Accessories",
        quantity: 500,
        MSRP: 20,
        ourPrice: 15,
        itemID: 9
    },
    {
        brandName: "NETGEAR",
        itemName: "Gaming Router",
        itemDescription: "The XR500 Nighthawk Pro Gaming WiFi Router uses state-of-the-art software to optimize your internet connection by stabilizing ping.",
        itemImg: "https://images-na.ssl-images-amazon.com/images/I/81K4IHoxEHL._SL1500_.jpg",
        itemCategory: "Accessories",
        quantity: 500,
        MSRP: 100,
        ourPrice: 90,
        itemID: 10
    },
    {
        brandName: "Redragon",
        itemName: "Gaming Keyboard",
        itemDescription: "The Redragon K552 KUMARA RED LED Backlit Version isn't your average mechanical gaming keyboard.",
        itemImg: "https://redragonusa.com/storage/3Oh4BwY88NHuPzUleloobMKLik589mZqryr4oTMO.png",
        itemCategory: "Keyboards",
        quantity: 500,
        MSRP: 150,
        ourPrice: 125,
        itemID: 11
    },
    {
        brandName: "Logitech",
        itemName: "Gaming Keyboard",
        itemDescription: "With the K800, low lighting conditions won’t keep you from catching up on emails or Facebook feeds.",
        itemImg: "https://images-na.ssl-images-amazon.com/images/I/81X2lcJiwqL._SL1500_.jpg",
        itemCategory: "Keyboards",
        quantity: 500,
        MSRP: 175,
        ourPrice: 150,
        itemID: 12
    },
    {
        brandName: "Blazer",
        itemName: "Gaming Mouse",
        itemDescription: "Experience total control in your hand, no matter what game you play. Designed to provide the edge you need in MOBA/MMO gameplay.",
        itemImg: "https://d4kkpd69xt9l7.cloudfront.net/sys-master/root/he1/h79/8909576994846/Razer_Naga_Trinity_09.jpg",
        itemCategory: "Gaming Mouse",
        quantity: 500,
        MSRP: 100,
        ourPrice: 79,
        itemID: 13
    },
    {
        brandName: "Blazer",
        itemName: "Laptop",
        itemDescription: "The Razer Blade Stealth 13” laptop is equipped with a more powerful 25W NVIDIA GeForce MX150 4GB graphics for gaming and content creation.",
        itemImg: "https://assets.pcmag.com/media/images/478709-razer-blade-stealth-8th-gen-cpu.jpg?width=810&height=456",
        itemCategory: "Laptop",
        quantity: 500,
        MSRP: 1600,
        ourPrice: 1100,
        itemID: 14
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