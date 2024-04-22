import parse from 'html-react-parser';
export const Explain = (prop) => {
const {explain}=prop
    // const {head,body}=prop
    return (
        <>
            <div className="bg-orange-100 m-2 p-3 border-orange-200 shadow-md rounded-lg ">
                
                <div>
                    {parse(prop.explain)}
               </div>
               
            </div>
        </>
    )
}