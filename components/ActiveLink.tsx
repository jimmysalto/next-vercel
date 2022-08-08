import React, { CSSProperties,FC } from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router';

const style:CSSProperties={
    color: "#0070f3",
    textDecoration: "underline",
    borderRadius: "5px",
}

interface Props {
    text: string;
    href: string;
}

export const ActiveLink:FC<Props> = ({text, href}) => {
    console.log(text,href);

    const {asPath} = useRouter(); 

    return (
        <Link href={href}>
            <a style={asPath === href ? style : undefined}>{text}</a>
        </Link>
        
    )
}
