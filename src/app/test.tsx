"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateRoom = () => {
    const router = useRouter();
    const [roomName, setRoomName] = useState('');
    const [roomId, setRoomId] = useState('');
  
    const createRoom = () => {
      const id = uuidv4();
      router.push(`/chat/${id}`);
    };
  
    const joinRoom = () => {
      if (roomId.trim()) {
        router.push(`/chat/${roomId}`);
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Anonymous Chat Room</h1>
  
        <div className="w-80">
          <input
            type="text"
            placeholder="Enter room name (optional)"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="mb-4 w-full p-2 border rounded-lg"
          />
          <button
            onClick={createRoom}
            className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4 hover:bg-blue-600"
          >
            Create Room
          </button>
  
          <input
            type="text"
            placeholder="Enter room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="mb-4 w-full p-2 border rounded-lg"
          />
          <button
            onClick={joinRoom}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Join Room
          </button>
        </div>
      </div>
  )
}

export default CreateRoom