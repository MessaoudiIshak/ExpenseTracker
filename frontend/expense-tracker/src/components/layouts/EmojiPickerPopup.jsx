import React from 'react'
import {useState} from 'react';
import {LuImage, LuX} from 'react-icons/lu';
import EmojiPicker from 'emoji-picker-react';

export default function EmojiPickerPopup({ icon, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-col md:flex-row items-start gap-5 mb-6'>
      <div className='flex items-center gap-4'>
        {/* Always show the icon and text, only open picker on click */}
        <div className='flex flex-col items-center'>
          <div
            className='w-12 h-12 flex items-center justify-center text-2xl bg-purple-50 text-primary rounded-lg cursor-pointer'
            onClick={() => setIsOpen(true)}
          >
            {icon ? (
              <img src={icon} alt="Icon" className='w-12 h-12 object-contain'/>
            ) : (
              <LuImage />
            )}
          </div>
          <p className='text-xs mt-2 text-center text-gray-600 select-none'>
            {icon ? "Change Icon" : "Pick Icon"}
          </p>
        </div>
      </div>
      {/* Emoji picker popup */}
      {isOpen && (
        <div className='relative z-20'>
          <button
            className='w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-full absolute -top-2 -right-2 z-30 cursor-pointer'
            onClick={() => setIsOpen(false)}
          >
            <LuX />
          </button>
          <EmojiPicker
            open={isOpen}
            onEmojiClick={(emoji) => {
              onSelect(emoji?.imageUrl || "");
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
