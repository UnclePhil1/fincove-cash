// "use client";
// import React, { useState } from 'react';
// import { UploadButton } from "../../utils/uploadthing";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
 
// const profileUploader = () => {
//   const [imageurl, setImageurl] = useState('');
//   return (
//     <div className="">
//       <UploadButton
//         endpoint="imageUploader"
//         onClientUploadComplete={(res) => {
//           console.log("Files: ", res);
//           toast.success('Upload Succesful!');
//           setImageurl(res[0].url);
//         }}
//         onUploadError={(error) => {
//           toast.error('Upload UnSuccesful!')

//         }}
//       />
//       {imageurl.length ? <div>
//         <Image src={imageurl}
//         alt="Profile"
//         width={700}
//         height={300}
//         className="w-20 h-20"
//         />
//       </div> : null}
//       <ToastContainer />
//     </div>
//   );
// }

// export default profileUploader;