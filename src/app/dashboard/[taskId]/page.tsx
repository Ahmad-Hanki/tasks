import Link from "next/link";
import { getSingleData } from "../getData";
import { getFlags } from "../getData";

interface SingleToDoProps {
  params: {
    taskId: string;
  };
}


const SingleToDo = async ({ params }: SingleToDoProps) => {
  const data = await getSingleData(+params.taskId);
  const colors = await getFlags();

  console.log(colors)
  return (
    <div className="bg-zinc-500 w-full p-7">
      <div className="max-w-4xl mx-auto border border-black">
        <div className="p-7 flex-col items-center space-y-10">
          <div className="w-full flex flex-col items-center">
            <h1 className="font-extrabold text-2xl p-7">{data.name}</h1>
            <div className=" w-5/6 flex justify-center mx-auto">
              <Link
                className="bg-gray-700 text-xl p-3 rounded-2xl hover:bg-black/80"
                href={`/dashboard/newTask`}
              >
                Create New Task
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-center pb-4">Tasks:</h2>
            <div>
              {data.tasks.map((item: any) => {

                const flag = colors.find((color:any) => color.id === item.flagId)

                return (
                  <div key={item.id} className="p-7 border border-black">
                    <div className="flex flex-col items-center space-y-3">
                      <h1> name: {item.name}</h1>
                      <p>description: {item.description}</p>
                      <p>id: {item.id}</p>
                      <p>code: {item.code}</p>
                      <p>boardId: {item.boardId}</p>
                      <p>flagId: {item.flagId}, colorName : {flag.name} </p>
                      <p>order: {item.order}</p>
                      <p>startDate: {item.startDate}</p>
                      <p>endDate: {item.endDate}</p>
                      <p>createdAt: {item.createdAt}</p>
                      <p>updatedAt: {item.updatedAt}</p>
                      <p>deletedAt: {item.deletedAt}</p>
                      <p>deletedUserId: {item.deletedUserId}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToDo;

// code is the sum of all the existing tasks
// id is unique
// order is the num of the tasks group
// border id is the number of the group
// flag id is a number of the color
