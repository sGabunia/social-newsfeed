import { useUser } from './auth';

type AuthorizationProps = {
  authorId: number;
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

export const Authorization = ({ authorId, children }: AuthorizationProps) => {
  const { checkAccess } = useAuthorization(authorId);

  return <>{checkAccess ? children : null}</>;
};
