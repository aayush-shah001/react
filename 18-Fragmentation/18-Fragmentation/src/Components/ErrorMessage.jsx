const ErrorMessage = ({items})=>{

    // const foodItems = [];
    return(
        <>
        {items.length === 0 && <h3>I am still hungary</h3>}
        </>
    )
};

export default ErrorMessage;