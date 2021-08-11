/**
 * isValidPhoneNumber
 * @param {string} phoneNumber The phone number to validate
 * @param {string} countryCode An optionalCountry code hint in Alpha-2 code format (eg: US, ES) to recognise phone numbers that are not in international format
 */
export async function isValidPhoneNumber(
  phoneNumber: string,
  countryCode?: string
): Promise<boolean> {
  const url = new URL(`https://api.validatephonenumber.com/${encodeURIComponent(phoneNumber)}`)
  if (countryCode !== undefined) {
    url.searchParams.append('countryCode', countryCode)
  }
  return (await fetch(url.toString())).ok
}
