import { useParams } from "react-router";
import EditUserForm from "../components/EditUserForm";

const EditUserPage = () => {
    let params = useParams();

    return <EditUserForm params={ params } />
}

export default EditUserPage;