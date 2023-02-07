import { Input } from "@material-tailwind/react";


export function Forms() {
    return (
        <div>
            <div></div>
            <div></div>
            <form>
                <Inpu variant="standard" label="Standard" />
                <Input variant="standard" label="Standard" />
                <Input variant="standard" label="Standard" />
                <Input variant="standard" label="Standard" />
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
