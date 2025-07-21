import { useParams } from "react-router"

const User = () => {
    const { userid } = useParams()
    return(
        <>
            user screen : {userid}
        </>
    )
}

export default User