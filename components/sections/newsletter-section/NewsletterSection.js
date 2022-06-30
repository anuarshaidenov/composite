const NewsletterSection = () => {
  return (
    <section>
      <div className="container">
        <h2>Don&apos;t miss our weekly updates about academics information</h2>

        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
