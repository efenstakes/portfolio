import clsx from "clsx"


type ComponentProps = {
    title: string
    isWhite?: boolean
}
const SectionTitle = ({ title, isWhite = false }: ComponentProps) => {
    return (
        <div className="row ma_center">
            
            <h2 className={clsx({ 'su_8': true, 'section_title': !isWhite, 'section_title__white': isWhite, })} style={{ textAlign: 'center' }}> 
                { title }
            </h2> 

        </div>
    )
}

export default SectionTitle
