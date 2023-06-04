import React, { HTMLProps } from 'react';
import './index.less'
import classNames from 'classnames'
export interface CLinkTextProps extends HTMLProps<any> {
  onClick: (evt: any) => void // 点击事件
  text: React.ReactNode // 链接文字，支持个性化标题样式展示
  disabled: boolean // 是否需要置灰
}
const CLinkText: React.FC<Partial<CLinkTextProps>> = (props) => {
	const { onClick, text, style, className, disabled } = props
	const clickEv = (evt: any) => {
    if (disabled) return
    onClick && onClick(evt) // 返回记录状态，做业务逻辑
  }
	return (
		<span
		className={classNames('c-link-text', className, disabled && 'c-link-text-disabled')}
		style={style}
		onClick={clickEv}
		>
			{text}
		</span>
	);
};

export default CLinkText;
