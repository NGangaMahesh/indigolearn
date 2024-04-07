import React, { Component } from 'react'
import Popup from 'reactjs-popup';
import { FaSmile } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";
import { MdMenuBook, MdOutlineOndemandVideo} from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { TbUsersGroup } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";
import { LuCalendarClock } from "react-icons/lu";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { TiTickOutline } from "react-icons/ti";

class Home extends Component {
    state = {
        phNumber: '',
        userEmail: '',
        userOccep: ''
    }

    showPopup = (event) =>{
        event.preventDefault();
    }
    onNumber = (event) => {
        this.setState({phNumber : event.target.value})
    }

    onEmail = (event) => {
        this.setState({userEmail : event.target.value})
    }

    dispMobile = () => {
        const {phNumber} = this.state;
        
        return <input type='number' placeholder="Phone Number*" value={phNumber} onChange={this.onNumber} className='w-full h-10 pl-3 text-base border-2 outline-none m-1 remove-arrow' />
    }

    dispEmail = () => {
        const {userEmail} = this.state;
        
        return <input type="email" placeholder='Email Id' value={userEmail} onChange={this.onEmail} className='w-full h-10 pl-3 text-base border-2 focus:outline-none m-1'  />
    }

    

    render() {
        return (
            <div>
                <div className='bg-slate-100 p-10 md:flex'>
                    <div className='md:w-2/4 '>
                        <h2 className="font-bold text-3xl">Become ACCA in 18 months</h2>
                        <p className='mt-3'>Acquire globally recognized accountancy qualification, ACCA (also called as Global CA), and get placed in top MNCs & Big4s.</p>
                        <ul className='flex  flex-wrap text-indigo-900 mt-6'>
                            <li className='flex items-center shadow-lg p-3 bg-white rounded-md px-3 mr-6 mb-3'>
                                <FaSmile className='text-3xl mr-4' />
                                <div>
                                    <p className='font-bold'>3,13,209</p>
                                    <p>Registered Users</p>
                                </div>
                            </li>
        
                            <li className='flex items-center shadow-lg p-3 bg-white rounded-md px-3 mr-6 mb-3'>
                            <MdMenuBook className='text-3xl mr-4'/>
                                <div>
                                    <p className='font-bold'>96,103</p>
                                    <p className='font-bold'>Courses Enrolled</p>
                                </div>
                            </li>
        
                            <li className='flex items-center shadow-lg p-3 bg-white rounded-md px-3 mr-6 mb-3'>
                                <MdOutlineOndemandVideo className='text-3xl mr-4'/>
                                <div>
                                    <p className='font-bold'>4,65,95,769</p>
                                    <p>Minutes Watched</p>
                                </div>
                            </li>
        
                            <li className='flex items-center shadow-lg p-3 bg-white rounded-md px-3 mb-3'>
                                <PiUsersFill className='text-3xl mr-4'/>
                                <div>
                                    <p className='font-bold'>8 Experts</p>
                                    <p>Faculty</p>
                                </div>
                            </li>
                        </ul>
        
                        <div className='flex mt-10'>
                            <button className='bg-indigo-900 p-2 text-white font-semibold rounded-md mr-6'>Download Brochure</button>
                            <button className='bg-red-500 p-2 text-white font-medium rounded-md flex items-center justify-center'>SILVER LEARNING <br/> PARTNER <span className='border border-white ml-2 p-1'>ACCA</span></button>
                        </div>
                    </div>
        
                    <div>
                        <form className='bg-white border-t-2 mt-3 p-8 text-center border-indigo-900 shadow-lg rounded-md md:w-3/4 ml-auto' onSubmit={this.showPopup}>
                            <p>Aspiring to be an ACCA? Get in touch with us!</p>
                            {this.dispMobile()}
                            {this.dispEmail()}
                            <select className='w-full h-10 pl-3 text-base border-2 focus:outline-none m-1'>
                                <option value=''>Current Occuption</option>
                                <option value="student">Student</option>
                                <option value="Employe">Employee</option>
                                <option value="Teacher">Teacher</option>
                            </select>
                            <Popup
                            trigger={<button className='bg-indigo-900 w-full text-white font-bold p-2 rounded-md mt-6 m-1' onClick='submit'>Request Call Back</button>}
                            modal
                            nested
                        >
                            {close => (
                            <div className="modal">
                                <button className="close text-red-600 font-bold" onClick={close}>
                                &times;
                                </button>
                                <div className="content">
                                {' '}
                                    <div className='rounded-full border-green-600 w-52 border-4 flex justify-center'>
                                        <TiTickOutline className='text-green-700 text-8xl'/>
                                    </div>
                                    
                                    <p className='text-4xl text-green-500'>We will get you back soon!</p>
                                </div>
                            </div>
                            )}
                        </Popup>
                        </form>
                    </div>
                </div>
        
                <div className='text-center'>
                    <h2 className='text-indigo-900 font-bold text-3xl mt-4'>Why Choose Us?<br />
                        <span className='border-t-2 border-indigo-900 w-8 h-1 contents'></span>
                    </h2>
        
                    <ul className='mx-8 md:flex justify-center mt-4 mx-0 text-center w-full'>
                        <li className='mb-5 bg-slate-100 shadow-lg border rounded-md flex flex-col items-center h-64 w-80 p-4 mr-4'>
                            <GrUserExpert className='text-5xl font-extrabold text-indigo-900'/>
                            <p className='text-indigo-900 font-bold mt-4'>Expert Faculty</p>
                            <p className='mt-8'>Our qualified Faculty with significant practical experience guide students every step of the way</p>
                        </li>
        
                        <li className='mb-5 bg-slate-100 shadow-lg border rounded-md flex flex-col items-center h-64 w-80 p-4 mr-4'>
                            <TbUsersGroup className='text-5xl font-extrabold text-indigo-900'/>
                            <p className='text-indigo-900 font-bold mt-4'>Complete Success Package</p>
                            <p className='mt-8'>Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.</p>
                        </li>
        
                        <li className='mb-5 bg-slate-100 shadow-lg border rounded-md flex flex-col items-center h-64 w-80 p-4'>
                            <SiAdguard className='text-5xl font-extrabold text-indigo-900'/>
                            <p className='text-indigo-900 font-bold mt-4'>Placements</p>
                            <p className='mt-8'>Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.</p>
                        </li>
                    </ul>
        
                    <ul className='flex w-full px-6 mt-9'>
                        <li className='flex justify-center items-center w-1/4 mr-3 border-t-2 border-indigo-900 shadow-md rounded-md p-2 text-indigo-900'> 
                        <MdOutlineMenuBook className='text-4xl mr-4'/>
                            <div>
                                <p className='font-bold'>Levels</p>
                                <p className='font-semibold'>Three (13 papers)</p>
                            </div>
                        </li>
        
                        <li className='flex justify-center items-center w-1/4 mr-3 border-t-2 border-indigo-900 shadow-md rounded-md text-indigo-900'>
                        <LuCalendarClock className='text-4xl mr-4'/>
                            <div>
                                <p className='font-bold'>Duration</p>
                                <p className='font-semibold'>6-30 months</p>
                            </div>
                        </li>
        
                        <li className='flex justify-center items-center w-1/4 mr-3 border-t-2 border-indigo-900 shadow-md rounded-md text-indigo-900'>
                        <LuListTodo className='text-4xl mr-4'/>
                            <div>
                                <p className='font-bold'>Exams</p>
                                <p className='font-semibold'>Quarterly (Online)</p>
                            </div>
                        </li>
        
                        <li className='flex justify-center items-center w-1/4 mr-3 border-t-2 border-indigo-900 shadow-md rounded-md text-indigo-900'>
                        <FaRegCalendarCheck className='text-4xl mr-4'/>
                            <div>
                                <p className='font-bold'>Exemptions</p>
                                <p className='font-semibold'>Upto 9 papers</p>
                            </div>
                        </li>
                    </ul>
                </div>
        
                <div className='text-center mt-10'>
                <h2 className='text-indigo-900 font-bold text-3xl mt-4'>What will you Learn in ACCA?<br />
                        <span className='border-t-2 border-indigo-900 w-8 h-1 contents'></span>
                </h2>
        
                <div className='px-8 md:flex justify-center items-center mt-8'>
                    <div className='mb-5 bg-slate-100 h-80 w- flex flex-col mr-3 rounded-md overflow-hidden'>
                        <div className='bg-indigo-900 text-white font-semibold p-3'>Knowledge Level</div>
                        <ul className='list-disc px-10 mt-4 text-left'>
                            <li>Business and Technology (BT)</li>
                            <li>Management Accounting (MA)</li>
                            <li>Financial Accounting (FA)</li>
                        </ul>
                        <div className='bg-indigo-900 text-white font-semibold p-1 mt-auto'>3 papers</div>
                    </div>
        
                    <div className='mb-5 bg-slate-100 h-80 flex flex-col mr-3 rounded-md overflow-hidden'>
                        <div className='bg-indigo-900 text-white font-semibold p-3'>Skill Level</div>
                        <ul className='list-disc px-10 mt-4 text-left'>
                            <li>Corporate and Business Law (LW)</li>
                            <li>Performance Management (PM)</li>
                            <li>Taxation (TX)</li>
                            <li>Financial Reporting (FR)</li>
                            <li>Audit and Assurance (AA)</li>
                            <li>Financial Management (FM)</li>
                        </ul>
                        <div className='bg-indigo-900 text-white font-semibold p-1 mt-auto'>6 papers</div>
                    </div>
        
                    <div className='mb-5 h-auto bg-slate-100 md:h-80 flex flex-col mr-3 rounded-md overflow-hidden'>
                        <div className='bg-indigo-900 text-white font-semibold p-3'>Professional Level</div>
                        <p className='text-left text-indigo-900 font-bold px-10 text-lg'>Compulsory</p>
                        <ul className='list-disc px-10 mt-2 text-left'>
                            <li>SBL - Strategic Business Leader</li>
                            <li>SBR - Strategic Business Reporting</li>
                        </ul>
                        <p className='text-left text-indigo-900 font-bold px-10 text-lg mt-4'>Two out of the following</p>
                        <ul className='list-disc px-10 mt-2 text-left'>
                            <li>Advanced Financial Management (AFM)</li>
                            <li>Advanced Performance Management (APM)</li>
                            <li>Advanced Taxation (ATX)</li>
                            <li>Advanced Audit and Assurance (AAA)</li>
                        </ul>
                        <div className='bg-indigo-900 text-white font-semibold p-1 mt-auto'>4 papers</div>
                    </div>
                </div>
                </div>
        
                <div className='bg-red-100 mt-8 p-8'>
                <h2 className='text-indigo-900 font-bold text-3xl  text-center'>100% Placement Assistance<br />
                </h2>
        
                <h3 className='font-bold text-lg'>Resume Building</h3>
                <p>1FIN provides professional guidance to help you create an effective resume to help you create a lasting impression.</p>
        
                <h3 className='font-bold text-lg mt-4'>Career Counselling</h3>
                <p>We provide career counselling to conducting mock interviews and aptitude tests – we will assist you at every step, all the way, we make you job ready</p>
        
                <h3 className='font-bold text-lg mt-4'>Jobs</h3>
                <p>We will give you an edge over others with our direct corporate affiliations which will ensure that you are placed right.</p>
                </div>
        
                <div className='bg-slate-100 p-10 mt-8 md:flex '>
                    <div className='md:w-2/4 '>
                        <h2 className="font-bold text-3xl">Kick off your ACCA Prep journey with IndigiLearn</h2>
                        <p className='mt-3'>Sign in and get instant access to our FREE Courses</p>
                        <button className='bg-red-500 p-2 text-white font-medium rounded-md flex items-center justify-center mt-8'>SILVER LEARNING <br/> PARTNER <span className='border border-white ml-2 p-1'>ACCA</span></button>
                    </div>
        
                    <div>
                        <form className='mt-5 bg-white border-t-2 p-8 text-center border-indigo-900 shadow-lg rounded-md  ml-auto md:w-3/4' onSubmit={this.showPopup}>
                            <p>Aspiring to be an ACCA? Get in touch with us!</p>
                            {this.dispMobile()}
                            {this.dispEmail()}
                            <select className='w-full h-10 pl-3 text-base border-2 focus:outline-none m-1'>
                                <option value=''>Current Occuption</option>
                                <option value="student">Student</option>
                                <option value="Employe">Employee</option>
                                <option value="Teacher">Teacher</option>
                            </select>
                            <Popup
                            trigger={<button className='bg-indigo-900 w-full text-white font-bold p-2 rounded-md mt-6 m-1' onClick='submit'>Request Call Back</button>}
                            modal
                            nested
                        >
                            {close => (
                            <div className="modal">
                                <button className="close text-red-600 font-bold" onClick={close}>
                                &times;
                                </button>
                                <div className="content">
                                {' '}
                                    <div className='rounded-full border-green-600 w-52 border-4 flex justify-center'>
                                        <TiTickOutline className='text-green-700 text-8xl'/>
                                    </div>
                                    
                                    <p className='text-4xl text-green-500'>We will get you back soon!</p>
                                </div>
                            </div>
                            )}
                        </Popup>
                            
                        </form>
                    </div>
                </div>
            </div>
          )
    }
}

export default Home