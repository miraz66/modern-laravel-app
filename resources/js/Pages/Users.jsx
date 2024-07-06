import {Head} from '@inertiajs/react';
import Navbar from "@/Components/Navbar.jsx";

export default function Users({auth, laravelVersion, phpVersion}) {

    return (
        <>
            <Head title="Users"/>

            <Navbar auth={{user: null}} laravelVersion={''} phpVersion={''}/>
            <div>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            <p className="text-center text-gray-500 text-2xl">
                                Users page (coming soon)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
