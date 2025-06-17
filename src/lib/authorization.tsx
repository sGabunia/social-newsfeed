import { useUser } from './auth';

type AuthorizationProps = {
  postAuthorId: number;
  children: React.ReactNode;
};

const useAuthorization = (postAuthorId: number) => {
  const user = useUser();
  if (!user.data) {
    return {
      checkAccess: false
    };
  }

  return {
    checkAccess: user.data.UserID === postAuthorId
  };
};

export const Authorization = ({ postAuthorId, children }: AuthorizationProps) => {
  const { checkAccess } = useAuthorization(postAuthorId);

  return <>{checkAccess ? children : null}</>;
};
