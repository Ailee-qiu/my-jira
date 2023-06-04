import { Button, DatePicker, Form, Input, Select, Spin, TreeSelect,FormItemProps } from 'antd';
import moment from 'moment';
import { useRef, useState,forwardRef,useImperativeHandle } from 'react';
import { UpOutlined, DownOutlined } from '@ant-design/icons'
import { currency, unit } from '../../common/constant';
import { Project, User } from '../../common/type';
import './index.less'
import CLinkText from '../CLinkText';
import CIcon from '../CIcon';
type CSearchPanelProps = {
    formItems:any
		settingable: any
		initialValues: any
		onFished:(value:any) => void
		onFormReset?:() => void
		expandRender: boolean
		refresh: any
		checkText?: string // 查询，按钮文案
		formItemWidth?: number
		queryButtonLoading?: boolean // 查询按钮loading效果
}
const CSearchPanel : React.ForwardRefRenderFunction<unknown, Partial<CSearchPanelProps> & FormItemProps<any>> = (
	props,
	ref
) => {
  const {
			formItems,
			settingable = { exclude: [] },
			initialValues,
			onFished:_onFinished,
			onFormReset,
			formItemWidth = 360,
			checkText = '查询',
			queryButtonLoading = false,
			...otherProps
	} = props
        const {RangePicker} = DatePicker
    const [loading,setLoading] = useState<boolean>(false)
    const formItemLayout = {
        labelCol:{flex:'106px'},
        labelWrap:true,
        colon:false,
        preserve:false,
    }
    const {onFished} = props
		const formSearchRef = useRef(null)
		const searchRef = useRef<HTMLTableElement>(null)
		const settingRef = useRef<HTMLTableElement>(null)
		const refExpand = useRef<any>(false)
    const [form ]= Form.useForm()
		const [expandRender, setExpandRender] = useState<boolean>(false)
		const [expand, setExpand] = useState<boolean>(false) // 更多与收起逻辑值
    const queryProject = (value: any)=>{
        const {date,account,currency} = form.getFieldsValue()
        const startDate = moment(date[0]).format('YYYY-MM-DD');
        const endDate = moment(date[1]).format('YYYY-MM-DD')
        console.log(startDate,endDate)
    }
		const onReset =() => {
			form.resetFields()
			onFormReset && onFormReset()
		}
    const showFormItemNode = formItems.map((n:any) => {
        const { label, name, typeRender = null, display, ...rest } = n
        return (
          <Form.Item key={name} label={label} name={name} {...rest} style={{ display }}>
            {typeRender ? typeRender() : <Input />}
          </Form.Item>
        )
      })
		useImperativeHandle(
			ref,() => ({
				form
			})
		)
    return (
        <Spin spinning={loading}>
            <Form
            {...formItemLayout}
            form={form}
            onFinish={onFished}
            >
            <div className={'c-search-panel'} ref={searchRef}>
            <div
						ref={formSearchRef}
						className={'leftContent'}
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fill, ${348}px)`,
            }}>
            {showFormItemNode}
            </div>
            <div className={'rightBtn'}>
						{expandRender && (
              <CLinkText
                className={'mg-l-3'}
                style={{ fontSize: 12, marginTop: 6, height: 18, marginLeft: 12, width: 40 }}
                text={
                  <>
                    {expand ? '收起' : '展开'}
                    {expand ? (
                      <UpOutlined style={{ width: 12, marginLeft: 4 }} />
                    ) : (
                      <DownOutlined style={{ width: 12, marginLeft: 4 }} />
                    )}
                  </>
                }
                onClick={() => {
                  setExpand(!expand)
                  refExpand.current = !expand
                  // showMoreChange(!expand)
                }}
              />
            )}
            {settingable ? (
              <span ref={settingRef} className={'setting'}
							// onClick={settingFn}
							>
                <CIcon iconType={'icon-setting'} className={'setting-icon'} />
              </span>
            ) : (
              <></>
            )}
						<Button
                disabled={queryButtonLoading}
                type="primary"
                ghost
                style={settingable ? { marginRight: 12 } : {}}
                onClick={onReset}
              >
                重置
              </Button>
                <Button type='primary' htmlType='submit' style={{marginRight:12}} className={'mg-r-3'} onClick={onFished}>
                    查询
                </Button>
            </div>
            </div>
            </Form>
        </Spin>

    );
};

export default forwardRef(CSearchPanel)
