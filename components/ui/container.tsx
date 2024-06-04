const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className="max-w-[95%] w-full mx-auto overflow-x-hidden">{children}</section>;
};

export default Container;
