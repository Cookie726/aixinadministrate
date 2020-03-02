export function getGoodsList() {
    const demo = [{
            barCode: "6921899980034",
            goodsName: "水杯800ml",
            specs: "800ml",
            price: 7,
            goodsType: "日用类",
            moneyType: "日用币",
            goodsTypeId: 2,
            id: 5
        },
        {
            barCode: "6921899980034",
            goodsName: "水杯800ml",
            specs: "800ml",
            price: 7,
            goodsType: "日用类",
            moneyType: "日用币",
            goodsTypeId: 2,
            id: 5
        }
    ]
    return new Promise(resolve => {
        resolve({
            total: 500,
            goodsList: demo
        })
    })
}

export function deleteRecord(id) {
    console.log('删除的提货记录ID：', id)
}

export function deleteDepository(id) {
    console.log('删除的商品ID：', id)
}

export function addGoods(data) {
    console.log(data)
}