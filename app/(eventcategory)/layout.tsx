//for any stylings specific to /category and /category/id , can remove if unnecessary
const EventCategoryLayout = ({ children }) => {
    return (
        <main className='h-screen' style={{ backgroundColor: 'rgb(70, 152, 77)' }}>
            {children}
        </main>
    )
}

export default EventCategoryLayout
