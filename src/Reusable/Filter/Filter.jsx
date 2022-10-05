import React, { useState } from 'react'

const Filter = ({ placeHolder, data, handleChange }) => {
    
    const [val, setVal] = useState('');
    const selectChange = (e) => {

        handleChange(e.name,e.value);
        setVal(prevVal => {
            return e.value;
        });

    }
    return (

        <div>
            <select className='filter' placeholder={placeHolder} name={placeHolder}
            value={val} onChange={(e) => selectChange(e.target)}>
                <option value={""}>{placeHolder}</option>
                {
                    data.map((value, i) => {
                        return <option key={value.id} value={value.name}>
                            {value.name}
                        </option>
                    })
                }
            </select>
        </div>

    )
}

export default Filter