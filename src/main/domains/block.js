import { api } from '../../infra/http/remote'

export const getBlock = async (block) => {
  let blockContent = null

  try {
    if (block.endpoint) {
      if (block.endpoint.indexOf(';') > -1) {
        const arr = block.endpoint.replace('/ /', '').split(',')
        const blocks = {}
        arr.forEach(async (bl, idx) => {
          const response = await api.get(bl)
          Object.assign(blocks, {
            [`block_${block.id}_${idx}`]: response.data || null
          })
        })
        blockContent = blocks
      } else {
        const response = await api.get(block.endpoint)
        blockContent = response.data || null
      }

      return {
        position: block.position,
        container: block.container,
        componentName: block.name,
        content: blockContent,
        block: {
          id: block.id,
          title: block.title,
          description: block.description
        }
      }
    }
    return null
  } catch (e) {
    return null
  }
}
