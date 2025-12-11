import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <main className="flex min-h-screen bg-slate-50 text-slate-900">
      <section className="flex-1">
        <Outlet />
      </section>
    </main>
  );
};

export default RootLayout;
