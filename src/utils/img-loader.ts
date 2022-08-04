import {DEFAULT_BOOK_IMAGE_URL} from "../constants";
import {ImageLoader, ImageLoaderProps} from "next/image";

export const loader = ({ src, width = 200, quality = 75 }: ImageLoaderProps) => {
    const defaultUrl = `${DEFAULT_BOOK_IMAGE_URL}/${src}?w=${width}&q=${quality}`;

    try {
        const url = new URL(src);
        return defaultUrl;
    } catch {
        return `${DEFAULT_BOOK_IMAGE_URL}`;
    }
};