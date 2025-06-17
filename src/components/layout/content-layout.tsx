import style from './content-layout.module.css';

type ContentLayoutProps = {
  children?: React.ReactNode;
};

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <div className={style.root}>{children}</div>;
};
