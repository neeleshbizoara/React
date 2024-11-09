import { useRouteError } from "react-router-dom";

export const Error = () => {
    const err = useRouteError();
    console.log(err.error);
    return (<div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
        <div>Oops!!!</div>
        <div>{err.status}</div>
        <div>{err.error.message}</div>
         <div>{ err.error.stack }</div>
    </div>)
}