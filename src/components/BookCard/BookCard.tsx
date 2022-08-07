import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Popover,
    Typography
} from "@mui/material";
import Image from "next/image";
import {BookCardProps} from "./BookCard.types";
import styles from './BookCard.module.scss';
import Link from "next/link";
import {loader} from "../../utils/img-loader";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {useDialogUpdater} from "../../hooks/useDialogUpdater";
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

export const BookCard = (props: BookCardProps) => {
    const {id, title, image, price, actions} = props;
    const dispatch = useDialogUpdater();

    const onOpenDialog = (modalName: string) => {
        console.log('onOpenModal: ', dispatch);
        dispatch({
            type: 'open', value: {modalName, data: modalName === 'editBook' ? {id, title, image, price} : {id}}
        });
    };

    return (
        <Card>
           <Link href={`/book/${id}`} passHref>
               <CardActionArea>
                   <CardMedia>
                       <Image src={image} alt={title} width={200} height={200} loader={loader} />
                   </CardMedia>
               </CardActionArea>
           </Link>

            <CardContent>
                <Typography classes={{root: styles.title}}>{title}</Typography>
                <Typography classes={{root: styles.price}}>{price.toLocaleString('fa-IR')} ریال</Typography>
            </CardContent>

            {actions &&
                <CardActions>
                    {actions.edit && <IconButton onClick={() => onOpenDialog('editBook')}><EditRoundedIcon fontSize="large" /></IconButton>}
                    {actions.delete && (
                        <IconButton onClick={() => onOpenDialog('removeBook')}>
                            <RemoveCircleOutlineRoundedIcon fontSize="large" ></RemoveCircleOutlineRoundedIcon>
                        </IconButton>
                    )}
                    

                </CardActions>}
        </Card>
    );
};