'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { MdEye, MdEyeOff } from 'react-icons/md';


const TextField = ({ label, name, type, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { register } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

const handleTogglePasswordVisibility = () => {
  setPasswordVisible(!passwordVisible);
};

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

//   const placeholderStyle = {
//     position: 'absolute',
//     top: isFocused ? '0px' : '17px',
//     padding: isFocused ? '0 3px' : '0',
//     left: isFocused ? '6px' : '17px',
//     fontSize: isFocused ? '12px' : '16px',
//     backgroundColor: isFocused ? '#fff' : 'transparent',
//     color: isFocused ? '#888' : '#ccc',
//     transition: 'all 0.2s ease-in-out',
//   };

  return (
    <div className="text-field-container relative pt-2 w-[100%]">
        {type === 'password' && (
        <Image
          src={passwordVisible ? MdEyeOff : MdEye}
          alt="Toggle password visibility"
          className="eye-icon absolute right-5 top-3 cursor-pointer"
          onClick={handleTogglePasswordVisibility}
        />
      )}
      <input
        {...register(name)}
        type={type}
        placeholder={label}
        className="text-field py-2 px-4 border border-darkgray rounded-md focus:outline-primary outline-darkgray w-[100%]"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
};

export default TextField;
