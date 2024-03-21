import { getSingleData } from "../getData";

interface SingleToDoProps {
  params: {
    taskId: string;
  };
}

const SingleToDo = async ({ params }: SingleToDoProps) => {
  const data = await getSingleData(+params.taskId);

  return (
    <div className="bg-zinc-500 w-full p-7">
      <div className="max-w-4xl mx-auto border border-black">
        <div className="p-7 flex-col items-center space-y-10">
          <div className="w-full flex flex-col items-center">
            <h1 className="font-extrabold text-2xl ">{data.name}</h1>
          </div>
          <div>
            <h2 className="text-center pb-4">Tasks:</h2>
            <div>
              {data.tasks.map((item: any) => (
                <div className="p-7 border border-black">
                  <div className="flex flex-col items-center space-y-3">
                    <h1>{item.name}</h1>
                    <p>description: {item.description}</p>
                    <p>code: {item.code}</p>
                    <p>boardId: {item.boardId}</p>
                    <p>flagId: {item.flagId}</p>
                    <p>order: {item.order}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToDo;
