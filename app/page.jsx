export default function AldeburghLeistonCandidatePage() {
  const priorities = [
    {
      title: "Protect our Heritage Coast",
      text:
        "Supporting projects that conserve the Heritage Coast and resisting unnecessary industrialisation through large energy infrastructure programmes.",
      image: "/images/tom-river-alde.jpg",
      alt: "Tom Faulkner by the River Alde",
      imageClassName: "h-56 w-full object-contain bg-slate-100 p-2",
    },
    {
      title: "Better connect our communities",
      text:
        "Exploring improvements to footpaths, cycle routes and local transport so towns and villages across our area are better connected.",
      image: "/images/tom-ebike.jpg",
      alt: "Tom Faulkner discussing walking and cycling routes in the local area",
      imageClassName: "h-56 w-full object-contain bg-slate-100 p-2",
    },
    {
      title: "Your priorities matter most",
      text:
        "My third priority will be yours. I want to attend local meetings, listen properly and put my time and energy where residents most want support.",
      image: "/images/tom-potholes.jpg",
      alt: "Tom Faulkner highlighting potholes in Aldeburgh",
      imageClassName: "h-56 w-full object-cover object-center",
    },
  ];

const community = [
  {
    title: "Supporting local business",
    image: "/images/tom-butcher.jpg",
    alt: "Tom Faulkner visiting a local butcher",
    text: "Independent businesses help give Aldeburgh, Leiston and our surrounding villages their character and vitality.",
    imageClassName: "h-90 w-full object-cover object-top",
  },
  {
    title: "Supporting a strong sense of community",
    image: "/images/aldeburgh-horses.jpeg",
    alt: "Horses outside a pub on Aldeburgh High Street",
    text: "Aldeburgh, Leiston and our surrounding villages have a unique character built on strong community spirit. Supporting local events, businesses and gathering places helps keep that spirit alive.",
    imageClassName: "h-90 w-full object-cover object-top",
  },
];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <img
              src="/images/conservative-logo.png"
              alt="Conservative Party logo"
              className="h-8 w-auto"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900">Tom Faulkner</p>
              <p className="text-xs text-slate-500">
                Conservative candidate for Aldeburgh & Leiston
              </p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#priorities" className="hover:text-slate-900">
              Priorities
            </a>
            <a href="#community" className="hover:text-slate-900">
              Community
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              Suffolk County Council election – 7 May 2026
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
              Tom Faulkner for Aldeburgh & Leiston
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              A local resident with strong family roots in the area, standing to
              offer energetic, practical and visible representation for
              Aldeburgh, Leiston, Knodishall and surrounding communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#about"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Meet Tom
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-lg ring-1 ring-slate-200 h-[420px] md:h-[520px]">
            <img
              src="/images/tom-pylons.jpg"
              alt="Tom Faulkner standing near pylons in the Suffolk countryside"
              className="h-full w-full object-cover object-[center_22%]"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
            <img
              src="/images/tom-leiston-leisure.jpg"
              alt="Tom Faulkner outside Leiston Leisure Centre"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              About Tom
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Rooted in the area, ready to serve
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
              <p>
                I’m Tom Faulkner, a local resident with family and friends living
                in Aldeburgh and Leiston.
              </p>

              <p>
                I have 25 years of business experience in the UK and abroad, and
                I want to use that experience to support worthwhile local
                projects, be a strong voice for residents, and bring energy,
                positivity and a can-do attitude to local governance.
              </p>

              <p>
                My connection to this area goes back a long way. My grandparents
                lived in Knodishall, my mother lived in Knodishall and then
                Aldeburgh, and I have been coming here all my life.
              </p>

              <p>
                Put simply, I am a product of this area. It has shaped me and
                given me a huge amount of joy, and I want to help conserve it for
                future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="priorities" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Priorities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Three priorities for Aldeburgh & Leiston
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-700">
              I want to support and continue the great work of my predecessor and in addition to focus on a small number of practical priorities that
              reflect the character of this area and the concerns residents raise
              most often.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {priorities.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] bg-slate-50 shadow-sm ring-1 ring-slate-200"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={item.imageClassName}
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="community"
        className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-10"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            In the community
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Local places, local people
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {community.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200"
            >
              <img
                src={item.image}
                alt={item.alt}
                className={item.imageClassName}
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Why I’m standing
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              A strong local voice, working for YOU
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
              <p>
                I want to play a more active role in supporting the communities
                that mean so much to me.
              </p>

              <p>
                County council decisions affect roads, transport, local services
                and the long-term character of this area. Residents deserve a
                councillor who is visible, accessible and prepared to make the
                case for local people clearly and persistently.
              </p>

              <p>
                My aim is simple: listen properly, turn up, work hard and help
                protect what makes Aldeburgh, Leiston and the surrounding
                villages special.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <img
              src="/images/tom-moothall2.jpg"
              alt="Tom Faulkner by the Moot Hall"
              className="h-full w-full object-cover object-[center_35%]"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Contact
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Get in touch
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
                I’ll be adding campaign contact details shortly. This page is
                designed to be a simple place for residents to learn more about
                me, my priorities and the issues I care about.
              </p>
            </div>

            <div className="rounded-[2rem] bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
              <div className="space-y-3 text-sm leading-7 text-slate-700">
                <p>
                  <strong>Email:</strong> cllr.faulkner@outlook.com
                </p>
                <p>
                  <strong>Facebook:</strong> https://www.facebook.com/profile.php?id=61579467403113
                
                </p>
                <p>
                  <strong>Phone:</strong> +44 7380 931 208
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-8 text-xs leading-6 text-slate-500 md:px-8 lg:px-10">
          <p>
            Promoted by Geoff Holdcroft on behalf of Tom Faulkner and Suffolk Coastal Conservatives all of 4 Cumberland Street, Woodbridge, IP12 4AB
          </p>

          
        </div>
      </footer>
    </div>
  );
}
