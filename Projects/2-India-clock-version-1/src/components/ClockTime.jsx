
let CurrentTime = ()=>{
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    return(
        <p>This is the current date {date} and time is {time}</p>
    )
};

export default CurrentTime;