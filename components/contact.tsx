import exp from "constants";
import Image from "next/image";

export default function Contact() {
  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "ricardoribeiro.dk@gmail.com",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+1 (555) 000-000",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      contact: "Mountain View, California, United State.",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-24 bg-stone-800">
      <div className="relative px-4 md:px-40 grid sm:grid-cols-1 md:grid-cols-12 grid-rows-1 gap-20 flex-wrap">
        <div className="sm:col-span-1 md:col-span-6 sm:col-start-1 md:col-start-1">
          <h3 className="text-amber-600 text-base font-notosans">Contact</h3>
          <p className="text-gray-100 text-3xl font-light sm:text-3xl pt-5 pb-10">Let us know how we can help</p>
          <p className="text-gray-300 text-base font-normal leading-normal font-notosans">
            We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .
          </p>
          <div>
            <ul className="mt-6 gap-x-10 gap-y-6 items-center font-notosans">
              {contactMethods.map((item, idx) => (
                <li key={idx} className="flex items-center gap-x-3 mb-4">
                  <div className="flex-none text-amber-600">{item.icon}</div>
                  <p>{item.contact}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sm:col-span-1 md:col-span-6 sm:col-start-1 md:col-start-7 font-notosans">
          <form className="space-y-5">
            <div>
              <label className="text-sm text-gray-300 pb-2 hidden">Full name</label>
              <input placeholder="Your full name" type="text" required className="placeholder-gray-300 w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-stone-600 focus:border-amber-600 shadow-sm border-gray-100" />
            </div>
            <div>
              <label className="text-sm text-gray-300 pb-2 hidden">Email</label>
              <input placeholder="E-mail address" type="email" required className="placeholder-gray-300 w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-stone-600 focus:border-amber-600 shadow-sm border-gray-100" />
            </div>
            <div>
              <label className="text-sm text-gray-300 pb-2 hidden">Company</label>
              <input placeholder="Company name" type="text" required className="placeholder-gray-300 w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border border-stone-600 focus:border-amber-600 shadow-sm border-gray-100" />
            </div>
            <div>
              <label className="text-sm text-gray-300 pb-2 hidden">Message</label>
              <textarea
                placeholder="Your message"
                required
                className="placeholder-gray-300 w-full mt-2 h-36 px-3 py-2 resize-none appearance-none text-white bg-transparent outline-none border border-stone-600 focus:border-amber-600 shadow-sm border-gray-100"
              ></textarea>
            </div>

            <button className="w-full px-4 py-4 text-white font-lg bg-amber-600 hover:bg-amber-800 active:bg-amber-600 duration-150">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

// onSubmit={(e) => e.preventDefault()}

// This is a placeholder for the contact form. You can add your form fields here.
// For example, you might want to include fields for name, email, message, etc.
// You can use a library like Formik or React Hook Form to manage form state and validation.
// You can also add a submit button to handle form submission.
// Make sure to style the form according to your design preferences.
// You can also add validation to ensure that the user provides the necessary information before submitting the form.
// If you want to handle form submission, you can use a function to send the data to your backend or an API endpoint.
// You can also add error handling to display messages if the form submission fails.
// If you want to include a success message after form submission, you can manage the state to show the message conditionally.
// You can also add a loading state to indicate that the form is being submitted.
// You can also include a thank you message or redirect the user to a different page after successful submission.
// You can also add a reset button to clear the form fields after submission.
// If you want to include a captcha for spam prevention, you can integrate a service like Google reCAPTCHA.
// You can also add a privacy policy link to inform users about how their data will be used.
// If you want to include a phone number or address, you can add additional fields for that information.
// You can also include social media links or a newsletter subscription option.
// If you want to include a map, you can use a library like react-google-maps or react-leaflet to display a map of your location.
// You can also add a section for frequently asked questions (FAQs) to address common inquiries.
// If you want to include a contact email, you can add a field for users to enter their email address.
// You can also add a file upload field if you want users to attach files or documents.
// If you want to include a dropdown for selecting a subject or category, you can add a select field.
// You can also add a date picker for users to select a date for their inquiry or appointment
// If you want to include a time picker, you can add a field for users to select a time.
// You can also add a confirmation checkbox to ensure that users agree to your terms and conditions before submitting the form.
// You can also include a progress bar to indicate the form completion status.
// If you want to include a feedback section, you can add a field for users to provide their feedback or suggestions.
// You can also add a section for users to provide their preferred contact method (email, phone, etc.).
// If you want to include a section for users to specify their preferred contact time, you can add a field for that information.
// You can also add a section for users to provide additional comments or questions.
// If you want to include a section for users to specify their preferred language, you can add
// a dropdown field for language selection.
// You can also add a section for users to provide their company or organization name.
// If you want to include a section for users to specify their job title or position, you can add a field for that information.
// You can also add a section for users to provide their website or social media links.
