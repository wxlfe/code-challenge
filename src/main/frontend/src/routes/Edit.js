import { Outlet } from "react-router";
import Header from "../components/Header";

const Edit = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Edit;