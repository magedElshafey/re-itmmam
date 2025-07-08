import ContactInput from "../../../components/common/inputs/ContactInput";
import ContactTextArea from "../../../components/common/inputs/ContactTextArea";
import SendButton from "../../../components/common/buttons/SendButton";

const ContactUsForm = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Message</h3>
            
            <ContactInput 
                placeholder="Full Name"
                type="text"
                name="name"
                autoComplete="name"
            />
            
            <ContactInput 
                placeholder="Email Address"
                type="email"
                name="email"
                autoComplete="email"
            />
            
            <ContactInput 
                placeholder="Phone Number"
                type="tel"
                name="phone"
                autoComplete="tel"
            />

            <ContactInput 
                placeholder="Message title"
                type="text"
                name="message-title"
            />

            <ContactTextArea 
                placeholder="Message content"
                name="message-content"
                rows={4}
            />

            <div className="mt-4">
                <SendButton />
            </div>
        </form>
    );
}

export default ContactUsForm;