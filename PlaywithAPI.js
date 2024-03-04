"use client"
import axios from "axios";
import { getNextInternalQuery } from "next/dist/server/request-meta";
import React, { useState } from "react";

const page = () => {
  const [Images,setImages] = useState([]);

  const getImages =async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data)
    } catch (error) {
      console.error("errorrrrrrrr");
    }
  }
  return (
    <>
    <button onClick={getImages} className="px-5 py-3 bg-green-800 text-white font-bold">Get images</button>
    <div className="p-15">
      {Images.map((img,i) =>{
       return <img key={i}
          src={img.download_url}
          width={300}
          height={300}
          className="m-10 rounded inline-block"
       />
      })}
    </div>
    </>
  )
}
export default page