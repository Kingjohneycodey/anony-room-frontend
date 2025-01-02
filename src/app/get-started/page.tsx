import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const GetStartedPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
   

      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-3xl lg:text-5xl font-bold mb-2 text-primary text-center">
          Connect <br /> Anonymously.
        </h1>

        <p className="text-xl font-bold">With</p>

        <h1 className="text-4xl lg:text-6xl font-bold mb-12 text-primary text-center">
          Anony Room
        </h1>
        <div className="flex gap-6">
          {" "}


         <Link href="/create"> <Button variant="default">Create Room</Button></Link>
          <Button variant="outline">Join Room</Button>
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
