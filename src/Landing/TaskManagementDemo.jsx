import React from 'react';
import demoScreenshot from '../assets/banner/19196978.jpg'; 
import { Link } from 'react-router-dom';

const TaskManagementDemo = () => {
    return (
        <section className="py-16 bg-gray-900 text-white mb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center gap-8">
                {/* Description Section */}
                <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 lg:pr-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
                        Discover Your New Task Management Hub
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                        Maximize your productivity with intuitive task management. Enjoy easy drag-and-drop features, instant task syncing, and multi-category tracking to keep your work organized. Start managing your tasks like never before!
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-300">
                        <li>Drag-and-drop task reordering</li>
                        <li>Real-time synchronization with database</li>
                        <li>Task status tracking in three categories: To-Do, In Progress, and Done</li>
                        <li>Fully responsive and optimized for mobile and desktop</li>
                    </ul>
                    <Link
                        to="/taskboard"
                        className="mt-8 inline-block bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-md hover:bg-green-600 transition-colors"
                    >
                        Try it Now
                    </Link>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 flex justify-center items-center">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src={demoScreenshot}
                            alt="Task Management Demo"
                            className="object-cover w-full h-auto max-h-[400px] transition-transform duration-500 ease-in-out transform hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaskManagementDemo;
