import Hero from '../components/Hero';
import Search from '../components/Search';
import ToolGallery from '../components/ToolGallery';

export default function Page() {

    return (
        <div className='dashboard-content'>
            <div className='flex flex-col gap-12'>
                <Hero />
                <Search />
                <ToolGallery />
            </div>
        </div>
    );
}
