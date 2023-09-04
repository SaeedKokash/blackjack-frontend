const images01Context = require.context('../assets/products/product01', true, /.jpg$/);
const images02Context = require.context('../assets/products/product02', true, /.jpg$/);
const images03Context = require.context('../assets/products/product03', true, /.jpg$/);
const images04Context = require.context('../assets/products/product04', true, /.jpg$/);
const images05Context = require.context('../assets/products/product05', true, /.jpg$/);

const images01 = images01Context.keys().map(images01Context);
const images02 = images02Context.keys().map(images02Context);
const images03 = images03Context.keys().map(images03Context);
const images04 = images04Context.keys().map(images04Context);
const images05 = images05Context.keys().map(images05Context);

const products = [
    {
        _id: 1,
        title: "T-shirt 1",
        description: "Gildan Adult Ultra Cotton T-shirt, Style G2000, Multipack",
        price: 10,
        images: images01,
        details: {
            specifications: {
                Solids: "100%",
                Cotton: "Ash Grey: 99% Cotton, 1% Polyester",
                SportGrey: "90% Cotton, 10% Polyester",
                SafetyColors: "50% Cotton, 50% Polyester",
            },
            list: [
                "Imported",
                "Pull On closure",
                "Machine Wash",
                "Classic fit for loose comfort",
                "A great choice for everyday or work wear",
                "Heavyweight tee perfect for layering or on its own",
                "Taped neck and shoulders for comfort and durability",
                "Tear away label for customizable comfort",
                "Screen printing, embroidery, iron-on transfers, bleaching and tie dye",
            ]
        },
        video: []
    },
    {
        _id: 2,
        title: "T-shirt 2",
        description: "This is a t-shirt",
        price: 20,
        images: images02,
        details: {
            specifications: {},
            list: []
        },
        video: []
    },
    {
        _id: 3,
        title: "T-shirt 3",
        description: "This is a t-shirt",
        price: 30,
        images: images03,
        details: {
            specifications: {},
            list: []
        },
        video: []
    },
    {
        _id: 4,
        title: "T-shirt 4",
        description: "This is a t-shirt",
        price: 40,
        images: images04,
        details: {
            specifications: {},
            list: []
        },
        video: []
    },
    {
        _id: 5,
        title: "T-shirt 5",
        description: "This is a t-shirt",
        price: 50,
        images: images05,
        details: {
            specifications: {},
            list: []
        },
        video: []
    }
]

export default products;