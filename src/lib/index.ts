export const ValidateEmail = (email: string) => {
  return (
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ) !== null
  );
};

export const ValidatePhone = (phone: string) => {
  return phone !== '' && phone.length === 10 && phone.slice(0, 2) === '09';
};

export const ValidateURL = (str: string) => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i',
  );
  return !!pattern.test(str);
};

export const ValidateYoutubeURL = (url: string) => {
  const pattern =
    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  const result = url.match(pattern);
  if (result) return result[1];
  return false;
};

const Validate = {
  email: ValidateEmail,
  phone: ValidatePhone,
  url: ValidateURL,
  youtubeID: ValidateYoutubeURL,
};

export default Validate;
