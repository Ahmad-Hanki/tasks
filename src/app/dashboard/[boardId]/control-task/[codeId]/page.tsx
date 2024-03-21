import SubmitButton from "@/components/SubmitButton";
import { handleAddTask, handleUpdateTask } from "@/app/dashboard/actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getData } from "@/app/dashboard/getData";
import { formatDate, getCurrentDate } from "@/utils/formatter";

interface NewTaskPageProps {
  params: {
    boardId: string;
    codeId: string;
  };
}

const NewTaskPage = async ({ params }: NewTaskPageProps) => {
  if (+params.boardId > 5 || +params.boardId < 1) {
    return redirect("/dashboard");
  }

  const dataFunction = await getData();

  const data = dataFunction.data;

  const borderObject = data.find((item: any) => item.id === +params.boardId);

  if (!borderObject) {
    redirect("/dashboard");
  }

  const task = borderObject.tasks.find(
    (item: any) => item.code === +params.codeId
  );
  if (!task) {
    redirect("/dashboard");
  }

  const startDate = formatDate(task.startDate);
  const endDate = formatDate(task.endDate);
  const createdAt = formatDate(task.createdAt);
  const updatedAt = getCurrentDate();

  return (
    <div className="bg-gray-500 ">
      <div className="max-w-4xl p-7 mx-auto">
        <form
          className="flex justify-center border border-black p-7 w-full"
          action={handleUpdateTask}
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
                defaultValue={task.name}
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
                defaultValue={task.description}
              />
            </div>
            <div>
              <label htmlFor="borderId">Border Id</label>
              <input
                required
                type="number"
                className="rounded-lg p-2 text-black w-full"
                placeholder="BoardId"
                name="boardId"
                min={1}
                max={5}
                defaultValue={+params.boardId}
                id="borderId"
              />
              <p>Note: Border id should be a select html element</p>
              <p>but its a dummy project</p>
            </div>

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
                defaultValue={task.flagId}
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
                defaultValue={startDate || ""}
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
                defaultValue={endDate || ""}
              />
            </div>
            <div>
              <label htmlFor="end">Created At</label>{" "}
              <input
                required
                type="date"
                className="rounded-lg p-2 text-black w-full"
                placeholder="created At"
                name="createdAt"
                id="end"
                value={createdAt || ""}
                disabled
                readOnly
              />
            </div>
            <div>
              <label htmlFor="end">Updated At</label>{" "}
              <input
                required
                type="date"
                className="rounded-lg p-2 text-black w-full"
                placeholder="End Date"
                name="endDate"
                id="end"
                value={updatedAt || ""}
                disabled
                readOnly
              />
            </div>

            <input
              hidden
              required
              type="text"
              className="rounded-lg p-2 text-black flex-1 w-full"
              placeholder="Name"
              name="code"
              value={task.code} // could be able to destarct it from the params
              readOnly
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
