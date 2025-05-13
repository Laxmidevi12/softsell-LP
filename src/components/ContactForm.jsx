
const ContactForm = () => (
  <section id="contact" className="py-16 px-4 bg-gray-200 dark:bg-gray-800">
    <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
    <form className="max-w-xl mx-auto grid gap-4">
      <input className="p-2 rounded" type="text" placeholder="Name" required />
      <input className="p-2 rounded" type="email" placeholder="Email" required />
      <input className="p-2 rounded" type="text" placeholder="Company" required />
      <select className="p-2 rounded" required>
        <option>License Type</option>
        <option>Microsoft</option>
        <option>Adobe</option>
        <option>Autodesk</option>
      </select>
      <textarea className="p-2 rounded" placeholder="Message" rows="4" required></textarea>
      <button className="p-2 bg-blue-600 text-white rounded" type="submit">Submit</button>
    </form>
  </section>
)
export default ContactForm
