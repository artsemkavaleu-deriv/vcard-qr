const formatVCard = (file_type, photo, values) => {
    const photo_file_type = file_type?.replace('image/', '').toUpperCase();

    const vcard_formatted_string = `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:${values.firstName} ${values.middleName} ${values.lastName}
N;CHARSET=UTF-8:${values.lastName};${values.firstName};${values.middleName};;
EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:${values.workEmail}
TEL;TYPE=HOME,VOICE:${values.homePhone}
TEL;TYPE=WORK,VOICE:${values.workPhone}
TEL;TYPE=WORK,FAX:${values.workFax}
ADR;TYPE=HOME:${values.street};${values.postalCode};${values.stateProvince};${values.countryRegion}
ORG;CHARSET=UTF-8:${values.organization}
URL;CHARSET=UTF-8:${values.url}
PHOTO;TYPE=${photo_file_type};ENCODING=B:${photo}
END:VCARD`;

    return vcard_formatted_string;
};

export default formatVCard;
