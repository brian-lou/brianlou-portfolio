export default function getLocalTranslation(locale: string) {
  return import(`./locales/${locale}.json`).then((module) => {
    return module.default;
  });
}
