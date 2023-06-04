/** 图标组件 */
import React, { HTMLProps } from 'react'
import CIconProps from "./types";
import classNames from 'classnames'
import './index.less'

enum AcitonTypeInfo {
  default = 'cbs-icon-default', // 默认态，不存在hover效果
  activation = 'cbs-icon-activation', // 激活态，存在hover效果，以及禁用效果
}

const CIcon: React.FC<CIconProps> = (props) => {

  const { iconType, acitonType = 'default', className = '', disabled, ...rest } = props;
  return (
    <span className={classNames('iconfont', iconType, className, AcitonTypeInfo[acitonType], disabled && 'cbs-icon-disabled')
    }
      {...rest}></span>
  )
}

export default CIcon;