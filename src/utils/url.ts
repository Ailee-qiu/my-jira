import { useState } from "react"
import { URLSearchParamsInit, useSearchParams } from "react-router-dom"

/**
 * 返回页面url中，指定键的参数值
 */
export const useUrlQueryParam = (keys:[]) => {
    const [searchParams] = useSearchParams()
    const setSearchParams = useSetUrlSearchParam()
    const [stateKeys] = useState(keys)
    return subset(searchParams,stateKeys)

}

export const useSetUrlSearchParam = () => {
    const [searchParams,setSearchParam] = useSearchParams();
    return (params) =>{
        const o = cleanObject({
            ...Object.fromEntries(searchParams),
            ...params
        })as URLSearchParamsInit
        return setSearchParam(o)
    }
}
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object?: { [key: string]: unknown }) => {
    // Object.assign({}, object)
    if(!object){
        return {}
    }
    const result ={...object}
    Object.keys(result).forEach((key)=>{
        const value = result[key];
        if(isVoid(value)){
            delete result[key]
        }
    })
    return result
  };

  export const subset = (obj,keys)=>{
    const filteredEntries = Object.entries(obj).filter(([key])=>
    keys.includes(key))
    return Object.entries(filteredEntries)
  }

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";