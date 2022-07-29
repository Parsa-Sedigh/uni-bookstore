import {object, string} from "yup";
import {REQUIRED_ERR_MSG} from "../../../constants/errors";

export const schema = object({
    username: string().required(REQUIRED_ERR_MSG),
    password: string().required(REQUIRED_ERR_MSG)
});