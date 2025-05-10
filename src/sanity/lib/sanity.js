import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'hyq4gl5k',
  dataset: 'production',
  useCdn: true, // true لو مش محتاج بيانات محدثة جدًا
  apiVersion: '2024-01-01' // اختار نسخة API ثابتة
})
