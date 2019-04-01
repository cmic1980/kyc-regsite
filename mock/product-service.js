/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
    api: '/service/product',
    response: function (req, res) {
        res.send(`{productList:[
                    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
                    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
                    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
                    ]}`);
    }
}
