// upload image to cloudinary

// upload images
// export const uploadImage = async (file) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
//     const cloudName = process.env.REACT_APP_CLOUD_NAME;
//     const url = `http://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  
//     const response = await fetch(url, {
//       method: "POST",
//       body: formData,
//     });
  
//     if (!response.ok) {
//       throw new Error("something went wrong");
//     }
  
//     const data = await response.json();
//     return data.secure_url;
//   };

// upload image to cloudinary

// upload images
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "hnvideo");
  // const cloudName = process.env.REACT_APP_CLOUD_NAME;
  const url = `https://api.cloudinary.com/v1_1/djozwrzq3/image/upload`;

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    console.error("Cloudinary upload failed:", errorResponse);
    throw new Error("something went wrong");
  }

  const data = await response.json();
  return data.secure_url;
};


// export const uploadImage = async (file) => {
//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
//   const cloudName = process.env.REACT_APP_CLOUD_NAME;
//   const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

//   const response = await fetch(url, {
//     method: "POST",
//     body: formData,
//   });

//   if (!response.ok) {
//     const errorResponse = await response.json();
//     console.error("Cloudinary upload failed:", errorResponse);
//     throw new Error("something went wrong");
//   }

//   const data = await response.json();
//   return data.secure_url;
// };
