// في ملف schemaTypes.js أو ملف منفصل
export const localeString = {
  name: 'localeString',
  type: 'object',
  title: 'Localized String',
  fields: [
    { name: 'en', type: 'string', title: 'English' },
    { name: 'ar', type: 'string', title: 'Arabic' },
  ],
  options: {
    // لمنع تكرار الحقول
    columns: 2,
  },
};
