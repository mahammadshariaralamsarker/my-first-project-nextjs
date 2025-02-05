 
import Footer from '../components/shared/footer';

const layout = ({children}) => {
  return (
    <div>
      {children}
      <Footer/>
    </div>
  );
};

export default layout;