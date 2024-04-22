export const Button_1 = (props) => {
    const { text, click } = props
    return (
        <button onClick={click} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            {text}
        </button>
    )

}