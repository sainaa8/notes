import Text from "@/components/Text";
const LastPage = () => {
  return (
    <div className="mx-auto mt-20 pb-20 px-20felx justify-center flex flex-col gap-[48px]">
      <div className="flex justify-center">
        <div className="flex items-center flex-col gap-[16px]">
          <p className="w-[75px] h-[28px] bg-slate-300 rounded-lg flex justify-center">
            Work
          </p>
          <p>Some of the noteworthy projects I have built:</p>
        </div>
      </div>
      <div>
        <Text />
      </div>
    </div>
  );
};
export default LastPage;
