import SubmitButton from "@/components/SubmitButton";
import { handleAddTask } from "../../action";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const NewTaskPage = () => {
  // must validate the data but its a dummy project
  const cookie = cookies();
  const jwt = cookie.get("token");

  if (!jwt) {
    return redirect("/login");
  }

  return (
    <div className="bg-gray-500 ">
      <div className="max-w-4xl p-7 mx-auto">
        <form
          className="flex justify-center border border-black p-7 w-full"
          action={handleAddTask}
        >
          <div className="space-y-6">
            <p className="text-center font-bold text-xl pb-2">New Task Form</p>
            <input
              required
              type="text"
              className="rounded-lg p-2 text-black flex-1 w-full"
              placeholder="Name"
              name="name"
            />
            <textarea
              required
              className="rounded-lg p-2 text-black w-full"
              placeholder="Description"
              name="description"
            />
            <input
              required
              type="number"
              className="rounded-lg p-2 text-black w-full"
              placeholder="BoardId"
              name="boardId"
            />
            <input
              required
              type="number"
              className="rounded-lg p-2 text-black w-full"
              placeholder="FlagId"
              name="flagId"
            />
            <input
              required
              type="date"
              className="rounded-lg p-2 text-black w-full"
              placeholder="Start Date"
              name="startDate"
            />
            <input
              required
              type="date"
              className="rounded-lg p-2 text-black w-full"
              placeholder="End Date"
              name="endDate"
            />
            <div className="flex ">
              <SubmitButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTaskPage;
