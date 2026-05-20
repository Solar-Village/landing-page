export const handleInitialRedirect = (loc: Location = window.location): void => {
  const redirectPath = new URLSearchParams(loc.search).get('redirect');
  if (redirectPath) {
    window.history.replaceState(null, '', redirectPath);
  }
};
