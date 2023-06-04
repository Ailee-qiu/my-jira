//币种
export const currency = [
    {
      value: '10',
      label: '人民币',
    },
    {
      value: '21',
      label: '港币',
    },
    {
      value: '32',
      label: '美元',
    },
    {
      value: "43",
      label: "英镑"
    },
    {
      value: "35", 
      label: "欧元"
    },
    {
      value: "65", 
      label: "日元"
    },
    {
      value: "39", 
      label: "加拿大元"
    },
    {
      value: "29", 
      label: "澳元"
    },
    {
      value: "69", 
      label: "新加坡元"
    },
    {
      value: "20", 
      label: "墨西哥比索"
    },
    {
      value: "12", 
      label: "巴西里亚尔"
    }
  ]

export const account = []

export const unit = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
        },
      ],
    },
  ];

//监控级别
export const monitorLevel = [
  {
    value: 1, 
    label: "提醒"
  },
  {
    value: 2, 
    label: "警告"
  },
  {
    value: 3, 
    label: "紧急"
  }
]
//监控类型
export const monitorType = [
  {
    value: "100", 
    label: "账户余额监控"
  },
  {
    value: "101", 
    label: "单位余额监控"
  },
  {
    value: "105", 
    label: "境外账户余额监控"
  },
  {
    value: "106", 
    label: "境外单位余额监控"
  },
  {
    value: "110", 
    label: "交易明细监控"
  },
  {
    value: "111", 
    label: "交易流量监控"
  },
  {
    value: "112", 
    label: "交易频率监控"
  },
  {
    value: "115", 
    label: "境外交易明细监控"
  },
  {
    value: "116", 
    label: "境外交易流量监控"
  },
  {
    value: "120", 
    label: "久悬户监控"
  },
  {
    value: "130", 
    label: "反洗钱监控"
  },
  {
    value: "200", 
    label: "支付监控"
  },
  {
    value: "201", 
    label: "支付流量监控"
  },
  {
    value: "202", 
    label: "支付频率监控"
  }
]
//银行类型
export const bankType = [
  {
    value: "CMB", 
    label: "招商银行"
  },
  {
    value: "ABC", 
    label: "中国农业银行"
  },
  {
    value: "ADB", 
    label: "中国农业发展银行"
  },
  {
    value: "BCM", 
    label: "交通银行"
  },
  {
    value: "BDP", 
    label: "百度钱包"
  },
  {
    value: "BEA", 
    label: "东亚银行"
  },
  {
    value: "BEF", 
    label: "北控财务公司"
  },
  {
    value: "BGF", 
    label: "北汽财务公司"
  },
  {
    value: "BHB", 
    label: "渤海银行"
  },
  {
    value: "BHS", 
    label: "华商银行"
  },
  {
    value: "BHX", 
    label: "华兴银行"
  },
  {
    value: "BIM", 
    label: "内蒙古银行"
  },
  {
    value: "BJL", 
    label: "吉林银行"
  },
  {
    value: "BJS", 
    label: "江苏银行"
  }
]