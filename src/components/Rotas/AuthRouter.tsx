import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../../services/Firebase/FirebaseAuth";

type RouterProps = {
  children: React.ReactNode;
  isPrivate?: boolean;
};

export function AuthRouter({ children, isPrivate = true }: RouterProps) {
  const [user, loading] = useAuthState(auth);

  if (loading) return null;

  if (isPrivate && !user) {
    return <Navigate to="/login" />;
  } else if (!isPrivate && user) {
    return <Navigate to="/" />;
  } else if (!isPrivate && !user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
