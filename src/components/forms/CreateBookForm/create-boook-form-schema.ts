import {object, string} from "yup";
import {REQUIRED_ERR_MSG} from "../../../constants/errors";

export const schema = object({
    title: string().required(REQUIRED_ERR_MSG),
    authors: string().required(REQUIRED_ERR_MSG),
    price: string().required(REQUIRED_ERR_MSG)
});