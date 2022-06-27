export function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-8 bg-blur bg-no-repeat bg-cover">
      <h1 className="text-6xl text-gray-100 mb-5">OPS.. Algo deu errado :(</h1>
      <a
        className="p-5 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
        href="/event"
      >
        volte para as aulas
      </a>
    </div>
  );
}
