import { Input } from "@material-tailwind/react";
import SnackBoxIcon from 'assets/img/snackBoxIcon.jpg'

export function DetailBox() {
    return (
        <div className="flex flex-col">
            <div>
                <img src="SnackBoxIcon"/>
            </div>
            <div></div>
            <div></div>
            <Input/>
        </div>
    );
}
