import PreloaderImage from "../../assets/images/preloader.gif";
import Container from "../../common/Container";
import useAuthContext from "../../hooks/useAuthContext";

const PreLoader: React.FC<PreLoaderProps> = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const { currentUser } = useAuthContext();

  if (isLoggedIn && !currentUser) {
    return (
      <div>
        <Container className="grid h-screen place-items-center">
          <img src={PreloaderImage} alt="Loading..." />
        </Container>
      </div>
    );
  }

  return <>{children}</>;
};

export default PreLoader;

type PreLoaderProps = {
  children?: React.ReactNode;
};
