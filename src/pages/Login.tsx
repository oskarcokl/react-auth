import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

const Login = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        setToken("This is a test token");
        navigate("/", { replace: true });
    }

    setTimeout(() => {
        handleLogin();
    }, 3 * 1000);

    return <>Login Page</>;
}

export default Login;
