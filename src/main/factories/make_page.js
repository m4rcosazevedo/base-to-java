import { getBlock, getPage } from '../domains'

export const makePage = async (slug) => {
  const page = await getPage(slug)
  if (page) {
    const containers = await Promise.allSettled(page.pages_blocks.map(async ({ block, ...item }) =>
      await getBlock({
        ...block,
        position: item.position,
        container: item.container
      })
    ))
    return {
      id: page.id,
      title: page.title,
      hideTitle: false,
      content: page.content,
      slug: page.slug,
      containers: containers.filter(c => c.status === 'fulfilled').map(c => c.value)
    }
  }
  return {
    id: -1,
    title: 'Página não encontrada',
    hideTitle: false,
    content: '<p>A página não existe ou foi excluída</p>',
    slug: null,
    containers: []
  }
}
