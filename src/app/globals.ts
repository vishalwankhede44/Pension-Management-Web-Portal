export var auth: {token?: string}= {}
export var authCookieName: string = 'authToken'
export var loginSessionTimeInDays:number = 1/48
export var popup:{msg?: string,type?:string} = {}
export var pensionDetails: {
    aadhaarNumber?: number,
    pensionAmount?: number,
    serviceCharge?: number
} = {}
export class Methods{
    constructor() { }

    public static getPopUpMessage():string{
        var msg = popup.msg ? popup.msg : ''; 
        popup.msg = '';
        return msg;
    }

    public static getPopUpMessageType():string{
        var type = popup.type ? popup.type : ''; 
        popup.type = '';
        return type;
    }

    public static isPopupAvailable():boolean{
        return popup.msg ? true:false;
    }

    public static isValidAadhaarNumber(aadhaar:number):boolean{
        return aadhaar!=null && aadhaar.toString().length == 12;    
    }

    public static validateText(text:string):boolean{
        return text.length >2;
    }
}
