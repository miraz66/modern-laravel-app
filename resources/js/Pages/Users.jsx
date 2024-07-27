import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar.jsx";

export default function Users({ auth, users }) {
  console.log(users);

  return (
    <>
      <Head title="Users" />

      <Navbar auth={auth} />

      <div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <p className="text-center text-gray-500 text-2xl">
                <p className="border-b mb-2 text-gray-700 font-bold text-5xl">
                  {" "}
                  All Users
                </p>
                <ul>
                  {users.map(({ name }) => (
                    <li>{name}</li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
