const Mock = require('mockjs')
//import { currency } from '../common/constant'
//import { currency } from './../common/constant';
// const randomOptions = () =>Mock.Random.pick(currency)
const currencyList = currency 
//const currency = ['USD', 'EUR', 'JPY', 'GBP'];
module.exports = Mock.mock('/user','get',(options) => {
    const ret = Mock.mock({
        "data|1-100":[{
            "logBizId":'@id',
            "monitorName":{},
            "monitorLevel":{},
            "createTime":'@date("yyyy-MM-dd")',
            "accountNo":'@id',
            "accountName":'@cname',
            "balance":{},
            "currency": () => Mock.Random.pick(currencyList),
            "unitCode":'@id',
            "unitName":'@cname',
        }]
    })
    return {
        status:200,
        data:ret
    }
})