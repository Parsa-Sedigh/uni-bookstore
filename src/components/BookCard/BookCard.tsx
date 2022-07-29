import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import Image from "next/image";
import {BookCardProps} from "./BookCard.types";
import {useState} from "react";
import {DEFAULT_BOOK_IMAGE_URL} from "../../constants";
import styles from './BookCard.module.scss';
import Link from "next/link";
import {loader} from "../../utils/img-loader";

export const BookCard = (props: BookCardProps) => {
    const {id, title, image, price} = props;

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
                <Typography classes={{root: styles.price}}>{price} ریال</Typography>
            </CardContent>
        </Card>
    );
};