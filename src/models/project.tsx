

type status = 'inprogress' | 'complete'

export interface Project {
    name?: string
    img?: string
    link?: string
    gitLink?: string
    description?: string
    img_styles?: any,
    type?: string
    tags: Array<string>
    status?: status
}