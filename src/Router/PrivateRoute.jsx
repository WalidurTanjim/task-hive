import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
           
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-gray-300 rounded-full animate-spin-slow border-t-transparent"></div>
                    <div className="absolute inset-2 border-4 border-blue-500 rounded-full animate-spin-fast border-t-transparent"></div>
                    <div className="absolute inset-4 border-4 border-green-500 rounded-full animate-spin-reverse border-t-transparent"></div>
                </div>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
