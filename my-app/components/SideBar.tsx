import NewChat from "./NewChat";

const SideBar = () => {
  return <div className="p-2 flex flex-col h-screen">
   
    <div className="flex-1">
      <div>
        {/* 新しいチャット */}
        <NewChat />
        <div>
          {/* 選択場所 */}
        </div>

        {/* チャットリスト mapで展開 */}
      </div>

    </div>
  </div>;
};

export default SideBar;
