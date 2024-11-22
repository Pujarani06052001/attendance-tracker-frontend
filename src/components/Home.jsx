import React from 'react';
import './Home.css'; 
// import Slider from './components/Slider';
// import AttendanceHelpPage from './components/AttandanceHelpPage';


function Home() {
    return (
        <div className="home-container">
            <div className="content">
                <div className="text-section">
                    <h1 className="home-title">Attendance Tracker</h1>
                    <p className="home-description">Welcome to your Attendance Tracker app! Manage and track attendance with ease.</p>
                </div>
                <img 
                    className="home-image" 
                    src='https://media.istockphoto.com/id/1167651240/vector/attendance-concept-businessman-holding-document-vector-flat-design-man-hold-document.jpg?s=612x612&w=0&k=20&c=DHr2ZaBkHuSkcZOcrt3djH3N0SdlRZS74gtbzQzPLT0=' 
                    alt="Attendance Tracker"
                />
                {/* <Slider/>
                <AttendanceHelpPage/> */}

                
            </div>
            
        </div>
    );
}

export default Home;
