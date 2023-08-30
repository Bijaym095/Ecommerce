import { NavLink } from "react-router-dom";
import Container from "../common/Container";

const PageNotFound = () => {
  return (
    <section>
      <Container className="section-padding flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold text-primary-600">
            404 - Page not found
          </h2>

          <p className="mb-6">
            Sorry, the page you are looking for does not exist.
          </p>

          <NavLink className="text-end underline" to="/">
            Go to home
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default PageNotFound;
