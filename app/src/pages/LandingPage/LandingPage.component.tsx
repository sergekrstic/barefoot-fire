export function LandingPage(): React.JSX.Element {
  return (
    <>
      <div className="relative">
        <div
          className="bg-violet-950/40x flex h-[80vh] flex-col items-center bg-cover bg-no-repeat pt-12 opacity-40"
          style={{
            backgroundImage: 'linear-gradient(rgba(48, 13, 61, 0.9), rgba(73, 0, 101, 0.9)),url(/images/hero.jpg)',
          }}
        ></div>
        {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center"> */}
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center">
          <h1 className="bg-gradient-to-bl from-amber-300 to-amber-700 bg-clip-text text-9xl font-bold tracking-wide text-transparent">
            Barefoot FIRE
          </h1>
          <h2 className="pt-5 text-4xl text-violet-600">Ignite the path you tread</h2>
        </div>
      </div>
      <div className="mx-auto sm:container">
        <div className="flex flex-col p-24">
          <h3 className="pb-8 text-xl font-bold">Welcome to the Fire Forecast Engine</h3>
          <p className="pb-4 text-lg">
            This is a demo of the Fire Forecast Engine. It is a tool that helps you forecast your financial future.
          </p>
          <p className="pb-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates exercitationem voluptate tenetur
            modi eos. Iusto eveniet at inventore! Iste ipsam perspiciatis accusantium nam laboriosam voluptatem quo
            exercitationem facilis unde?
          </p>
          <p className="pb-4 text-lg">
            Sapiente dolores et perferendis voluptatem aspernatur enim quas, dignissimos minus voluptatibus quaerat
            expedita reiciendis, doloremque quod laboriosam numquam amet laudantium cum, nobis tempore accusantium
            inventore commodi? Ipsam asperiores quas perspiciatis.
          </p>
          <p className="pb-4 text-lg">
            Sint optio blanditiis dolores repudiandae eius possimus, minus officia fuga repellat nobis, quis velit?
            Vitae magnam obcaecati deserunt omnis temporibus voluptatum optio nemo, saepe rem eligendi nostrum nihil.
            Ab, ipsam.
          </p>
          <p className="pb-4 text-lg">
            Omnis, inventore error. Maiores optio impedit delectus, saepe, sapiente veritatis consequatur quis deleniti,
            cupiditate dicta eum. Tempore ullam officia quia repudiandae perspiciatis quasi, vero, totam tempora
            obcaecati repellendus accusantium illo?
          </p>
        </div>
      </div>
      <div className="h-64 bg-slate-800"></div>
    </>
  )
}
