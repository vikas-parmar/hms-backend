// Base Message Interface
export interface BaseMessage {
    dbConnect: string;
    clConnect: string;
    retry: string;
    success: string;
    failed: string;
    internalServerError: string;
    badRequest: string;
    notAllowed: string;
    dataNotFound: string;
    unwantedData: string;
    logout: string;
    logoutAll: string;
    pictureSuccess: string;
    invalidISOstring: string;
}

// Authentication Messages
export interface AuthMessage {
    reqAccessKey: string;
    invalidAccessKey: string;
    reqAccessToken: string;
    invalidAccessToken: string;
    invalidEmail: string;
    invalidPhone: string;
    invalidUsername: string;
    invalidValue: string;
    invalidType: string;
    notOldEnough: string;
    emailTaken: string;
    emailAvailable: string;
    phoneTaken: string;
    phoneAvailable: string;
    usernameTaken: string;
    usernameAvailable: string;
    invalidPassword: string;
    userInactive: string;
    userDeleted: string;
    invalidUser: string;
}

// Verification Messages
export interface VerificationMessage {
    emailNotRegistered: string;
    phoneNotRegistered: string;
    emailAlreadyVerified: string;
    phoneAlreadyVerified: string;
    emailVerified: string;
    phoneVerified: string;
    passwordNotMatched: string;
    differentPassword: string;
    invalidOldPassword: string;
    passwordChange: string;
}

// User Management Messages
export interface UserMessage {
    userInactive: string;
    userDeleted: string;
    invalidUser: string;
    userLogin: string;
    userDetail: string;
    userUpdate: string;
    userDisable: string;
    userRemove: string;
    emailUpdated: string;
    phoneUpdated: string;
}

// OTP and Verification Messages
export interface OTPMessage {
    otpLength: string;
    otpSent: string;
    otpMessageSent: string;
    otpMailSent: string;
    invalidOTP: string;
    otpExpire: string;
    otpSuccess: string;
    resetPasswordEmail: string;
    invalidVerificationToken: string;
    tokenExpire: string;
    reqVerification: string;
}

// Two-Factor Authentication Messages
export interface TwoFactorMessage {
    twoFactorOn: string;
    twoFactorOff: string;
}

// Privileges and Rights Messages
export interface PrivilegesMessage {
    reqPrivilege: string;
    reqRight: string;
}

// Validation and Error Messages
export interface ValidationErrorMessage {
    timeIsGreater: string;
    notOldEnoughFourteen: string;
}

// File and Data Validation Messages
export interface FileValidationMessage {
    invalidFileType: string;
    reqPicture: string;
    reqImage: string;
}

// Notification Messages
export interface NotificationMessage {
    pushNotificationOn: string;
    pushNotificationOff: string;
    emailNotificationOn: string;
    emailNotificationOff: string;
    messageNotificationOn: string;
    messageNotificationOff: string;
}

export interface Messages
    extends BaseMessage,
        AuthMessage,
        UserMessage,
        VerificationMessage,
        TwoFactorMessage,
        PrivilegesMessage,
        ValidationErrorMessage,
        OTPMessage,
        FileValidationMessage,
        NotificationMessage {}

// Response Status Types
// export enum ResponseStatus {
//     Success = 'success',
//     Error = 'error',
//     Warning = 'warning',
//     Info = 'info',
// }

export interface ResponseStatus {
    statusTrue: boolean;
    statusFalse: boolean;
}

// Response Code Types
export interface ResponseCode {
    success: number;
    forbidden: number; // Changed FRBDN to forbidden for clarity
    dataNotFound: number;
    badRequest: number;
    requestTimeout: number; // Changed reqTimeOut to requestTimeout
    unauthorized: number; // Changed unAuthorized to unauthorized
    paymentRequired: number;
    methodNotAllowed: number; // Changed badMethod to methodNotAllowed
    notAcceptable: number;
    preconditionFailed: number;
    unprocessableEntity: number;
    tooManyRequests: number;
    internalServerError: number;
    badGateway: number;
    serviceUnavailable: number;
    gatewayTimeout: number; // Changed gatewayTimeOut to gatewayTimeout
    expectationFailed: number;
}

// Registration Type Types
export interface RegistrationType {
    normal: string;
    google: string;
    facebook: string;
}

// Gender
export interface Gender {
    male: string;
    female: string;
    other: string;
}

// Account Level
export interface AccountLevel {
    superAdmin: number;
    admin: number;
    user: number;
}

// Privileges
export interface Privileges {
    userManagement: string;
    settingManagement: string;
    templateManagement: string;
    policyManagement: string;
    addressManagement: string;
    feedbackManagement: string;
    catalogueManagement: string;
}

// Rights
export interface Rights {
    read: string;
    write: string;
    delete: string;
}

// Template Types
export interface TemplateTypes {
    email: string;
    message: string;
    notification: string;
}

// Template Titles
export interface TemplateTitles {
    otp: string;
    resetPassword: string;
    credential: string;
}

// Time Format
export interface TimeFormat {
    twelveHour: string;
    twentyFourHour: string;
}

// Date Format
export interface DateFormat {
    dayMonthYear: string;
    monthDayYear: string;
    yearMonthDay: string;
}

// Week Day
export interface WeekDay {
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
}

export interface DeviceType {
    android: string;
    ios: string;
    web: string;
}

export interface Constraints {
    primary: string;
    secondary: string;
}

export interface AddressTypes {
    home: string;
    work: string;
    warehouse: string;
    other: string;
}
