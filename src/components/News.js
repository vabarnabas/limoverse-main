import React from "react";
import { collection, onSnapshot, } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import { HiAnnotation, HiCode, HiCalendar, HiUser, HiExclamation } from 'react-icons/hi';


const News = (props) => {

    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        const getData = async () => {
            onSnapshot(collection(props.firestore, 'announcements'), (snapshot) => {
                setAnnouncements(snapshot.docs.map((doc) => doc.data()))
            })};
        getData();
    }, []);

    

    return (
        <div className="bg-primary h-screen overflow-y-auto flex flex-col items-center text-white pb-2">
                {announcements.map((ann) =>
                (
                <div key={ann.id} className="bg-secondary py-4 px-6 rounded my-4 w-4/5 sm:w-2/5">
                    <p className="font-semibold text-2xl flex items-center mb-0">
                    {(() =>
                        {switch(ann.type) {
                            case 'announcement':
                                return <HiAnnotation className="text-md mr-2"/>;
                            case 'update':
                                return <HiCode className="text-md mr-2"/>;
                            case 'warning':
                                return <HiExclamation className="text-md mr-2"/>;
                            default:
                                return null
                        }})()  
                    }
                        {ann.title}</p>
                    <p className="text-xs  mb-3 opacity-60 flex items-center"><HiCalendar className="mr-1"/>{ann.date}<HiUser className="mr-1 ml-2"/>{ann.author}</p>
                    <p className="">{ann.message}</p>
                </div>
                ))}
        </div>
    );
}

export default News;