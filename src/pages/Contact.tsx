export default function Contact() {
  return (
    <section className="section-light">
      <div className="container max-w-3xl">
        <h2 className="mb-6 text-center">Contact Us</h2>

        <form className="grid gap-6">
          <input className="border border-border p-4 rounded-md" placeholder="Name" />
          <input className="border border-border p-4 rounded-md" placeholder="Email" />
          <textarea className="border border-border p-4 rounded-md" rows={5} placeholder="Message" />
          <button className="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
