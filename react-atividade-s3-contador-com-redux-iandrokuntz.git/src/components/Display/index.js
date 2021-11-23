import { useSelector } from "react-redux";

const Display = () => {

    const count = useSelector((store) => store.count);

    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default Display