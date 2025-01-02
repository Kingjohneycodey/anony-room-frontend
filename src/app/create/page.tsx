"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const GetStartedPage = () => { 
  const router = useRouter();
  const [roomName, setRoomName] = useState('');
  const [roomId, setRoomId] = useState('');

  const createRoom = () => {
    const id = 12222;
    router.push(`/chat/${id}`);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
   

      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-6">

        <h1 className="text-2xl lg:text-6xl font-bold mb-12 text-primary text-center">
          Anony Room 
        </h1>
       
       
        <div className="w-80">
          <input
            type="text"
            placeholder="Enter room name (optional)"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="mb-4 w-full p-2 border rounded-lg"
          />
       
  
          <input
            type="text"
            placeholder="Enter room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="mb-4 w-full p-2 border rounded-lg"
          />
          <button
            onClick={createRoom}
            className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4 hover:bg-blue-600"
          >
            Create Room
          </button>
        </div>

      </div>


         {/* Right Section */}
         <div className="flex-1 bg-primary flex items-center justify-center relative">
        <img
          src="/images/chat.svg"
          alt="Illustration"
          className="h-64 w-64 lg:h-80 lg:w-80 object-cover"
        />
      </div>
    </div>
  );
};

export default GetStartedPage;
