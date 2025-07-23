import { useLoaderData } from "react-router"

const Github = () => {
    const data = useLoaderData()
    console.log(data)
    return(
        <div className="max-w-lg w-full mx-auto flex items-center justify-between p-4 my-4 bg-yellow-200 rounded-md">
            <img src={data?.avatar_url} width={300} className="rounded-full" />
            <h2 className="text-xl font-[500]">{data?.name}</h2>
        </div> 
    )
}

export default Github

export const gitHubapiCall = async () => {
    const response = await fetch('https://api.github.com/users/hatzademohit');
    return response.json()
}