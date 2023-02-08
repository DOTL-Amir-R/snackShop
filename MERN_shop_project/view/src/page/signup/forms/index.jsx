import { Input } from "@material-tailwind/react";


export function Forms() {
    return (
        <div className="flex flex-col width-66-percent">
            <div className="text-2xl font-medium">tell us about you…</div>
            <div>Let’s set up your account, so you can tailor your preferences and we can send you the perfect box!</div>
            <form>
                
                <Input variant="outlined"  color="red" label="first name" />
                <Input variant="outlined" label="last name" />
                <Input variant="outlined" label="email address" />
                <Input variant="outlined" label="password (min 6 characters)" />
            </form>

            <div>do you have any allergies?</div>
            <div>
                <div>No</div>
                <div>Yes</div>
            </div>

            <div>more info</div>
            <button>Continue</button>
            <div>
                Receive exclusive offers, delicious rewards and brand new snack
                launches to your email inbox. Please read our Privacy Notice to
                understand how we use your personal data. By clicking ‘continue’
                you are confirming that you are over 16 years old.
            </div>
        </div>
    );
}
