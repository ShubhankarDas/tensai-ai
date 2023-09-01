export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-10 p-10 items-center justify-center">
      <div className="animate-ping h-10 w-10 rounded-full bg-sky-400 opacity-75"></div>
      <p className="text-sm text-muted-foreground">Tensai is thinking...</p>
    </div>
  );
};
