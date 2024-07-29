import { useRef, useState } from "react";
import { Head } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";
import Navbar from "@/Components/Navbar";
import useInfiniteScroll from "@/Utils/useInfiniteScroll"; // Import the custom hook

export default function Users({ auth, users: initialUsers }) {
  const [users, setUsers] = useState(initialUsers.data);
  const [page, setPage] = useState(initialUsers.current_page);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(
    initialUsers.current_page < initialUsers.last_page
  );

  const [search, setSearch] = useState("search");

  console.log(search);

  const loadMoreUsers = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      // Simulate loading delay with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const response = await fetch(`/api/users?page=${page + 1}`);
      const data = await response.json();
      setUsers((prevUsers) => [...prevUsers, ...data.data]);
      setPage(data.current_page);
      setHasMore(data.current_page < data.last_page);
    } catch (error) {
      console.error("Error fetching more users:", error);
    } finally {
      setLoading(false);
    }
  };

  const [lastElementRef] = useInfiniteScroll(loadMoreUsers);

  return (
    <>
      <Head title="Users" />

      <Navbar auth={auth} />

      <div className="relative overflow-auto max-w-7xl mx-auto border shadow rounded-md p-10 mt-10">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h5 className="font-semibold text-xl pb-2">Users</h5>
            <p className="font-sm text-gray-700 font-thin">
              A list of all the users in your account including their name,
              title, email, and role.
            </p>
          </div>
          <button className="bg-indigo-600 px-3 py-1.5 rounded text-white font-semibold tracking-tight hover:bg-indigo-400">
            Add user
          </button>
        </div>

        <input
          className="w-full mb-8 px-4 py-2 border border-gray-300 rounded-md"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search..."
        />

        <table className="w-full table-auto text-sm text-left rtl:text-right">
          <thead className="text-base font-semibold text-gray-800 uppercase border-b border-gray-400">
            <tr className="text-nowrap">
              <TableHeading name={"id"} sortable={false}>
                Name
              </TableHeading>
              <TableHeading name={"id"} sortable={false}>
                Title
              </TableHeading>
              <TableHeading name={"id"} sortable={false}>
                Status
              </TableHeading>
              <TableHeading name={"id"} sortable={false}>
                Role
              </TableHeading>
            </tr>
          </thead>

          <tbody>
            {users.map(({ name, email }, index) => (
              <tr
                className="border-b last:border-0"
                key={index}
                ref={index === users.length - 1 ? lastElementRef : null}
              >
                <td className="py-4">
                  <p className="text-lg text-gray-900 tracking-tight">{name}</p>
                  <p className="text-gray-500">{email}</p>
                </td>
                <td>
                  <p className="text-lg text-gray-900 tracking-tight">
                    Front-end Developer
                  </p>
                  <p className="text-gray-500">Optimization</p>
                </td>
                <td>
                  <span className="bg-green-50 text-green-700 font-semibold border border-green-200 rounded text-sm px-1 py-0.5">
                    Active
                  </span>
                </td>
                <td className="text-lg text-gray-500">Member</td>
                <td className="text-end">
                  <button className="text-lg text-indigo-600">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
