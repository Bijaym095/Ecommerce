import { SubmitHandler, useForm } from "react-hook-form";

import Container from "../../common/Container";
import { Button } from "../../common/Button";

const NewsLetter: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<NewsletterFormValues>();

  const handleNewsletter: SubmitHandler<NewsletterFormValues> = (data) => {
    reset();
  };

  return (
    <section className="section-padding pb-12 md:pb-[5rem]">
      <Container className="text-center">
        <h2 className="section-title">
          Subscribe to our Newsletter
          <span className="block text-base font-normal">
            Get timely updates from your favourite products.
          </span>
        </h2>

        <form onSubmit={handleSubmit(handleNewsletter)}>
          <input
            className="form-input mb-2"
            {...register("email")}
            type="email"
            placeholder="Get upto date with our newsletter"
            required
          />

          <Button variant="primary" className="ml-4">
            Subscribe
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default NewsLetter;

type NewsletterFormValues = {
  email: string;
};
