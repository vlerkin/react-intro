import NavigationalBar from '@/components/navigation';
import MyFooter from '@/components/footer';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
    <Image src="/me.jpg" alt="a retriver" width="84" height="64" />
      <div>
        <h1>Hello World!</h1>
        <NavigationalBar />
      </div>
      <MyFooter />
    </div>
  );
};
 
export default Home;
