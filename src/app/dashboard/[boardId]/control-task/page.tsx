import SubmitButton from "@/components/SubmitButton";
import { handleAddTask } from "../../actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface NewTaskPageProps {
  params: {
    boardId: string;
  };
}

const NewTaskPage = ({ params }: NewTaskPageProps) => {
  // must validate the data but its a dummy project
  const cookie = cookies();
  const jwt = cookie.get("token");

  if (!jwt) {
    return redirect("/login");
  }

  if (+params.boardId > 5 || +params.boardId < 1) {
    return redirect("/dashboard");
  }

  return (
    <div className="bg-gray-500 ">
      <div className="max-w-4xl p-7 mx-auto">
        <form
          className="flex justify-center border border-black p-7 w-full"
          action={handleAddTask}
        >
          <div className="space-y-6 w-full">
            <p className="text-center font-bold text-xl pb-2">New Task Form</p>
            <div>
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                className="rounded-lg p-2 text-black flex-1 w-full"
                placeholder="Name"
                name="name"
                id="name"
              />
            </div>

            <div>
              <label htmlFor="des">Description</label>
              <textarea
                required
                className="rounded-lg p-2 text-black w-full"
                placeholder="Description"
                name="description"
                id="des"
              />
            </div>

            <input
              required
              type="number"
              className="rounded-lg p-2 text-black w-full"
              placeholder="BoardId"
              name="boardId"
              min={1}
              max={5}
              value={+params.boardId}
              hidden
              readOnly
            />

            <div>
              <label htmlFor="flagId">Flag Id</label>{" "}
              <input
                required
                type="number"
                className="rounded-lg p-2 text-black w-full"
                placeholder="FlagId"
                name="flagId"
                min={1}
                max={5}
              />
              <p>Note: FlagId should be a select html element</p>
              <p>but its a dummy project</p>
            </div>

            <div>
              <label htmlFor="start">Start Date</label>
              <input
                required
                type="date"
                className="rounded-lg p-2 text-black w-full"
                placeholder="Start Date"
                name="startDate"
                id="start"
              />
            </div>
            <div>
              <label htmlFor="end">End Date</label>{" "}
              <input
                required
                type="date"
                className="rounded-lg p-2 text-black w-full"
                placeholder="End Date"
                name="endDate"
                id="end"
              />
            </div>

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
