import {Head} from '@inertiajs/react';
import Navbar from "@/Components/Navbar.jsx";

export default function Settings({auth, laravelVersion, phpVersion}) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Settings"/>

            <Navbar auth={{user: null}} laravelVersion={''} phpVersion={''}/>
            <div>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            <p className="text-center text-gray-500 text-2xl">
                                Settings page will be here
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
