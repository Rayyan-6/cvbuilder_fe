type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[url('/cvbg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
