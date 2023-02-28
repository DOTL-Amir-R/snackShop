import { ButtonGradiantOutLine } from "../../../components/shared/ButtonGradiantOutLine";
import { FloatInputSecond } from "../../../components/shared/FloatInputSecond";

export function Forms() {
    return(
        <div className="flex gap-12 flex-col width-58-percent container items-center">
            <FloatInputSecond label='name of product' type='text'/>
            <FloatInputSecond label='price of product' type='text'/>
            <FloatInputSecond label='size of product' type='text'/>
            <FloatInputSecond label='type of product' type='text'/>
            <FloatInputSecond label='picture of product' type='text'/>
            <FloatInputSecond label='company of product' type='text'/>
            <ButtonGradiantOutLine text='Submit'/>
        </div>
    )
}