export const Option = (prop) => {
    const {content,type,name,value,id,checked,onChange }=prop 
    
    return (
        <>

            <label  className="block mb-2">
                <input
                    type={type}
                    name={name}
                    value={value}
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    className="mr-2"
                />
                {content}
            </label>
        </>


    )
}