export const getLocale = async (locale: string | undefined) => {
  try {
    const res = await fetch(
      `https://devapi.roamstay.com/web/language/${locale}`
    );
    const language = res.json();
    return language;
  } catch (error) {
    // notFound();
    console.log(error);
  }
};
