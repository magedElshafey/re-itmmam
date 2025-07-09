import ContactInput from "../../../components/common/inputs/ContactInput";
import ContactTextArea from "../../../components/common/inputs/ContactTextArea";
import SendButton from "../../../components/common/buttons/SendButton";
import { useState } from "react";
import { ContactUsPayload } from "../types/contact.types";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { Axios } from "../../../services/api/Axios";
import { FiCommand } from "react-icons/fi";

const initialState = {
    email: "",
    message: "",
    name: "",
    phone: "",
    subject: ""
}

const ContactUsForm = () => {
    const {t} = useTranslation();

    const [formState, setFormState] = useState<ContactUsPayload>(initialState);
    const [errors, setErrors] = useState<ContactUsPayload>(initialState);

    function handleChange(key: keyof ContactUsPayload, value: ContactUsPayload[typeof key]) {
        setErrors(old => ({...old, [key]: ""}));
        setFormState(old => ({...old, [key]: value}));
    }

    const {
        mutate,
        isPending
    } = useMutation({
        mutationKey: ["contact-us", "form"],
        mutationFn: async (data: ContactUsPayload) => {
            return await Axios.post("/contacts", data);
        },
        onSuccess: (response: any) => {
            toast.success(response.data.message);
            setFormState({...initialState});
        }
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const errors: Partial<ContactUsPayload> = {};

        if(!formState.email) {
            errors.email = t("email field is required")
        } else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formState.email)) {
            errors.email = t("email is invalid")
        }

        if(!formState.name) errors.name = t("name field is required");
        if(!formState.subject) errors.subject = t("message field is required");
        if(!formState.phone) errors.phone = t("phone field is required");
        if(!formState.message) errors.message = t("message field is required");

        if(Object.keys(errors).length) {
            toast.error(t("all fields are required"));
            setErrors(old => ({
                ...old,
                ...errors
            }));
            return;
        }

        mutate(formState);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Message</h3>
            
            <ContactInput 
                placeholder="Full Name"
                type="text"
                name="name"
                autoComplete="name"
                value={formState.name}
                onChange={(e) => handleChange("name", e.target.value)}
                error={errors.name}
            />
            
            <ContactInput 
                placeholder="Email Address"
                type="text"
                name="email"
                autoComplete="email"
                value={formState.email}
                onChange={(e) => handleChange("email", e.target.value)}
                error={errors.email}
            />
            
            <ContactInput 
                placeholder="Phone Number"
                type="tel"
                name="phone"
                autoComplete="tel"
                value={formState.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                error={errors.phone}
            />

            <ContactInput 
                placeholder="Message title"
                type="text"
                name="message-title"
                value={formState.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                error={errors.subject}
            />

            <ContactTextArea 
                placeholder="Message content"
                name="message-content"
                rows={4}
                value={formState.message}
                onChange={(e) => handleChange("message", e.target.value)}
                error={errors.message}
            />

            <div className="mt-4">
                {
                    isPending ? 
                    <FiCommand className="animate-spin text-mainColor" />
                    :
                    <SendButton />
                }
            </div>
        </form>
    );
}

export default ContactUsForm;