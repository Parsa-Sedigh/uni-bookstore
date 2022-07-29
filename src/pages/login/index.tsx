import styles from '../../styles/LoginPage.module.scss';
import {LoginForm} from "../../components/forms/LoginForm/LoginForm";
import {Paper} from "@mui/material";

const Login = () => {
    return (
        <div className={styles.container}>
            <Paper classes={{root: styles['form-container']}}>
                <LoginForm />
            </Paper>
        </div>
    );
};

export default Login;