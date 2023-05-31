import { useState } from "react"
import { URLSearchParamsInit, useSearchParams } from "react-router-dom"

/**
 * 返回页面url中，指定键的参数值
 */
export const useUrlQueryParam = <K extends string>(keys:K[]) => {
    const [searchParams] = useSearchParams()
    const setSearchParams = useSetUrlSearchParam()
    const [stateKeys] = useState(keys)
    return subset(Object.fromEntries(searchParams),stateKeys) as {
        [key  in K]:string;
    }

}

export const useSetUrlSearchParam = () => {
    const [searchParams,setSearchParam] = useSearchParams();
    return (params:{[key in string]:unknown}) =>{
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

export const subset = <
    O extends { [key in string]: unknown },
    K extends keyof O
>(
    obj:O,
    keys:K[]
)=>{
    const filteredEntries = Object.entries(obj).filter(([key])=>
    keys.includes(key as K)
    );
    return Object.entries(filteredEntries)
}

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";