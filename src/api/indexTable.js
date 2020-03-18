import {
    get
} from "@/utils/request"
export function getStudentListQueryIndexTable() {
    const demo = {
        code: 0,
        msg: "",
        data: {
            imburseTypeList: [{
                imburseType: 1,
                imburseTypeName: "特别资助对象"
            }, {
                imburseType: 2,
                imburseTypeName: "重点资助对象"
            }, {
                imburseType: 3,
                imburseTypeName: "一般资助对象"
            }, {
                imburseType: 4,
                imburseTypeName: "非资助对象"
            }],
            departmentList: [{
                departmentId: 1,
                departmentName: "教育学部"
            }, {
                departmentId: 2,
                departmentName: "政法学院"
            }, {
                departmentId: 3,
                departmentName: "经济学院"
            }, {
                departmentId: 4,
                departmentName: "文学院"
            }, {
                departmentId: 5,
                departmentName: "历史文化学院"
            }, {
                departmentId: 6,
                departmentName: "外国语学院"
            }, {
                departmentId: 7,
                departmentName: "音乐学院"
            }, {
                departmentId: 8,
                departmentName: "美术学院"
            }, {
                departmentId: 9,
                departmentName: "商学院"
            }, {
                departmentId: 10,
                departmentName: "马克思主义学部"
            }, {
                departmentId: 11,
                departmentName: "数学与统计学院"
            }, {
                departmentId: 12,
                departmentName: "物理学院"
            }, {
                departmentId: 13,
                departmentName: "化学学院"
            }, {
                departmentId: 14,
                departmentName: "生命科学学院"
            }, {
                departmentId: 15,
                departmentName: "环境学院"
            }, {
                departmentId: 16,
                departmentName: "体育学院"
            }, {
                departmentId: 19,
                departmentName: "传媒科学学院"
            }, {
                departmentId: 20,
                departmentName: "国际工商管理学院"
            }, {
                departmentId: 31,
                departmentName: "马克思主义研究院"
            }, {
                departmentId: 34,
                departmentName: "地理科学学院"
            }, {
                departmentId: 35,
                departmentName: "罗格斯大学纽瓦克学院"
            }, {
                departmentId: 36,
                departmentName: "信息科学与技术学院"
            }, {
                departmentId: 37,
                departmentName: "心理学院"
            }, {
                departmentId: 38,
                departmentName: "民族学院"
            }, ],
            specialList: [{
                specialId: 1,
                specialName: "教育学类",
                departmentId: 1
            }, {
                specialId: 2,
                specialName: "小学教育(公费师范)",
                departmentId: 1
            }, {
                specialId: 3,
                specialName: "心理学",
                departmentId: 1
            }, {
                specialId: 4,
                specialName: "思想政治教育(公费师范)",
                departmentId: 2
            }, {
                specialId: 5,
                specialName: "法学",
                departmentId: 2
            }, {
                specialId: 6,
                specialName: "社会学(已转到马克思学部)",
                departmentId: 2
            }, {
                specialId: 9,
                specialName: "经济学",
                departmentId: 3
            }, {
                specialId: 10,
                specialName: "经济学类",
                departmentId: 3
            }, {
                specialId: 11,
                specialName: "财政学",
                departmentId: 3
            }, {
                specialId: 14,
                specialName: "汉语言文学(公费师范)",
                departmentId: 4
            }, {
                specialId: 15,
                specialName: "新闻学",
                departmentId: 4
            }, {
                specialId: 17,
                specialName: "历史学(公费师范)",
                departmentId: 5
            }, {
                specialId: 18,
                specialName: "旅游管理",
                departmentId: 5
            }, {
                specialId: 19,
                specialName: "英语(公费师范)",
                departmentId: 6
            }, {
                specialId: 20,
                specialName: "日语(公费师范)",
                departmentId: 6
            }, {
                specialId: 26,
                specialName: "音乐学",
                departmentId: 7
            }, {
                specialId: 27,
                specialName: "舞蹈编导",
                departmentId: 7
            }, {
                specialId: 28,
                specialName: "美术学",
                departmentId: 1
            }, {
                specialId: 29,
                specialName: "雕塑",
                departmentId: 1
            }, {
                specialId: 31,
                specialName: "工商管理",
                departmentId: 1
            }, {
                specialId: 33,
                specialName: "会计学",
                departmentId: 1
            }, {
                specialId: 37,
                specialName: "数学与应用数学(公费师范)",
                departmentId: 11
            }, {
                specialId: 40,
                specialName: "物理学(公费师范)",
                departmentId: 12
            }, {
                specialId: 43,
                specialName: "化学(公费师范)",
                departmentId: 13
            }, ]
        }
    }
    return new Promise(resolve => {
        resolve(demo)
    })
}

export function getGoodsTypeQueryIndexTable() {
    return get("/goods/type")
    // const demo = {
    //     goodsTypeList: [{
    //         goodsTypeId: 1,
    //         goodsType: "日用类"
    //     }, {
    //         goodsTypeId: 2,
    //         goodsType: "服装类"
    //     }, {
    //         goodsTypeId: 3,
    //         goodsType: "生活类"
    //     }, {
    //         goodsTypeId: 4,
    //         goodsType: "学习类"
    //     }]
    // }
    // return new Promise(resolve => {
    //     resolve(demo)
    // })
}

export function getGoodsNameIndexTable() {
    const demo = {
        goodsList: [{
            id: 1,
            goodsName: "本部毛巾"
        }, {
            id: 2,
            goodsName: "本部香皂"
        }, {
            id: 3,
            goodsName: "自行车"
        }, {
            id: 4,
            goodsName: "羽绒服"
        }, {
            id: 5,
            goodsName: "运动裤"
        }, {
            id: 6,
            goodsName: "针织毛衣"
        }, {
            id: 7,
            goodsName: "牙刷"
        }, ]
    }
    return new Promise(resolve => {
        resolve(demo)
    })
}