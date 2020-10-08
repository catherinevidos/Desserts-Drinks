
export const allBusiness = function (business) {
    let arr = [];
    business.forEach(bus => {
        arr.push([bus.id, bus.name])
    })
    return arr
}

// 0: {id: "H4jJ7XB3CetIr1pg56CczQ", alias: "levain-bakery-new-york", name: "Levain Bakery", image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/zgjSt_RGjXQMJxYxYSo-bQ/o.jpg", is_closed: false, …}
// 1: {id: "WHRHK3S1mQc3PmhwsGRvbw", alias: "bibble-and-sip-new-york-2", name: "Bibble & Sip", image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/z2QRyxNTchTqtX-VL8kL6Q/o.jpg", is_closed: false, …}
// 2: {id: "ltmkkP4QMslSvQ1ZUvaqFQ", alias: "krispy-kreme-new-york-13", name: "Krispy Kreme", image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/2EtdVHAvD9i3DqzlqGvt_A/o.jpg", is_closed: false, …}
// 3: {id: "K84FS4X-Hj2Xt_uUCjwNIA", alias: "kissaki-sushi-new-york", name: "Kissaki Sushi", image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/GAqdz7NZNU3Q3IZcBZz12A/o.jpg", is_closed: false, …}
// 4: {id: "fPQ2eE9lm8tc87O5-GLjyA", alias: "mille-feuille-bakery-new-york-3", name: "Mille-Feuille Bakery", image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/BM8s4Zk-bm55kSGOwC4Dlg/o.jpg", is_closed: false, …}
// 5: {id: "JaFHhBaCNRJYaGW9zeFQCQ", alias: "beard-papas-new-york", name: "Beard Papa's", image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/dDPUNjfX9QS3lb_hrdAQhg/o.jpg", is_closed: false, …}
// 6: {id: "D9Tx6YmW5EB9KZO0_EcYxw", alias: "barachou-new-york", name: "Barachou", image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/weGbF99nPy72EvFQ8QI1xw/o.jpg", is_closed: false, …}
// 7: {id: "7Oab05KVxJDrA8VfpgxEcQ", alias: "magnolia-bakery-upper-west-side-new-york", name: "Magnolia Bakery Upper West Side", image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/V9FScPMSz7h2zfX0s8kypQ/o.jpg", is_closed: false, …}
// 8: {id: "TuRPkrvAut11wfz1N3Sm7Q", alias: "levain-bakery-new-york-5", name: "Levain Bakery", image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/-mL3jMrw5XfQvL9HnsKXLQ/o.jpg", is_closed: false, …}
// 9: {id: "MKYhiSeXjahxh9O4Gqnimw", alias: "grace-street-new-york", name: "Grace Street", image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/-Fa8jLXSUfiT2p4LmHTNEg/o.jpg", is_closed: false, …}
// 10: {id: "sM1mrw5y2ttH6GHNTRNieg", alias: "mia-s-bakery-new-york", name: "Mia’s Bakery", image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/Q9QxOcO2NBap09aV72WEyA/o.jpg", is_closed: false, …}
// 11: {id: "pvBttkel26Mv2Q2qIo1n0Q", alias: "domi-new-york-3", name: "Domi", image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/UF6IvC7iou7eHVjIVUtIMQ/o.jpg", is_closed: false, …}
// 12: {id: "CjIBoGl2gdvojZvVlyPIgg", alias: "huascar-and-co-bakeshop-new-york", name: "Huascar & Co Bakeshop", image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/gdYQDDmT8lMlyDMphFwFHA/o.jpg", is_closed: false, …}
// 13: {id: "Bm_OeNNmJ6Q8FXUDzGzfHw", alias: "k-minamoto-new-york", name: "K Minamoto", image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/LLWBMRFLREkto7GSHMQamQ/o.jpg", is_closed: false, …}
// 14: {id: "A6PY4QRyj1vT-5ftZskvJQ", alias: "van-leeuwen-ice-cream-new-york-36", name: "Van Leeuwen Ice Cream", image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/rwVFurWJN1aZoyqFw6_gbg/o.jpg", is_closed: false, …}
// 15: {id: "812lKVqrIehaImJKmu84iw", alias: "milk-bar-nyc-flagship-new-york-2", name: "Milk Bar NYC Flagship", image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/0fOs9AFyumQYhlIiBzJWNw/o.jpg", is_closed: false, …}
// 16: {id: "8DiYXJYGWfUUq9f9Ks-fhQ", alias: "levain-bakery-new-york-9", name: "Levain Bakery", image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/x-nRtX5trpJ29Rmp6UWbpA/o.jpg", is_closed: false, …}
// 17: {id: "H7QoApSloy7Zu0LFpQVv-A", alias: "keki-modern-cakes-new-york-2", name: "Keki Modern Cakes", image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/y9LYeX5c2QnPxFBpx9MoPQ/o.jpg", is_closed: false, …}
// 18: {id: "l-qN-2S2hoXhoWtXJ0BX-A", alias: "amorino-gelato-new-york-5", name: "Amorino Gelato", image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/3C6kOBhHYJQJ1N9EkLbB7w/o.jpg", is_closed: false, …}
// 19: {id: "jz_FnuRpCNzfwwHHQ6Nbeg", alias: "schmackarys-new-york", name: "Schmackary's", image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/t8zuMpsltwl2Xk9ajY0Ugg/o.jpg", is_closed: false, …}



// [{id: "H4jJ7XB3CetIr1pg56CczQ", alias: "levain-bakery-new-york", name: "Levain Bakery", image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/zgjSt_RGjXQMJxYxYSo-bQ/o.jpg"},
// {id: "WHRHK3S1mQc3PmhwsGRvbw", alias: "bibble-and-sip-new-york-2", name: "Bibble & Sip", image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/z2QRyxNTchTqtX-VL8kL6Q/o.jpg"}]