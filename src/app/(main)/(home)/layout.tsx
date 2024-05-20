import { Navbar } from "../../components/home/nav-bar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="py-20 w-full">
        <Navbar />
        <main className=" min-h-screen w-full flex-grow">{children}</main>
      </div>
    </>
  );
}
