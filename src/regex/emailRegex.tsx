const emailRegex = (email: any) => {
  // eslint-disable-next-line no-control-regex
  return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
    email
  );
};


export default emailRegex;