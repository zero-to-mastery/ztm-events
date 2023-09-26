import Logo from './logo';
import SearchLocation from './searchLocation';

export default function Navigation() {
  return (
    <>
      <div
        className='h-24 flex justify-between items-center w-full px-1'
        style={{ backgroundColor: 'rgb(246, 244, 210)' }}
      >
        <Logo />
        <SearchLocation />
      </div>
    </>
  );
}
