import { memo } from "react"

const Switch = ({onToggle}) => {

    return (
        <div className='switch-container'>
            <label htmlFor='switch' className="switch">
                <input id='switch' type="checkbox" onChange={(e)=>onToggle(e)}/>
                <span className="slider round"></span>
            </label>
          
        </div>
    )
}

export default memo(Switch)