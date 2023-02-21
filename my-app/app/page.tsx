// outlie,solidなど選べる
import { BoltIcon, FireIcon, SunIcon } from "@heroicons/react/24/outline";

const page = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2 ">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          {/* heroIconを使用している */}
          <SunIcon className="h-8 w-8 text-white" />

          <h2>Example</h2>
        </div>
        <div className="space-y-2">
          <p className="infoText">"aaaaaaaaaa"</p>
          <p className="infoText">"aaaaaaaaaa"</p>
          <p className="infoText">"aaaaaaaaaa"</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          {/* heroIconを使用している */}
          <BoltIcon className="h-8 w-8 text-white" />

          <h2>Example</h2>
        </div>
        <div className="space-y-2">
          <p className="infoText">"aaaaaaaaaa"</p>
          <p className="infoText">"aaaaaaaaaa"</p>
          <p className="infoText">"aaaaaaaaaa"</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          {/* heroIconを使用している */}
          <FireIcon className="h-8 w-8 text-white" />

          <h2>Example</h2>
        </div>
        <div className="space-y-2">
          <p className="infoText">"aaaaaaaaaa"</p>
          <p className="infoText">"aaaaaaaaaa"</p>
          <p className="infoText">"aaaaaaaaaa"</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
