import "./globals.css";
import "@/fonts/fonts.css";
import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Exercise 9",
    description: "Exercise 9 for USTH's Web Application Development Labwork",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang={"en"} className={"w-full h-full"}>
            <body className={`w-full h-full m-0 flex p-[8px] gap-[8px]`}>
                <div className={`flex flex-col w-[12rem] bg-white rounded-[8px]`}></div>
                <div className={`flex flex-col flex-1 rounded-[8px]`}>
                    {children}
                </div>
                <div className={`hidden lg:flex flex-col w-[15rem] bg-white rounded-[8px]`}></div>
            </body>
        </html>
    );
}