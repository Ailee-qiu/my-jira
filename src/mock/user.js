const Mock = require('mockjs')
//import { currency } from '../common/constant'
//import { currency } from './../common/constant';
// const randomOptions = () =>Mock.Random.pick(currency)
// const currencyList = currency
const currency = ['USD', 'EUR', 'JPY', 'GBP']
const monitorLevel = [
	{
		value: 1,
		label: '提醒',
	},
	{
		value: 2,
		label: '警告',
	},
	{
		value: 3,
		label: '紧急',
	},
]

const monitorType = [
	{
		value: '100',
		label: '账户余额监控',
	},
	{
		value: '101',
		label: '单位余额监控',
	},
	{
		value: '105',
		label: '境外账户余额监控',
	},
	{
		value: '106',
		label: '境外单位余额监控',
	},
	{
		value: '110',
		label: '交易明细监控',
	},
	{
		value: '111',
		label: '交易流量监控',
	},
	{
		value: '112',
		label: '交易频率监控',
	},
	{
		value: '115',
		label: '境外交易明细监控',
	},
	{
		value: '116',
		label: '境外交易流量监控',
	},
	{
		value: '120',
		label: '久悬户监控',
	},
	{
		value: '130',
		label: '反洗钱监控',
	},
	{
		value: '200',
		label: '支付监控',
	},
	{
		value: '201',
		label: '支付流量监控',
	},
	{
		value: '202',
		label: '支付频率监控',
	},
]
module.exports = Mock.mock('/user', 'get', (options) => {
	const ret = Mock.mock({
		'data|1-100': [
			{
				logBizId: '@id',
				monitorName: () => Mock.Random.pick(monitorType),
				monitorLevel: () => Mock.Random.pick(monitorLevel),
				createTime: '@date("yyyy-MM-dd")',
				accountNo: '@id',
				accountName: '@cname',
				balance: '@float(1, 100, 2)',
				currency: () => Mock.Random.pick(currency),
				unitCode: '@id',
				unitName: '@cname',
			},
		],
	})
	return {
		status: 200,
		data: ret,
	}
})
