import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

interface appWrapperInterface {
    children: any;
}

export default function AppWrapper(props: appWrapperInterface) {
    return (
        <main>
            <Navbar />
            {props.children}
            <Footer />
        </main>
    );
}
