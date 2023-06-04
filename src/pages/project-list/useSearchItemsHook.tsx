import { DatePicker, Input, Select, TreeSelect } from "antd"
import { bankType, monitorLevel, monitorType } from "../../common/constant"

const useSearchItemsHook = () => {
    const {RangePicker} = DatePicker
return [
    {
      label: '触发时间',
      name: 'moniterTime',
      disabled: true,
      rules: [
        {
          required: true,
        },
      ],
      typeRender: () => {
        return <RangePicker format="YYYY-MM-DD" />
      },
    },
    {
      label: '监控类型',
      name: 'monitorType',
      typeRender: () => {
        return <Select options={monitorType} />
      },
    },
    {
      label: '监控级别',
      name: 'monitorLevel',
      typeRender: () => {
        return <Select mode="multiple" options={monitorLevel} />
      },
    },
    {
      label: '预警编码',
      name: 'logBizId',
      typeRender: () => {
        return <Input/>
      },
    },
    {
      label: '单位名称',
      name: 'unitCode',
      typeRender: () => {
        return <TreeSelect multiple />
      },
    },
    {
        label: '银行类型',
        name: 'bankType',
        typeRender: () => {
          return <Select mode="multiple" options={bankType} />
        },
      },
  ]
}

export default useSearchItemsHook