import dynamic from 'next/dynamic';
import Header from './Header';

// Dynamically import Footer since it's below the fold
const Footer = dynamic(() => import('./Footer'), {
  loading: () => <div className="min-h-[300px] bg-stockstrail-bg" />
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-stockstrail-bg">
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
