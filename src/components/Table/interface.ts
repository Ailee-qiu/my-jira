import React, { ReactNode } from 'react'
import { TableProps, TableColumnType, PaginationProps } from 'antd'

export interface tableTitleProps {
    titleName: ReactNode
    titleAction: ReactNode
    titleTips: ReactNode
    tipIcon: ReactNode
    tipText: ReactNode
  }

export type ITableColumn<T = any> = (TableProps<T>['columns'] extends (infer column)[] ? column : never) & {
    settingCardTittle?: string
}

type basisTable<T> = Omit<TableProps<T>, 'pagination'>

export interface CTableProps<T = any> extends Partial<tableTitleProps>, basisTable<T> {
    columns: ITableColumn<T>[]
    rowSelection?: basisTable<T>['rowSelection'] & {
      removedSelectedChange?: (removedRows: T[], removedRowKeys: React.Key[]) => void
      onTriggerSelectAll?: (isSelectedAll: boolean) => void
    }
    businessType?: string
    cutVerticalHeight?: number
    rowClassNameFunc?: (recode: any, index: number) => string
    // pagination?: CPaginationProps | boolean
    // settingable?: boolean | ({ exclude: React.Key[] } & Settingable)
    handleOnchange?: basisTable<T>['onChange']
    keepSelectedKey?: boolean
    // renderLeftFooter?: (total, checkNumber, onCancel) => ReactNode
    // 报错类名（表单校验失败出现红色报错，单元格内容水平置顶展示）
    errorClassName?: string
    // 是否开启虚拟滚动
    useVirtual?: boolean
  }