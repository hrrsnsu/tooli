import SideMenu from "./components/SideMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <section className="bg-gradient-to-b from-base-100 to-base-200">
        <SideMenu pageContent={children}/>
    </section>;
}
