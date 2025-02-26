import React from 'react';
import { CheckCircle, TrendingUp, Cloud, Clock } from 'lucide-react';

const KeyFeatures = () => {
    const features = [
        {
            id: 1,
            title: "Real-Time Task Updates",
            description: "Stay updated with real-time task synchronization across all your devices.",
            icon: <Cloud className="w-12 h-12 text-cyan-500" />
        },
        {
            id: 2,
            title: "Intelligent Task Prioritization",
            description: "Automatically prioritize tasks based on deadlines and dependencies.",
            icon: <TrendingUp className="w-12 h-12 text-green-500" />
        },
        {
            id: 3,
            title: "Seamless Collaboration",
            description: "Collaborate with your team using shared task boards and comments.",
            icon: <CheckCircle className="w-12 h-12 text-purple-500" />
        },
        {
            id: 4,
            title: "Time Management Insights",
            description: "Get detailed time-tracking and performance analytics for better productivity.",
            icon: <Clock className="w-12 h-12 text-yellow-500" />
        }
    ];

    return (
        <section className="w-11/12 mx-auto py-16 text-cyan-400 mt-12">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-8">
                    Key Features of Our Platform
                </h2>
                <p className="text-lg text-center mb-12 text-blue-400">
                    Discover how our advanced task management system can help you streamline your workflow and boost productivity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
                        >
                            <div className="flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-center">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
