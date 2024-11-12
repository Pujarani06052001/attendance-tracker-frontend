import React from 'react';

const AttendanceHelpPage = () => {
  return (
    <div className="bg-[#F0F0F0] flex items-center justify-center h-[800px]">
      <div className="flex max-w-6xl ml-[-491px]">
        
        {/* Left Side - Text Section */}
        <div className="flex flex-col w-1/2 p-8 mt-[35px] mr-[241px] xl:ml-[131px]">
          <h1 className="text-4xl font-bold mb-4 h-[30px] text-gray-500">You're In Good Hands,</h1>
          <h1 className="text-[50px] text-[#1C8DCE] w-[509px] mt-[10px]">Attendance Tracking Made Easy</h1>
          <p className="text-[20px] mb-4 text-black w-[700px] h-[48px] mt-[20px]">
            Need Help With Tracking Attendance? You're Not Alone. We're Here To Assist!
          </p>
          <p className="text-[20px] mb-4 text-black w-[750px] h-[72px]">
            We understand that managing attendance can be tricky, but we're here to make it simple and seamless for you.
            If you're having trouble or need help understanding the features, feel free to reach out. Our team is ready to assist.
          </p>

          {/* Live Chat Support Box */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-[443px] h-[337px]">
            <img
              src="https://cdn-icons-png.flaticon.com/128/566/566718.png"
              alt="Support Agents"
              width={100}
              height={100}
              objectFit="cover"
              className="ml-[139px]"
            />
            <div className="flex items-center mb-4">
              <span className="ml-4 text-gray-700">
                Live chat support allows you to quickly get in touch with an expert who can help you resolve any attendance-related issues.
              </span>
            </div>
            <button className="bg-[#1C8DCE] text-white px-4 py-2 rounded-lg w-[353px] h-[49px]">
              Start Live Chat
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <img
          src="https://media.istockphoto.com/id/1167651240/vector/attendance-concept-businessman-holding-document-vector-flat-design-man-hold-document.jpg?s=612x612&w=0&k=20&c=DHr2ZaBkHuSkcZOcrt3djH3N0SdlRZS74gtbzQzPLT0="
          alt="Attendance Tracker"
          className="h-[700px] w-[700px] mt-[53px] ml-[135px] xl:ml-[-7px] mb-[50px]"
        />
      </div>
    </div>
  );
};

export default AttendanceHelpPage;
