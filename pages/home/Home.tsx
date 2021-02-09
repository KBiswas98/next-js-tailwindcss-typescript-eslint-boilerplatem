import React, { ReactElement, useEffect } from "react";
import AppWrapper from "../../compnents/app-wrapper";
import Head from "next/head";

export default function Home(): ReactElement {
    useEffect(() => {
        console.log("woo");
    }, []);

    return (
        <AppWrapper>
            <Head>
                <title>Home page</title>
                <meta
                    name="description"
                    content="this is the main home page of enzeo.in , and it is the one of the best platfrom for woman for shoping"
                />
            </Head>
            <div className="bg-red-500">Home</div>
        </AppWrapper>
    );
}
