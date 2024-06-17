import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';

const HomeLayount = (props) => {
  return (
    <>
      <HeaderHome />
      <main className=' flex min-h-[85vh] w-full flex-col'>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default HomeLayount;