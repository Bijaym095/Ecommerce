import { SubmitHandler, useForm } from "react-hook-form";

import Container from "../../common/Container";

const NewsLetter: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<NewsletterFormValues>();

  const handleNewsletter: SubmitHandler<NewsletterFormValues> = (data) => {
    reset();
  };

  return (
    <section className="section-padding">
      <Container className="text-center">
        <h2 className="section-title">
          Subscribe to our Newsletter
          <br />
          <span className="text-base font-normal">
            Get timely updates from your favourite products.
          </span>
        </h2>

        <form onSubmit={handleSubmit(handleNewsletter)}>
          <input
            className="form-input"
            {...register("email")}
            type="email"
            placeholder="Get upto date with our newsletter"
            required
          />

          <button className="ml-2 bg-primary-500 px-4 py-2 font-medium text-white duration-300">
            Subscribe
          </button>
        </form>
      </Container>
    </section>
  );
};

export default NewsLetter;

type NewsletterFormValues = {
  email: string;
};
