// MainLoader Component
export default function MainLoader() {
  return (
    <section className="w-full h-screen grid place-content-center bg-primary">
      <div className="p-1 rounded-full animate-bounce">
        <div className="xl:w-32 xl:h-32 lg:w-28 lg:h-28 sm:w-24 sm:h-24 w-16 h-16 sm:border-loaderWidth border-loaderWidthSm border-double border-white [border-left-style:solid] rounded-full animate-spin delay-75"></div>
      </div>
    </section>
  );
}
