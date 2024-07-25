import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar.jsx";

export default function Home({ auth }) {
  return (
    <>
      <Navbar auth={auth} />
      <div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <p className="text-center text-gray-500 text-2xl">
                Home page (coming soon)
              </p>
            </div>
          </div>

          <iframe
            width={"100%"}
            frameborder="no"
            scrolling="no"
            seamless
            src="https://player.simplecast.com/fd0bd2ba-c553-466c-a060-b144797ce369?dark=false"
          ></iframe>
        </div>
      </div>
    </>
  );
}
