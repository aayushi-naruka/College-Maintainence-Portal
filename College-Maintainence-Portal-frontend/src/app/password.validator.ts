import { AbstractControl, ValidatorFn } from "@angular/forms";

export function passwordValidator () : ValidatorFn
{
    return (control : AbstractControl) : {[key:string]:boolean} | null => {

        const password = control.get('password') ;
        const confirmPassword = control.get('confirmPassword')

        if(password?.pristine || confirmPassword?.pristine)     // if any field is empty then this is will not show error msg till both field have some value
           return null;

        if (password && confirmPassword && (password.value != confirmPassword.value)) {
            control.get('confirmPassword')?.setErrors({'misMatch' :true})
            return {'misMatch' :true}
        }
        return null
    };



}
