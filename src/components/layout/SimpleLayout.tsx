/**
 * Simple Layout without Header and Footer
 * Used for authentication and dashboard pages
 */
interface SimpleLayoutProps {
  children: React.ReactNode;
}

export default function SimpleLayout({ children }: SimpleLayoutProps) {
  return (
    <div className="min-h-screen bg-AssetArc-bg">
      <main>
        {children}
      </main>
    </div>
  );
}
