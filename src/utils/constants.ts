import {
    AccountLevel,
    AddressTypes,
    Constraints,
    DateFormat,
    DeviceType,
    Gender,
    Messages,
    Privileges,
    RegistrationType,
    ResponseCode,
    ResponseStatus,
    Rights,
    TemplateTitles,
    TemplateTypes,
    TimeFormat,
    WeekDay,
} from '@/types/constants';

const MESSAGES: Messages = {
    // Base Message Interface
    dbConnect: 'MONGODB::Connected to database.',
    clConnect: 'MONGODB::Connected to cluster.',
    retry: 'Kindly Re-try After 10 Seconds.',
    unwantedData: 'Unwanted data found.',
    invalidISOstring: 'Invalid ISO date string.',
    logout: 'Logout successfully.',
    logoutAll: 'Logout from all devices successfully.',
    pictureSuccess: 'Picture updated successfully.',

    //  Verification Messages
    emailNotRegistered: 'This email is not registered.',
    phoneNotRegistered: 'This phone number is not registered.',
    emailAlreadyVerified: 'This email address already verified.',
    phoneAlreadyVerified: 'This phone number already verified.',
    emailVerified: 'Email verified successfully.',
    phoneVerified: 'Phone verified successfully.',
    emailUpdated: 'Email address changed successfully.',
    phoneUpdated: 'Phone number changed successfully.',
    passwordNotMatched: 'The password confirmation does not match.',
    differentPassword: 'New password should be different from old password.',
    invalidOldPassword: 'Invalid old password.',
    passwordChange: 'Password changed successfully.',

    // Two-Factor Authentication Messages
    twoFactorOn: 'Two-factor authentication turned on successfully.',
    twoFactorOff: 'Two-factor authentication turned off successfully.',

    // Privileges and Rights Messages
    reqPrivilege: 'You do not have permission to access this route.',
    reqRight: 'You do not have necessary rights to access this route.',

    // Validation and Error Messages
    timeIsGreater: 'Time should be greater than current time.',
    notOldEnoughFourteen: 'You must be of age 14 years or above.',

    // OTP Messages
    otpLength: 'OTP length should be 6 digits.',
    otpSent:
        'A mail/message with 6 digit verification code is sent successfully.',
    otpMessageSent:
        'A message with 6 digit verification code is sent successfully.',
    otpMailSent: 'A mail with 6 digit verification code is sent successfully.',
    invalidOTP: 'Invalid OTP.',
    otpExpire:
        'The code has expired. Please re-send the verification code to try again.',
    otpSuccess: 'Code verified successfully.',

    // User Management Messages
    userLogin: 'User logged in successfully.',
    userDetail: 'User details get successfully.',
    userUpdate: 'User details updated successfully.',
    userDisable: 'Your Account deactivated successfully.',
    userRemove: 'Your Account deleted successfully.',
    userInactive: 'Your account is disabled.',
    userDeleted: 'Your account is suspended.',
    invalidUser: 'You are not a valid user.',

    // File and Data Validation Messages
    reqPicture: 'Picture is required.',
    reqImage: 'Image is required.',
    invalidFileType: 'Invalid file type.',

    // Notification Messages
    pushNotificationOn: 'Push notification turned on successfully.',
    pushNotificationOff: 'Push notification turned off successfully.',
    emailNotificationOn: 'Email notification turned on successfully.',
    emailNotificationOff: 'Email notification turned off successfully.',
    messageNotificationOn: 'Message notification turned on successfully.',
    messageNotificationOff: 'Message notification turned off successfully.',

    // Additional fields
    success: 'Success',
    failed: 'Failed',
    dataNotFound: 'Data not found.',
    internalServerError: 'Internal server error. Please try after some time.',
    badRequest: "Couldn't parse the specified URI.",
    notAllowed: 'Not allowed by CORS.',
    reqAccessKey: 'Access key is required.',
    invalidAccessKey: 'Invalid access key.',
    reqAccessToken: 'Access token is required.',
    invalidAccessToken: 'Invalid access token.',
    invalidEmail: 'Invalid email address.',
    invalidPhone: 'Invalid phone number.',
    invalidUsername: 'Invalid username.',
    invalidValue: 'Invalid value.',
    notOldEnough: 'You must be of age 18 years or above.',
    emailTaken: 'This email address already taken.',
    emailAvailable: 'This email address is available.',
    phoneTaken: 'This phone number already taken.',
    phoneAvailable: 'This phone number is available.',
    usernameTaken: 'This username already taken.',
    usernameAvailable: 'This username is available.',
    resetPasswordEmail: 'A mail with reset password link sent successfully.',
    invalidVerificationToken: 'Invalid verification token.',
    tokenExpire:
        'The token has expired. Please re-send the verification token to try again.',
    invalidType: 'The selected type is invalid.',
    invalidPassword: 'Invalid password',
    reqVerification: 'Kindly, verify your details and try again.',
};

// Response Status
const STATUS: ResponseStatus = {
    statusTrue: true,
    statusFalse: false,
};

// Response Code
const CODE: ResponseCode = {
    success: 200,
    forbidden: 403,
    dataNotFound: 404,
    badRequest: 400,
    requestTimeout: 408,
    unauthorized: 401,
    paymentRequired: 402,
    methodNotAllowed: 405,
    notAcceptable: 406,
    preconditionFailed: 412,
    unprocessableEntity: 422,
    tooManyRequests: 429,
    internalServerError: 500,
    badGateway: 502,
    serviceUnavailable: 503,
    gatewayTimeout: 504,
    expectationFailed: 417,
};

// Registration Type
const REGISTRATION_TYPE: RegistrationType = {
    normal: 'normal',
    google: 'google',
    facebook: 'facebook',
};

// Time Format
const TIME_FORMAT: TimeFormat = {
    twelveHour: '12hour',
    twentyFourHour: '24hour',
};

// Date Format
const DATE_FORMAT: DateFormat = {
    dayMonthYear: '31/12/2024',
    monthDayYear: '12/31/2024',
    yearMonthDay: '2024-12-31',
};

//Week Day
const WEEK_DAY: WeekDay = {
    sunday: 'Sunday',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
};

// Template Types
const TEMPLATE_TYPES: TemplateTypes = {
    email: 'email',
    message: 'message',
    notification: 'notification',
};

// Template Titles
const TEMPLATE_TITLE: TemplateTitles = {
    otp: 'Send OTP',
    resetPassword: 'Reset Password',
    credential: 'Credential',
};

// Gender
const GENDER: Gender = {
    male: 'male',
    female: 'female',
    other: 'other',
};

// Account Level
const ACCOUNT_LEVEL: AccountLevel = {
    superAdmin: 1,
    admin: 2,
    user: 3,
};

// Privileges
const PRIVILEGES: Privileges = {
    userManagement: 'userManagement',
    settingManagement: 'settingManagement',
    policyManagement: 'policyManagement',
    templateManagement: 'templateManagement',
    addressManagement: 'addressManagement',
    feedbackManagement: 'feedbackManagement',
    catalogueManagement: 'catalogueManagement',
};

// Rights
const RIGHTS: Rights = {
    read: 'read',
    write: 'write',
    delete: 'delete',
};

// Device Types
const DEVICETYPE: DeviceType = {
    android: 'android',
    ios: 'ios',
    web: 'web',
};

// Constraints
const CONSTRAINT: Constraints = {
    primary: 'primary',
    secondary: 'secondary',
};

// Address Types
const ADDRESS_TYPE: AddressTypes = {
    home: 'home',
    work: 'work',
    warehouse: 'warehouse',
    other: 'other',
};

export default {
    MESSAGES,
    CODE,
    STATUS,
    REGISTRATION_TYPE,
    TIME_FORMAT,
    DATE_FORMAT,
    ACCOUNT_LEVEL,
    PRIVILEGES,
    RIGHTS,
    GENDER,
    WEEK_DAY,
    TEMPLATE_TYPES,
    TEMPLATE_TITLE,
    DEVICETYPE,
    CONSTRAINT,
    ADDRESS_TYPE,
};
