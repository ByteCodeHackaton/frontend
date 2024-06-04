import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "~/shared/lib/react-redux/slices/authSlice";
import { useEffect } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token)
      navigate("/login", { state: { from: { location } }, replace: true });
  }, [token, location, navigate]);

  // if (isLoading) {
  //     return <PageLoader />;
  // }
  return <>{children}</>;
};
