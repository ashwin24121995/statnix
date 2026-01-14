import Header from "./Header";
import Footer from "./Footer";
import { PromoWidget } from "./PromoWidget";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1a0a2e' }}>
      {/* Stealth promotional widget - appears above everything */}
      <PromoWidget />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
