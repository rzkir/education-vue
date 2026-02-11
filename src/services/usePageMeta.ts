import { onMounted } from 'vue'

interface PageMetaOptions {
  title: string
  description?: string
}

export function usePageMeta(options: PageMetaOptions) {
  onMounted(() => {
    if (options.title) {
      document.title = options.title
    }

    if (typeof options.description === 'string') {
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null

      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.name = 'description'
        document.head.appendChild(metaDescription)
      }

      metaDescription.content = options.description
    }
  })
}

