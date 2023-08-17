export declare const ValidateEmail: (email: string) => boolean;
export declare const ValidatePhone: (phone: string) => boolean;
export declare const ValidateURL: (str: string) => boolean;
export declare const ValidateYoutubeURL: (url: string) => string | false;
export declare const ValiDateInvoice: (value: String) => boolean;
declare const Validate: {
    email: (email: string) => boolean;
    phone: (phone: string) => boolean;
    url: (str: string) => boolean;
    youtubeID: (url: string) => string | false;
    invoice: (value: String) => boolean;
};
export default Validate;
