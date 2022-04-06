const LinkButtons = ({name, href}) => (
    <a href={href} target="_blank" rel="noreferrer" className='py-4 px-2 mb-4 border-4 border-white ease-in-out duration-300 bg-white hover:bg-transparent hover:text-white rounded-lg w-full max-w-lg font-medium text-center'>{name}</a>
)

export default LinkButtons