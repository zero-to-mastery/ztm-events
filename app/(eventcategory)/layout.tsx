//for any stylings specific to /category and /category/id , can remove if unnecessary

interface EventCategoryLayoutProps {
  children: React.ReactNode;
}

const EventCategoryLayout = ({ children }: EventCategoryLayoutProps) => {
  return (
    <main className='h-screen' style={{ backgroundColor: 'rgb(70, 152, 77)' }}>
      {children}
    </main>
  );
};

export default EventCategoryLayout;
